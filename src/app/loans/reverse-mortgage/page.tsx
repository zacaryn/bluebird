import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Reverse Mortgage Colorado Springs | HECM Loans | David Jeffrey NMLS# 2269251',
  description: 'Expert reverse mortgage services in Colorado Springs with FHA-insured HECM loans for homeowners 62 and older. Professional guidance from David Jeffrey NMLS# 2269251.',
  keywords: 'reverse mortgage Colorado Springs, HECM loans, FHA reverse mortgage, seniors mortgage, 62 and older, David Jeffrey, NMLS 2269251',
  openGraph: {
    title: 'Reverse Mortgage Colorado Springs | HECM Loans',
    description: 'FHA-insured reverse mortgages for homeowners 62 and older. Convert home equity to cash with no monthly payments.',
    type: 'article',
    url: 'https://bluebirdmortgage.com/loans/reverse-mortgage',
    images: [
      {
        url: '/images/coloradosprings1.jpg',
        width: 1200,
        height: 630,
        alt: 'Reverse Mortgage Colorado Springs - Bluebird Mortgage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reverse Mortgage Colorado Springs',
    description: 'FHA-insured reverse mortgages for homeowners 62 and older.',
    images: ['/images/coloradosprings1.jpg'],
  },
  alternates: {
    canonical: 'https://bluebirdmortgage.com/loans/reverse-mortgage',
  },
};

const reverseMortgageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluebirdmortgage.com/loans/reverse-mortgage#webpage",
      "url": "https://bluebirdmortgage.com/loans/reverse-mortgage",
      "name": "Reverse Mortgage Colorado Springs | HECM Loans",
      "isPartOf": {
        "@id": "https://bluebirdmortgage.com/#website"
      },
      "about": {
        "@id": "https://bluebirdmortgage.com/loans/reverse-mortgage#service"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-20",
      "description": "Expert reverse mortgage services in Colorado Springs with FHA-insured HECM loans for homeowners 62 and older.",
      "breadcrumb": {
        "@id": "https://bluebirdmortgage.com/loans/reverse-mortgage#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bluebirdmortgage.com/loans/reverse-mortgage#breadcrumb",
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
          "name": "Reverse Mortgage",
          "item": "https://bluebirdmortgage.com/loans/reverse-mortgage"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://bluebirdmortgage.com/loans/reverse-mortgage#service",
      "name": "Reverse Mortgage (HECM)",
      "description": "Home Equity Conversion Mortgages (HECM) for homeowners 62+ to access home equity without monthly payments or selling their home.",
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
      "serviceType": "Reverse Mortgage Loans",
      "category": "Financial Services",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Reverse Mortgage Benefits",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "No Monthly Payments",
            "description": "No monthly mortgage payments required while living in the home"
          },
          {
            "@type": "Offer",
            "name": "Access Home Equity",
            "description": "Convert home equity to cash without selling"
          },
          {
            "@type": "Offer",
            "name": "FHA Insurance Protection",
            "description": "FHA-insured HECM loans with borrower protections"
          },
          {
            "@type": "Offer",
            "name": "Flexible Payment Options", 
            "description": "Lump sum, monthly payments, or line of credit options"
          }
        ]
      },
      "audience": {
        "@type": "Audience",
        "name": "Senior Homeowners",
        "description": "Homeowners aged 62 and older with significant home equity"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a reverse mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A reverse mortgage is a loan for homeowners 62+ that converts home equity into cash without requiring monthly payments or selling the home. The loan is repaid when the homeowner moves or passes away."
          }
        },
        {
          "@type": "Question",
          "name": "Do I have to make monthly payments on a reverse mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, reverse mortgages do not require monthly payments. However, you must continue to pay property taxes, homeowners insurance, and maintain the property."
          }
        },
        {
          "@type": "Question", 
          "name": "Can I lose my home with a reverse mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As long as you meet the loan requirements (living in the home, paying taxes and insurance, maintaining the property), you cannot be forced to leave your home due to the reverse mortgage."
          }
        },
        {
          "@type": "Question",
          "name": "How much money can I get from a reverse mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The amount depends on your age, home value, current interest rates, and loan fees. Generally, older borrowers and more valuable homes qualify for larger loan amounts."
          }
        },
        {
          "@type": "Question",
          "name": "Is HUD counseling required for reverse mortgages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, HUD-approved counseling is required for all reverse mortgage applicants to ensure you understand the loan terms, alternatives, and financial implications."
          }
        }
      ]
    }
  ]
};

const benefits = [
  'Access your home equity without selling',
  'No monthly mortgage payments required',
  'Maintain ownership of your home',
  'FHA insurance protection',
  'Use the funds as you choose',
  'Non-recourse loan protection',
];

const requirements = [
  'Age 62 or older',
  'Own your home outright or have significant equity',
  'Home must be your primary residence',
  'Maintain property taxes and insurance',
  'Home must meet FHA standards',
  'Complete HUD-approved counseling',
];

const breadcrumbItems = [
  { name: 'Loan Programs', href: '/loans' },
  { name: 'Reverse Mortgage', href: '/loans/reverse-mortgage', current: true }
];

export default function ReverseMortgagePage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <>
      <script
        id="reverse-mortgage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reverseMortgageSchema),
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-[#00659C]">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/familyhome.jpg"
              alt="Reverse Mortgage Colorado Springs"
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
              Reverse Mortgage
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Access Your Home Equity in Retirement - Colorado Springs
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
                A reverse mortgage is a unique financial tool designed for homeowners aged 62 and older in Colorado Springs and throughout Colorado. 
                It allows you to convert part of your home equity into cash without having to sell your 
                home or make monthly mortgage payments. This can provide financial flexibility during 
                retirement while allowing you to stay in your home.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Key Benefits</h2>
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
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Requirements</h2>
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">How It Works</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-[#00659C] mr-4 font-bold">1.</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Initial Consultation</h3>
                    <p className="text-gray-800">
                      Meet with our reverse mortgage specialists to discuss your needs and explore your options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-[#00659C] mr-4 font-bold">2.</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">HUD Counseling</h3>
                    <p className="text-gray-800">
                      Complete the required HUD-approved counseling session to ensure you understand all aspects 
                      of a reverse mortgage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-[#00659C] mr-4 font-bold">3.</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Application & Approval</h3>
                    <p className="text-gray-800">
                      Submit your application and required documentation. We'll guide you through the approval 
                      process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-[#00659C] mr-4 font-bold">4.</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Funding</h3>
                    <p className="text-gray-800">
                      Choose how you want to receive your funds - lump sum, monthly payments, line of credit, 
                      or a combination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#00659C] text-white rounded-xl p-8 my-12 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Learn More About Reverse Mortgages</h3>
              <p className="mb-6 text-white/90">
                Contact us today to schedule a consultation with one of our reverse mortgage specialists. 
                We'll help you understand if a reverse mortgage is right for your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-[#00659C] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center font-semibold"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#00659C] transition-colors text-center font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
} 