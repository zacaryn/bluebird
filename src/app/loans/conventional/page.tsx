import type { Metadata } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';
import Script from 'next/script';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Conventional Loans Colorado Springs | Competitive Rates | David Jeffrey NMLS# 2269251',
  description: 'Conventional home loans in Colorado Springs with competitive rates and flexible terms. Down payment as low as 3% with David Jeffrey NMLS# 2269251. No upfront mortgage insurance with 20% down.',
  keywords: 'conventional loans Colorado Springs, conventional mortgage, home loans, competitive rates, low down payment, David Jeffrey, NMLS 2269251, private mortgage insurance',
  openGraph: {
    title: 'Conventional Loans Colorado Springs | Competitive Rates | Bluebird Mortgage',
    description: 'Get a conventional loan with competitive rates and flexible terms. Down payment as low as 3% for qualified buyers in Colorado Springs.',
    type: 'article',
    url: 'https://bluebirdmortgage.com/loans/conventional',
    images: [
      {
        url: '/images/coloradosprings.jpg',
        width: 1200,
        height: 630,
        alt: 'Conventional Loans Colorado Springs - Bluebird Mortgage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conventional Loans Colorado Springs | Competitive Rates',
    description: 'Get a conventional loan with competitive rates and flexible terms. Down payment as low as 3% for qualified buyers.',
    images: ['/images/coloradosprings.jpg'],
  },
  alternates: {
    canonical: 'https://bluebirdmortgage.com/loans/conventional',
  },
};

const conventionalLoansSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluebirdmortgage.com/loans/conventional#webpage",
      "url": "https://bluebirdmortgage.com/loans/conventional",
      "name": "Conventional Loans Colorado Springs | Competitive Rates",
      "isPartOf": {
        "@id": "https://bluebirdmortgage.com/#website"
      },
      "about": {
        "@id": "https://bluebirdmortgage.com/loans/conventional#service"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-20",
      "description": "Conventional home loans in Colorado Springs with competitive rates and flexible terms for qualified borrowers.",
      "breadcrumb": {
        "@id": "https://bluebirdmortgage.com/loans/conventional#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bluebirdmortgage.com/loans/conventional#breadcrumb",
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
          "name": "Conventional Loans",
          "item": "https://bluebirdmortgage.com/loans/conventional"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://bluebirdmortgage.com/loans/conventional#service",
      "name": "Conventional Home Loans",
      "description": "Conventional mortgage loans with competitive rates and flexible terms, offering down payments as low as 3% for qualified borrowers.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Bluebird Mortgage",
        "url": "https://bluebirdmortgage.com",
        "telephone": "+1-719-428-1038",
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
      "serviceType": "Conventional Mortgage Loans",
      "category": "Financial Services",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Conventional Loan Benefits",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Low Down Payment",
            "description": "Down payment options as low as 3%"
          },
          {
            "@type": "Offer",
            "name": "Competitive Interest Rates",
            "description": "Competitive rates for qualified borrowers"
          },
          {
            "@type": "Offer",
            "name": "No Upfront MI with 20% Down",
            "description": "No upfront mortgage insurance required with 20% down payment"
          },
          {
            "@type": "Offer",
            "name": "Flexible Terms", 
            "description": "Multiple loan term options available"
          }
        ]
      },
      "audience": {
        "@type": "Audience",
        "name": "Qualified Homebuyers",
        "description": "Homebuyers with good credit and stable income"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the minimum down payment for a conventional loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Conventional loans offer down payment options as low as 3% for qualified borrowers. However, putting down 20% or more eliminates the need for private mortgage insurance (PMI)."
          }
        },
        {
          "@type": "Question",
          "name": "What credit score do I need for a conventional loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most conventional loans require a minimum credit score of 620, though some programs may accept scores as low as 580. Higher credit scores typically qualify for better interest rates."
          }
        },
        {
          "@type": "Question", 
          "name": "Do I need private mortgage insurance with a conventional loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Private mortgage insurance (PMI) is required if your down payment is less than 20%. However, unlike FHA loans, PMI can be removed once you reach 20% equity in your home."
          }
        },
        {
          "@type": "Question",
          "name": "What are the loan limits for conventional loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For 2024, the conforming loan limit in most areas of Colorado is $766,550 for a single-family home. Loans above this amount are considered jumbo loans and may have different requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use a conventional loan for investment property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, conventional loans can be used for investment properties, though they typically require a higher down payment (usually 20-25%) and may have slightly higher interest rates than owner-occupied properties."
          }
        }
      ]
    }
  ]
};

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

const breadcrumbItems = [
  { name: 'Loan Programs', href: '/loans' },
  { name: 'Conventional Loans', href: '/loans/conventional', current: true }
];

export default function ConventionalLoanPage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <>
      <Script
        id="conventional-loans-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(conventionalLoansSchema),
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-[#00659C]">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/coloradosprings.jpg"
              alt="Conventional Loans Colorado Springs"
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
                A conventional loan is a mortgage that isn't backed by a government agency. These loans offer 
                competitive rates and flexible terms, making them a popular choice for homebuyers with good credit 
                and stable income in Colorado Springs. With down payment options as low as 3% and no upfront mortgage insurance required 
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
                  David Jeffrey will help you understand your options and choose the best conventional loan program for 
                  your specific situation. He'll guide you through the entire process, from application to closing.
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
                Contact us today to learn more about our conventional loan options. David Jeffrey will help 
                you find the right loan program for your needs and guide you through the application process.
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