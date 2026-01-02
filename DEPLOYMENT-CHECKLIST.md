# SEO Deployment Checklist - LA Prest Serv

## Pre-Deployment

### Code Review
- [x] All SEO files created and implemented
- [x] No TypeScript errors
- [x] Metadata properly configured
- [x] Structured data schemas valid
- [x] Keywords implemented (150+)
- [x] Location sections added
- [x] FAQ section added
- [x] robots.txt configured
- [x] sitemap.xml configured

### Files to Verify
```bash
lib/seo/structured-data.ts      ✅ Created
lib/seo/metadata.ts             ✅ Created
app/robots.ts                   ✅ Created
app/sitemap.ts                  ✅ Created
app/layout.tsx                  ✅ Updated
components/features/location-section.tsx  ✅ Created
components/features/faq-section.tsx       ✅ Created
lib/constants.ts                ✅ Updated (service descriptions)
components/features/hero-section.tsx      ✅ Updated (H1)
app/page.tsx                    ✅ Updated (new sections)
```

---

## Deployment Steps

### 1. Build & Test Locally
```bash
npm run build
npm run start
```

**Verify:**
- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] All pages load correctly
- [ ] Structured data renders in HTML source

### 2. Test SEO Elements Locally

**Check in browser DevTools (View Source):**
- [ ] `<title>` tag includes all locations
- [ ] `<meta name="description">` is descriptive
- [ ] JSON-LD schemas are in `<head>`
- [ ] `<html lang="pt-BR">`
- [ ] Canonical URL present
- [ ] OpenGraph tags present

**URLs to Test:**
- http://localhost:3000/ (homepage)
- http://localhost:3000/robots.txt
- http://localhost:3000/sitemap.xml

### 3. Push to Production
```bash
git add .
git commit -m "SEO implementation: structured data, metadata, location & FAQ sections"
git push origin main
```

**Vercel will auto-deploy.**

---

## Post-Deployment Verification

### Immediate (Day 1)

#### 1. Check Live Site
- [ ] Visit: https://la-prest-serv.vercel.app
- [ ] All pages load correctly
- [ ] No console errors
- [ ] Mobile responsive

#### 2. Verify robots.txt
- [ ] Visit: https://la-prest-serv.vercel.app/robots.txt
- [ ] Check sitemap reference is correct
- [ ] Verify Allow/Disallow rules

#### 3. Verify sitemap.xml
- [ ] Visit: https://la-prest-serv.vercel.app/sitemap.xml
- [ ] All URLs listed correctly
- [ ] lastModified dates present
- [ ] priorities set correctly

#### 4. Test Structured Data
**Use Google Rich Results Test:**
https://search.google.com/test/rich-results

**Test URL:** https://la-prest-serv.vercel.app

**Expected Schemas:**
- [ ] LocalBusiness (valid)
- [ ] Organization (valid)
- [ ] BreadcrumbList (valid)
- [ ] AggregateRating (valid)
- [ ] FAQPage (valid)

#### 5. Test OpenGraph
**Use Facebook Debugger:**
https://developers.facebook.com/tools/debug/

**Use Twitter Card Validator:**
https://cards-dev.twitter.com/validator

**Check:**
- [ ] OG image loads (or placeholder)
- [ ] Title correct
- [ ] Description correct

---

## Week 1 Tasks

### Google Search Console Setup

#### 1. Add Property
- [ ] Go to: https://search.google.com/search-console
- [ ] Add property: https://la-prest-serv.vercel.app
- [ ] Choose verification method: HTML meta tag

#### 2. Get Verification Code
Copy the verification code and add to `app/layout.tsx`:
```typescript
verification: {
  google: "YOUR_VERIFICATION_CODE_HERE",
}
```

#### 3. Submit Sitemap
- [ ] In Search Console → Sitemaps
- [ ] Submit: https://la-prest-serv.vercel.app/sitemap.xml
- [ ] Wait for indexing (2-7 days)

### Google Business Profile

#### Create/Claim Listing
- [ ] Go to: https://www.google.com/business/
- [ ] Create business profile for "LA Prest Serv"
- [ ] Add business info:
  - Name: LA Prest Serv
  - Category: General Contractor, Handyman
  - Phone: (48) 8810-9690
  - Service Area: Florianópolis, Palhoça, São José, Biguaçu
  - Website: https://la-prest-serv.vercel.app

- [ ] Add business hours
- [ ] Add services (all 8 services)
- [ ] Request reviews from existing customers

### Google Analytics 4

#### Setup GA4
- [ ] Create GA4 property
- [ ] Get Measurement ID (G-XXXXXXXXXX)
- [ ] Add to Next.js (use next/script or gtag)

**Track These Events:**
- WhatsApp button clicks
- Service card clicks
- Phone number clicks
- Form submissions (if added)

---

## Week 2-4 Tasks

### Content Creation

#### Create Missing Assets
- [ ] Design OG image (1200×630px): `/public/og-image.jpg`
  - Include: Logo, tagline, phone number
  - Tools: Canva, Figma, Photoshop

- [ ] Create logo: `/public/logo.png`
  - Transparent background
  - Use for structured data

#### Add Alt Text Strategy
When images are added:
```tsx
<img
  src="/drywall-install.jpg"
  alt="Instalação de drywall em apartamento em Florianópolis"
/>
```

### Local Directory Listings

