'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import AdTracking from '@/components/AdTracking';
import AnimatedCounter from '@/components/AnimatedCounter';
import AnimatedStats from '@/components/AnimatedStats';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  loanType: string;
};

const googleReviews = [
  {
    name: "Amanda Gaden",
    text: "David was great to work with on our refi! He is laid back and also really knows his stuff. He did a great job of listening to what we needed (& fighting for that) while also helping us get better than what we had hoped for. We will absolutely use him again! Best experience we've ever had from a lender.",
    rating: 5,
    source: "Facebook Review"
  },
  {
    name: "James Gardner",
    text: "From the get go, David was so much better than dealing with veterans united. He got me a better approval with a better rate and was right there and got back to me within minutes every single time I needed him. This was my first home buying experience and David made it seamless.",
    rating: 5
  },
  {
    name: "Xavier Hunt", 
    text: "This was a long strenuous process first time home buyers with a tight timeline and very little money, this guy was able to get us a great deal in 30 days and he worked for every minute of it, David will definitely get it done for you I recommend anyone trying to buy a home use a broker! This one for sure",
    rating: 5
  },
  {
    name: "Melissa Howard",
    text: "This team made a difficult process easy! Absolutely would recommend and work with them again. They know how to get the deal done!",
    rating: 5
  }
];

