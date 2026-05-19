import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Terms of Use | Bluebird Mortgage',
  description:
    'Read the Terms of Use for Bluebird Mortgage, including communication consent, licensing information, and important legal disclosures.',
  alternates: {
    canonical: 'https://bluebirdmortgage.com/terms-of-use',
  },
}

const breadcrumbItems = [{ name: 'Terms of Use', href: '/terms-of-use', current: true }]

type TermsSection = {
  heading: string
  body: string[]
  bullets?: string[]
  contactLines?: string[]
  footer?: string
}

const termsSections: TermsSection[] = [
  {
    heading: 'Informational Purposes Only',
    body: [
      'The information provided on this website is for general informational purposes only and should not be considered financial, legal, tax, or mortgage advice. Loan programs, interest rates, terms, and conditions are subject to change without notice.',
      'Nothing on this website constitutes a commitment to lend or guarantee of financing.',
    ],
  },
  {
    heading: 'Licensing Information',
    body: [
      'Bluebird Mortgage operates as a mortgage broker and/or lender where properly licensed. All mortgage services are subject to applicable state and federal laws and regulations.',
      'Consumers should verify licensing information through the Nationwide Multistate Licensing System (NMLS).',
    ],
  },
  {
    heading: 'No Guarantee of Approval',
    body: [
      'Submission of information through this website does not guarantee loan approval, interest rate availability, or specific loan terms.',
      'All applications are subject to underwriting guidelines, verification of information, credit approval, appraisal requirements, and program eligibility.',
    ],
  },
  {
    heading: 'User Responsibilities',
    body: ['By using this website, you agree that you will not:'],
    bullets: [
      'Use the website for unlawful purposes',
      'Attempt to gain unauthorized access to systems or data',
      'Submit false or misleading information',
      'Interfere with the operation or security of the website',
      'Use automated tools to scrape or copy website content',
    ],
    footer:
      'We reserve the right to restrict or terminate access to users who violate these terms.',
  },
  {
    heading: 'Communication Consent',
    body: [
      'By submitting your contact information through this website, you consent to being contacted by Bluebird Mortgage via phone call, email, and text message regarding mortgage products and services, even if your number appears on a federal or state Do Not Call list.',
      'Message and data rates may apply. Consent is not a condition of purchase.',
      'You may opt out of marketing communications at any time by following unsubscribe instructions or replying STOP to text messages.',
    ],
  },
  {
    heading: 'Third-Party Services and Links',
    body: [
      'This website may contain links to third-party websites or services. Bluebird Mortgage is not responsible for the content, accuracy, privacy practices, or availability of third-party websites.',
      'Any reliance on third-party content is at your own risk.',
    ],
  },
  {
    heading: 'Intellectual Property',
    body: [
      'All website content, including text, graphics, logos, branding, images, and design elements, is the property of Bluebird Mortgage unless otherwise noted and may not be copied, reproduced, or distributed without written permission.',
    ],
  },
  {
    heading: 'Disclaimer of Warranties',
    body: [
      'This website and its content are provided "as is" and "as available" without warranties of any kind, express or implied.',
      'We do not guarantee that the website will be uninterrupted, error-free, secure, or free of viruses or harmful components.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, Bluebird Mortgage shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or related to the use of this website or reliance on information contained herein.',
    ],
  },
  {
    heading: 'Privacy',
    body: [
      'Your use of this website is also governed by our Privacy Policy, which explains how information is collected, used, and protected.',
    ],
  },
  {
    heading: 'Changes to Terms',
    body: [
      'Bluebird Mortgage reserves the right to modify these Terms of Use at any time without prior notice. Continued use of the website after changes are posted constitutes acceptance of the revised terms.',
    ],
  },
  {
    heading: 'Governing Law',
    body: [
      'These Terms of Use shall be governed by and interpreted in accordance with the laws of the State of Colorado, without regard to conflict of law principles.',
    ],
  },
  {
    heading: 'Contact Information',
    body: ['Bluebird Mortgage'],
    contactLines: [
      '2301 E Pikes Peak Ave Ste 326',
      'Colorado Springs, CO 80909',
      'Phone: 719-428-1038',
      'Website: https://bluebirdmortgage.com',
    ],
    footer: 'If you have questions regarding these Terms of Use, please contact us directly.',
  },
]

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <article className="rounded-xl border border-gray-200 bg-white p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Terms of Use</h1>
          <p className="mt-6 text-gray-700 leading-7">
            Welcome to Bluebird Mortgage ("Company," "we," "our," or "us"). By accessing or using
            this website, you agree to comply with and be bound by the following Terms of Use. If
            you do not agree with these terms, please do not use this website.
          </p>

          <div className="mt-8 space-y-8">
            {termsSections.map((section, index) => (
              <section key={section.heading} aria-labelledby={`terms-section-${index + 1}`}>
                <h2
                  id={`terms-section-${index + 1}`}
                  className="text-xl sm:text-2xl font-semibold text-gray-900"
                >
                  {index + 1}. {section.heading}
                </h2>
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
                  {section.contactLines ? (
                    <div className="space-y-1">
                      {section.contactLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  ) : null}
                  {section.footer ? <p>{section.footer}</p> : null}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}
