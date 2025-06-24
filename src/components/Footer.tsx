import Link from 'next/link'
import Image from 'next/image'

const navigation = {
  loanPrograms: [
    { name: 'VA Loans', href: '/loans/va-loans' },
    { name: 'FHA Loans', href: '/loans/fha-loans' },
    { name: 'Conventional', href: '/loans/conventional' },
    { name: 'Refinance', href: '/loans/refinance' },
  ],
  company: [
    { name: 'About', href: '/info/about-bluebird' },
    { name: 'Calculator', href: '/calculator' },
    { name: 'Contact', href: '/contact' },
    { name: 'Apply Now', href: 'https://www.blink.mortgage/app/signup/p/bluebirdmortgage/davidjeffrey', external: true },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Bluebird Mortgage" width={200} height={50} className="h-12 w-auto brightness-0 invert" />
            </Link>
            <div className="text-sm text-gray-300">
              <div className="mb-3">
                <p>1347 N Prospect St</p>
                <p>Colorado Springs, CO 80903</p>
              </div>
              <p>NMLS# 2269251</p>
              <p>
                <a href="tel:719-428-1038" className="hover:text-white">719-428-1038</a>
              </p>
              <p>Monday - Friday: 8am - 7pm</p>
              <p>Saturday & Sunday: By appointment only</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/bluebirdmtg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Visit Bluebird Mortgage on Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Loan Programs</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.loanPrograms.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    {item.external ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Bluebird Mortgage. All rights reserved.
          </p>
            <p className="text-xs leading-5 text-gray-500">
              Website developed by{' '}
              <a 
                href="https://hh6influential.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 underline hover:text-gray-200 hover:no-underline transition-colors"
              >
                HH6 Influential
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 