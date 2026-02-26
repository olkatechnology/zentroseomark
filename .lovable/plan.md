

## Plan: Build Full Content for All ZentroSEO Pages

Currently, 25+ pages use a generic `PlaceholderPage` component showing "This page is being updated." This plan replaces every placeholder with rich, SEO-optimized content following Koray Tugberk's semantic SEO principles (entity-based optimization, topical depth, structured data, internal linking).

---

### Architecture Approach

Instead of 25+ individual page files, we'll create **reusable page templates** by category, fed by data objects. This keeps the codebase maintainable.

**New files to create:**

| File | Purpose |
|------|---------|
| `src/pages/FeatureDetail.tsx` | Template for all 9 feature tool pages |
| `src/pages/SolutionHub.tsx` | Solutions landing page |
| `src/pages/SolutionDetail.tsx` | Template for 4 solution audience pages |
| `src/pages/CompanyHub.tsx` | Company landing page |
| `src/pages/AboutUs.tsx` | About Us with team, mission, values, timeline |
| `src/pages/ContactUs.tsx` | Contact form + info |
| `src/pages/ResourcesHub.tsx` | Resources landing page |
| `src/pages/Blog.tsx` | Blog listing with categories and article cards |
| `src/pages/HelpCenter.tsx` | FAQ-style help center |
| `src/pages/CaseStudies.tsx` | Case studies listing |
| `src/pages/Documentation.tsx` | Documentation hub |
| `src/pages/SEOToolkit.tsx` | Free tools hub page |
| `src/pages/LegalPage.tsx` | Template for Privacy, Terms, Refund |
| `src/data/features.ts` | Content data for all 9 feature pages |
| `src/data/solutions.ts` | Content data for 4 solution pages |
| `src/data/blog-posts.ts` | Blog post metadata (titles, excerpts, categories, dates from existing WP content) |
| `src/data/legal.ts` | Legal page content |
| `src/components/shared/Breadcrumbs.tsx` | Breadcrumb component with JSON-LD |
| `src/components/shared/Testimonials.tsx` | Reusable testimonial section |
| `src/components/shared/RelatedLinks.tsx` | Internal linking component for topical relevance |

**Modified files:**
- `src/App.tsx` -- Replace PlaceholderPage routes with dedicated components

---

### Phase 1: Feature Detail Pages (9 pages)

Each feature page (`/features/zentroaudit/`, `/features/zentrofix/`, etc.) will follow a consistent SemRush-inspired layout:

1. **Breadcrumbs** with JSON-LD BreadcrumbList schema
2. **Hero** -- Tool name, tagline, 3 trust chips, primary CTA
3. **Key Capabilities** -- 6-card grid (icon + title + description)
4. **How It Works** -- Numbered step process (3-6 steps)
5. **Use Cases / Benefits** -- Split layout: image mockup left, bullet benefits right
6. **Testimonials** -- 2-3 quotes (reusable component)
7. **Related Tools** -- Internal links to sibling features (topical clustering)
8. **FAQ** -- 4-5 tool-specific FAQs with JSON-LD FAQPage schema
9. **CTA Section** -- "Try [ToolName] Free"

Content for all 9 tools stored in `src/data/features.ts` with entity-rich descriptions focusing on:
- ZentroAudit: technical SEO audit, crawl analysis, Core Web Vitals, entity coverage
- ZentroFix: AI auto-correction, 1-click fixes, metadata repair, broken link resolution
- ZentroKeywords: semantic keyword research, entity topic discovery, search intent mapping
- ZentroRank: real-time SERP tracking, device/location segmentation
- ZentroWrite: AI content generation, semantic optimization, entity-rich writing
- ZentroCompare: competitor gap analysis, topical coverage comparison
- ZentroBacklinks: link profile analysis, authority scoring, toxic link detection
- ZentroMarkup: JSON-LD schema generation, rich snippet validation
- ZentroWhite: white-label dashboards, branded reporting

### Phase 2: Solution Pages (5 pages)

**Solutions Hub** (`/solutions/`):
- Hero with headline about tailored SEO solutions
- 4-card grid linking to each audience segment
- Comparison table showing which tools matter most per audience
- CTA section