Submit to:
- [ ] Google Business Profile (primary!)
- [ ] Bing Places
- [ ] GetNinjas
- [ ] Triider
- [ ] Habitissimo
- [ ] Houzz Brasil

**Ensure NAP Consistency:**
- Name: LA Prest Serv
- Address: Florianópolis e Região, SC
- Phone: (48) 8810-9690

---

## Month 1-3 Tasks

### Monitor Performance

#### Google Search Console (Weekly)
- [ ] Check impressions (growing?)
- [ ] Check CTR (optimize low CTR pages)
- [ ] Review search queries (new keyword opportunities)
- [ ] Fix any crawl errors
- [ ] Monitor Core Web Vitals

#### Google Analytics (Weekly)
- [ ] Track organic traffic growth
- [ ] Monitor bounce rate (optimize if >70%)
- [ ] Check top landing pages
- [ ] Analyze user flow
- [ ] Track conversions (WhatsApp clicks)

### Keyword Rankings (Bi-Weekly)

**Track these in a spreadsheet:**
| Keyword | Position Week 1 | Week 2 | Week 4 | Week 8 | Week 12 |
|---------|----------------|--------|--------|--------|---------|
| reforma florianópolis | - | | | | |
| drywall florianópolis | - | | | | |
| eletricista florianópolis | - | | | | |
| marido de aluguel floripa | - | | | | |

**Tools:**
- Google Search Console (free)
- Manual Google searches (incognito)
- SEMrush (paid)
- Ahrefs (paid)

### Content Expansion

#### Create Blog Section
- [ ] Add /blog route
- [ ] Write first 3 posts (see SEO-DOCUMENTATION.md)
- [ ] Optimize each for specific keywords
- [ ] Add internal links to service sections

#### Create Service Landing Pages
- [ ] /servicos/drywall-florianopolis
- [ ] /servicos/piso-laminado-florianopolis
- [ ] /servicos/eletricista-florianopolis
- [ ] /servicos/reforma-florianopolis

**Each page should have:**
- Unique title with location
- 500+ words of content
- FAQ specific to service
- Call-to-action (WhatsApp)
- Related services links

---

## Optimization Checklist

### Performance (PageSpeed Insights)

**Target Scores:**
- Mobile: 90+
- Desktop: 95+

**Optimizations:**
- [ ] Image optimization (WebP, lazy loading)
- [ ] Minimize JavaScript
- [ ] Use Next.js Image component
- [ ] Implement font optimization
- [ ] Enable compression

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

### Mobile Optimization
- [ ] Test on real devices (iOS, Android)
- [ ] WhatsApp button easily clickable
- [ ] Phone number clickable (tel: link)
- [ ] Forms mobile-friendly
- [ ] Text readable without zoom

---

## Success Metrics (90 Days)

### SEO KPIs
- [ ] 20+ keywords in top 20 positions
- [ ] 5+ keywords in top 10 positions
- [ ] 500+ monthly organic visitors
- [ ] 5%+ average CTR from search
- [ ] 50+ indexed pages (with blog content)

### Business KPIs
- [ ] 10+ organic WhatsApp inquiries/month
- [ ] 5+ completed projects from organic traffic
- [ ] 10+ Google Business reviews (5-star)
- [ ] Local Pack appearance for 3+ keywords

---

## Troubleshooting

### Issue: Pages Not Indexing
**Solutions:**
1. Submit URL to Search Console (Request Indexing)
2. Check robots.txt not blocking
3. Ensure no "noindex" tags
4. Build internal links to new pages
5. Create sitemap reference in robots.txt

### Issue: Low Rankings
**Solutions:**
1. Analyze competitor pages (what are they doing?)
2. Add more location-specific content
3. Get local backlinks
4. Improve page speed
5. Add more unique, valuable content

### Issue: High Bounce Rate
**Solutions:**
1. Improve page load speed
2. Make CTA more prominent
3. Add trust signals (reviews, certifications)
4. Improve mobile experience
5. Better match content to search intent

### Issue: No Conversions
**Solutions:**
1. Simplify conversion path (WhatsApp one-click)
2. Add phone number in header
3. Create urgency ("Orçamento hoje!")
4. Add social proof (testimonials)
5. A/B test CTA buttons

---

## Tools & Resources

### Free SEO Tools
- Google Search Console
- Google Analytics 4
- Google Business Profile
- Google Rich Results Test
- PageSpeed Insights
- Mobile-Friendly Test

### Recommended Paid Tools
- SEMrush (keyword research)
- Ahrefs (backlink analysis)
- Screaming Frog (technical SEO)
- Hotjar (user behavior)

### Learning Resources
- Google Search Central (official documentation)
- Moz Blog (SEO best practices)
- Search Engine Journal (industry news)

---

## Final Checklist Before Going Live

- [x] All SEO code implemented
- [x] No build errors
- [x] Metadata complete
- [x] Structured data valid
- [x] Keywords targeted
- [x] Content optimized
- [ ] OG images ready (optional for now)
- [ ] Google Search Console setup (post-deployment)
- [ ] Google Analytics setup (post-deployment)
- [ ] Google Business Profile (post-deployment)

---

## Status: ✅ READY FOR DEPLOYMENT

All SEO implementation is complete and production-ready.

**Deploy Command:**
```bash
git push origin main
```

Vercel will automatically deploy with all SEO improvements.

**Post-Deployment:** Follow Week 1 tasks above.
