'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';

export default function TrustBluebirdPage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#00659C]">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/bluebird.jpg"
            alt="Trust Bluebird Mortgage"
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
            Trust Bluebird Mortgage
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Your Trusted Partner in Homeownership
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          <div className="text-sm text-gray-600 mb-6">
            Last Updated: {currentDate}
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Industry Expertise</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Deep understanding of mortgage markets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Strong relationships with real estate professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Knowledge of loan programs and options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Familiar with property values and trends</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Community-focused approach to lending</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Personalized Service</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Direct access to your loan officer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Customized loan solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Regular communication throughout the process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Flexible meeting options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Quick response times</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Commitment to You</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-8">
              At Bluebird Mortgage, we understand that choosing a mortgage lender is one of the most important 
              decisions you'll make in your homebuying journey. That's why we're committed to providing exceptional 
              service and support throughout the entire process.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Transparency</h3>
                <p className="text-gray-800">
                  We believe in clear communication and full disclosure. You'll always know exactly where you 
                  stand in the mortgage process.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Expertise</h3>
                <p className="text-gray-800">
                  David Jeffrey stays up-to-date with the latest industry trends and 
                  regulations to provide you with expert guidance.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Efficiency</h3>
                <p className="text-gray-800">
                  We leverage technology and streamlined processes to make your mortgage experience as smooth 
                  and efficient as possible.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Process</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              We've developed a streamlined process that makes getting a mortgage simple and straightforward:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-[#00659C] mr-4 font-bold">1.</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Initial Consultation</h3>
                  <p className="text-gray-800">We'll discuss your goals and review your options.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#00659C] mr-4 font-bold">2.</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Pre-Approval</h3>
                  <p className="text-gray-800">Quick and accurate pre-approval to help you shop with confidence.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#00659C] mr-4 font-bold">3.</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Application</h3>
                  <p className="text-gray-800">Simple and straightforward application process with guidance at every step.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#00659C] mr-4 font-bold">4.</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Processing</h3>
                  <p className="text-gray-800">Efficient processing with regular updates on your application status.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#00659C] mr-4 font-bold">5.</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Closing</h3>
                  <p className="text-gray-800">Clear communication and coordination to ensure a smooth closing process.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#00659C] text-white rounded-xl p-8 my-12 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="mb-6 text-white/90">
              Experience the Bluebird Mortgage difference for yourself. Contact us today to learn how we can 
              help you achieve your homeownership goals.
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