'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import AdTracking from '@/components/AdTracking';
import Link from 'next/link';
import type { LeadInput } from '@/types';

declare global {
  interface Window {
    trackFormStep?: (step: string, data: any) => void;
    trackFormSubmission?: (data: any) => void;
  }
}

type Step = 'intro' | 'qualify' | 'details' | 'final';

interface FormData {
  loanType?: 'conventional' | 'fha' | 'va' | 'refinance' | 'new-construction' | 'reverse-mortgage' | 'not-sure';
  propertyValue?: string;
  downPayment?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  creditScore?: string;
  timeframe?: string;
}

interface LoanTypeInfo {
  title: string;
  description: string;
  benefits: string[];
  minDownPayment: string;
  idealFor: string[];
  learnMoreUrl: string;
}

const loanTypeData: Record<string, LoanTypeInfo> = {
  conventional: {
    title: 'Conventional Loan',
    description: 'Traditional financing with competitive rates and flexible terms.',
    benefits: ['Competitive interest rates', 'Flexible down payment options', 'No mortgage insurance with 20% down', 'Various term lengths available'],
    minDownPayment: '3%',
    idealFor: ['Good credit scores (620+)', 'Stable income', 'Standard property types'],
    learnMoreUrl: '/loans/conventional'
  },
  fha: {
    title: 'FHA Loan',
    description: 'Government-backed loans with lower down payment requirements.',
    benefits: ['Low down payment (3.5%)', 'Flexible credit requirements', 'Gift funds allowed', 'Assumable loans'],
    minDownPayment: '3.5%',
    idealFor: ['First-time homebuyers', 'Lower credit scores (580+)', 'Limited down payment funds'],
    learnMoreUrl: '/loans/fha-loans'
  },
  va: {
    title: 'VA Loan',
    description: 'Special benefits for veterans and active duty military.',
    benefits: ['No down payment required', 'No private mortgage insurance', 'Competitive rates', 'No prepayment penalties'],
    minDownPayment: '0%',
    idealFor: ['Veterans', 'Active duty military', 'Eligible spouses', 'National Guard/Reserves'],
    learnMoreUrl: '/loans/va-loans'
  },
  refinance: {
    title: 'Refinance',
    description: 'Lower your rate or access your home equity.',
    benefits: ['Lower monthly payments', 'Cash-out options', 'Rate and term refinancing', 'Debt consolidation'],
    minDownPayment: 'N/A',
    idealFor: ['Current homeowners', 'Rate improvement opportunities', 'Cash-out needs'],
    learnMoreUrl: '/loans/refinance'
  },
  'new-construction': {
    title: 'New Construction Loan',
    description: 'Finance your dream home from the ground up.',
    benefits: ['Construction-to-permanent financing', 'Interest-only payments during construction', 'One-time close process', 'Customization options'],
    minDownPayment: '10-20%',
    idealFor: ['Building new homes', 'Custom home projects', 'Experienced builders'],
    learnMoreUrl: '/loans/new-construction'
  },
  'reverse-mortgage': {
    title: 'Reverse Mortgage',
    description: 'Access your home equity without monthly payments.',
    benefits: ['No monthly mortgage payments', 'Access home equity', 'Stay in your home', 'FHA-insured options'],
    minDownPayment: 'N/A',
    idealFor: ['Age 62+', 'Significant home equity', 'Retirement income needs'],
    learnMoreUrl: '/loans/reverse-mortgage'
  }
};

