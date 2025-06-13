'use client';

import Image from 'next/image';
import { format } from 'date-fns';
import Link from 'next/link';

export default function FirstTimeHomebuyerPage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#00659C]">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/homebuyer.jpg"
            alt="First Time Homebuyer"
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
            First Time Homebuyer
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Your Journey to Homeownership Starts Here
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
              As a first-time home buyer, the process of purchasing a home can seem overwhelming, but it can also be 
              exciting. We're here to guide you through each step of the journey and help you make informed decisions 
              along the way.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Steps to Homeownership</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">1. Determine Your Budget and Get Pre-approved</h3>
                <p className="text-gray-800">
                  Before you start looking at homes, it's important to know how much you can afford to spend. 
                  Getting pre-approved for a mortgage will give you an idea of how much you can borrow and will 
                  also make you a more attractive buyer to sellers.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">2. Research Neighborhoods and Find a Real Estate Agent</h3>
                <p className="text-gray-800">
                  Look for neighborhoods that fit your lifestyle and budget, and find a real estate agent who can 
                  help you find homes that meet your criteria.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">3. Find a Home and Make an Offer</h3>
                <p className="text-gray-800">
                  Your real estate agent can help you find homes that meet your criteria and can help you make an 
                  offer on a home that you like.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">4. Get a Home Inspection</h3>
                <p className="text-gray-800">
                  Before you close on the home, it's important to have a professional inspect the property to ensure 
                  that there are no major issues.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">5. Apply for First-Time Homebuyer Programs</h3>
                <p className="text-gray-800">
                  Many states and local governments offer programs that can help first-time buyers with down payments, 
                  closing costs, and other expenses.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">6. Close on the Home</h3>
                <p className="text-gray-800">
                  Once you've completed the inspection and any necessary negotiations, you'll sign the final paperwork 
                  and pay closing costs to complete the purchase of the home.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Available Loan Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Loan Options</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">FHA Loans - Lower down payment requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">USDA Loans - For rural home purchases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">VA Loans - For veterans and service members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Conventional Loans - Traditional financing options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">State and Local Programs - Special assistance programs</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Benefits for First-Time Buyers</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Down payment assistance programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Special loan terms and conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Tax benefits and credits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Educational resources and counseling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Flexible qualification requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#00659C] text-white rounded-xl p-8 my-12 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h3>
            <p className="mb-6 text-white/90">
              Contact us today to learn more about our first-time homebuyer programs and start your journey to 
              homeownership. Our experienced team is here to guide you through every step of the process.
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