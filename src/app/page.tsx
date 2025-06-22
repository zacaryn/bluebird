import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import type { Metadata } from "next";
import Script from "next/script";
import ContactForm from "@/components/ContactForm";
import MortgageCalculator from "@/components/MortgageCalculator";

const loanTypes = [
  {
    name: 'VA Home Loans',
    description: 'Specialized mortgage options for veterans, active duty military, and eligible spouses with zero down payment required.',
    href: '/loans/va-loans',
  },
  {
    name: 'FHA Home Loans',
    description: 'Government-backed mortgages with lower down payment requirements and flexible credit guidelines.',
    href: '/loans/fha-loans',
  },
  {
    name: 'Conventional Loans',
    description: 'Traditional mortgage loans with competitive rates and various down payment options.',
    href: '/loans/conventional',
  },
  {
    name: 'Reverse Mortgages',
    description: 'Convert home equity into cash flow for homeowners 62 and older while maintaining ownership.',
    href: '/loans/reverse-mortgage',
  },
]

export const metadata: Metadata = {
  title: "Bluebird Mortgage | Colorado Springs Mortgage Lender | David Jeffrey NMLS# 2269251",
  description: "Expert mortgage services in Colorado Springs with David Jeffrey (NMLS# 2269251). Specializing in VA loans, FHA loans, conventional mortgages, and refinancing. Fast approvals, competitive rates, personalized service.",
  openGraph: {
    title: "Bluebird Mortgage | Colorado Springs Mortgage Lender | David Jeffrey",
    description: "Expert mortgage services in Colorado Springs with David Jeffrey (NMLS# 2269251). Specializing in VA loans, FHA loans, conventional mortgages, and refinancing.",
    images: [
      {
        url: "/images/bluebird-mortgage-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebird Mortgage - Expert Mortgage Lender in Colorado Springs",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bluebird Mortgage | Colorado Springs Mortgage Lender | David Jeffrey',
    description: 'Expert mortgage services in Colorado Springs with David Jeffrey (NMLS# 2269251). Specializing in VA loans, FHA loans, conventional mortgages, and refinancing.',
    images: ['/images/bluebird-mortgage-og-image.jpg'],
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluebirdmortgage.com/#webpage",
      "url": "https://bluebirdmortgage.com/",
      "name": "Bluebird Mortgage | Colorado Springs Mortgage Lender",
      "isPartOf": {
        "@id": "https://bluebirdmortgage.com/#website"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-20",
      "description": "Expert mortgage services in Colorado Springs with David Jeffrey. Specializing in VA loans, FHA loans, conventional mortgages, and refinancing.",
      "primaryImageOfPage": {
        "@id": "https://bluebirdmortgage.com/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://bluebirdmortgage.com/#breadcrumb"
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://bluebirdmortgage.com/#primaryimage",
      "inLanguage": "en-US",
      "url": "https://bluebirdmortgage.com/images/bluebird-mortgage-og-image.jpg",
      "contentUrl": "https://bluebirdmortgage.com/images/bluebird-mortgage-og-image.jpg",
      "width": 1200,
      "height": 630,
      "caption": "Bluebird Mortgage - Expert Mortgage Lender in Colorado Springs"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bluebirdmortgage.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of mortgage loans does Bluebird Mortgage offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bluebird Mortgage offers VA loans, FHA loans, conventional loans, reverse mortgages, new construction loans, refinancing, and down payment assistance programs in Colorado Springs."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the mortgage approval process take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The mortgage approval process typically takes 30-45 days from application to closing. Pre-approval can often be completed within 24-48 hours with proper documentation."
          }
        },
        {
          "@type": "Question",
          "name": "What credit score do I need for a mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Credit score requirements vary by loan type. FHA loans may accept scores as low as 580, VA loans are more flexible, and conventional loans typically require 620 or higher. Contact David Jeffrey for a personalized assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer first-time homebuyer programs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Bluebird Mortgage offers several first-time homebuyer programs including FHA loans, VA loans for eligible veterans, and down payment assistance programs available in Colorado."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get started with my mortgage application?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can get started by calling David Jeffrey at 719-428-1038, filling out our online contact form, or using our mortgage calculator to estimate your payments. We offer free consultations to discuss your options."
          }
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
      />
      
      <div className="bg-white">
        {/* Hero section */}
        <div className="relative isolate">
          {/* Background image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/loan1.jpg"
              alt="Modern home interior"
              fill
              className="object-cover brightness-75"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-[#00659C]/30" />
          </div>

          {/* Phone number - integrated with hero */}
          <div className="absolute top-8 right-8 z-10">
            <div className="text-right">
              <div className="text-white/90 text-sm font-medium mb-1">
                Call David Jeffrey
              </div>
              <a href="tel:719-428-1038" className="inline-flex items-center space-x-2 text-white font-semibold hover:text-gray-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>719-428-1038</span>
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Your Path to Home Ownership Starts Here
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Bluebird Mortgage specializes in making the mortgage process simple and straightforward. 
                  Let us help you navigate the path to homeownership with our expert guidance and diverse loan options.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-4">
                  <Link
                    href="/get-started"
                    className="rounded-md bg-white px-5 py-3 text-base font-semibold text-[#00659C] shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="https://www.blink.mortgage/app/signup/p/bluebirdmortgage/davidjeffrey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-[#00659C] px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#005483] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00659C] transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Types section */}
        <div className="relative bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-20">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[#00659C]">Loan Programs</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Find the Right Mortgage Solution
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We offer a variety of loan programs to meet your unique needs. Explore our options below to find the perfect fit for your situation.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
                {loanTypes.map((loanType) => (
                  <Link
                    key={loanType.name}
                    href={loanType.href}
                    className="group relative bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900 group-hover:text-[#00659C] transition-colors">
                      {loanType.name}
                    </dt>
                    <dd className="mt-4 text-base leading-7 text-gray-600">
                      <p>{loanType.description}</p>
                      <p className="mt-4 inline-flex items-center text-sm font-semibold text-[#00659C] opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </p>
                    </dd>
                  </Link>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
