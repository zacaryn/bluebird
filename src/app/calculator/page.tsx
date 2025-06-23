import type { Metadata } from 'next'
import Script from 'next/script'
import MortgageCalculator from '@/components/MortgageCalculator'
import Breadcrumbs from '@/components/Breadcrumbs'
import CollapsibleFAQ from '@/components/CollapsibleFAQ'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Mortgage Calculator Colorado Springs | Estimate Payments | Bluebird Mortgage',
  description: 'Free mortgage calculator for Colorado Springs homebuyers. Calculate monthly payments for FHA, VA, and conventional loans. Get instant estimates with Bluebird Mortgage.',
  keywords: 'mortgage calculator Colorado Springs, monthly payment calculator, loan calculator, home payment estimator, mortgage payment Colorado',
  openGraph: {
    title: 'Mortgage Calculator Colorado Springs | Bluebird Mortgage',
    description: 'Free mortgage calculator to estimate your monthly payments for homes in Colorado Springs. Calculate FHA, VA, and conventional loan payments instantly.',
    type: 'website',
    url: 'https://bluebirdmortgage.com/calculator',
    images: [
      {
        url: '/images/calculate.jpg',
        width: 1200,
        height: 630,
        alt: 'Mortgage Calculator - Bluebird Mortgage Colorado Springs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mortgage Calculator Colorado Springs',
    description: 'Free mortgage calculator to estimate monthly payments for Colorado Springs homes.',
    images: ['/images/calculate.jpg'],
  },
  alternates: {
    canonical: 'https://bluebirdmortgage.com/calculator',
  },
}

const calculatorFAQs = [
  {
    question: "How accurate is the mortgage calculator?",
    answer: "Our mortgage calculator provides good estimates for monthly payments, but actual payments may vary based on specific loan terms, insurance costs, and property taxes. Contact David Jeffrey for precise quotes tailored to your situation."
  },
  {
    question: "What factors affect my monthly mortgage payment?",
    answer: "Monthly mortgage payments include principal, interest, property taxes, homeowners insurance, and PMI (if applicable). The loan amount, interest rate, loan term, and down payment amount all impact your monthly payment."
  },
  {
    question: "Should I use a 15-year or 30-year mortgage?",
    answer: "15-year mortgages have higher monthly payments but lower total interest costs. 30-year mortgages have lower monthly payments but higher total interest. Use our calculator to compare both options and contact us for personalized advice."
  },
  {
    question: "How much should I put down on a house in Colorado Springs?",
    answer: "Down payment requirements vary by loan type: VA loans can be 0% down, FHA loans require 3.5%, and conventional loans can be as low as 3%. Higher down payments reduce monthly payments and may eliminate PMI."
  }
]

const calculatorSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluebirdmortgage.com/calculator#webpage",
      "url": "https://bluebirdmortgage.com/calculator",
      "name": "Mortgage Calculator Colorado Springs",
      "isPartOf": {
        "@id": "https://bluebirdmortgage.com/#website"
      },
      "about": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-20",
      "description": "Free mortgage calculator to estimate monthly payments for homes in Colorado Springs.",
      "breadcrumb": {
        "@id": "https://bluebirdmortgage.com/calculator#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bluebirdmortgage.com/calculator#breadcrumb",
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
          "name": "Mortgage Calculator",
          "item": "https://bluebirdmortgage.com/calculator"
        }
      ]
    },
    {
      "@type": "WebApplication",
      "name": "Mortgage Payment Calculator",
      "description": "Calculate monthly mortgage payments for homes in Colorado Springs including principal, interest, taxes, and insurance estimates.",
      "url": "https://bluebirdmortgage.com/calculator",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Monthly payment calculation",
        "Principal and interest breakdown",
        "Property tax estimation",
        "Insurance cost estimation",
        "Different loan term options",
        "Down payment scenarios"
      ],
      "provider": {
        "@id": "https://bluebirdmortgage.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How accurate is the mortgage calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our mortgage calculator provides good estimates for monthly payments, but actual payments may vary based on specific loan terms, insurance costs, and property taxes. Contact David Jeffrey for precise quotes tailored to your situation."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect my monthly mortgage payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Monthly mortgage payments include principal, interest, property taxes, homeowners insurance, and PMI (if applicable). The loan amount, interest rate, loan term, and down payment amount all impact your monthly payment."
          }
        },
        {
          "@type": "Question",
          "name": "Should I use a 15-year or 30-year mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "15-year mortgages have higher monthly payments but lower total interest costs. 30-year mortgages have lower monthly payments but higher total interest. Use our calculator to compare both options and contact us for personalized advice."
          }
        },
        {
          "@type": "Question",
          "name": "How much should I put down on a house in Colorado Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Down payment requirements vary by loan type: VA loans can be 0% down, FHA loans require 3.5%, and conventional loans can be as low as 3%. Higher down payments reduce monthly payments and may eliminate PMI."
          }
        },
        {
          "@type": "Question",
          "name": "What are property taxes like in Colorado Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Property tax rates in Colorado Springs vary by location but are generally lower than the national average. Our calculator includes estimates, but David Jeffrey can provide specific tax information for neighborhoods you're considering."
          }
        }
      ]
    }
  ]
};

const breadcrumbItems = [
  { name: 'Mortgage Calculator', href: '/calculator', current: true }
];

export default function CalculatorPage() {
  return (
    <>
      <Script
        id="calculator-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(calculatorSchema),
        }}
      />
      
      <div className="min-h-screen bg-white flex flex-col">
        {/* Hero Section */}
        <div className="relative bg-[#00659C]">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/calculate.jpg"
              alt="Mortgage Calculator Colorado Springs"
              width={1920}
              height={300}
              className="h-full w-full object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-[#00659C]/70" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Mortgage Calculator
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Estimate Your Monthly Mortgage Payment in Colorado Springs
            </p>
          </div>
        </div>



        {/* Calculator section */}
        <div className="flex-1 flex flex-col">
          <div className="mx-auto max-w-4xl w-full py-8 px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator */}
              <div>
                <MortgageCalculator />
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>
                    This calculator provides estimates only. Contact David Jeffrey for personalized quotes.
                  </p>
                </div>
              </div>

              {/* Ready for Real Quote */}
              <div className="space-y-6">
                <div className="bg-[#00659C] text-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Ready for a Real Quote?
                  </h3>
                  <p className="text-white/90 mb-4 text-sm">
                    Get personalized rates and payments for your specific situation with David Jeffrey.
                  </p>
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="block w-full bg-white text-[#00659C] px-4 py-2 rounded text-center font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Get Personalized Quote
                    </Link>
                    <a
                      href="tel:719-428-1038"
                      className="block w-full bg-transparent border-2 border-white text-white px-4 py-2 rounded text-center font-semibold hover:bg-white hover:text-[#00659C] transition-colors"
                    >
                      Call 719-428-1038
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <CollapsibleFAQ
          title="Calculator FAQ"
          subtitle="Common questions about mortgage calculations and payments"
          faqs={calculatorFAQs}
          defaultExpanded={false}
        />
      </div>
    </>
  )
} 