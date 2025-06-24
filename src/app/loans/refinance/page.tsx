import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';

const refinanceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluebirdmortgage.com/loans/refinance#webpage",
      "url": "https://bluebirdmortgage.com/loans/refinance",
      "name": "Refinance Your Mortgage Colorado Springs | Lower Rates & Payments",
      "isPartOf": {
        "@id": "https://bluebirdmortgage.com/#website"
      },
      "about": {
        "@id": "https://bluebirdmortgage.com/loans/refinance#service"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-20",
      "description": "Mortgage refinancing in Colorado Springs to lower rates, reduce payments, or access home equity.",
      "breadcrumb": {
        "@id": "https://bluebirdmortgage.com/loans/refinance#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bluebirdmortgage.com/loans/refinance#breadcrumb",
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
          "name": "Loan Programs",
          "item": "https://bluebirdmortgage.com/loans"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Refinance",
          "item": "https://bluebirdmortgage.com/loans/refinance"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://bluebirdmortgage.com/loans/refinance#service",
      "name": "Mortgage Refinancing",
      "description": "Comprehensive mortgage refinancing services including rate and term refinance, cash-out refinance, VA IRRRL, and FHA streamline options.",
      "provider": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Colorado Springs, CO"
        },
        {
          "@type": "Place",
          "name": "El Paso County, CO"
        },
        {
          "@type": "Place", 
          "name": "Colorado"
        }
      ],
      "serviceType": "Mortgage Refinancing",
      "category": "Financial Services",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Refinance Options",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Rate and Term Refinance",
            "description": "Lower your interest rate or change your loan term"
          },
          {
            "@type": "Offer",
            "name": "Cash-Out Refinance",
            "description": "Access your home equity for major expenses"
          },
          {
            "@type": "Offer",
            "name": "VA IRRRL",
            "description": "Streamlined refinancing for veterans with existing VA loans"
          },
          {
            "@type": "Offer",
            "name": "FHA Streamline", 
            "description": "Simplified refinancing for existing FHA loan holders"
          }
        ]
      },
      "audience": {
        "@type": "Audience",
        "name": "Current Homeowners",
        "description": "Homeowners looking to lower payments, access equity, or improve loan terms"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When should I consider refinancing my mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consider refinancing when interest rates have dropped, you want to change your loan term, need to access home equity, or want to switch from an adjustable to fixed-rate mortgage."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between rate-and-term and cash-out refinance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rate-and-term refinance changes your interest rate or loan term without increasing the loan amount. Cash-out refinance lets you borrow more than you owe and receive the difference in cash."
          }
        },
        {
          "@type": "Question", 
          "name": "How long does the refinancing process take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Refinancing typically takes 30-45 days from application to closing. Streamline refinances (VA IRRRL or FHA) may be completed faster due to simplified requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What are closing costs for refinancing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Refinance closing costs typically range from 2-5% of the loan amount and include appraisal fees, title insurance, origination fees, and other lender charges."
          }
        },
        {
          "@type": "Question",
          "name": "Can I refinance with poor credit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While good credit helps secure better rates, refinancing options exist for various credit situations. VA IRRRL and FHA streamline refinances have more flexible credit requirements."
          }
        }
      ]
    }
  ]
};

const breadcrumbItems = [
  { name: 'Loan Programs', href: '/loans' },
  { name: 'Refinance', href: '/loans/refinance', current: true }
];

export default function RefinancePage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(refinanceSchema),
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-[#00659C]">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/loan2.jpg"
              alt="Mortgage Refinance Colorado Springs"
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
              Mortgage Refinance
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Lower Your Rate or Access Your Equity in Colorado Springs
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
                Refinancing your mortgage can help you achieve various financial goals, from lowering your monthly 
                payments to accessing your home's equity for major expenses. At Bluebird Mortgage, we offer a range 
                of refinancing options to meet your specific needs in Colorado Springs and throughout Colorado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Reasons to Refinance</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Lower your interest rate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Reduce monthly payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Switch from adjustable to fixed rate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Shorten your loan term</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Access home equity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Consolidate debt</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Refinance Options</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Rate and term refinance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Cash-out refinance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">VA IRRRL (Interest Rate Reduction)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">FHA streamline refinance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Conventional refinance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">•</span>
                    <span className="text-gray-800">Jumbo loan refinance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Types of Refinancing</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Rate and Term Refinance</h3>
                  <p className="text-gray-800">
                    A rate and term refinance allows you to change your interest rate, loan term, or both. This 
                    type of refinance is ideal if you want to lower your monthly payments or pay off your loan faster.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Cash-Out Refinance</h3>
                  <p className="text-gray-800">
                    With a cash-out refinance, you can borrow more than you currently owe on your home and receive 
                    the difference in cash. This option is great for home improvements, debt consolidation, or other 
                    major expenses.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">VA IRRRL</h3>
                  <p className="text-gray-800">
                    The VA Interest Rate Reduction Refinance Loan (IRRRL) is a streamlined option for veterans with 
                    existing VA loans. It offers a faster, simpler way to lower your rate with minimal paperwork.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">FHA Streamline</h3>
                  <p className="text-gray-800">
                    FHA Streamline refinancing is a simplified process for homeowners with existing FHA loans. It 
                    requires less documentation and may not require a new appraisal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">The Refinance Process</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">1. Initial Consultation</h3>
                  <p className="text-gray-800">
                    We'll discuss your goals and review your current mortgage to determine if refinancing makes 
                    sense for your situation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">2. Application and Documentation</h3>
                  <p className="text-gray-800">
                    Submit your application and provide necessary documentation such as income verification, tax 
                    returns, and bank statements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">3. Property Appraisal</h3>
                  <p className="text-gray-800">
                    In most cases, we'll need a new appraisal to determine your home's current value (may be 
                    waived for certain streamline refinances).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">4. Underwriting</h3>
                  <p className="text-gray-800">
                    Our underwriting team will review your application and documentation to ensure everything 
                    meets the requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">5. Closing</h3>
                  <p className="text-gray-800">
                    Once approved, you'll review and sign the final documents to complete your refinance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#00659C] text-white rounded-xl p-8 my-12 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Ready to Explore Your Refinance Options?</h3>
              <p className="mb-6 text-white/90">
                Contact us today to discuss your refinancing goals and learn about your options. Our experienced 
                team will help you find the best refinancing solution for your needs.
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