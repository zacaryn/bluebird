'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';

export default function DownPaymentAssistancePage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#00659C]">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/advisor.jpg"
            alt="Down Payment Assistance"
            width={1920}
            height={300}
            className="h-full w-full object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-[#00659C]/70" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Down Payment Assistance
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Making Homeownership More Accessible
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          <div className="text-sm text-gray-600 mb-6">
            Last Updated: {currentDate}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">CHFA Down Payment Assistance</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              CHFA (Colorado Housing and Finance Authority) provides various housing-related programs and services, 
              including down payment assistance for qualified homebuyers.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Program Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Second mortgage loan for down payment and closing costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Lower interest rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Deferred payment options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">30-year fixed-rate loans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Flexible qualification criteria</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Eligibility Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Income limits apply</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Credit score requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Homebuyer education course completion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Property must be in Colorado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Must be primary residence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">CHAC Down Payment Assistance</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              CHAC (Colorado Housing Assistance Corporation) is a non-profit organization providing down payment 
              assistance to help low-to-moderate income families achieve homeownership.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Program Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Silent second mortgage options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Affordable repayment terms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Flexible qualification criteria</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Combined with first mortgages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Support throughout the process</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Application Process</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Contact CHAC directly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Work with participating lenders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Submit required documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Complete homebuyer education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Property eligibility verification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">How We Can Help</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              At Bluebird Mortgage, we work closely with both CHFA and CHAC to help our clients access down 
              payment assistance programs. David Jeffrey will:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#00659C] mr-2">✓</span>
                <span className="text-gray-800">Guide you through the application process</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00659C] mr-2">✓</span>
                <span className="text-gray-800">Help determine your eligibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00659C] mr-2">✓</span>
                <span className="text-gray-800">Explain program requirements and benefits</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00659C] mr-2">✓</span>
                <span className="text-gray-800">Coordinate with assistance programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00659C] mr-2">✓</span>
                <span className="text-gray-800">Support you throughout your homebuying journey</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#00659C] text-white rounded-xl p-8 my-12 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Ready to Learn More?</h3>
            <p className="mb-6 text-white/90">
              Contact us today to discuss down payment assistance options and start your journey to homeownership. 
              David Jeffrey is here to help you understand your options and find the right program for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://www.blink.mortgage/app/signup/p/bluebirdmortgage/davidjeffrey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#00659C] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center font-semibold"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#00659C] transition-colors text-center font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
} 