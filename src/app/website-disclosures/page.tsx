import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Website Disclosures | Bluebird Mortgage',
  description:
    'Read Bluebird Mortgage website disclosures, including lending, licensing, rate, communication, and privacy notices.',
  alternates: {
    canonical: 'https://bluebirdmortgage.com/website-disclosures',
  },
}

const breadcrumbItems = [{ name: 'Website Disclosures', href: '/website-disclosures', current: true }]

type DisclosureSection = {
  heading: string
  body?: string[]
  bullets?: string[]
}

const disclosureSections: DisclosureSection[] = [
  {
    heading: 'General Information Disclaimer',
    body: [
      'The information provided on BluebirdMortgage.com is for general informational purposes only and is not intended as financial, legal, tax, or credit advice. Loan programs, interest rates, fees, terms, and underwriting guidelines are subject to change without notice and may vary based on borrower qualifications, credit profile, property type, occupancy, and market conditions.',
      'Nothing on this website constitutes a commitment to lend, guarantee of approval, or offer to extend credit. All mortgage applications are subject to underwriting approval and verification of information provided by the borrower.',
    ],
  },
  {
    heading: 'Equal Housing Opportunity',
    body: [
      'Bluebird Mortgage is committed to compliance with all federal and state fair lending laws and regulations. We do not discriminate on the basis of race, color, religion, national origin, sex, marital status, age, disability, familial status, sexual orientation, gender identity, receipt of public assistance, or any other protected class under applicable law.',
      'Equal Housing Opportunity.',
    ],
  },
  {
    heading: 'Licensing and Regulatory Disclosure',
    body: [
      'Bluebird Mortgage operates in accordance with applicable state and federal mortgage lending laws and regulations. Licensing information, NMLS information, and applicable disclosures are available upon request and will be provided where required by law.',
    ],
  },
  {
    heading: 'Rate and Payment Disclaimer',
    body: [
      'Interest rates, APRs, monthly payments, and loan scenarios displayed on this website are estimates only and are provided for illustrative purposes. Actual rates and payments may vary based on:',
    ],
    bullets: [
      'Credit score',
      'Loan amount',
      'Loan-to-value ratio',
      'Debt-to-income ratio',
      'Occupancy type',
      'Property type',
      'Overall borrower qualifications',
    ],
  },
  {
    heading: 'Third-Party Links',
    body: [
      'This website may contain links to third-party websites or services. Bluebird Mortgage is not responsible for the content, accuracy, privacy policies, or practices of any third-party websites.',
    ],
  },
  {
    heading: 'No Guarantee of Results',
    body: [
      'Past performance, loan approvals, or prior rate quotes do not guarantee future results or loan approval. Each borrower and transaction is unique and subject to underwriting review.',
    ],
  },
  {
    heading: 'Electronic Communication Consent',
    body: [
      'By submitting information through this website, you consent to being contacted by Bluebird Mortgage via phone call, text message, and/or email regarding mortgage-related services, even if your phone number is listed on a federal or state Do Not Call registry. Message and data rates may apply.',
    ],
  },
  {
    heading: 'Privacy Notice',
    body: [
      'Bluebird Mortgage respects your privacy and takes reasonable measures to protect personal information submitted through this website. Information collected may be used for mortgage qualification, communication, marketing, and compliance purposes in accordance with applicable privacy laws.',
    ],
  },
  {
    heading: 'Not a Commitment to Lend',
    body: [
      'Submitting an inquiry or application through this website does not constitute loan approval or a commitment to lend. All loans are subject to credit approval, appraisal, title review, underwriting guidelines, and investor/program requirements.',
    ],
  },
  {
    heading: 'Contact Information',
    body: [
      'Bluebird Mortgage',
      'Hilltop Circle, LLC DBA Bluebird Mortgage',
      '2301 E Pikes Peak Ave Ste 326',
      'Colorado Springs, CO 80909',
      'BluebirdMortgage.com',
    ],
  },
]

export default function WebsiteDisclosuresPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <article className="rounded-xl border border-gray-200 bg-white p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Website Disclosures
          </h1>
          <p className="mt-6 text-gray-700 leading-7">
            These disclosures apply to your use of BluebirdMortgage.com and are intended to provide
            transparency regarding mortgage-related information, communications, and legal notices.
          </p>

          <div className="mt-8 space-y-8">
            {disclosureSections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-gray-700 leading-7">
                  {section.body?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="list-disc pl-6 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}
