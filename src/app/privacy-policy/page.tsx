import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy | Bluebird Mortgage',
  description:
    'Read Bluebird Mortgage privacy practices, including what data we collect, how we use it, and your privacy choices.',
  alternates: {
    canonical: 'https://bluebirdmortgage.com/privacy-policy',
  },
}

const breadcrumbItems = [{ name: 'Privacy Policy', href: '/privacy-policy', current: true }]

type PrivacySection = {
  heading: string
  body?: string[]
  bullets?: string[]
}

const privacySections: PrivacySection[] = [
  {
    heading: 'Information We Collect',
    body: ['We may collect personal information that you voluntarily provide, including but not limited to:'],
    bullets: [
      'Name',
      'Phone number',
      'Email address',
      'Property information',
      'Loan or financial information submitted through forms',
      'Any additional information you provide through contact forms or communications',
    ],
  },
  {
    heading: 'Automatically Collected Information',
    body: ['We may also automatically collect certain technical information, including:'],
    bullets: [
      'IP address',
      'Browser type',
      'Device information',
      'Pages visited',
      'Referral sources',
      'Cookies and website usage data',
    ],
  },
  {
    heading: 'How We Use Your Information',
    body: ['We may use your information to:'],
    bullets: [
      'Respond to inquiries',
      'Provide mortgage-related services',
      'Communicate regarding loan products or services',
      'Improve our website and customer experience',
      'Send marketing communications',
      'Comply with legal and regulatory requirements',
    ],
  },
  {
    heading: 'Sharing of Information',
    body: [
      'We do not sell your personal information.',
      'We may share information with trusted third parties when necessary to provide services, including:',
    ],
    bullets: [
      'Mortgage lenders',
      'Loan processing providers',
      'Credit reporting agencies',
      'Technology and website service providers',
      'Marketing and CRM platforms',
      'Government or regulatory agencies when required by law',
    ],
  },
  {
    heading: 'Cookies and Tracking Technologies',
    body: [
      'Our Website may use cookies and similar technologies to improve functionality, analyze traffic, and support marketing efforts. You may adjust your browser settings to disable cookies; however, some features of the Website may not function properly.',
    ],
  },
  {
    heading: 'Data Security',
    body: [
      'We use reasonable administrative, technical, and physical safeguards designed to protect your information. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    heading: 'Third-Party Links',
    body: [
      'Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.',
    ],
  },
  {
    heading: 'SMS and Email Communications',
    body: [
      'By providing your contact information, you consent to receive communications from Bluebird Mortgage, including calls, emails, and text messages regarding mortgage products and services. Message and data rates may apply. You may opt out of marketing communications at any time.',
    ],
  },
  {
    heading: 'Your Choices',
    body: ['You may request to:'],
    bullets: [
      'Access your personal information',
      'Correct inaccurate information',
      'Request deletion of certain information',
      'Opt out of marketing communications',
    ],
  },
  {
    heading: 'Children’s Privacy',
    body: [
      'This Website is not intended for individuals under the age of 18, and we do not knowingly collect information from children.',
    ],
  },
  {
    heading: 'Changes to This Privacy Policy',
    body: [
      'We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date.',
    ],
  },
  {
    heading: 'Contact Information',
    body: [
      'Bluebird Mortgage',
      'Hilltop Circle, LLC DBA Bluebird Mortgage',
      'Colorado Springs, Colorado',
      'Website: https://bluebirdmortgage.com',
      'If you have questions regarding this Privacy Policy, please contact us through the Website contact form or by phone/email listed on the Website.',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <article className="rounded-xl border border-gray-200 bg-white p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
          <p className="mt-3 text-base text-gray-600">Effective Date: May 20, 2026</p>
          <p className="mt-6 text-gray-700 leading-7">
            At Bluebird Mortgage ("Company," "we," "our," or "us"), your privacy is important to us.
            This Privacy Policy explains how we collect, use, protect, and share information collected
            through our website, https://bluebirdmortgage.com ("Website").
          </p>
          <p className="mt-3 text-gray-700 leading-7">
            By using this Website, you consent to the practices described in this Privacy Policy.
          </p>

          <div className="mt-8 space-y-8">
            {privacySections.map((section) => (
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
