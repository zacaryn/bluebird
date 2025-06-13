'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';

const benefits = [
  'Low down payment requirement of 3.5%',
  'Flexible credit score requirements',
  'Competitive interest rates',
  'Perfect for first-time homebuyers',
  'Down payment assistance available',
  'Gift funds allowed for down payment',
];

const requirements = [
  'Minimum credit score of 580 for 3.5% down',
  'Steady employment history',
  'Property must meet FHA standards',
  'Property must be primary residence',
  'Mortgage insurance required',
  'Debt-to-income ratio guidelines',
];

export default function FHALoansPage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#00659C]">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/coloradosprings2.jpg"
            alt="FHA Home Loans"
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
            FHA Home Loans
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
            <p className="text-lg text-gray-800 leading-relaxed">
              Federal Housing Administration (FHA) insured loans require a small down payment and offer flexible 
              credit requirements, making homeownership more accessible for first-time buyers and those with 
              various credit situations. With the ability to finance up to 96.5% of your home's value and 
              competitive interest rates, FHA loans are an excellent option for many homebuyers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">FHA Loan Benefits</h3>
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose an FHA Loan?</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              FHA loans are an attractive option for homebuyers, especially first-time buyers. With lower down 
              payment requirements and more flexible credit guidelines, these loans make homeownership achievable 
              for many who might not qualify for conventional financing. Our team understands the FHA loan 
              process and can help you navigate it smoothly.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Down Payment Assistance Programs</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              We understand that saving for a down payment can be challenging. That's why we work with various 
              down payment assistance programs to help make homeownership more accessible. These programs can 
              be combined with FHA loans to reduce your upfront costs even further.
            </p>
            <Link
              href="/loans/down-payment-assistance"
              className="inline-block bg-[#00659C] text-white px-6 py-3 rounded-lg hover:bg-[#005483] transition-colors font-semibold"
            >
              Learn About Down Payment Assistance
            </Link>
          </div>

          <div className="bg-[#00659C] text-white rounded-xl p-8 my-12 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="mb-6 text-white/90">
              Contact us today to learn more about FHA loans and start your application process. Our experienced 
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