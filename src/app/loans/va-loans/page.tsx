'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';

const benefits = [
  'No down payment required for qualified buyers',
  'No private mortgage insurance (PMI) required',
  'Competitive interest rates',
  'Flexible credit requirements',
  'No prepayment penalties',
  'VA funding fee may be financed',
];

const eligibility = [
  'Active duty service members',
  'Veterans with honorable discharge',
  'National Guard and Reserve members',
  'Surviving spouses of veterans',
  'Minimum service requirements apply',
];

export default function VALoansPage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#00659C]">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/valoan.jpg"
            alt="VA Home Loans"
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
            VA Home Loans
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Serving Those Who Served
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
              VA loans are a valuable benefit for veterans, active duty military members, and eligible 
              surviving spouses. These government-backed loans offer significant advantages over 
              conventional mortgages, making homeownership more accessible for those who have served 
              our country.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">VA Loan Benefits</h2>
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
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Eligibility Requirements</h2>
              <ul className="space-y-4">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">The VA Loan Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-[#00659C] mr-4 font-bold">1.</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Certificate of Eligibility (COE)</h3>
                  <p className="text-gray-800">
                    Obtain your COE to verify your eligibility for a VA loan. We can help you request 
                    this document.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-[#00659C] mr-4 font-bold">2.</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Pre-Approval</h3>
                  <p className="text-gray-800">
                    Get pre-approved to understand your buying power and demonstrate serious intent to 
                    sellers.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-[#00659C] mr-4 font-bold">3.</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">House Hunting</h3>
                  <p className="text-gray-800">
                    Find a home that meets VA property requirements and your needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-[#00659C] mr-4 font-bold">4.</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">VA Appraisal</h3>
                  <p className="text-gray-800">
                    The VA will conduct an appraisal to ensure the property meets their standards and 
                    verify its value.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-[#00659C] mr-4 font-bold">5.</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Closing</h3>
                  <p className="text-gray-800">
                    Complete the purchase with our guidance through the final steps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#00659C] text-white rounded-xl p-8 my-12 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="mb-6 text-white/90">
              Contact us today to learn more about VA loans and start your application process. Our experienced 
              team will guide you through every step.
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