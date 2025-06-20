import type { Metadata } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';
import Script from 'next/script';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'FHA Loans Colorado Springs | 3.5% Down Payment | David Jeffrey NMLS# 2269251',
  description: 'FHA loans in Colorado Springs with as little as 3.5% down payment. Flexible credit requirements and competitive rates with David Jeffrey NMLS# 2269251. Perfect for first-time homebuyers.',
  keywords: 'FHA loans Colorado Springs, FHA mortgage, low down payment loans, first time homebuyer loans, 3.5% down payment, David Jeffrey, NMLS 2269251, flexible credit requirements',
  openGraph: {
    title: 'FHA Loans Colorado Springs | Low Down Payment | Bluebird Mortgage',
    description: 'Get an FHA loan with just 3.5% down payment in Colorado Springs. Flexible credit requirements and competitive rates for first-time homebuyers.',
    type: 'article',
    url: 'https://bluebirdmortgage.com/loans/fha-loans',
    images: [
      {
        url: '/images/coloradosprings2.jpg',
        width: 1200,
        height: 630,
        alt: 'FHA Loans Colorado Springs - Bluebird Mortgage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FHA Loans Colorado Springs | Low Down Payment',
    description: 'Get an FHA loan with just 3.5% down payment. Flexible credit requirements and competitive rates for first-time homebuyers.',
    images: ['/images/coloradosprings2.jpg'],
  },
  alternates: {
    canonical: 'https://bluebirdmortgage.com/loans/fha-loans',
  },
};

const fhaLoansSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluebirdmortgage.com/loans/fha-loans#webpage",
      "url": "https://bluebirdmortgage.com/loans/fha-loans",
      "name": "FHA Loans Colorado Springs | 3.5% Down Payment",
      "isPartOf": {
        "@id": "https://bluebirdmortgage.com/#website"
      },
      "about": {
        "@id": "https://bluebirdmortgage.com/loans/fha-loans#service"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-20",
      "description": "FHA loans in Colorado Springs with as little as 3.5% down payment and flexible credit requirements for first-time homebuyers.",
      "breadcrumb": {
        "@id": "https://bluebirdmortgage.com/loans/fha-loans#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bluebirdmortgage.com/loans/fha-loans#breadcrumb",
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
          "name": "FHA Loans",
          "item": "https://bluebirdmortgage.com/loans/fha-loans"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://bluebirdmortgage.com/loans/fha-loans#service",
      "name": "FHA Home Loans",
      "description": "Federal Housing Administration insured loans with low down payment requirements and flexible credit guidelines, perfect for first-time homebuyers.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Bluebird Mortgage",
        "url": "https://bluebirdmortgage.com",
        "telephone": "+1-678-858-0745",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Colorado Springs",
          "addressRegion": "Colorado",
          "addressCountry": "US"
        }
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
      "serviceType": "FHA Mortgage Loans",
      "category": "Financial Services",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "FHA Loan Benefits",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Low Down Payment",
            "description": "As little as 3.5% down payment required"
          },
          {
            "@type": "Offer",
            "name": "Flexible Credit Requirements",
            "description": "Minimum credit score of 580 for 3.5% down payment"
          },
          {
            "@type": "Offer",
            "name": "Competitive Interest Rates",
            "description": "Competitive rates for qualified borrowers"
          },
          {
            "@type": "Offer",
            "name": "First-Time Homebuyer Friendly", 
            "description": "Perfect for first-time homebuyers with flexible guidelines"
          }
        ]
      },
      "audience": {
        "@type": "Audience",
        "name": "First-Time Homebuyers",
        "description": "First-time homebuyers and borrowers with flexible credit requirements"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the minimum down payment for an FHA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FHA loans require as little as 3.5% down payment for borrowers with a credit score of 580 or higher. Borrowers with credit scores between 500-579 may still qualify with a 10% down payment."
          }
        },
        {
          "@type": "Question",
          "name": "What credit score do I need for an FHA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The minimum credit score for an FHA loan with 3.5% down is 580. Borrowers with scores between 500-579 may qualify with a 10% down payment. However, individual lenders may have higher requirements."
          }
        },
        {
          "@type": "Question", 
          "name": "Do FHA loans require mortgage insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FHA loans require both an upfront mortgage insurance premium (UFMIP) and annual mortgage insurance premium (MIP). The UFMIP is typically 1.75% of the loan amount, and the annual MIP varies based on loan amount and down payment."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use gift funds for my FHA loan down payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FHA loans allow the entire down payment and closing costs to come from gift funds from family members, employers, or approved organizations. The gift must be properly documented with a gift letter."
          }
        },
        {
          "@type": "Question",
          "name": "What types of properties are eligible for FHA loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FHA loans can be used for primary residences including single-family homes, condominiums, townhomes, and multi-family properties (up to 4 units). The property must meet FHA standards and be your primary residence."
          }
        }
      ]
    }
  ]
};

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

const breadcrumbItems = [
  { name: 'Loan Programs', href: '/loans' },
  { name: 'FHA Loans', href: '/loans/fha-loans', current: true }
];

export default function FHALoansPage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <>
      <Script
        id="fha-loans-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fhaLoansSchema),
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-[#00659C]">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/coloradosprings2.jpg"
              alt="FHA Home Loans Colorado Springs"
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
              Making Homeownership More Accessible with 3.5% Down Payment
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
                Federal Housing Administration (FHA) insured loans require a small down payment and offer flexible 
                credit requirements, making homeownership more accessible for first-time buyers and those with 
                various credit situations. With the ability to finance up to 96.5% of your home's value and 
                competitive interest rates, FHA loans are an excellent option for many homebuyers in Colorado Springs.
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
                for many who might not qualify for conventional financing. David Jeffrey understands the FHA loan 
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
                Contact us today to learn more about FHA loans and start your application process. David Jeffrey 
                will guide you through every step with personalized service.
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