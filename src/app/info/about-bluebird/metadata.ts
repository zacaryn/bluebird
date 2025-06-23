import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Bluebird Mortgage | David Jeffrey NMLS# 2269251 | Colorado Springs Mortgage Broker',
  description: 'Learn about Bluebird Mortgage and owner David Jeffrey NMLS# 2269251. Expert mortgage services in Colorado Springs with personalized solutions, competitive rates, and exceptional customer service since 2020.',
  keywords: 'about Bluebird Mortgage, David Jeffrey mortgage broker, Colorado Springs mortgage company, NMLS 2269251, mortgage professional Colorado Springs, loan officer biography, mortgage broker experience',
  openGraph: {
    title: 'About Bluebird Mortgage | David Jeffrey NMLS# 2269251 | Colorado Springs',
    description: 'Meet David Jeffrey and learn about Bluebird Mortgage. Expert mortgage services in Colorado Springs with personalized solutions and competitive rates.',
    type: 'article',
    url: 'https://bluebirdmortgage.com/info/about-bluebird',
    images: [
      {
        url: '/images/david.png',
        width: 1200,
        height: 630,
        alt: 'David Jeffrey - Bluebird Mortgage Owner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Bluebird Mortgage | David Jeffrey NMLS# 2269251',
    description: 'Meet David Jeffrey and learn about Bluebird Mortgage. Expert mortgage services in Colorado Springs.',
    images: ['/images/david.png'],
  },
  alternates: {
    canonical: 'https://bluebirdmortgage.com/info/about-bluebird',
  },
}; 