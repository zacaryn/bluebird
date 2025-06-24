import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

const firstTimeHomebuyerSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluebirdmortgage.com/info/first-time-homebuyer#webpage",
      "url": "https://bluebirdmortgage.com/info/first-time-homebuyer",
      "name": "First-Time Homebuyer Guide Colorado Springs | Programs & Tips",
      "isPartOf": {
        "@id": "https://bluebirdmortgage.com/#website"
      },
      "about": {
        "@id": "https://bluebirdmortgage.com/info/first-time-homebuyer#guide"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-20",
      "description": "Complete first-time homebuyer guide for Colorado Springs with loan programs, down payment assistance, and homebuying process tips.",
      "breadcrumb": {
        "@id": "https://bluebirdmortgage.com/info/first-time-homebuyer#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bluebirdmortgage.com/info/first-time-homebuyer#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://bluebirdmortgage.com/"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Information",
          "item": "https://bluebirdmortgage.com/info"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "First-Time Homebuyer",
          "item": "https://bluebirdmortgage.com/info/first-time-homebuyer"
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://bluebirdmortgage.com/info/first-time-homebuyer#guide",
      "name": "How to Buy Your First Home in Colorado Springs",
      "description": "Step-by-step guide for first-time homebuyers in Colorado Springs, including loan programs and financial preparation.",
      "image": "https://bluebirdmortgage.com/images/homebuyer.jpg",
      "totalTime": "P30D",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "5000"
      },
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Pre-approval letter"
        },
        {
          "@type": "HowToSupply",
          "name": "Down payment funds"
        },
        {
          "@type": "HowToSupply",
          "name": "Income documentation"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Get Pre-approved",
          "text": "Determine your budget and get pre-approved for a mortgage to understand how much you can borrow and make yourself attractive to sellers."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Research Neighborhoods",
          "text": "Look for neighborhoods that fit your lifestyle and budget, and find a real estate agent who can help you find suitable homes."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Make an Offer",
          "text": "Work with your real estate agent to find homes that meet your criteria and make competitive offers."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Home Inspection",
          "text": "Have a professional inspect the property to ensure there are no major issues before closing."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Apply for Programs",
          "text": "Apply for first-time homebuyer programs that can help with down payments, closing costs, and other expenses."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Close on Home",
          "text": "Complete the inspection, negotiations, sign final paperwork, and pay closing costs to finalize the purchase."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What loan programs are available for first-time homebuyers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "First-time homebuyers can access FHA loans with low down payments, VA loans for veterans, USDA loans for rural properties, conventional loans, and various state and local assistance programs."
          }
        },
        {
          "@type": "Question",
          "name": "How much down payment do I need as a first-time homebuyer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Down payment requirements vary by loan type. FHA loans require as little as 3.5%, VA loans may require no down payment, and conventional loans can start at 3%. Down payment assistance programs may help reduce this amount."
          }
        },
        {
          "@type": "Question",
          "name": "What is the homebuying process for first-time buyers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The process includes getting pre-approved, researching neighborhoods, finding a real estate agent, making offers, conducting inspections, applying for assistance programs, and closing on the home."
          }
        },
        {
          "@type": "Question",
          "name": "Are there special benefits for first-time homebuyers in Colorado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Colorado offers down payment assistance programs, special loan terms, tax benefits, educational resources, and flexible qualification requirements for first-time homebuyers."
          }
        }
      ]
    }
  ]
};

const breadcrumbItems = [
  { name: 'Information', href: '/info' },
  { name: 'First-Time Homebuyer', href: '/info/first-time-homebuyer', current: true }
];

export default function FirstTimeHomebuyerPage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <>
      <script
        id="first-time-homebuyer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(firstTimeHomebuyerSchema),
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-[#00659C]">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/homebuyer.jpg"
              alt="First Time Homebuyer Guide Colorado Springs"
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
              Your Journey to Homeownership Starts Here in Colorado Springs
            </p>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose prose-lg max-w-none">
            <div className="text-sm text-gray-600 mb-6">
              Last Updated: {currentDate}
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
              <p className="text-lg text-gray-800 leading-relaxed">
                As a first-time home buyer in Colorado Springs, the process of purchasing a home can seem overwhelming, but it can also be 
                exciting. We're here to guide you through each step of the journey and help you make informed decisions 
                along the way, taking advantage of the many programs available to first-time homebuyers.
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
    </>
  );
} 