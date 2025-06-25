import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Script from "next/script";
import ConditionalLayout from "@/components/ConditionalLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bluebird Mortgage | Colorado Springs Mortgage Lender | David Jeffrey NMLS# 2269251",
    template: "%s | Bluebird Mortgage"
  },
  keywords: "mortgage lender Colorado Springs, VA loans, FHA loans, conventional loans, mortgage rates Colorado, home financing, refinancing, David Jeffrey mortgage, NMLS 2269251, Colorado mortgage broker",
  authors: [{ name: "David Jeffrey", url: "https://bluebirdmortgage.com" }],
  creator: "Bluebird Mortgage",
  publisher: "Bluebird Mortgage",
  metadataBase: new URL("https://bluebirdmortgage.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bluebirdmortgage.com",
    siteName: "Bluebird Mortgage",
    title: "Bluebird Mortgage",
    description: "Colorado Springs Mortgage Lender | David Jeffrey NMLS# 2269251 | Expert VA loans, FHA loans, conventional mortgages, and refinancing services.",
    images: [
      {
        url: "/images/bluebird-mortgage-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebird Mortgage - Colorado Springs Mortgage Lender",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluebird Mortgage",
    description: "Colorado Springs Mortgage Lender | David Jeffrey NMLS# 2269251 | Expert VA loans, FHA loans, conventional mortgages, and refinancing services.",
    images: ["/images/bluebird-mortgage-og-image.jpg"],
    creator: "@bluebirdmtg",
    site: "@bluebirdmtg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Bluebird Mortgage",
  "url": "https://bluebirdmortgage.com/",
  "description": "Expert mortgage services in Colorado Springs with David Jeffrey NMLS# 2269251. Specializing in VA loans, FHA loans, conventional mortgages, and refinancing.",
  "publisher": {
    "@type": "Organization",
    "name": "Bluebird Mortgage",
    "legalName": "Bluebird Mortgage LLC",
    "url": "https://bluebirdmortgage.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bluebirdmortgage.com/images/logo.png",
      "width": 320,
      "height": 80
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://bluebirdmortgage.com/images/bluebird-mortgage-og-image.jpg",
      "width": 1200,
      "height": 630
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1347 N Prospect St",
      "addressLocality": "Colorado Springs",
      "addressRegion": "Colorado",
      "postalCode": "80903",
      "addressCountry": "US"
    },
    "telephone": "+1-719-428-1038",
    "email": "david@bluebirdmortgage.com",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Colorado Springs",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Colorado"
        }
      },
      {
        "@type": "AdministrativeArea",
        "name": "El Paso County",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Colorado"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "12",
      "bestRating": "5",
      "worstRating": "1"
    },
    "founder": {
      "@type": "Person",
      "name": "David Jeffrey",
      "jobTitle": "Licensed Mortgage Loan Officer",
      "description": "NMLS# 2269251"
    },
    "sameAs": [
      "https://www.facebook.com/bluebirdmtg/"
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Enhanced Social Media Meta Tags */}
        <meta property="og:image:secure_url" content="https://bluebirdmortgage.com/images/bluebird-mortgage-og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:image:alt" content="Bluebird Mortgage - Colorado Springs Mortgage Lender" />
        
        {/* Discord/Embed specific */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        
        {/* Additional link preview optimization */}
        <meta property="og:brand" content="Bluebird Mortgage" />
        <meta property="og:site_name" content="Bluebird Mortgage" />
        <meta property="business:contact_data:locality" content="Colorado Springs" />
        <meta property="business:contact_data:region" content="Colorado" />
        <meta property="business:contact_data:phone_number" content="+1-719-428-1038" />
        
        {/* Platform-specific optimizations */}
        <meta name="apple-mobile-web-app-title" content="Bluebird Mortgage" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="application-name" content="Bluebird Mortgage" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Favicon Links for Better Compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        <link rel="canonical" href="https://bluebirdmortgage.com" />
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content="Colorado Springs" />
        <meta name="geo.position" content="38.8339;-104.8214" />
        <meta name="ICBM" content="38.8339, -104.8214" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Critical Schema Markup - In Head for Immediate Crawling */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
