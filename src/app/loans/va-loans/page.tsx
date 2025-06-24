import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

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

const breadcrumbItems = [
  { name: 'Loan Programs', href: '/loans' },
  { name: 'VA Loans', href: '/loans/va-loans', current: true }
];

export const metadata: Metadata = {
  title: 'VA Home Loans Colorado Springs | Zero Down Payment | David Jeffrey NMLS# 2269251',
  description: 'Expert VA home loan services in Colorado Springs. No down payment required, competitive rates, and flexible requirements for veterans & active duty military. Call David Jeffrey at 719-428-1038.',
  keywords: 'VA loans Colorado Springs, VA home loans, veteran loans, military loans, zero down payment, VA mortgage, home loans, David Jeffrey, NMLS 2269251',
  openGraph: {
    title: 'VA Home Loans Colorado Springs | Bluebird Mortgage',
    description: 'Get your VA home loan with zero down payment and competitive rates. Serving veterans and active duty military in Colorado Springs.',
    type: 'article',
    url: 'https://bluebirdmortgage.com/loans/va-loans',
    images: [
      {
        url: '/images/valoan.jpg',
        width: 1200,
        height: 630,
        alt: 'VA Home Loans Colorado Springs - Bluebird Mortgage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VA Home Loans Colorado Springs | Bluebird Mortgage',
    description: 'Get your VA home loan with zero down payment and competitive rates. Serving veterans and active duty military.',
    images: ['/images/valoan.jpg'],
  },
  alternates: {
    canonical: 'https://bluebirdmortgage.com/loans/va-loans',
  },
};

const vaLoansSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluebirdmortgage.com/loans/va-loans#webpage",
      "url": "https://bluebirdmortgage.com/loans/va-loans",
      "name": "VA Home Loans Colorado Springs | Zero Down Payment",
      "isPartOf": {
        "@id": "https://bluebirdmortgage.com/#website"
      },
      "about": {
        "@id": "https://bluebirdmortgage.com/loans/va-loans#service"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-20",
      "description": "Expert VA home loan services in Colorado Springs with zero down payment and competitive rates for veterans and active duty military.",
      "breadcrumb": {
        "@id": "https://bluebirdmortgage.com/loans/va-loans#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bluebirdmortgage.com/loans/va-loans#breadcrumb",
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
          "name": "VA Loans",
          "item": "https://bluebirdmortgage.com/loans/va-loans"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://bluebirdmortgage.com/loans/va-loans#service",
      "name": "VA Home Loans",
      "description": "Veterans Affairs home loans with zero down payment, competitive rates, and flexible requirements for veterans and active duty military personnel.",
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
      "serviceType": "VA Mortgage Loans",
      "category": "Financial Services",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "VA Loan Benefits",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Zero Down Payment",
            "description": "No down payment required for qualified veterans"
          },
          {
            "@type": "Offer",
            "name": "No Private Mortgage Insurance",
            "description": "No PMI required regardless of down payment amount"
          },
          {
            "@type": "Offer",
            "name": "Competitive Interest Rates",
            "description": "Often lower than conventional loan rates"
          },
          {
            "@type": "Offer",
            "name": "Flexible Credit Requirements", 
            "description": "More lenient credit score requirements"
          }
        ]
      },
      "audience": {
        "@type": "Audience",
        "name": "Veterans and Active Military",
        "description": "Veterans, active duty military personnel, National Guard members, and eligible surviving spouses"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is eligible for a VA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Veterans, active duty service members, National Guard members, Reservists, and eligible surviving spouses can qualify for VA loans. You must have served for a minimum period and received an honorable discharge."
          }
        },
        {
          "@type": "Question",
          "name": "How much can I borrow with a VA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "VA loans don't have a maximum loan amount, but there are limits on how much the VA will guarantee. In most areas of Colorado, the conforming loan limit for 2024 is $766,550 for a single-family home."
          }
        },
        {
          "@type": "Question", 
          "name": "Can I use a VA loan more than once?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, VA loan benefits can be used multiple times. You can reuse your entitlement after paying off your previous VA loan or have remaining entitlement if you didn't use the full amount initially."
          }
        },
        {
          "@type": "Question",
          "name": "What is the VA funding fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The VA funding fee is a one-time cost that helps keep the program running. For first-time users with no down payment, it's typically 2.15% of the loan amount. Veterans with service-connected disabilities are exempt from this fee."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to get approved for a VA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "VA loan approval typically takes 30-45 days from application to closing. Pre-approval can be obtained much faster, often within 24-48 hours with proper documentation."
          }
        }
      ]
    }
  ]
};

export default function VALoansPage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(vaLoansSchema),
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-[#00659C]">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/valoan.jpg"
              alt="VA Home Loans Colorado Springs"
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
              Serving Those Who Served - Zero Down Payment
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
                VA loans are a valuable benefit for veterans, active duty military members, and eligible 
                surviving spouses in Colorado Springs. These government-backed loans offer significant advantages over 
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
    </>
  );
} 