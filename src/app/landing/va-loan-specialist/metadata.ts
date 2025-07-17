import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VA Loan Specialist Colorado Springs | $0 Down Payment | Veterans Home Loans | Bluebird Mortgage',
  description: 'VA loan specialist in Colorado Springs. Veterans buy homes with $0 down, no PMI, competitive rates. Expert service for military families. David Jeffrey NMLS# 2269251.',
  keywords: 'VA loans Colorado Springs, VA loan specialist, veterans home loans, zero down payment, no PMI, military loans, David Jeffrey, NMLS 2269251',
  openGraph: {
    title: 'VA Loan Specialist Colorado Springs | $0 Down Payment for Veterans | Bluebird Mortgage',
    description: 'Served our country? Now let us serve you. Get your VA home loan with zero down payment, no PMI, and competitive rates.',
    type: 'website',
    url: 'https://bluebirdmortgage.com/landing/va-loan-specialist',
    images: [
      {
        url: '/images/valoan.jpg',
        width: 1200,
        height: 630,
        alt: 'VA Loan Specialist Colorado Springs - Bluebird Mortgage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VA Loan Specialist Colorado Springs | $0 Down Payment for Veterans',
    description: 'VA loan specialist serving military families in Colorado Springs. Zero down payment, no PMI, competitive rates.',
    images: ['/images/valoan.jpg'],
  },
  alternates: {
    canonical: 'https://bluebirdmortgage.com/landing/va-loan-specialist',
  },
  robots: {
    index: true,
    follow: true,
  },
}; 