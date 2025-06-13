import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

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

export default function Home() {
  return (
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
  )
}
