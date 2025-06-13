'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';

const benefits = [
  'Lower down payment options available',
  'Competitive interest rates',
  'No upfront mortgage insurance with 20% down',
  'Higher loan limits than FHA loans',
  'Flexible property types eligible',
  'Multiple term options available',
];

const requirements = [
  'Good credit score (typically 620+)',
  'Stable employment history',
  'Debt-to-income ratio under 45%',
  'Down payment (as low as 3%)',
  'Property appraisal required',
  'Income and asset documentation',
];

export default function ConventionalLoanPage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#00659C]">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/coloradosprings.jpg"
            alt="Conventional Loans"
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
            Conventional Loans
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Flexible Financing Solutions for Your Dream Home
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
              A conventional loan is a mortgage that isn't backed by a government agency. These loans offer 
              competitive rates and flexible terms, making them a popular choice for homebuyers with good credit 
              and stable income. With down payment options as low as 3% and no upfront mortgage insurance required 
              with 20% down, conventional loans provide an attractive path to homeownership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-800">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Requirements</h3>
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Understanding Conventional Loans</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Conventional loans are ideal for borrowers with good credit and stable income. These loans follow 
                guidelines set by Fannie Mae and Freddie Mac, offering competitive rates and flexible terms. Unlike 
                FHA loans, conventional loans don't require upfront mortgage insurance with a 20% down payment.
              </p>
              <h3 className="text-xl font-semibold text-gray-900">Loan Options:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Fixed-rate mortgages (15, 20, or 30 years)</li>
                <li>Adjustable-rate mortgages (ARM)</li>
                <li>Jumbo loans for high-value properties</li>
                <li>Low down payment options (as low as 3%)</li>
              </ul>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our team will help you understand your options and choose the best conventional loan program for 
                your specific situation. We'll guide you through the entire process, from application to closing.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Private Mortgage Insurance (PMI)</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              If your down payment is less than 20%, you'll need to pay private mortgage insurance (PMI). However, 
              unlike FHA loans, PMI can be removed once you reach 20% equity in your home. This can lead to 
              significant savings over the life of your loan.
            </p>
          </div>

          <div className="bg-[#00659C] text-white rounded-xl p-8 my-12 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="mb-6 text-white/90">
              Contact us today to learn more about our conventional loan options. Our experienced team will help 
              you find the right loan program for your needs and guide you through the application process.
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