// Create a new component to handle search params
function GetStartedForm() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState<Step>('intro');
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  
  // Get UTM parameters and ad source
  const source = searchParams.get('utm_source') || '';
  const medium = searchParams.get('utm_medium') || '';
  const campaign = searchParams.get('utm_campaign') || '';
  
  const updateFormData = (newData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
    // Clear errors when user updates data
    setErrors(prev => {
      const newErrors = { ...prev };
      Object.keys(newData).forEach(key => {
        delete newErrors[key];
      });
      return newErrors;
    });
  };

  const validateStep = (step: Step): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 'qualify') {
      if (!formData.loanType) {
        newErrors.loanType = 'Please select a loan type';
      }
    }

    if (step === 'details') {
      if (!formData.firstName?.trim()) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName?.trim()) {
        newErrors.lastName = 'Last name is required';
      }
      if (!formData.email?.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.phone?.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
      if (!formData.propertyValue?.trim()) {
        newErrors.propertyValue = 'Property value is required';
      }
      if (!formData.timeframe) {
        newErrors.timeframe = 'Please select your timeframe';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStepChange = (nextStep: Step) => {
    if (!validateStep(currentStep)) {
      return;
    }

    // Track step completion
    if (typeof window !== 'undefined' && window.trackFormStep) {
      window.trackFormStep(currentStep, formData);
    }
    setCurrentStep(nextStep);
  };

  const handleSubmission = async () => {
    if (!validateStep('details')) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Helper function to clean currency values
      const cleanCurrencyValue = (value?: string) => {
        if (!value) return undefined;
        return value.replace(/[^\d]/g, ''); // Remove all non-digit characters
      };

      // Prepare lead data
      const leadData: LeadInput = {
        firstName: formData.firstName!,
        lastName: formData.lastName!,
        email: formData.email!,
        phone: formData.phone!,
        loanType: formData.loanType!,
        propertyValue: cleanCurrencyValue(formData.propertyValue),
        downPayment: cleanCurrencyValue(formData.downPayment),
        creditScore: formData.creditScore as any,
        timeframe: formData.timeframe as any
      };

      // Submit to API
      const getApiUrl = () => {
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname.startsWith('10.0.0.') || hostname.startsWith('192.168.')) {
          // Use local API server for local development (localhost or local IP)
          return `http://${hostname === 'localhost' ? 'localhost' : hostname}:3001/api/leads`;
        }
        // Use relative path for production
        return '/api/leads';
      };

      const apiUrl = getApiUrl();
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit lead information');
      }

      // Track form submission
      if (typeof window !== 'undefined' && window.trackFormSubmission) {
        window.trackFormSubmission({
          ...formData,
          utm_source: source,
          utm_medium: medium,
          utm_campaign: campaign,
        });
      }

      setCurrentStep('final');
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred while submitting your information');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCurrency = (value: string) => {
    const num = value.replace(/[^\d]/g, '');
    if (num) {
      return Number(num).toLocaleString();
    }
    return value;
  };

  const renderIntroStep = () => (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
        Find Your Perfect Mortgage Solution
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Get personalized loan recommendations and connect with our mortgage experts. 
        Start your journey to homeownership today.
      </p>

      <div className="bg-[#00659C] text-white rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Bluebird Mortgage?</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <div className="flex items-start">
            <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Expert guidance through every step</span>
          </div>
          <div className="flex items-start">
            <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Competitive rates and terms</span>
          </div>
          <div className="flex items-start">
            <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Fast and efficient process</span>
          </div>
          <div className="flex items-start">
            <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Diverse loan options available</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleStepChange('qualify')}
        className="w-full sm:w-auto px-8 py-4 bg-[#00659C] text-white rounded-lg font-semibold text-lg hover:bg-[#005483] transition-colors"
      >
        Get Started →
      </button>
    </div>
  );

  const renderQualifyStep = () => (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
        What Type of Loan Are You Interested In?
      </h2>
      {errors.loanType && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {errors.loanType}
        </div>
      )}
      <div className="space-y-4">
        {Object.entries(loanTypeData).map(([key, info]) => (
          <button
            key={key}
            onClick={() => {
              updateFormData({ loanType: key as any });
              // Clear any existing errors and move to next step
              setErrors({});
              setCurrentStep('details');
              // Track step completion
              if (typeof window !== 'undefined' && window.trackFormStep) {
                window.trackFormStep('qualify', { ...formData, loanType: key });
              }
            }}
            className={`w-full p-4 text-left bg-white border rounded-lg hover:border-[#00659C] focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 transition-colors ${
              formData.loanType === key ? 'border-[#00659C] ring-2 ring-[#00659C] ring-opacity-20' : 'border-gray-300'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">{info.title}</div>
            <div className="text-sm text-gray-600">{info.description}</div>
            <div className="text-xs text-[#00659C] mt-2">Min. Down Payment: {info.minDownPayment}</div>
          </button>
        ))}

        <button
          onClick={() => {
            updateFormData({ loanType: 'not-sure' });
            // Clear any existing errors and move to next step
            setErrors({});
            setCurrentStep('details');
            // Track step completion
            if (typeof window !== 'undefined' && window.trackFormStep) {
              window.trackFormStep('qualify', { ...formData, loanType: 'not-sure' });
            }
          }}
          className={`w-full p-4 text-left bg-white border rounded-lg hover:border-[#00659C] focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 transition-colors ${
            formData.loanType === 'not-sure' ? 'border-[#00659C] ring-2 ring-[#00659C] ring-opacity-20' : 'border-gray-300'
          }`}
        >
          <div className="font-semibold text-gray-900 mb-1">Not Sure</div>
          <div className="text-sm text-gray-600">Our experts will help you find the right loan program.</div>
        </button>
      </div>
    </div>
  );

  const renderDetailsStep = () => (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
        Tell Us About Your Plans
      </h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Estimated Property Value *
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="text"
              className={`w-full p-3 pl-7 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 outline-none ${
                errors.propertyValue ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="e.g. 300,000"
              value={formData.propertyValue || ''}
              onChange={(e) => updateFormData({ propertyValue: formatCurrency(e.target.value) })}
            />
          </div>
          {errors.propertyValue && (
            <p className="mt-1 text-sm text-red-600">{errors.propertyValue}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Down Payment Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="text"
              className="w-full p-3 pl-7 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 outline-none"
              placeholder="e.g. 60,000"
              value={formData.downPayment || ''}
              onChange={(e) => updateFormData({ downPayment: formatCurrency(e.target.value) })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            When are you looking to buy/refinance? *
          </label>
          <select
            className={`w-full p-3 border rounded-lg bg-white text-gray-900 focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 outline-none ${
              errors.timeframe ? 'border-red-300' : 'border-gray-300'
            }`}
            value={formData.timeframe || ''}
            onChange={(e) => updateFormData({ timeframe: e.target.value })}
          >
            <option value="">Select timeframe</option>
            <option value="immediately">Immediately (0-30 days)</option>
            <option value="soon">Soon (1-3 months)</option>
            <option value="planning">Planning ahead (3-6 months)</option>
            <option value="exploring">Just exploring (6+ months)</option>
          </select>
          {errors.timeframe && (
            <p className="mt-1 text-sm text-red-600">{errors.timeframe}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Credit Score Range
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 outline-none"
            value={formData.creditScore || ''}
            onChange={(e) => updateFormData({ creditScore: e.target.value })}
          >
            <option value="">Select range</option>
            <option value="excellent">Excellent (740+)</option>
            <option value="good">Good (670-739)</option>
            <option value="fair">Fair (580-669)</option>
            <option value="poor">Poor (Below 580)</option>
            <option value="unknown">Not sure</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            className={`w-full p-3 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 outline-none ${
              errors.firstName ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter your first name"
            value={formData.firstName || ''}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            className={`w-full p-3 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 outline-none ${
              errors.lastName ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter your last name"
            value={formData.lastName || ''}
            onChange={(e) => updateFormData({ lastName: e.target.value })}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            className={`w-full p-3 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 outline-none ${
              errors.email ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter your email address"
            value={formData.email || ''}
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            className={`w-full p-3 border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 outline-none ${
              errors.phone ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="(555) 123-4567"
            value={formData.phone || ''}
            onChange={(e) => updateFormData({ phone: e.target.value })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {submitError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            {submitError}
          </div>
        )}

        <button
          onClick={handleSubmission}
          disabled={isSubmitting}
          className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed text-white' 
              : 'bg-[#00659C] text-white hover:bg-[#005483]'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </div>
          ) : (
            'Get My Personalized Recommendations →'
          )}
        </button>
      </div>
    </div>
  );

  const renderFinalStep = () => {
    const selectedLoanInfo = formData.loanType && formData.loanType !== 'not-sure' 
      ? loanTypeData[formData.loanType] 
      : null;

    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Great News, {formData.firstName}!
          </h2>
          <p className="text-lg text-gray-600">
            Based on your information, we've identified the perfect loan options for you. 
            Ready to take the next step?
          </p>
        </div>

        {/* Primary CTA */}
        <div className="bg-[#00659C] text-white rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Start Your Official Application</h3>
          <p className="text-lg mb-6 text-white/90">
            Complete your secure application with our partner platform and get pre-approved quickly.
          </p>
          <a
            href="https://www.blink.mortgage/app/signup/p/bluebirdmortgage/davidjeffrey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto px-8 py-4 bg-white text-[#00659C] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Apply Now - Get Pre-Approved →
          </a>
        </div>

        {/* Loan-specific recommendations */}
        {selectedLoanInfo && (
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Perfect! {selectedLoanInfo.title} is Great For You
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {selectedLoanInfo.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <span className="text-[#00659C] mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Ideal For:</h4>
                <ul className="space-y-1">
                  {selectedLoanInfo.idealFor.map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <span className="text-[#00659C] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href={selectedLoanInfo.learnMoreUrl}
                className="inline-block px-6 py-3 bg-[#00659C] text-white rounded-lg hover:bg-[#005483] transition-colors"
              >
                Learn More About {selectedLoanInfo.title} →
              </Link>
            </div>
          </div>
        )}

        {/* Secondary actions */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/calculator"
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
          >
            <h4 className="text-lg font-semibold text-[#00659C] mb-2">Calculate Payments</h4>
            <p className="text-gray-600 text-sm">Use our mortgage calculator to estimate your monthly payments.</p>
          </Link>

          <Link
            href="/contact"
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
          >
            <h4 className="text-lg font-semibold text-[#00659C] mb-2">Speak with Expert</h4>
            <p className="text-gray-600 text-sm">Get personalized advice from David Jeffrey, your mortgage expert.</p>
          </Link>
        </div>
      </div>
    );
  };

  const renderProgressBar = () => {
    const steps = ['intro', 'qualify', 'details', 'final'];
    const currentIndex = steps.indexOf(currentStep);
    const progress = (currentIndex / (steps.length - 1)) * 100;

    return (
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-[#00659C] h-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {renderProgressBar()}
        <div className="mt-8">
          {currentStep === 'intro' && renderIntroStep()}
          {currentStep === 'qualify' && renderQualifyStep()}
          {currentStep === 'details' && renderDetailsStep()}
          {currentStep === 'final' && renderFinalStep()}
        </div>
      </div>
      <AdTracking />
    </div>
  );
}

// Update the main component to use Suspense
export default function GetStarted() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-2 bg-gray-200 rounded-full w-full mb-8"></div>
            <div className="h-8 bg-gray-200 rounded-lg w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded-lg w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    }>
      <GetStartedForm />
    </Suspense>
  );
} 