import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import MortgageCalculator from "@/components/MortgageCalculator";
import CollapsibleFAQ from "@/components/CollapsibleFAQ";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import AdTracking from "@/components/AdTracking";

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

const googleReviews = [
  {
    name: "James Gardner",
    text: "From the get go, David was so much better than dealing with veterans united. He got me a better approval with a better rate and was right there and got back to me within minutes every single time I needed him. This was my first home buying experience and David made it seamless.",
    rating: 5
  },
  {
    name: "Xavier Hunt", 
    text: "This was a long strenuous process first time home buyers with a tight timeline and very little money, this guy was able to get us a great deal in 30 days and he worked for every minute of it, David will definitely get it done for you I recommend anyone trying to buy a home use a broker! This one for sure",
    rating: 5
  },
  {
    name: "Mack Eickhoff",
    text: "David and Andrea were very helpful and professional. I loved that even from Colorado Springs, they could help me all the way out in Grand Junction! I would highly recommend.",
    rating: 5
  },
  {
    name: "Mike Janssen",
    text: "Andrea and David are amazing!!! Highly recommend working with them as they really know what they are doing and will find you the house you want!",
    rating: 5
  },
  {
    name: "Jacob French",
    text: "Andrea and David are awesome. I always have a ton of questions regarding commercial and investment properties. Andrea never fails to get me answers and the help I need!",
    rating: 5
  },
  {
    name: "Jacob Dolph",
    text: "Andrea and David are awesome and very professional! Willing to do any of your mortgage needs!",
    rating: 5
  },
  {
    name: "Erin Lacey",
    text: "I absolutely highly recommend Bluebird Mortgage! Both David and Andrea were so professional yet friendly and went above and beyond helping me every step of the way!",
    rating: 5
  },
  {
    name: "Tay Bolte",
    text: "Had an incredible experience! David and Andrea are amazing and incredibly professional! Highly recommend!",
    rating: 5
  },
  {
    name: "Melissa Howard",
    text: "This team made a difficult process easy! Absolutely would recommend and work with them again. They know how to get the deal done!",
    rating: 5
  },
  {
    name: "Dustin Krawczyk",
    text: "Highly recommend! Andrea and David were so helpful and full of knowledge!",
    rating: 5
  },
  {
    name: "Haydn French",
    text: "David and Andrea were excellent, very helpful and made an easy experience!",
    rating: 5
  },
  {
    name: "Jake Saliba",
    text: "David and his team at Bluebird are amazing! As a Realtor he is my go to lender for all of my client's needs. He has always found a way to make the process as smooth and stress free as possible for all of them. I will continue to work with Bluebird in the future!",
    rating: 5,
    source: "Facebook Review"
  },
  {
    name: "Amanda Gaden",
    text: "David was great to work with on our refi! He is laid back and also really knows his stuff. He did a great job of listening to what we needed (& fighting for that) while also helping us get better than what we had hoped for. We will absolutely use him again! Best experience we've ever had from a lender.",
    rating: 5,
    source: "Facebook Review"
  }
]

const homeFAQs = [
  {
    question: "What types of mortgage loans does Bluebird Mortgage offer?",
    answer: "Bluebird Mortgage offers VA loans, FHA loans, conventional loans, reverse mortgages, new construction loans, refinancing, and down payment assistance programs in Colorado Springs."
  },
  {
    question: "How long does the mortgage approval process take?",
    answer: "The mortgage approval process typically takes 30-45 days from application to closing. Pre-approval can often be completed within 24-48 hours with proper documentation."
  },
  {
    question: "What credit score do I need for a mortgage?",
    answer: "Credit score requirements vary by loan type. FHA loans may accept scores as low as 580, VA loans are more flexible, and conventional loans typically require 620 or higher. Contact David Jeffrey for a personalized assessment."
  },
  {
    question: "What makes Bluebird Mortgage different from other lenders?",
    answer: "Bluebird Mortgage offers personalized service with direct access to David Jeffrey (NMLS# 2269251), local Colorado Springs expertise, transparent communication, and specialized knowledge in VA loans, FHA loans, and first-time homebuyer programs."
  },
  {
    question: "How much house can I afford in Colorado Springs?",
    answer: "Generally, you can afford a home that costs 2.5-3 times your annual income, though this varies based on credit score, debt, and down payment. Use our mortgage calculator or contact David Jeffrey for a personalized affordability analysis."
  },
  {
    question: "What documents do I need for a mortgage application?",
    answer: "You'll need recent pay stubs, tax returns, bank statements, employment verification, and identification. For VA loans, you'll also need your Certificate of Eligibility. David Jeffrey will provide a complete document checklist during your consultation."
  }
]