export default function RefinanceSolutionsLanding() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string>('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError('');
    try {
      const getApiUrl = () => {
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname.startsWith('10.0.0.') || hostname.startsWith('192.168.')) {
          return `http://${hostname === 'localhost' ? 'localhost' : hostname}:3001/api/inquiries`;
        }
        return '/api/inquiries';
      };
      
      const apiUrl = getApiUrl();
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          loanType: data.loanType
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit inquiry');
      }

      setSubmitSuccess(true);
      reset();
      
      // Redirect to calculator after 2 seconds
      setTimeout(() => {
        window.location.href = '/calculator';
      }, 2000);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while submitting your message');
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Big CTA */}
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          >
            <source src="/images/refinance.mp4" type="video/mp4" />
            {/* Fallback image in case video doesn't load */}
            <Image
              src="/images/loan2.jpg"
              alt="Refinancing Solutions Colorado Springs"
              fill
              className="object-cover brightness-75"
              priority
              quality={90}
            />
          </video>
          <div className="absolute inset-0 bg-[#00659C]/30" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-24 sm:py-32 lg:py-40">
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full bg-red-500/20 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  Refinancing Solutions Specialist
                </span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-lg">
                Lower Your Payment by $500+
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-100 max-w-2xl mx-auto drop-shadow">
                Refinance to reduce payments, access equity, or improve your financial situation. Most homeowners qualify.
              </p>
              
              {/* Dual CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-[#00659C] shadow-xl hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Check Your Savings
                </a>
                <a
                  href="tel:719-428-1038"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all backdrop-blur"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Emergency Help: (719) 428-1038
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-100">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  15-Day Emergency Processing
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  All Credit Situations
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free Consultation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Refinancing Solutions?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We specialize in helping homeowners in difficult situations find the right solution.
            </p>
          </div>
          
          <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#00659C] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Lower Monthly Payments</h3>
                <p className="mt-4 text-gray-600">
                  Reduce your monthly mortgage payment by up to <span className="font-bold text-green-600">$<AnimatedCounter end={500} />+ per month</span> with our refinancing options.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#00659C] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Bad Credit? No Problem</h3>
                <p className="mt-4 text-gray-600">
                  We work with borrowers who have credit challenges and can often find solutions others can't.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#00659C] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Fast Emergency Help</h3>
                <p className="mt-4 text-gray-600">
                  Facing foreclosure? We can often process emergency refinances in as little as 15-30 days.
                </p>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Quick Solutions Overview */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Multiple Refinancing Options Available
            </h2>
          </div>
          
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-[#00659C] mb-2">Lower Rate</div>
                <div className="font-semibold text-gray-900 mb-2">Rate & Term</div>
                <div className="text-sm text-gray-600">Reduce payments</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-[#00659C] mb-2">Cash Out</div>
                <div className="font-semibold text-gray-900 mb-2">Home Equity</div>
                <div className="text-sm text-gray-600">Access your equity</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-[#00659C] mb-2">FHA</div>
                <div className="font-semibold text-gray-900 mb-2">Streamline</div>
                <div className="text-sm text-gray-600">Minimal paperwork</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-[#00659C] mb-2">VA</div>
                <div className="font-semibold text-gray-900 mb-2">IRRRL</div>
                <div className="text-sm text-gray-600">No appraisal needed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Emergency Help Stats */}
      <AnimatedStats 
        title="Emergency Refinancing Results"
        subtitle="Real results for homeowners in distress"
        className="bg-gradient-to-br from-red-50 to-orange-50"
        stats={[
          {
            value: 15,
            label: 'Days to Close',
            description: 'Emergency refinance timeline',
            icon: (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )
          },
          {
            value: 850,
            prefix: '$',
            label: 'Payment Savings',
            description: 'Average monthly reduction',
            icon: (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            )
          },
          {
            value: 89,
            suffix: '%',
            label: 'Success Rate',
            description: 'Clients we help save their homes',
            icon: (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          },
          {
            value: 500,
            suffix: 'K+',
            label: 'Homes Saved',
            description: 'Total value of homes we rescued',
            icon: (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            )
          }
        ]}
      />

      {/* Contact Form Section */}
      <div id="contact-form" className="bg-[#00659C] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get Your Free Refinancing Consultation
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Don't wait - the sooner you act, the more options you'll have. Fill out the form below and 
              David Jeffrey will contact you within 24 hours.
            </p>
          </div>
          
          <div className="mx-auto mt-12 max-w-lg">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {submitSuccess ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-4">
                    Your information has been submitted. David Jeffrey will contact you within 24 hours.
                  </p>
                  <p className="text-sm text-gray-500">
                    Redirecting you to our mortgage calculator...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00659C] sm:text-sm"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00659C] sm:text-sm"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                          message: 'Invalid phone number format',
                        },
                      })}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00659C] sm:text-sm"
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="loanType" className="block text-sm font-medium text-gray-900 mb-2">
                      What type of help do you need? *
                    </label>
                    <select
                      id="loanType"
                      {...register('loanType', { required: 'Please select an option' })}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#00659C] sm:text-sm"
                    >
                      <option value="">Select your situation</option>
                      <option value="behind-on-payments">Behind on mortgage payments</option>
                      <option value="high-interest-rate">Current rate is too high</option>
                      <option value="bad-credit-refi">Bad credit refinance</option>
                      <option value="cash-out-refi">Need cash from home equity</option>
                      <option value="facing-foreclosure">Facing foreclosure</option>
                      <option value="other-refi">Other refinancing need</option>
                    </select>
                    {errors.loanType && (
                      <p className="mt-1 text-sm text-red-600">{errors.loanType.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Tell us about your situation *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register('message', { required: 'Please describe your situation' })}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00659C] sm:text-sm"
                      placeholder="Please describe your current situation and what you're hoping to achieve..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  {error && (
                    <div className="rounded-md bg-red-50 p-4">
                      <div className="flex">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-red-800">{error}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-[#00659C] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#005483] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00659C] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Get My Free Consultation →'}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Your information is secure and will never be shared. David Jeffrey (NMLS# 2269251) will contact you directly.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof / Reviews */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">5.0</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-600">13+ reviews</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Real Results from Real Clients
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              See what our satisfied clients say about working with David Jeffrey at Bluebird Mortgage.
            </p>
          </div>
          
          <ReviewsCarousel reviews={googleReviews} />

          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/D11wDciyucb1YwYf6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00659C] hover:text-[#005483] font-semibold transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              See all reviews on Google
            </a>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-4xl text-center px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't Let Your Home Situation Get Worse
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The sooner you act, the more options we can find for you. Contact David Jeffrey today 
            for your free, no-obligation consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="inline-block bg-[#00659C] text-white px-8 py-3 rounded-lg hover:bg-[#005483] transition-colors font-semibold"
            >
              Get Help Now
            </a>
            <a
              href="tel:719-428-1038"
              className="inline-block bg-gray-100 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              Call (719) 428-1038
            </a>
          </div>
        </div>
      </div>

      <AdTracking />
    </div>
  );
} 