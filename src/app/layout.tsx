import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bluebird Mortgage | Colorado Springs Mortgage Lender | David Jeffrey NMLS# 2269251",
    template: "%s | Bluebird Mortgage"
  },
  description: "Expert mortgage services in Colorado Springs with David Jeffrey (NMLS# 2269251). Specializing in VA loans, FHA loans, conventional mortgages, and refinancing. Fast approvals, competitive rates, personalized service.",
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
    title: "Bluebird Mortgage | Colorado Springs Mortgage Lender | David Jeffrey",
    description: "Expert mortgage services in Colorado Springs with David Jeffrey (NMLS# 2269251). Specializing in VA loans, FHA loans, conventional mortgages, and refinancing.",
    images: [
      {
        url: "/images/bluebird-mortgage-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebird Mortgage - Colorado Springs Mortgage Lender",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluebird Mortgage | Colorado Springs Mortgage Lender",
    description: "Expert mortgage services in Colorado Springs. VA loans, FHA loans, conventional mortgages, and refinancing with David Jeffrey NMLS# 2269251.",
    images: ["/images/bluebird-mortgage-og-image.jpg"],
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
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://bluebirdmortgage.com/#website",
      "url": "https://bluebirdmortgage.com/",
      "name": "Bluebird Mortgage",
      "description": "Expert mortgage services in Colorado Springs with competitive rates and personalized service.",
      "publisher": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://bluebirdmortgage.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://bluebirdmortgage.com/#organization",
      "name": "Bluebird Mortgage",
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
      "description": "Expert mortgage lender in Colorado Springs specializing in VA loans, FHA loans, conventional mortgages, and refinancing services.",
      "sameAs": [
        "https://www.facebook.com/bluebirdmtg/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-719-428-1038",
        "contactType": "customer service",
        "areaServed": ["US", "Colorado", "Colorado Springs"],
        "availableLanguage": ["English"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "19:00"
        }
      },
      "founder": {
        "@type": "Person",
        "name": "David Jeffrey",
        "jobTitle": "Licensed Mortgage Loan Officer",
        "description": "NMLS# 2269251"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://bluebirdmortgage.com/#localbusiness",
      "name": "Bluebird Mortgage",
      "image": [
        "https://bluebirdmortgage.com/images/bluebird-mortgage-og-image.jpg",
        "https://bluebirdmortgage.com/images/logo.png"
      ],
      "url": "https://bluebirdmortgage.com/",
      "telephone": "+1-719-428-1038",
      "email": "david@bluebirdmortgage.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Colorado Springs Area",
        "addressLocality": "Colorado Springs",
        "addressRegion": "Colorado",
        "postalCode": "80901",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.8339,
        "longitude": -104.8214
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "17:00",
          "description": "By appointment only"
        }
      ],
      "priceRange": "Free consultation",
      "currenciesAccepted": "USD",
      "description": "Bluebird Mortgage specializes in making the mortgage process simple and straightforward in Colorado Springs. Expert guidance for VA loans, FHA loans, conventional loans, refinancing, and first-time homebuyers.",
      "areaServed": [
        {
          "@type": "Place",
          "name": "Colorado Springs"
        },
        {
          "@type": "Place", 
          "name": "El Paso County"
        },
        {
          "@type": "Place",
          "name": "Colorado"
        }
      ],
      "serviceType": "Mortgage Services",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mortgage Loan Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "VA Loans",
              "description": "Veterans Affairs home loans with no down payment and competitive rates"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "FHA Loans",
              "description": "Federal Housing Administration loans with low down payment options"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Conventional Loans",
              "description": "Traditional mortgage loans with flexible terms and competitive rates"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Refinancing",
              "description": "Mortgage refinancing to lower rates or access home equity"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/bluebirdmtg/"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://bluebirdmortgage.com/#service",
      "name": "Mortgage Lending Services",
      "provider": {
        "@id": "https://bluebirdmortgage.com/#localbusiness"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Colorado Springs, CO"
        },
        {
          "@type": "Place",
          "name": "El Paso County, CO"
        }
      ],
      "serviceType": "Financial Services",
      "category": "Mortgage Lender"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
        <link rel="canonical" href="https://bluebirdmortgage.com" />
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content="Colorado Springs" />
        <meta name="geo.position" content="38.8339;-104.8214" />
        <meta name="ICBM" content="38.8339, -104.8214" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
