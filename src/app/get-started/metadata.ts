import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Pre-Qualified for Your Dream Home | Bluebird Mortgage',
  description: 'Find out how much home you can afford in minutes. Get pre-qualified with our simple process and expert guidance.',
  openGraph: {
    title: 'Get Pre-Qualified for Your Dream Home | Bluebird Mortgage',
    description: 'Find out how much home you can afford in minutes. Get pre-qualified with our simple process and expert guidance.',
    type: 'website',
    url: 'https://bluebirdmortgage.com/get-started',
    images: [
      {
        url: '/images/homebuyer.jpg',
        width: 1200,
        height: 630,
        alt: 'Get Pre-Qualified for Your Dream Home - Bluebird Mortgage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Pre-Qualified for Your Dream Home | Bluebird Mortgage',
    description: 'Find out how much home you can afford in minutes. Get pre-qualified with our simple process.',
    images: ['/images/homebuyer.jpg'],
  },
  alternates: {
    canonical: 'https://bluebirdmortgage.com/get-started',
  },
  robots: {
    index: true,
    follow: true,
  },
}; 