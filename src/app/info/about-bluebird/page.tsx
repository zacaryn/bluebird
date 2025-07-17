import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About Bluebird Mortgage | David Jeffrey NMLS# 2269251 | Colorado Springs',
  description: 'Learn about Bluebird Mortgage and owner David Jeffrey, serving Colorado Springs with expert mortgage services and personalized solutions. NMLS# 2269251.',
  keywords: 'about Bluebird Mortgage, David Jeffrey, NMLS 2269251, Colorado Springs mortgage broker, mortgage professional, loan officer',
  openGraph: {
    title: 'About Bluebird Mortgage | David Jeffrey NMLS# 2269251',
    description: 'Expert mortgage services in Colorado Springs with personalized solutions and professional guidance.',
    type: 'article',
    url: 'https://bluebirdmortgage.com/info/about-bluebird',
    images: [
      {
        url: '/images/david.png',
        width: 1200,
        height: 630,
        alt: 'About Bluebird Mortgage - David Jeffrey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Bluebird Mortgage',
    description: 'Expert mortgage services in Colorado Springs with personalized solutions.',
    images: ['/images/david.png'],
  },
  alternates: {
    canonical: 'https://bluebirdmortgage.com/info/about-bluebird',
  },
};

const aboutBluebirdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluebirdmortgage.com/info/about-bluebird#webpage",
      "url": "https://bluebirdmortgage.com/info/about-bluebird",
      "name": "About Bluebird Mortgage | David Jeffrey NMLS# 2269251",
      "isPartOf": {
        "@id": "https://bluebirdmortgage.com/#website"
      },
      "about": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-20",
      "description": "Learn about Bluebird Mortgage and owner David Jeffrey, serving Colorado Springs with expert mortgage services and personalized solutions.",
      "breadcrumb": {
        "@id": "https://bluebirdmortgage.com/info/about-bluebird#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bluebirdmortgage.com/info/about-bluebird#breadcrumb",
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
          "name": "About Bluebird",
          "item": "https://bluebirdmortgage.com/info/about-bluebird"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://bluebirdmortgage.com/info/about-bluebird#person",
      "name": "David Jeffrey",
      "jobTitle": "Founding Mortgage Broker",
      "identifier": "NMLS# 2269251",
      "worksFor": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Colorado Springs",
        "addressRegion": "Colorado",
        "addressCountry": "US"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Jacksonville State University",
        "degree": "Bachelor's degree in Marketing"
      },
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Mortgage Broker",
        "skills": ["Mortgage Lending", "Financial Strategy", "Real Estate Finance", "Customer Service"]
      },
      "knowsAbout": ["Mortgage Lending", "Real Estate Finance", "Colorado Springs Market", "Financial Strategy"],
      "yearsOfExperience": "10+",
      "image": "https://bluebirdmortgage.com/images/david.png"
    },
    {
      "@type": "AboutPage",
      "mainEntity": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "significantLink": [
        "https://bluebirdmortgage.com/loans/va-loans",
        "https://bluebirdmortgage.com/loans/fha-loans",
        "https://bluebirdmortgage.com/loans/conventional",
        "https://bluebirdmortgage.com/contact"
      ]
    }
  ]
};

const breadcrumbItems = [
  { name: 'Information', href: '/info' },
  { name: 'About Bluebird', href: '/info/about-bluebird', current: true }
];

