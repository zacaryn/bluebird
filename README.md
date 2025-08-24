# Bluebird Mortgage Website – Internal Overview

This repository contains the production website for Bluebird Mortgage. It is a statically exported Next.js application with a lightweight Node service used for lead/inquiry processing via AWS. The codebase emphasizes performance, maintainability, and strong on-page SEO for mortgage-related queries in Colorado.

## What was built

- Responsive marketing website with program-specific content (VA, FHA, Conventional, Refinance, Reverse, etc.)
- Conversion paths: lead capture (Get Started) and contact forms
- Admin views for inquiries/leads (protected)
- Robust SEO implementation (Next.js metadata API, Open Graph, Twitter cards, JSON-LD)
- Static export for fast delivery behind an Nginx front-end with 301 host canonicalization

## Tech stack

- Next.js (App Router), TypeScript, TailwindCSS
- Static export (`output: 'export'`) for the web UI
- Node/Express service in `server.js` for API endpoints
- AWS: DynamoDB (leads/inquiries), Cognito (admin auth), SES via `lib/send-email.js`

## Architecture highlights

- UI: `src/app` directory with route-level metadata and JSON-LD where appropriate
- Global SEO: `src/app/layout.tsx` sets defaults (Open Graph, Twitter, verification, WebSite/Organization schema)
- Components: reusable UI in `src/components` (SEO head, forms, navigation, etc.)
- API service: `server.js` exposes `/api/*` routes, integrates with AWS, and includes rate limiting and JWT verification
- Static assets and SEO files: `public/` (robots.txt, sitemap.xml, manifests, images)

## SEO implementation

- Next.js Metadata API for titles/descriptions per page and Open Graph/Twitter tags
- Structured data: `WebSite`, `Organization`, `WebPage`, `FAQPage`, and relevant `ImageObject` JSON-LD
- Canonicals and site name: configured to the apex domain; `alternateName` provided to reinforce brand sitename in Google
- robots and sitemap: explicit `robots.txt` and `sitemap.xml` maintained in `public/`

## Deployment notes

- Static build deployed behind Nginx with 301 redirect from `www` to apex domain
- Ensure environment variables for AWS and JWT are provided for the Node service
- Image optimization is disabled for static export; assets are served from `public/`

## Environment/configuration

- `next.config.js`: static export, trailingSlash enabled, site URL configured
- `server.js`: expects AWS credentials, Cognito client ID, and `JWT_SECRET`

## Ownership and confidentiality

Copyright (c) 2025 HH6 Influential, LLC. All rights reserved.

This code is proprietary and confidential.
No permission is granted to use, copy, modify, or distribute this software
without prior written consent from HH6 Influential, LLC.