export const metadata: Metadata = {
  title: "Bluebird Mortgage | Colorado Springs Mortgage Broker | David Jeffrey NMLS# 2269251",
  description: "Expert mortgage broker services in Colorado Springs with David Jeffrey (NMLS# 2269251). Specializing in VA loans, FHA loans, conventional mortgages, and refinancing. Fast approvals, competitive rates, personalized service.",
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
      "about": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-20",
      "description": "Expert mortgage services in Colorado Springs with David Jeffrey. Specializing in VA loans, FHA loans, conventional mortgages, and refinancing.",
      "primaryImageOfPage": {
        "@id": "https://bluebirdmortgage.com/#primaryimage"
      },
      "breadcrumb": {
        "@id": "https://bluebirdmortgage.com/#breadcrumb"
      },
      "mainEntity": [
        {
          "@id": "https://bluebirdmortgage.com/#organization"
        },
        {
          "@id": "https://bluebirdmortgage.com/#faqpage"
        }
      ]
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
          "name": "Home",
          "item": "https://bluebirdmortgage.com/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://bluebirdmortgage.com/#faqpage",
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
        },
        {
          "@type": "Question",
          "name": "What makes Bluebird Mortgage different from other lenders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bluebird Mortgage offers personalized service with direct access to David Jeffrey (NMLS# 2269251), local Colorado Springs expertise, transparent communication, and specialized knowledge in VA loans, FHA loans, and first-time homebuyer programs."
          }
        },
        {
          "@type": "Question",
          "name": "What are current mortgage rates in Colorado Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mortgage rates change daily based on market conditions. Contact David Jeffrey at 719-428-1038 for current rates on VA loans, FHA loans, conventional loans, and refinancing options. Rates vary based on credit score, down payment, and loan program."
          }
        },
        {
          "@type": "Question",
          "name": "How much house can I afford in Colorado Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, you can afford a home that costs 2.5-3 times your annual income, though this varies based on credit score, debt, and down payment. Use our mortgage calculator or contact David Jeffrey for a personalized affordability analysis."
          }
        },
        {
          "@type": "Question",
          "name": "What documents do I need for a mortgage application?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You'll need recent pay stubs, tax returns, bank statements, employment verification, and identification. For VA loans, you'll also need your Certificate of Eligibility. David Jeffrey will provide a complete document checklist during your consultation."
          }
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
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
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
                  Your Path to Home Ownership Starts Here
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-200 drop-shadow-md">
                  Bluebird Mortgage specializes in making the mortgage process simple and straightforward. 
                  As your Colorado Springs mortgage broker, let us help you navigate the path to homeownership with our expert guidance and diverse loan options.
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
                As your Colorado Springs mortgage broker, we offer a variety of loan programs to meet your unique needs. Our mortgage broker expertise helps you access better rates and loan options. Explore our programs below to find the perfect fit for your situation.
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
                      <p className="mt-4 inline-flex items-center text-sm font-semibold text-[#00659C] group-hover:text-[#004B73] transition-all group-hover:translate-x-1">
                        Learn more <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
                      </p>
                    </dd>
                  </Link>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Google Reviews Testimonials Section */}
        <div className="bg-gray-50 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">5.0</span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-600">13 reviews</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                See what our satisfied clients have to say about their experience with Bluebird Mortgage.
              </p>
            </div>
            
                        {/* Reviews Carousel Component */}
            <ReviewsCarousel reviews={googleReviews} />

            <div className="text-center mt-8">
              <a
                href="https://maps.app.goo.gl/D11wDciyucb1YwYf6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00659C] hover:text-[#005483] font-semibold transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                See all reviews on Google
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <CollapsibleFAQ
          title="Frequently Asked Questions"
          subtitle="Get answers to common questions about mortgage lending in Colorado Springs"
          faqs={homeFAQs}
          defaultExpanded={false}
        />


      </div>
      <AdTracking />
    </>
  )
}
