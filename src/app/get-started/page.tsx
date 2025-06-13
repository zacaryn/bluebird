'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import AdTracking from '@/components/AdTracking';
import Link from 'next/link';

declare global {
  interface Window {
    trackFormStep?: (step: string, data: any) => void;
    trackFormSubmission?: (data: any) => void;
  }
}

type Step = 'intro' | 'qualify' | 'details' | 'final' | 'calculator' | 'guide';

interface FormData {
  loanType?: 'Conventional' | 'FHA' | 'VA' | 'Jumbo' | 'Construction' | 'Refinance' | 'Not Sure';
  propertyType?: string;
  creditScore?: string;
  propertyValue?: string;
  downPayment?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  situation?: string;
}

export default function GetStarted() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState<Step>('intro');
  const [formData, setFormData] = useState<FormData>({});
  
  // Get UTM parameters and ad source
  const source = searchParams.get('utm_source') || '';
  const medium = searchParams.get('utm_medium') || '';
  const campaign = searchParams.get('utm_campaign') || '';
  
  const updateFormData = (newData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const handleStepChange = (nextStep: Step) => {
    // Track step completion
    if (typeof window !== 'undefined' && window.trackFormStep) {
      window.trackFormStep(currentStep, formData);
    }
    setCurrentStep(nextStep);
  };

  const handleSubmission = () => {
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
  };

  const renderIntroStep = () => (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
        Find Out How Much Home You Can Afford
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Get pre-qualified in minutes with our simple process. Our mortgage experts 
        will guide you through every step of your homebuying journey.
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
        Start Your Pre-Qualification →
      </button>
    </div>
  );

  const renderQualifyStep = () => (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
        What Type of Loan Are You Interested In?
      </h2>
      <div className="space-y-4">
        <button
          onClick={() => {
            updateFormData({ loanType: 'Conventional' });
            handleStepChange('details');
          }}
          className="w-full p-4 text-left bg-white border border-gray-300 rounded-lg hover:border-[#00659C] focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 transition-colors"
        >
          <div className="font-semibold text-gray-900 mb-1">Conventional Loan</div>
          <div className="text-sm text-gray-600">Traditional financing with competitive rates and flexible terms.</div>
        </button>

        <button
          onClick={() => {
            updateFormData({ loanType: 'FHA' });
            handleStepChange('details');
          }}
          className="w-full p-4 text-left bg-white border border-gray-300 rounded-lg hover:border-[#00659C] focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 transition-colors"
        >
          <div className="font-semibold text-gray-900 mb-1">FHA Loan</div>
          <div className="text-sm text-gray-600">Lower down payment requirements and flexible credit guidelines.</div>
        </button>

        <button
          onClick={() => {
            updateFormData({ loanType: 'VA' });
            handleStepChange('details');
          }}
          className="w-full p-4 text-left bg-white border border-gray-300 rounded-lg hover:border-[#00659C] focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 transition-colors"
        >
          <div className="font-semibold text-gray-900 mb-1">VA Loan</div>
          <div className="text-sm text-gray-600">Special benefits for veterans and active duty military.</div>
        </button>

        <button
          onClick={() => {
            updateFormData({ loanType: 'Jumbo' });
            handleStepChange('details');
          }}
          className="w-full p-4 text-left bg-white border border-gray-300 rounded-lg hover:border-[#00659C] focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 transition-colors"
        >
          <div className="font-semibold text-gray-900 mb-1">Jumbo Loan</div>
          <div className="text-sm text-gray-600">Higher loan amounts for luxury homes and high-cost areas.</div>
        </button>

        <button
          onClick={() => {
            updateFormData({ loanType: 'Construction' });
            handleStepChange('details');
          }}
          className="w-full p-4 text-left bg-white border border-gray-300 rounded-lg hover:border-[#00659C] focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 transition-colors"
        >
          <div className="font-semibold text-gray-900 mb-1">Construction Loan</div>
          <div className="text-sm text-gray-600">Finance your new home construction project.</div>
        </button>

        <button
          onClick={() => {
            updateFormData({ loanType: 'Refinance' });
            handleStepChange('details');
          }}
          className="w-full p-4 text-left bg-white border border-gray-300 rounded-lg hover:border-[#00659C] focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 transition-colors"
        >
          <div className="font-semibold text-gray-900 mb-1">Refinance</div>
          <div className="text-sm text-gray-600">Lower your rate or get cash from your home equity.</div>
        </button>

        <button
          onClick={() => {
            updateFormData({ loanType: 'Not Sure' });
            handleStepChange('details');
          }}
          className="w-full p-4 text-left bg-white border border-gray-300 rounded-lg hover:border-[#00659C] focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 transition-colors"
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
            Estimated Property Value
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="text"
              className="w-full p-3 pl-7 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 outline-none"
              placeholder="Enter amount"
              value={formData.propertyValue || ''}
              onChange={(e) => updateFormData({ propertyValue: e.target.value })}
            />
          </div>
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
              placeholder="Enter amount"
              value={formData.downPayment || ''}
              onChange={(e) => updateFormData({ downPayment: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 outline-none"
            placeholder="Enter your first name"
            value={formData.firstName || ''}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 outline-none"
            placeholder="Enter your last name"
            value={formData.lastName || ''}
            onChange={(e) => updateFormData({ lastName: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 outline-none"
            placeholder="Enter your email address"
            value={formData.email || ''}
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:border-[#00659C] focus:ring-2 focus:ring-[#00659C] focus:ring-opacity-20 outline-none"
            placeholder="Enter your phone number"
            value={formData.phone || ''}
            onChange={(e) => updateFormData({ phone: e.target.value })}
          />
        </div>

        <button
          onClick={handleSubmission}
          className="w-full py-4 bg-[#00659C] text-white rounded-lg font-semibold text-lg hover:bg-[#005483] transition-colors"
        >
          Get Your Pre-Qualification →
        </button>
      </div>
    </div>
  );

  const renderFinalStep = () => (
    <div className="max-w-xl mx-auto text-center">
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
          Based on your information, you may qualify for our preferred mortgage programs. 
          One of our loan experts will contact you shortly to discuss your options.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Learn More About Our Loan Programs</h3>
        <div className="grid gap-6">
          <Link 
            href="/loans/conventional"
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h4 className="text-lg font-semibold text-[#00659C] mb-2">Conventional Loans</h4>
            <p className="text-gray-600 mb-3">Learn about our traditional mortgage options with competitive rates.</p>
            <span className="text-[#00659C] font-medium">Read More →</span>
          </Link>

          <Link 
            href="/loans/fha-loans"
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h4 className="text-lg font-semibold text-[#00659C] mb-2">FHA Loans</h4>
            <p className="text-gray-600 mb-3">Discover the benefits of FHA loans and their flexible requirements.</p>
            <span className="text-[#00659C] font-medium">Read More →</span>
          </Link>

          <Link 
            href="/loans/va-loans"
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h4 className="text-lg font-semibold text-[#00659C] mb-2">VA Loans</h4>
            <p className="text-gray-600 mb-3">Explore special financing options for veterans and service members.</p>
            <span className="text-[#00659C] font-medium">Read More →</span>
          </Link>
        </div>
      </div>
    </div>
  );

  const renderCalculatorStep = () => (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        Want to Calculate Your Monthly Payment?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Use our comprehensive mortgage calculator to estimate your monthly payments, 
        see amortization schedules, and understand the total cost of homeownership.
      </p>
      <div className="space-y-4">
        <Link 
          href="/mortgage-calculator"
          className="block w-full py-4 bg-[#00659C] text-white rounded-lg font-semibold text-lg hover:bg-[#005483] transition-colors"
        >
          Try Our Mortgage Calculator →
        </Link>
        <button
          onClick={() => handleStepChange('details')}
          className="block w-full py-4 bg-white text-[#00659C] border-2 border-[#00659C] rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
        >
          Continue Pre-Qualification
        </button>
      </div>
    </div>
  );

  const renderGuideStep = () => (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        New to Home Buying?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Check out our comprehensive resources and guides to help you understand 
        the mortgage process and make informed decisions.
      </p>
      <div className="space-y-4">
        <Link 
          href="/resources"
          className="block w-full py-4 bg-[#00659C] text-white rounded-lg font-semibold text-lg hover:bg-[#005483] transition-colors"
        >
          View Home Buying Resources →
        </Link>
        <button
          onClick={() => handleStepChange('calculator')}
          className="block w-full py-4 bg-white text-[#00659C] border-2 border-[#00659C] rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
        >
          Continue Pre-Qualification
        </button>
      </div>
    </div>
  );

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