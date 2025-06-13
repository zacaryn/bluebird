'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

export default function AboutBluebirdPage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#00659C]">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/bluebird.jpg"
            alt="About Bluebird Mortgage"
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
            About Bluebird Mortgage
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Your Local Mortgage Experts
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
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 relative">
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/david.png"
                    alt="David Jeffrey - Owner of Bluebird Mortgage"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Meet David Jeffrey</h2>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  As the owner of Bluebird Mortgage, David Jeffrey brings years of experience and expertise to 
                  the mortgage industry. His commitment to providing exceptional service and personalized solutions 
                  has made Bluebird Mortgage a trusted name in the industry.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  David's approach to mortgage lending focuses on building lasting relationships with clients and 
                  understanding their unique financial situations. His deep knowledge of various loan programs 
                  helps clients find the perfect mortgage solution for their needs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Bluebird Mortgage specializes in providing a variety of home loan services to our customers, 
              including conventional loans, FHA loans, VA loans, and jumbo loans. Our goal is to make the 
              mortgage process as simple and straightforward as possible, helping our clients navigate the 
              often complicated and confusing world of home financing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-800">
                To provide exceptional mortgage services with integrity, transparency, and personalized attention 
                to each client's unique needs. We strive to make the dream of homeownership accessible to everyone 
                in our community.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Values</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Integrity in all our dealings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Commitment to client success</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Excellence in service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Community involvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00659C] mr-2">•</span>
                  <span className="text-gray-800">Continuous improvement</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Purchase Loans</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Conventional Loans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">FHA Loans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">VA Loans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Jumbo Loans</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Refinancing</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Rate & Term Refinance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Cash-Out Refinance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">VA IRRRL</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">FHA Streamline</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Special Programs</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">First-Time Homebuyer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Down Payment Assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Reverse Mortgages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">New Construction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#00659C] text-white rounded-xl p-8 my-12 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Work With Us</h3>
            <p className="mb-6 text-white/90">
              Whether you're a first-time homebuyer or looking to refinance, our team is here to help you 
              achieve your homeownership goals. Contact us today to learn more about our services and how 
              we can help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-[#00659C] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center font-semibold"
              >
                Contact Us
              </Link>
              <Link
                href="/apply"
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