import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'First Time Homebuyer Colorado Springs | Stop Renting Start Owning | Bluebird Mortgage',
  description: 'Ready to stop renting? Learn how to buy your first home in Colorado Springs with low down payment options. FHA loans from 3.5% down, VA loans $0 down, and first-time buyer programs.',
  keywords: 'first time homebuyer Colorado Springs, stop renting buy home, FHA loans, VA loans, down payment assistance, rent vs buy, David Jeffrey, NMLS 2269251',
  openGraph: {
    title: 'First Time Homebuyer Colorado Springs | Stop Renting Start Owning | Bluebird Mortgage',
    description: 'Make the leap from renting to homeownership in Colorado Springs. First-time buyer programs make it easier and more affordable than you think.',
    type: 'website',
    url: 'https://bluebirdmortgage.com/landing/first-time-buyer',
    images: [
      {
        url: '/images/homebuyer.jpg',
        width: 1200,
        height: 630,
        alt: 'First Time Homebuyer Colorado Springs - Bluebird Mortgage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Time Homebuyer Colorado Springs | Stop Renting Start Owning',
    description: 'Ready to stop renting and start owning? Expert guidance for first-time homebuyers in Colorado Springs.',
    images: ['/images/homebuyer.jpg'],
  },
  alternates: {
    canonical: 'https://bluebirdmortgage.com/landing/first-time-buyer',
  },
  robots: {
    index: true,
    follow: true,
  },
}; 