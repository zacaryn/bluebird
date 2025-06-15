'use client'

import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { Transition } from '@headlessui/react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    {
      name: 'Loan Programs',
      items: [
        { name: 'VA Loans', href: '/loans/va-loans' },
        { name: 'FHA Loans', href: '/loans/fha-loans' },
        { name: 'Conventional', href: '/loans/conventional' },
        { name: 'Reverse Mortgage', href: '/loans/reverse-mortgage' },
        { name: 'New Construction', href: '/loans/new-construction' },
        { name: 'Refinance', href: '/loans/refinance' },
      ],
    },
    {
      name: 'Resources',
      items: [
        { name: 'First-Time Homebuyer', href: '/info/first-time-homebuyer' },
        { name: 'Down Payment Assistance', href: '/loans/down-payment-assistance' },
        { name: 'About Bluebird', href: '/info/about-bluebird' },
        { name: 'Trust Bluebird', href: '/info/trust-bluebird' },
      ],
    },
    { name: 'Calculator', href: '/calculator' },
    { name: 'Contact', href: '/contact' },
    { name: 'Apply Now', href: 'https://www.blink.mortgage/app/signup/p/bluebirdmortgage/davidjeffrey', highlight: true, target: '_blank', rel: 'noopener noreferrer' },
  ],
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-white ${isScrolled ? 'shadow-md' : ''} transition-shadow duration-200`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1">
            <span className="sr-only">Bluebird Mortgage</span>
            <Image src="/images/logo.png" alt="Bluebird Mortgage" width={320} height={80} className="h-20 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 items-center">
          {navigation.main.map((item) => (
            item.items ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center text-base font-medium leading-6 text-gray-900 hover:text-[#00659C] py-1"
                  onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                >
                  {item.name}
                  <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                </button>
                <Transition
                  show={openDropdown === item.name}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <div className="absolute z-10 -ml-4 mt-2 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-4 bg-white px-5 py-6 sm:gap-6 sm:p-8">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{subItem.name}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium ${
                  item.highlight
                    ? 'rounded bg-[#00659C] px-4 py-2 text-white shadow-sm hover:bg-[#005483] transition-colors'
                    : 'text-gray-900 hover:text-[#00659C] py-1'
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1">
              <span className="sr-only">Bluebird Mortgage</span>
              <Image src="/images/logo.png" alt="Bluebird Mortgage" width={320} height={80} className="h-16 w-auto" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.main.map((item) => (
                  item.items ? (
                    <div key={item.name} className="space-y-2">
                      <button
                        className="flex w-full items-center justify-between text-sm font-semibold leading-6 text-gray-900"
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDownIcon className={`h-5 w-5 ${openDropdown === item.name ? 'rotate-180' : ''} transition-transform duration-200`} />
                      </button>
                      <Transition
                        show={openDropdown === item.name}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="ml-4 space-y-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-sm text-gray-600 hover:text-[#00659C]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </Transition>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block text-sm font-semibold leading-6 ${
                        item.highlight
                          ? 'rounded-md bg-[#00659C] px-3.5 py-2.5 text-white shadow-sm hover:bg-blue-700 text-center'
                          : 'text-gray-900 hover:text-[#00659C]'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
} 