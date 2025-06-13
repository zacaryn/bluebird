'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

export default function NewConstructionPage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#00659C]">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/construction.jpg"
            alt="New home construction"
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
            New Construction Loans
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Build Your Dream Home from the Ground Up
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
              Building a new home is an exciting journey that allows you to create a space that perfectly matches 
              your vision and needs. At Bluebird Mortgage, we specialize in new construction loans that help make 
              your dream home a reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Construction Loan Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">✓</span>
                  <span className="text-gray-800">Single-close construction-to-permanent loans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">✓</span>
                  <span className="text-gray-800">Interest-only payments during construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">✓</span>
                  <span className="text-gray-800">Flexible draw schedules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">✓</span>
                  <span className="text-gray-800">Competitive rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">✓</span>
                  <span className="text-gray-800">Extended rate locks available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">What's Covered</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Land purchase</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Construction costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Contractor payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Materials and supplies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Permits and fees</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">The Construction Loan Process</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">1. Pre-Qualification</h3>
                <p className="text-gray-800">
                  We'll review your financial situation and determine how much you can borrow for your new home 
                  construction project. This helps you set a realistic budget for your build.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">2. Builder Selection</h3>
                <p className="text-gray-800">
                  Choose a qualified builder and get detailed plans and specifications for your new home. We can 
                  help you understand what documentation will be needed from your builder.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">3. Loan Approval</h3>
                <p className="text-gray-800">
                  Once we have all the necessary documentation, we'll process your loan application and work 
                  towards final approval.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">4. Construction Phase</h3>
                <p className="text-gray-800">
                  During construction, we'll manage the draw process with your builder, ensuring funds are 
                  disbursed according to the construction schedule.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">5. Completion</h3>
                <p className="text-gray-800">
                  Once construction is complete, your loan will automatically convert to a permanent mortgage 
                  with the terms we agreed upon at the start of the process.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Types of Construction Loans</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Construction-to-Permanent Loans</h3>
                <p className="text-gray-800">
                  A single loan that converts to a permanent mortgage once construction is complete. This option 
                  saves you money by requiring only one closing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Construction-Only Loans</h3>
                <p className="text-gray-800">
                  A short-term loan that covers only the construction phase. You'll need to obtain a separate 
                  permanent mortgage once construction is complete.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Renovation Construction Loans</h3>
                <p className="text-gray-800">
                  For major renovations or additions to an existing home, combining the purchase or refinance 
                  with construction costs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#00659C] text-white rounded-xl p-8 my-12 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Ready to Build Your Dream Home?</h3>
            <p className="mb-6 text-white/90">
              Contact us today to learn more about our construction loan options and start planning your new home. 
              Our experienced team will guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-[#00659C] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center font-semibold"
              >
                Contact Us
              </Link>
              <Link
                href="https://www.blink.mortgage/app/signup/p/bluebirdmortgage/davidjeffrey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#00659C] transition-colors text-center font-semibold"
              >
                Start Application
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
} 