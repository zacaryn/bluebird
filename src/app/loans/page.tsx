import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Loan Programs Colorado Springs | Home Loans & Refinancing | David Jeffrey NMLS# 2269251',
  description: 'Comprehensive home loan programs in Colorado Springs including FHA, VA, conventional loans, refinancing, and down payment assistance. Expert guidance from David Jeffrey NMLS# 2269251.',
  keywords: 'loan programs Colorado Springs, home loans, mortgage types, FHA loans, VA loans, conventional loans, refinancing, down payment assistance, David Jeffrey, NMLS 2269251',
  openGraph: {
    title: 'Loan Programs Colorado Springs | Home Loans & Refinancing | Bluebird Mortgage',
    description: 'Explore our comprehensive home loan programs including FHA, VA, conventional loans, refinancing, and more in Colorado Springs.',
    type: 'website',
    url: 'https://bluebirdmortgage.com/loans',
    images: [
      {
        url: '/images/loan1.jpg',
        width: 1200,
        height: 630,
        alt: 'Loan Programs Colorado Springs - Bluebird Mortgage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Programs Colorado Springs | Home Loans & Refinancing',
    description: 'Explore our comprehensive home loan programs in Colorado Springs including FHA, VA, conventional loans, and refinancing options.',
    images: ['/images/loan1.jpg'],
  },
  alternates: {
    canonical: 'https://bluebirdmortgage.com/loans',
  },
};

const loanProgramsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluebirdmortgage.com/loans#webpage",
      "url": "https://bluebirdmortgage.com/loans",
      "name": "Loan Programs Colorado Springs | Home Loans & Refinancing",
      "isPartOf": {
        "@id": "https://bluebirdmortgage.com/#website"
      },
      "about": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-20",
      "description": "Comprehensive home loan programs in Colorado Springs including purchase loans, refinancing, and specialty programs.",
      "breadcrumb": {
        "@id": "https://bluebirdmortgage.com/loans#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bluebirdmortgage.com/loans#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "CollectionPage",
      "name": "Mortgage Loan Programs",
      "description": "Complete collection of mortgage loan programs available in Colorado Springs including purchase loans, refinancing, and specialty financing options.",
      "provider": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "mainEntity": [
        {
          "@type": "Service",
          "name": "FHA Loans",
          "description": "Low down payment loans with flexible credit requirements",
          "url": "https://bluebirdmortgage.com/loans/fha-loans"
        },
        {
          "@type": "Service",
          "name": "VA Loans", 
          "description": "Zero down payment loans for veterans and active military",
          "url": "https://bluebirdmortgage.com/loans/va-loans"
        },
        {
          "@type": "Service",
          "name": "Conventional Loans",
          "description": "Traditional financing with competitive rates and flexible terms",
          "url": "https://bluebirdmortgage.com/loans/conventional"
        },
        {
          "@type": "Service",
          "name": "New Construction Loans",
          "description": "Construction-to-permanent financing for custom homes",
          "url": "https://bluebirdmortgage.com/loans/new-construction"
        },
        {
          "@type": "Service",
          "name": "Refinancing",
          "description": "Lower your rate or access home equity through refinancing",
          "url": "https://bluebirdmortgage.com/loans/refinance"
        },
        {
          "@type": "Service",
          "name": "Reverse Mortgage",
          "description": "Access home equity without monthly payments for seniors 62+",
          "url": "https://bluebirdmortgage.com/loans/reverse-mortgage"
        },
        {
          "@type": "Service",
          "name": "Down Payment Assistance",
          "description": "Programs to help with down payments and closing costs",
          "url": "https://bluebirdmortgage.com/loans/down-payment-assistance"
        }
      ]
    }
  ]
};

const loanPrograms = [
  {
    title: "FHA Loans",
    description: "Federal Housing Administration loans with as little as 3.5% down payment and flexible credit requirements.",
    image: "/images/coloradosprings2.jpg",
    href: "/loans/fha-loans",
    features: ["3.5% Down", "Flexible Credit", "Gift Funds OK"]
  },
  {
    title: "VA Loans", 
    description: "Zero down payment loans for veterans, active duty military, and eligible spouses. No PMI required.",
    image: "/images/valoan.jpg",
    href: "/loans/va-loans", 
    features: ["$0 Down", "No PMI", "Reusable Benefit"]
  },
  {
    title: "Conventional Loans",
    description: "Traditional mortgage financing with competitive rates and flexible terms. Down payments as low as 3%.",
    image: "/images/coloradosprings.jpg",
    href: "/loans/conventional",
    features: ["Low Down Payment", "Competitive Rates", "Flexible Terms"]
  },
  {
    title: "New Construction Loans",
    description: "Construction-to-permanent financing for building your dream home with single-close convenience.",
    image: "/images/construction.jpg", 
    href: "/loans/new-construction",
    features: ["Single-Close", "Interest-Only Build", "Custom Homes"]
  },
  {
    title: "Refinancing",
    description: "Lower your rate, reduce payments, or access home equity with our refinancing options.",
    image: "/images/loan2.jpg",
    href: "/loans/refinance",
    features: ["Lower Rate", "Reduce Payments", "Access Equity"]
  },
  {
    title: "Reverse Mortgage",
    description: "Access your home equity without monthly payments. Available for homeowners 62+.",
    image: "/images/familyhome.jpg",
    href: "/loans/reverse-mortgage", 
    features: ["No Payments", "Age 62+", "Stay in Home"]
  },
  {
    title: "Down Payment Assistance",
    description: "CHFA and CHAC programs to help with down payments and closing costs.",
    image: "/images/advisor.jpg",
    href: "/loans/down-payment-assistance",
    features: ["CHFA Programs", "Lower Costs", "First-Time Buyers"]
  }
];

const breadcrumbItems = [
  { name: 'Loan Programs', href: '/loans', current: true }
];

export default function LoanProgramsPage() {
  return (
    <>
      <Script
        id="loan-programs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(loanProgramsSchema),
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Compact Hero Section */}
        <div className="relative bg-[#00659C]">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/loan1.jpg"
              alt="Loan Programs Colorado Springs"
              width={1920}
              height={300}
              className="h-full w-full object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-[#00659C]/70" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Loan Programs
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Comprehensive Home Financing Solutions in Colorado Springs
            </p>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Compact Introduction */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Choose the Right Loan Program for You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect financing solution for your unique needs with expert guidance from David Jeffrey.
            </p>
          </div>

          {/* Compact Loan Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {loanPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-32">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-3">
                    <h3 className="text-lg font-bold text-white">{program.title}</h3>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {program.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-[#00659C]/10 text-[#00659C] px-2 py-1 rounded text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={program.href}
                    className="inline-block w-full bg-[#00659C] text-white px-4 py-2 rounded hover:bg-[#005483] transition-colors text-center text-sm font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Compact Call to Action */}
          <div className="bg-[#00659C] text-white rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-3">
              Not Sure Which Program is Right for You?
            </h3>
            <p className="text-white/90 mb-4 max-w-xl mx-auto">
              David Jeffrey will help you compare options and find the perfect loan program for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://www.blink.mortgage/app/signup/p/bluebirdmortgage/davidjeffrey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#00659C] px-6 py-2 rounded hover:bg-gray-100 transition-colors font-semibold"
              >
                Start Application
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent text-white border-2 border-white px-6 py-2 rounded hover:bg-white hover:text-[#00659C] transition-colors font-semibold"
              >
                Contact David
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 