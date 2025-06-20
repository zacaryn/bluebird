'use client';

import Head from 'next/head';
import Script from 'next/script';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  schema?: object;
  noindex?: boolean;
  keywords?: string;
}

export default function SEOHead({
  title,
  description,
  canonical,
  image = '/images/bluebird-mortgage-og-image.jpg',
  imageAlt = 'Bluebird Mortgage - Colorado Springs Mortgage Lender',
  schema,
  noindex = false,
  keywords
}: SEOHeadProps) {
  const siteUrl = 'https://bluebirdmortgage.com';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        
        {/* Canonical URL */}
        <link rel="canonical" href={fullUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bluebird Mortgage" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:image:alt" content={imageAlt} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullImageUrl} />
        <meta name="twitter:image:alt" content={imageAlt} />
        
        {/* Additional SEO Meta */}
        <meta name="author" content="David Jeffrey, Bluebird Mortgage" />
        <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
        
        {/* Geo tags */}
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content="Colorado Springs" />
        <meta name="geo.position" content="38.8339;-104.8214" />
        <meta name="ICBM" content="38.8339, -104.8214" />
        
        {/* Mobile */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#00659C" />
      </Head>
      
      {/* Structured Data */}
      {schema && (
        <Script
          id="page-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      )}
    </>
  );
} 