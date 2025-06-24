# Schema Implementation Plan - Bluebird Mortgage
*Complete audit and fix plan for JSON-LD structured data*

## Executive Summary

This document outlines the complete plan to fix all JSON-LD schema implementations across the Bluebird Mortgage website. Based on audit results, **16 pages need schema fixes** and **1 page needs schema added**.

### Key Issues Found:
1. **Implementation Method**: All pages use Next.js `Script` component without `beforeInteractive` strategy
2. **ID Conflicts**: Multiple pages create duplicate organization references
3. **Missing WebPage Schema**: Some pages lack proper WebPage markup
4. **Validation Gaps**: Schema hasn't been validated with Google tools

## Complete Page Inventory

### Pages WITH Existing Schema (Need Fixes)

| Page | Current Schema Types | Issues | Priority |
|------|---------------------|---------|----------|
| `/` (Homepage) | WebPage, FAQPage | Script strategy, ID conflicts | **HIGH** |
| `/layout.tsx` | WebSite, Organization, FinancialService | Script strategy, duplicate org data | **CRITICAL** |
| `/info/` | WebPage | Script strategy | Medium |
| `/info/about-bluebird/` | EducationalOrganization | Script strategy | Medium |
| `/info/trust-bluebird/` | Organization, Service, FAQPage | Script strategy, duplicate org | Medium |
| `/info/first-time-homebuyer/` | FAQPage | Script strategy | Medium |
| `/loans/` | Multiple Service schemas | Script strategy | **HIGH** |
| `/loans/conventional/` | Service, FAQPage | Script strategy, org reference | **HIGH** |
| `/loans/va-loans/` | Service, FAQPage | Script strategy, org reference | **HIGH** |
| `/loans/fha-loans/` | Service, FAQPage | Script strategy, org reference | **HIGH** |
| `/loans/refinance/` | Service, FAQPage | Script strategy, org reference | High |
| `/loans/new-construction/` | Service, FAQPage | Script strategy, org reference | High |
| `/loans/reverse-mortgage/` | Service, FAQPage | Script strategy, org reference | High |
| `/loans/down-payment-assistance/` | Service, FAQPage | Script strategy, org reference | High |
| `/contact/` | FAQPage | Script strategy | Medium |
| `/calculator/` | FAQPage | Script strategy | Medium |

### Pages WITHOUT Schema (Need Schema Added)

| Page | Needed Schema Types | Priority |
|------|-------------------|----------|
| `/get-started/` | WebPage, Service | **HIGH** |

### Pages NOT Requiring Schema

| Page | Reason |
|------|--------|
| `/admin/*` | Internal admin pages, not public-facing |
| `/apply/*` | Directory appears empty |

## Implementation Strategy

### Phase 1: Core Foundation (Week 1)
**CRITICAL - Must be done first to avoid conflicts**

1. **Fix Layout Schema** (`src/app/layout.tsx`)
   - Convert to regular `<script>` tags  
   - Establish single source of truth for Organization
   - Create proper WebSite schema with unique IDs

2. **Validate Core Setup**
   - Test layout schema with Google Rich Results Test
   - Verify no duplicate organizations appear

### Phase 2: High-Priority Pages (Week 1-2)
**Key landing pages and loan products**

3. **Homepage** (`src/app/page.tsx`)
   - Fix Script implementation
   - Reference layout Organization properly
   - Validate WebPage and FAQPage schema

4. **Loan Product Pages** (All `/loans/*` pages)
   - Fix Script implementation on all 8 loan pages
   - Ensure proper Service schema structure
   - Reference main Organization (not duplicate)
   - Validate FAQPage schema

5. **Add Get Started Schema** (`src/app/get-started/page.tsx`)
   - Add WebPage schema
   - Add Service schema for mortgage application process

### Phase 3: Supporting Pages (Week 2)
**Info and utility pages**

6. **Info Section Pages** (All `/info/*` pages)
   - Fix Script implementation
   - Validate existing schema types
   - Ensure proper Organization references

7. **Utility Pages** (`/contact/`, `/calculator/`)
   - Fix Script implementation
   - Validate FAQPage schema

### Phase 4: Validation & Testing (Week 2-3)
**Comprehensive testing and monitoring**

8. **Complete Validation**
   - Test all pages with Google Rich Results Test
   - Submit to Google Search Console
   - Monitor for structured data errors

9. **Performance Verification**
   - Confirm no impact on page load times
   - Verify proper crawling by Googlebot

## Technical Implementation Details

### Standard Schema Implementation Pattern

