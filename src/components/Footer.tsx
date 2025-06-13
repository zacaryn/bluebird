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
    { name: 'Contact', href: '/contact' },
    { name: 'Apply Now', href: '/apply' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
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
              <p>NMLS# 2269251</p>
              <p>
                <a href="tel:719-308-1620" className="hover:text-white">719-308-1620</a>
              </p>
              <p>Monday - Friday: 8am - 7pm</p>
              <p>Saturday & Sunday: By appointment only</p>
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
                    <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Bluebird Mortgage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 