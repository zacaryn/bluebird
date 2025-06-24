const getStartedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bluebirdmortgage.com/get-started#webpage",
      "url": "https://bluebirdmortgage.com/get-started",
      "name": "Get Pre-Qualified for Your Dream Home | Bluebird Mortgage",
      "isPartOf": {
        "@id": "https://bluebirdmortgage.com/#website"
      },
      "about": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2025-01-20",
      "description": "Find out how much home you can afford in minutes. Get pre-qualified with our simple process and expert guidance.",
      "breadcrumb": {
        "@id": "https://bluebirdmortgage.com/get-started#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bluebirdmortgage.com/get-started#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://bluebirdmortgage.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Get Started",
          "item": "https://bluebirdmortgage.com/get-started"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://bluebirdmortgage.com/get-started#service",
      "name": "Mortgage Pre-Qualification Service",
      "description": "Quick and easy mortgage pre-qualification process to help you understand your home buying power and loan options.",
      "provider": {
        "@id": "https://bluebirdmortgage.com/#organization"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Colorado Springs, CO"
        },
        {
          "@type": "Place",
          "name": "El Paso County, CO"
        },
        {
          "@type": "Place",
          "name": "Colorado"
        }
      ],
      "serviceType": "Mortgage Pre-Qualification",
      "category": "Financial Services",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Loan Programs Available",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Conventional Loans",
            "description": "Traditional financing with competitive rates and flexible terms"
          },
          {
            "@type": "Offer",
            "name": "FHA Loans",
            "description": "Government-backed loans with lower down payment requirements"
          },
          {
            "@type": "Offer",
            "name": "VA Loans",
            "description": "Special benefits for veterans and active duty military"
          },
          {
            "@type": "Offer",
            "name": "Refinancing",
            "description": "Lower your rate or access your home equity"
          },
          {
            "@type": "Offer",
            "name": "Construction Loans",
            "description": "Finance your dream home from the ground up"
          }
        ]
      },
      "audience": {
        "@type": "Audience",
        "name": "Potential Homebuyers",
        "description": "Individuals and families looking to purchase or refinance a home"
      }
    },
    {
      "@type": "WebApplication",
      "name": "Mortgage Pre-Qualification Form",
      "description": "Interactive form to help determine loan eligibility and loan program recommendations for potential homebuyers.",
      "url": "https://bluebirdmortgage.com/get-started",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Loan type recommendations",
        "Personalized loan options",
        "Quick qualification process",
        "Expert consultation connection",
        "Multiple loan program options"
      ],
      "provider": {
        "@id": "https://bluebirdmortgage.com/#organization"
      }
    }
  ]
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStartedSchema),
        }}
      />
      {children}
    </>
  );
} 