```typescript
// ✅ CORRECT: Use regular <script> tag in page component
export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://bluebirdmortgage.com/page-path#webpage',
    'url': 'https://bluebirdmortgage.com/page-path',
    'name': 'Page Title',
    'isPartOf': {
      '@id': 'https://bluebirdmortgage.com/#website'
    },
    'about': {
      '@id': 'https://bluebirdmortgage.com/#organization'  
    }
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Page content */}
    </section>
  );
}
```

### Organization Reference Pattern

```typescript
// ✅ CORRECT: Reference the main organization, don't duplicate
"provider": {
  "@id": "https://bluebirdmortgage.com/#organization"
},
// ❌ WRONG: Don't create duplicate organization data
"provider": {
  "@type": "LocalBusiness",
  "name": "Bluebird Mortgage",
  // ... duplicate data
}
```

### Schema Types by Page Category

#### Layout (Global)
- **WebSite**: Main site information
- **Organization**: Company details (single source of truth)
- **FinancialService**: Core business type

#### Homepage
- **WebPage**: Homepage specifics
- **FAQPage**: Homepage FAQ section

#### Loan Product Pages
- **WebPage**: Page information
- **Service**: Specific loan product
- **FAQPage**: Product-specific FAQs

#### Info Pages
- **WebPage**: Page information
- **Organization/EducationalOrganization**: Company info (about page)
- **FAQPage**: Where applicable

#### Utility Pages
- **WebPage**: Page information  
- **FAQPage**: FAQ sections

## Validation Checklist

### Pre-Implementation
- [ ] Backup current schema implementations
- [ ] Document current Google Search Console performance
- [ ] Identify all pages with schema (completed above)

### During Implementation
- [ ] Fix layout.tsx first (Phase 1)
- [ ] Test each page with Google Rich Results Test
- [ ] Verify no duplicate organization entries
- [ ] Confirm proper ID referencing

### Post-Implementation  
- [ ] Validate all pages pass Rich Results Test
- [ ] Submit updated sitemaps to Google Search Console
- [ ] Monitor for structured data errors
- [ ] Track organic traffic impact (should be neutral/positive)

## Risk Mitigation

### Low-Risk Changes
- Converting Script component to regular script tags
- Adding missing WebPage schema
- Fixing ID references

### Medium-Risk Changes  
- Removing duplicate organization data
- Changing schema structure significantly

### Risk Prevention
1. **Implement in phases** (start with layout.tsx)
2. **Test each change** with Google tools
3. **Monitor Search Console** for errors
4. **Keep backups** of working schema

## Timeline Summary

- **Week 1**: Phase 1 (Layout) + Phase 2 (Homepage, Loans, Get-Started)
- **Week 2**: Phase 3 (Info & Utility pages) + Phase 4 (Validation)
- **Week 3**: Monitoring and refinements

## Success Metrics

### Technical Metrics
- [ ] 0 structured data errors in Google Search Console
- [ ] 100% of pages pass Google Rich Results Test
- [ ] No page load speed degradation

### SEO Metrics  
- [ ] Maintain or improve organic traffic
- [ ] Maintain or improve rich results appearance
- [ ] No increase in crawl errors

## Files to Modify

### Phase 1 (Critical)
1. `src/app/layout.tsx`

### Phase 2 (High Priority)  
2. `src/app/page.tsx`
3. `src/app/loans/page.tsx`
4. `src/app/loans/conventional/page.tsx`
5. `src/app/loans/va-loans/page.tsx`
6. `src/app/loans/fha-loans/page.tsx`
7. `src/app/loans/refinance/page.tsx`
8. `src/app/loans/new-construction/page.tsx`
9. `src/app/loans/reverse-mortgage/page.tsx`
10. `src/app/loans/down-payment-assistance/page.tsx`
11. `src/app/get-started/page.tsx` (add schema)

### Phase 3 (Medium Priority)
12. `src/app/info/page.tsx`
13. `src/app/info/about-bluebird/page.tsx`
14. `src/app/info/trust-bluebird/page.tsx`
15. `src/app/info/first-time-homebuyer/page.tsx`
16. `src/app/contact/page.tsx`
17. `src/app/calculator/page.tsx`

## Notes

- **Total Pages to Fix**: 16 existing + 1 new = 17 pages
- **Admin pages excluded**: Not public-facing, don't need schema
- **Apply directory**: Empty, no action needed
- **Implementation follows Next.js 15.3+ best practices**
- **Schema follows Schema.org 2024 standards**
- **All changes are backwards compatible**

---

*This plan ensures comprehensive schema coverage while minimizing risk and following current best practices.* 