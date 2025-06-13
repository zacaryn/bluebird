'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';

const benefits = [
  'Access your home equity without selling',
  'No monthly mortgage payments required',
  'Maintain ownership of your home',
  'FHA insurance protection',
  'Use the funds as you choose',
  'Non-recourse loan protection',
];

const requirements = [
  'Age 62 or older',
  'Own your home outright or have significant equity',
  'Home must be your primary residence',
  'Maintain property taxes and insurance',
  'Home must meet FHA standards',
  'Complete HUD-approved counseling',
];

export default function ReverseMortgagePage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#00659C]">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/familyhome.jpg"
            alt="Reverse Mortgage"
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
            Reverse Mortgage
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Access Your Home Equity in Retirement
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
            <p className="text-lg text-gray-800 leading-relaxed">
              A reverse mortgage is a unique financial tool designed for homeowners aged 62 and older. 
              It allows you to convert part of your home equity into cash without having to sell your 
              home or make monthly mortgage payments. This can provide financial flexibility during 
              retirement while allowing you to stay in your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Key Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Requirements</h2>
              <ul className="space-y-4">
                {requirements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-[#00659C] mr-4 font-bold">1.</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Initial Consultation</h3>
                  <p className="text-gray-800">
                    Meet with our reverse mortgage specialists to discuss your needs and explore your options.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-[#00659C] mr-4 font-bold">2.</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">HUD Counseling</h3>
                  <p className="text-gray-800">
                    Complete the required HUD-approved counseling session to ensure you understand all aspects 
                    of a reverse mortgage.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-[#00659C] mr-4 font-bold">3.</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Application & Approval</h3>
                  <p className="text-gray-800">
                    Submit your application and required documentation. We'll guide you through the approval 
                    process.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-[#00659C] mr-4 font-bold">4.</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Funding</h3>
                  <p className="text-gray-800">
                    Choose how you want to receive your funds - lump sum, monthly payments, line of credit, 
                    or a combination.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#00659C] text-white rounded-xl p-8 my-12 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Learn More About Reverse Mortgages</h3>
            <p className="mb-6 text-white/90">
              Contact us today to schedule a consultation with one of our reverse mortgage specialists. 
              We'll help you understand if a reverse mortgage is right for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-[#00659C] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center font-semibold"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/resources"
                className="inline-block bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#00659C] transition-colors text-center font-semibold"
              >
                View Resources
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
} 