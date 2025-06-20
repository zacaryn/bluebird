/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for deployment
  output: 'export',
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://bluebirdmortgage.com',
    NEXT_PUBLIC_COGNITO_CLIENT_ID: '47cqd1ogpsuicbd79aajigcl6',
  },
  
  // Image optimization (disabled for static export)
  images: {
    unoptimized: true
  },
  
  // Production optimizations
  poweredByHeader: false,
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  
  // Trailing slash for static export
  trailingSlash: true,
};

module.exports = nextConfig; 