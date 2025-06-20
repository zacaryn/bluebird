import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Mortgage Information & Resources Colorado Springs | David Jeffrey NMLS# 1649074',
  description: 'Essential mortgage information and resources for Colorado Springs homebuyers. Learn about the mortgage process, first-time homebuyer programs, and why to choose Bluebird Mortgage.',
  keywords: 'mortgage information Colorado Springs, homebuyer resources, first-time homebuyer guide, mortgage process, Bluebird Mortgage, David Jeffrey, NMLS 1649074',
  openGraph: {
    title: 'Mortgage Information & Resources Colorado Springs | Bluebird Mortgage',
    description: 'Essential mortgage information and resources to help Colorado Springs homebuyers make informed decisions throughout their homebuying journey.',
    type: 'website',
    url: 'https://bluebirdmortgage.com/info',
    images: [
      {
        url: '/images/homebuyer.jpg',
        width: 1200,
        height: 630,
        alt: 'Mortgage Information Colorado Springs - Bluebird Mortgage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mortgage Information & Resources Colorado Springs',
    description: 'Essential mortgage information and resources for Colorado Springs homebuyers and homeowners.',
    images: ['/images/homebuyer.jpg'],
  },
  alternates: {
    canonical: 'https://bluebirdmortgage.com/info',
  },
};

const informationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluebirdmortgage.com/info#webpage",
      "url": "https://bluebirdmortgage.com/info",
      "name": "Mortgage Information & Resources Colorado Springs",
      "isPartOf": {
        "@id": "https://bluebirdmortgage.com/#website"
      },
      "about": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-20",
      "description": "Comprehensive mortgage information and educational resources for Colorado Springs homebuyers and homeowners.",
      "breadcrumb": {
        "@id": "https://bluebirdmortgage.com/info#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bluebirdmortgage.com/info#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "CollectionPage",
      "name": "Mortgage Information & Resources",
      "description": "Educational resources and information about mortgage lending, homebuying process, and Bluebird Mortgage services in Colorado Springs.",
      "provider": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "mainEntity": [
        {
          "@type": "Article",
          "name": "About Bluebird Mortgage",
          "description": "Learn about David Jeffrey and Bluebird Mortgage's commitment to Colorado Springs homebuyers",
          "url": "https://bluebirdmortgage.com/info/about-bluebird"
        },
        {
          "@type": "Article",
          "name": "First-Time Homebuyer Guide",
          "description": "Complete guide for first-time homebuyers in Colorado Springs",
          "url": "https://bluebirdmortgage.com/info/first-time-homebuyer"
        },
        {
          "@type": "Article",
          "name": "Why Trust Bluebird Mortgage",
          "description": "Discover why Colorado Springs residents choose Bluebird Mortgage for their home financing needs",
          "url": "https://bluebirdmortgage.com/info/trust-bluebird"
        }
      ]
    }
  ]
};

const informationArticles = [
  {
    title: "About Bluebird Mortgage",
    description: "Meet David Jeffrey and learn about Bluebird Mortgage's mission to provide personalized mortgage solutions for Colorado Springs families. Discover our commitment to exceptional service and local expertise.",
    image: "/images/david.png",
    href: "/info/about-bluebird",
    category: "Company Profile",
    readTime: "3 min read",
    highlights: ["Meet David Jeffrey", "Local Expertise", "Company Mission", "Personal Approach"]
  },
  {
    title: "First-Time Homebuyer Guide",
    description: "Complete step-by-step guide for first-time homebuyers in Colorado Springs. From pre-approval to closing, learn everything you need to know about the homebuying process and available programs.",
    image: "/images/homebuyer.jpg",
    href: "/info/first-time-homebuyer",
    category: "Buyer Education",
    readTime: "8 min read",
    highlights: ["Step-by-Step Process", "Down Payment Programs", "Credit Requirements", "Closing Process"]
  },
  {
    title: "Why Trust Bluebird Mortgage",
    description: "Discover what sets Bluebird Mortgage apart in Colorado Springs. Learn about our client testimonials, industry expertise, and commitment to transparent, honest mortgage lending practices.",
    image: "/images/bluebird.jpg",
    href: "/info/trust-bluebird",
    category: "Why Choose Us",
    readTime: "5 min read",
    highlights: ["Client Testimonials", "Transparent Process", "Local Knowledge", "Proven Track Record"]
  }
];

const breadcrumbItems = [
  { name: 'Information', href: '/info', current: true }
];

export default function InformationPage() {
  return (
    <>
      <Script
        id="information-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(informationSchema),
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-[#00659C]">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/images/homebuyer.jpg"
              alt="Mortgage Information Colorado Springs"
              width={1920}
              height={400}
              className="h-full w-full object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-[#00659C]/70" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Information & Resources
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Essential Mortgage Information for Colorado Springs Homebuyers
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Access comprehensive guides, educational resources, and insider knowledge to make 
              informed decisions throughout your homebuying or refinancing journey.
            </p>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Educational Resources & Expert Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Knowledge is power when it comes to mortgage lending. Our comprehensive resources are designed 
              to educate and empower Colorado Springs homebuyers with the information they need to make 
              confident decisions about their home financing.
            </p>
          </div>

          {/* Information Articles */}
          <div className="grid gap-8 md:gap-12 mb-16">
            {informationArticles.map((article, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex`}>
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#00659C] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {article.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {article.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-[#00659C] mr-2">•</span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={article.href}
                    className="inline-block bg-[#00659C] text-white px-6 py-3 rounded-lg hover:bg-[#005483] transition-colors font-semibold text-center"
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Additional Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-[#00659C] rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Mortgage Calculator
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Calculate your monthly payments and explore different loan scenarios
                </p>
                <Link
                  href="/calculator"
                  className="inline-block bg-[#00659C] text-white px-4 py-2 rounded-lg hover:bg-[#005483] transition-colors font-medium text-sm"
                >
                  Use Calculator
                </Link>
              </div>
              
              <div className="text-center">
                <div className="bg-[#00659C] rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Get Started
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Begin your mortgage application process with a simple pre-qualification
                </p>  
                <Link
                  href="/get-started"
                  className="inline-block bg-[#00659C] text-white px-4 py-2 rounded-lg hover:bg-[#005483] transition-colors font-medium text-sm"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="text-center">
                <div className="bg-[#00659C] rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Contact David
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Get personalized advice and answers to your specific questions
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#00659C] text-white px-4 py-2 rounded-lg hover:bg-[#005483] transition-colors font-medium text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#00659C] text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Take the Next Step?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Armed with knowledge and backed by David Jeffrey's expertise, you're ready to confidently 
              navigate your home financing journey. Let's turn your homeownership dreams into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.blink.mortgage/app/signup/p/bluebirdmortgage/davidjeffrey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#00659C] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Start Your Application
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#00659C] transition-colors font-semibold"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 