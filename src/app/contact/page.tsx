import type { Metadata } from 'next'
import Script from 'next/script'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import CollapsibleFAQ from '@/components/CollapsibleFAQ'

export const metadata: Metadata = {
  title: 'Contact Us | Bluebird Mortgage Colorado Springs | David Jeffrey NMLS# 2269251',
  description: 'Contact Bluebird Mortgage in Colorado Springs for all your home financing needs. Get expert guidance on VA loans, FHA loans, conventional loans, and more. Call 719-428-1038.',
  keywords: 'contact mortgage lender Colorado Springs, mortgage consultation, loan application, David Jeffrey NMLS 2269251, Bluebird Mortgage contact',
  openGraph: {
    title: 'Contact Bluebird Mortgage | Colorado Springs Mortgage Lender',
    description: 'Contact David Jeffrey at Bluebird Mortgage for expert mortgage guidance in Colorado Springs. Call 719-428-1038 or schedule a consultation online.',
    type: 'website',
    url: 'https://bluebirdmortgage.com/contact',
    images: [
      {
        url: '/images/david.png',
        width: 1200,
        height: 630,
        alt: 'Contact David Jeffrey - Bluebird Mortgage Colorado Springs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Bluebird Mortgage | Colorado Springs',
    description: 'Contact David Jeffrey for expert mortgage guidance in Colorado Springs. Call 719-428-1038.',
    images: ['/images/david.png'],
  },
  alternates: {
    canonical: 'https://bluebirdmortgage.com/contact',
  },
}

const contactFAQs = [
  {
    question: "How can I contact Bluebird Mortgage?",
    answer: "You can contact Bluebird Mortgage by calling 719-428-1038, emailing david@bluebirdmortgage.com, or filling out our online contact form. We're available Monday-Friday 8am-7pm, and weekends by appointment."
  },
  {
    question: "How quickly does David Jeffrey respond to inquiries?",
    answer: "David Jeffrey typically responds to phone calls within hours and emails within 24 hours during business days. For urgent mortgage questions, calling 719-428-1038 is the fastest way to reach us."
  },
  {
    question: "Do I need an appointment for a mortgage consultation?",
    answer: "While appointments are preferred for in-depth consultations, David Jeffrey is available for quick questions during business hours. You can schedule a consultation by calling, emailing, or using our contact form."
  },
  {
    question: "What information should I have ready when contacting Bluebird Mortgage?",
    answer: "For an initial consultation, have your approximate credit score, monthly income, current debts, down payment amount, and the price range of homes you're considering. This helps David provide more accurate preliminary guidance."
  },
  {
    question: "Can I meet with David Jeffrey in person?",
    answer: "Yes, David Jeffrey offers in-person consultations in Colorado Springs, virtual meetings, and phone consultations to accommodate your schedule and preferences. Contact us to schedule your preferred meeting type."
  },
  {
    question: "Is there a cost for the initial mortgage consultation?",
    answer: "No, initial mortgage consultations with David Jeffrey are completely free. There's no obligation and no cost to discuss your mortgage options, get pre-qualified, or ask questions about the homebuying process."
  }
]

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluebirdmortgage.com/contact#webpage",
      "url": "https://bluebirdmortgage.com/contact",
      "name": "Contact Bluebird Mortgage Colorado Springs",
      "isPartOf": {
        "@id": "https://bluebirdmortgage.com/#website"
      },
      "about": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-20",
      "description": "Contact information and consultation request form for Bluebird Mortgage in Colorado Springs.",
      "breadcrumb": {
        "@id": "https://bluebirdmortgage.com/contact#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bluebirdmortgage.com/contact#breadcrumb",
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
          "name": "Contact",
          "item": "https://bluebirdmortgage.com/contact"
        }
      ]
    },
    {
      "@type": "ContactPage",
      "name": "Contact Bluebird Mortgage",
      "description": "Get in touch with David Jeffrey and the Bluebird Mortgage team for personalized mortgage guidance in Colorado Springs.",
      "mainEntity": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".contact-info", ".business-hours"]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I contact Bluebird Mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Bluebird Mortgage by calling 719-428-1038, emailing david@bluebirdmortgage.com, or filling out our online contact form. We're available Monday-Friday 8am-7pm, and weekends by appointment."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly does David Jeffrey respond to inquiries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "David Jeffrey typically responds to phone calls within hours and emails within 24 hours during business days. For urgent mortgage questions, calling 719-428-1038 is the fastest way to reach us."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an appointment for a mortgage consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While appointments are preferred for in-depth consultations, David Jeffrey is available for quick questions during business hours. You can schedule a consultation by calling, emailing, or using our contact form."
          }
        },
        {
          "@type": "Question",
          "name": "What information should I have ready when contacting Bluebird Mortgage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For an initial consultation, have your approximate credit score, monthly income, current debts, down payment amount, and the price range of homes you're considering. This helps David provide more accurate preliminary guidance."
          }
        },
        {
          "@type": "Question",
          "name": "Can I meet with David Jeffrey in person?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, David Jeffrey offers in-person consultations in Colorado Springs, virtual meetings, and phone consultations to accommodate your schedule and preferences. Contact us to schedule your preferred meeting type."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a cost for the initial mortgage consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, initial mortgage consultations with David Jeffrey are completely free. There's no obligation and no cost to discuss your mortgage options, get pre-qualified, or ask questions about the homebuying process."
          }
        }
      ]
    }
  ]
};

const breadcrumbItems = [
  { name: 'Contact', href: '/contact', current: true }
];

export default function Contact() {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      
    <div className="bg-white">


      <div className="relative isolate bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pb-20 pt-12 sm:pt-20 lg:static lg:px-8 lg:py-32">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Contact Us</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Have questions about our mortgage services? We're here to help you navigate the home financing process.
              </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600 contact-info">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <svg className="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                  </dt>
                    <dd>
                      <p>1347 N Prospect St</p>
                      <p>Colorado Springs, CO 80903</p>
                    </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <svg className="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </dt>
                  <dd>
                                                    <a className="hover:text-[#00659C]" href="tel:719-428-1038">
                  719-428-1038
                </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <svg className="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.32 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </dt>
                  <dd>
                    <a 
                      href="mailto:david@bluebirdmortgage.com" 
                      className="hover:text-[#00659C]"
                    >
                      david@bluebirdmortgage.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Hours</span>
                    <svg className="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </dt>
                    <dd className="business-hours">
                    <p>Monday - Friday: 8am - 7pm</p>
                    <p>Saturday & Sunday: By appointment only</p>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">NMLS</span>
                    <svg className="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>
                  </dt>
                  <dd>NMLS# 2269251</dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-7 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </dt>
                  <dd>
                    <a 
                      href="https://www.facebook.com/bluebirdmtg/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#00659C]"
                    >
                      Follow us on Facebook
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
            <div className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

        {/* FAQ Section */}
        <CollapsibleFAQ
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about contacting Bluebird Mortgage"
          faqs={contactFAQs}
          defaultExpanded={false}
        />


    </div>
    </>
  )
} 