export default function AboutBluebirdPage() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  return (
    <>
      <script
        id="about-bluebird-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutBluebirdSchema),
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-[#00659C]">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/bluebird.jpg"
              alt="About Bluebird Mortgage Colorado Springs"
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
              About Bluebird Mortgage
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Making Homeownership Dreams a Reality in Colorado Springs
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                Today's mortgage market is crowded and complicated. It's our job to make sure that customers 
                understand exactly how their mortgage works and that it is a financially sound decision. While 
                buying a house or refinancing can sometimes feel like a second or third job, the end result 
                should change your life for the better. We are here to help make that happen.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 relative">
                  <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                    <Image
                      src="/images/david.png"
                      alt="David Jeffrey - Founding Mortgage Broker NMLS# 2269251"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">About David Jeffrey, Founding Mortgage Broker</h2>
                  <div className="mb-4">
                    <span className="inline-block bg-[#00659C] text-white px-3 py-1 rounded-full text-sm font-medium">
                      NMLS# 2269251
                    </span>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed mb-4">
                    David Jeffrey has been a Colorado resident for over 12 years and witnessed the tremendous growth 
                    that shapes our region into one of the most desirable places to live. After spending 6 years in 
                    the National Guard, David graduated from Jacksonville State University in 2003 with a Bachelor's 
                    degree in Marketing.
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed mb-4">
                    After relocating to Colorado, he found his footing in the community and spent years as a youth 
                    guitar instructor at the Colorado Springs Conservatory and a choir director at Monument Community 
                    Presbyterian church. After working for 12 years servicing clients in the marketing and advertising 
                    industries, he recently set out to help make this mountain landscape a reality for others captivated 
                    by its beauty and wanting to call it home.
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    His whole life, David's carried a deep obsession for financial investments and strategy and is 
                    excited to integrate those skills into his role here with Bluebird Mortgage.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Personal Life & Community</h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                David is a full-time Dad and owns a home in the Ivywild neighborhood. You can find him playing 
                mandolin for the local bluegrass band Grass It Up, and he regularly performs at The Governor's 
                mansion, Colorado Springs Fine Art Center, and The Broadmoor Resort and Hotel.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                This deep connection to the Colorado Springs community gives David unique insight into the local 
                real estate market and helps him better serve clients who are looking to make Colorado their home.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-800">Connect with us:</span>
                <a 
                  href="https://www.facebook.com/bluebirdmtg/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#00659C] hover:text-[#005483] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Loan Programs</h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Bluebird Mortgage offers a comprehensive range of loan programs to meet your homeownership needs:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Purchase Loans</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#00659C] mr-2">•</span>
                      <span className="text-gray-800">Conventional Loans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00659C] mr-2">•</span>
                      <span className="text-gray-800">FHA Loans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00659C] mr-2">•</span>
                      <span className="text-gray-800">VA Loans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00659C] mr-2">•</span>
                      <span className="text-gray-800">New Construction Loans</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Refinancing & Specialty</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#00659C] mr-2">•</span>
                      <span className="text-gray-800">Rate & Term Refinance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00659C] mr-2">•</span>
                      <span className="text-gray-800">Cash-Out Refinance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00659C] mr-2">•</span>
                      <span className="text-gray-800">Reverse Mortgages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00659C] mr-2">•</span>
                      <span className="text-gray-800">Down Payment Assistance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Why Choose Bluebird Mortgage</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Personal service from an experienced local broker</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Deep understanding of Colorado Springs market</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Financial strategy expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Clear communication throughout the process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00659C] mr-2">✓</span>
                    <span className="text-gray-800">Community-focused approach</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Commitment</h3>
                <p className="text-gray-800 mb-4">
                  We believe every mortgage should be a financially sound decision that improves your life. 
                  David works personally with each client to ensure you understand your loan completely.
                </p>
                <p className="text-gray-800">
                  From first-time homebuyers to seasoned investors, we're here to make your Colorado 
                  homeownership dreams a reality.
                </p>
              </div>
            </div>

            <div className="bg-[#00659C] text-white rounded-xl p-8 my-12 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h3>
              <p className="mb-6 text-white/90">
                Whether you're buying your first home, refinancing, or looking to invest in Colorado real estate, 
                David Jeffrey is here to guide you through every step of the process with personalized service 
                and expert advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.blink.mortgage/app/signup/p/bluebirdmortgage/davidjeffrey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#00659C] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center font-semibold"
                >
                  Start Application
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#00659C] transition-colors text-center font-semibold"
                >
                  Contact David
                </Link>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
} 