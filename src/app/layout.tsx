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
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://bluebirdmortgage.com/#website",
      "url": "https://bluebirdmortgage.com/",
      "name": "Bluebird Mortgage",
      "alternateName": "Bluebird Mortgage LLC",
      "description": "Expert mortgage services in Colorado Springs with competitive rates and personalized service. Specializing in VA loans, FHA loans, conventional mortgages, and refinancing with NMLS# 2269251.",
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "isFamilyFriendly": true,
      "keywords": "mortgage lender, VA loans, FHA loans, conventional loans, refinancing, Colorado Springs, NMLS 2269251",
      "dateModified": "2025-01-08T12:00:00-07:00",
      "accessMode": ["textual", "visual"],
      "publisher": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "about": {
        "@type": "Thing",
        "name": "Mortgage Lending Services",
        "description": "Professional mortgage lending services including VA loans, FHA loans, conventional loans, refinancing, and first-time homebuyer programs in Colorado Springs"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Homebuyers and Homeowners",
        "geographicArea": {
          "@type": "Place",
          "name": "Colorado Springs, Colorado"
        }
      },
      "mainEntity": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "Loan Programs",
          "url": "https://bluebirdmortgage.com/loans"
        },
        {
          "@type": "WebPage", 
          "name": "First-Time Homebuyer Resources",
          "url": "https://bluebirdmortgage.com/info/first-time-homebuyer"
        },
        {
          "@type": "WebPage",
          "name": "Mortgage Calculator",
          "url": "https://bluebirdmortgage.com/calculator"
        }
      ],
      "potentialAction": {
        "@type": "SubscribeAction",
        "target": "https://bluebirdmortgage.com/get-started",
        "name": "Get Started"
      },
      "significantLink": [
        "https://bluebirdmortgage.com/get-started",
        "https://bluebirdmortgage.com/loans/va-loans",
        "https://bluebirdmortgage.com/loans/fha-loans", 
        "https://bluebirdmortgage.com/loans/conventional",
        "https://bluebirdmortgage.com/loans/refinance",
        "https://bluebirdmortgage.com/info/first-time-homebuyer",
        "https://bluebirdmortgage.com/calculator",
        "https://bluebirdmortgage.com/contact"
      ],
      "copyrightYear": "2025",
      "copyrightHolder": {
        "@id": "https://bluebirdmortgage.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://bluebirdmortgage.com/#organization",
      "name": "Bluebird Mortgage",
      "alternateName": "Bluebird Mortgage LLC",
      "legalName": "Bluebird Mortgage LLC",
      "url": "https://bluebirdmortgage.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bluebirdmortgage.com/images/logo.png",
        "width": 320,
        "height": 80,
        "contentUrl": "https://bluebirdmortgage.com/images/logo.png"
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://bluebirdmortgage.com/images/bluebird-mortgage-og-image.jpg",
        "width": 1200,
        "height": 630,
        "contentUrl": "https://bluebirdmortgage.com/images/bluebird-mortgage-og-image.jpg"
      },
      "description": "Expert mortgage lender in Colorado Springs specializing in VA loans, FHA loans, conventional mortgages, and refinancing services.",
      "foundingDate": "2020-01-01",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 1,
        "maxValue": 10
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1347 N Prospect St",
        "addressLocality": "Colorado Springs",
        "addressRegion": "Colorado",
        "postalCode": "80903",
        "addressCountry": "US"
      },
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
      "email": "david@bluebirdmortgage.com",
      "telephone": "+1-719-428-1038",
      "sameAs": [
        "https://www.facebook.com/bluebirdmtg/",
        "https://g.co/kgs/kRVys2n"
      ],
      "contactPoint": [
        {
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
        {
          "@type": "ContactPoint",
          "email": "david@bluebirdmortgage.com",
          "contactType": "customer service",
          "availableLanguage": ["English"]
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "David Jeffrey",
        "jobTitle": "Licensed Mortgage Loan Officer",
        "description": "NMLS# 2269251",
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional License",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Nationwide Multistate Licensing System",
            "alternateName": "NMLS"
          },
          "identifier": "2269251"
        }
      },
      "naics": "522310",
      "isicV4": "6419",
      "knowsAbout": [
        "Mortgage Lending",
        "VA Loans", 
        "FHA Loans",
        "Conventional Loans",
        "Refinancing",
        "Real Estate Finance",
        "First-Time Homebuyer Programs",
        "Down Payment Assistance"
      ],
      "keywords": "mortgage lender, VA loans, FHA loans, conventional loans, refinancing, Colorado Springs, NMLS 2269251, first-time homebuyer",
      "slogan": "Making homeownership dreams come true in Colorado Springs"
    },
    {
      "@type": "FinancialService",
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
        "streetAddress": "1347 N Prospect St",
        "addressLocality": "Colorado Springs",
        "addressRegion": "Colorado",
        "postalCode": "80903",
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
      "feesAndCommissionsSpecification": "Free mortgage consultation and competitive rates. No upfront fees for qualified borrowers. All fees disclosed upfront in accordance with TRID requirements.",
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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mortgage Loan Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "VA Home Loans",
            "itemOffered": {
              "@type": "MortgageLoan",
              "name": "VA Loans",
              "loanType": "VA Loan",
              "description": "Veterans Affairs home loans with no down payment and competitive rates for qualified veterans and service members",
              "currency": "USD"
            }
          },
          {
            "@type": "Offer",
            "name": "FHA Home Loans", 
            "itemOffered": {
              "@type": "MortgageLoan",
              "name": "FHA Loans",
              "loanType": "FHA Loan",
              "description": "Federal Housing Administration loans with low down payment options for first-time and repeat homebuyers",
              "currency": "USD"
            }
          },
          {
            "@type": "Offer",
            "name": "Conventional Home Loans",
            "itemOffered": {
              "@type": "MortgageLoan", 
              "name": "Conventional Loans",
              "loanType": "Conventional Loan",
              "description": "Traditional mortgage loans with flexible terms and competitive rates for qualified borrowers",
              "currency": "USD"
            }
          },
          {
            "@type": "Offer",
            "name": "Mortgage Refinancing Services",
            "itemOffered": {
              "@type": "FinancialProduct",
              "name": "Refinancing",
              "description": "Mortgage refinancing to lower rates, reduce payments, or access home equity",
              "category": "Mortgage Refinancing"
            }
          }
        ]
      },
      "hasCertification": {
        "@type": "Certification",
        "name": "NMLS Licensed Mortgage Lender",
        "issuedBy": {
          "@type": "Organization",
          "name": "Nationwide Multistate Licensing System"
        }
      },
      "serviceType": "Mortgage Lending",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "12",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/bluebirdmtg/",
        "https://g.co/kgs/kRVys2n"
      ]
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
      </head>
      <body className={inter.className}>
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