**Solution Detail Pages** (For Agencies, Startups, E-commerce, Content Creators):
1. Breadcrumbs
2. Hero tailored to the audience persona
3. Pain points section -- "Challenges [audience] face with SEO"
4. How ZentroSEO solves it -- mapped to specific tools
5. Feature highlights relevant to that audience (3-4 cards)
6. Testimonial from that industry
7. Pricing callout
8. Related solutions (internal linking)
9. FAQ with JSON-LD
10. CTA

### Phase 3: Company Pages (3 pages)

**Company Hub** (`/company/`):
- Story section (founded 2021, mission)
- Stats bar (100+ websites, 2500+ issues fixed, 340% traffic growth, 99.9% uptime)
- Values grid (4 cards)
- Team preview linking to About Us
- CTA

**About Us** (`/company/about-us/`):
- Mission statement
- Company journey timeline (2021-present)
- Values section
- Team section: Tomisin Sode (CEO) and Olayinka Olayokun (CTO) with bios
- CTA

**Contact Us** (`/company/contact-us/`):
- Contact form (name, email, subject, message) -- front-end only, styled
- Contact info cards (email, response time)
- FAQ about support

### Phase 4: Resource Pages (5 pages)

**Resources Hub** (`/resources/`):
- Hero with search/filter concept
- Cards linking to Blog, Help Center, Case Studies, Documentation, SEO Toolkit

**Blog** (`/resources/blog/`):
- Category filter tabs (Technical SEO, On-Page SEO, Local & E-commerce SEO, Content SEO)
- Blog post cards with title, excerpt, category, date, author, read time
- All 14 existing blog posts from WordPress sitemap included as data
- Posts link to existing WordPress URLs (external) until blog is migrated

**Help Center** (`/resources/help-center/`):
- Search bar (decorative)
- Category sections: Getting Started, Account & Billing, Features, Troubleshooting
- Accordion FAQ items per category

**Case Studies** (`/resources/case-studies/`):
- 3 example case study cards with metrics (traffic growth %, ranking improvements)
- Each with industry, challenge, solution, results format

**Documentation** (`/resources/documentation/`):
- Getting started guide links
- API reference placeholder
- Feature-by-feature doc links

**SEO Toolkit** (`/resources/seo-toolkit/`):
- Free tools grid: Website Score Checker, Meta Tag Analyzer, Schema Validator
- Each tool card links to the signup funnel

### Phase 5: Legal Pages (3 pages)

**Reusable `LegalPage` template** for Privacy Policy, Terms of Service, Refund Policy with:
- Proper heading hierarchy
- Sections with content
- Last updated date
- Breadcrumbs

### Phase 6: Update App.tsx Routing

- Remove the `pages` array and `PlaceholderPage` imports
- Add individual Route entries for each new page component
- Keep all existing URL slugs exactly as they are

---

### SEO Principles Applied Throughout

- **Entity-based content**: Each page focuses on a clear entity (tool, audience, topic) with semantically related terms
- **Topical depth**: Feature pages include capabilities, how-it-works, use cases, and FAQs for comprehensive coverage
- **Internal linking**: Every page links to related pages (RelatedLinks component) creating strong topical clusters
- **Structured data**: BreadcrumbList on all pages, FAQPage on pages with FAQs, SoftwareApplication on feature pages
- **Breadcrumbs**: Visual + JSON-LD on every page for navigation hierarchy
- **Canonical URLs**: Preserved on all pages
- **Meta optimization**: Existing meta titles and descriptions preserved exactly

### Technical Notes

- Blog posts link externally to WordPress until blog content is migrated
- Contact form is front-end only (no backend submission yet)
- All existing URL patterns preserved with no changes
- Components use existing design tokens (`bg-hero`, `text-hero-foreground`, `bg-gradient-cta`, etc.)
- Framer Motion animations consistent with existing pages
- All pages wrapped in `Layout` component (Navbar + Footer)
- Approximately 20 new files, modifying 1 existing file (`App.tsx`)

