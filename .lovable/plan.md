

## Add Missing Content Types: Glossary, Topics, Guides, and Comparisons

The current site has ~55 blog posts organized in 7 categories with hub-and-spoke linking. However, Koray's Holistic SEO framework requires a **complete semantic content network** with distinct content types that serve different user intents and query patterns. Four major content types are missing.

---

### What's Missing and Why It Matters

| Content Type | Purpose in Koray's Framework | User Intent |
|---|---|---|
| **Glossary** | Define every entity in the topical map; DefinedTerm schema signals entity expertise to Knowledge Graph | Informational / "What is X?" |
| **Topics** | Hub pages for each major SEO concept, deeper than categories; anchor the topical map's top-level entities | Navigational / Topical authority |
| **Guides** | Long-form step-by-step resources covering full EAV coverage of a process | How-to / Transactional |
| **Comparisons** | "X vs Y" pages that cover attribute-value differences between related entities | Commercial investigation |

These 4 content types create the remaining **query cluster coverage** needed for topical authority -- they answer the questions blog posts alone cannot.

---

### Phase 1: SEO Glossary (`/resources/glossary/`)

**New files:**
- `src/data/glossary.ts` -- 40-60 SEO term definitions with fields: `term`, `slug`, `definition` (40-word extractive answer), `longDescription` (full markdown), `relatedTerms[]`, `relatedBlogSlugs[]`, `entities[]`, `category` (Technical SEO, Semantic SEO, etc.)
- `src/pages/Glossary.tsx` -- Hub listing page with alphabetical index + category filter
- `src/pages/GlossaryTerm.tsx` -- Individual term page with DefinedTerm JSON-LD schema

**Route:** `/resources/glossary/` and `/resources/glossary/:slug/`

**Initial terms (30+):** Topical Authority, Entity-Based SEO, Semantic SEO, Core Web Vitals, Schema Markup, Crawlability, Indexability, SERP, Backlinks, Canonical Tag, Hreflang, Robots.txt, Meta Robots, Knowledge Graph, E-E-A-T, Topical Map, Content Silo, Internal Linking, Anchor Text, Domain Authority, Page Authority, Featured Snippet, Rich Result, Structured Data, Mobile-First Indexing, Long-Tail Keywords, Search Intent, NAP Consistency, Local Pack, Keyword Clustering

**Structured data:** `DefinedTerm` schema per term page + `ItemList` on hub

**Internal linking:** Each term links to related blog posts, feature pages, and other terms -- forming dense entity relationships

---

### Phase 2: Topics Hub (`/resources/topics/`)

**New files:**
- `src/data/topics.ts` -- 10-15 topic entries with fields: `name`, `slug`, `description`, `heroContent` (markdown overview), `subtopics[]`, `relatedBlogSlugs[]`, `relatedFeatures[]`, `relatedGlossaryTerms[]`, `entities[]`
- `src/pages/TopicsHub.tsx` -- Landing page listing all topics
- `src/pages/TopicDetail.tsx` -- Individual topic page acting as a **topical map anchor**

**Route:** `/resources/topics/` and `/resources/topics/:slug/`

**Initial topics:** Technical SEO, Semantic SEO, On-Page SEO, Off-Page SEO, Local SEO, E-commerce SEO, Content Strategy, Keyword Research, Link Building, Schema Markup, Core Web Vitals, AI in SEO, Programmatic SEO, International SEO

Each topic page serves as a **macro-level hub** that links down to blog posts (spokes), glossary terms, guides, and comparisons within that topic. This is the "topical map visualization" Koray emphasizes.

**Structured data:** `WebPage` with `about` pointing to the topic entity + `ItemList` of related content

---

### Phase 3: Guides Section (`/resources/guides/`)

**New files:**
- `src/data/guides.ts` -- 6-10 guide entries with fields: `title`, `slug`, `excerpt`, `content` (full markdown), `category`, `difficulty` (Beginner/Intermediate/Advanced), `estimatedTime`, `prerequisites[]`, `steps[]`, `relatedBlogSlugs[]`, `relatedFeatures[]`, `entities[]`
- `src/pages/GuidesHub.tsx` -- Landing page with difficulty filter
- `src/pages/GuideDetail.tsx` -- Individual guide page with step-by-step layout, progress tracking, and Table of Contents

**Route:** `/resources/guides/` and `/resources/guides/:slug/`

**Initial guides:**
1. Complete Technical SEO Audit Guide (Beginner)
2. Building Topical Authority from Scratch (Intermediate)
3. Schema Markup Implementation for Every Page Type (Intermediate)
4. Keyword Research to Content Strategy Pipeline (Beginner)
5. Link Building Without Outreach: The Semantic Approach (Advanced)
6. Setting Up ZentroSEO for Your First Website (Beginner)

**Structured data:** `HowTo` schema with steps + `Article` schema

**Key difference from blog posts:** Guides are structured as numbered step sequences with clear prerequisites and outcomes. Blog posts are topical articles. This distinction helps search engines classify query intent correctly.

---

### Phase 4: Comparisons Section (`/resources/comparisons/`)

**New files:**
- `src/data/comparisons.ts` -- 8-12 comparison entries with fields: `title`, `slug`, `excerpt`, `itemA`, `itemB`, `content` (markdown with comparison tables), `verdict`, `category`, `relatedBlogSlugs[]`, `relatedFeatures[]`, `entities[]`
- `src/pages/ComparisonsHub.tsx` -- Landing page listing all comparisons
- `src/pages/ComparisonDetail.tsx` -- Individual comparison page with side-by-side table, pros/cons, and verdict section

**Route:** `/resources/comparisons/` and `/resources/comparisons/:slug/`

**Initial comparisons:**
1. ZentroSEO vs Ahrefs: Full Feature Comparison
2. ZentroSEO vs SEMrush: Which SEO Platform Wins?
3. ZentroSEO vs Moz: Feature-by-Feature Breakdown
4. Technical SEO vs On-Page SEO: What's the Difference?
5. Schema Markup vs Open Graph: When to Use Each
6. Robots.txt vs Meta Robots: Controlling Crawlers
7. Canonical Tags vs 301 Redirects: Which to Use When
8. Manual SEO vs AI-Powered SEO: Pros and Cons

**Structured data:** `Article` with `about` entity pairs + comparison table markup

**Internal linking:** Each comparison links to the relevant feature pages (for product comparisons) or blog posts (for concept comparisons)

---

### Phase 5: Update Navigation, Resources Hub, and Sitemap

**Modified files:**
- `src/App.tsx` -- Add 8 new routes (4 hubs + 4 detail pages)
- `src/components/Navbar.tsx` -- Add Glossary, Topics, Guides, Comparisons to Resources dropdown
- `src/pages/ResourcesHub.tsx` -- Add 4 new resource cards (Glossary, Topics, Guides, Comparisons)
- `src/components/Footer.tsx` -- Add new sections to Resources footer links
- `src/pages/Sitemap.tsx` -- Add new sections for all new pages
- `public/sitemap.xml` -- Add all new URLs
- `src/pages/Blog.tsx` -- Add cross-links to related guides, glossary terms, and comparisons in sidebar or footer

---

### How This Completes Koray's Semantic Content Network

```text
                         [Homepage]
                             |
        +----------+---------+----------+----------+
        |          |         |          |          |
   [Features] [Solutions] [Pricing] [Resources] [Company]
                                        |
                    +------+------+-----+-----+------+------+
                    |      |      |     |     |      |      |
                 [Blog] [Guides] [Glossary] [Topics] [Comparisons] [Help]
                    |      |      |     |     |
                  posts  steps  terms  hubs  vs-pages
                    |      |      |     |     |
                    +------+------+-----+-----+
                    (cross-linked via relatedSlugs, entities, features)
```

Each content type covers a different **query intent pattern**:
- "What is X?" --> Glossary
- "How to do X" --> Guides
- "X vs Y" --> Comparisons
- "Everything about X" --> Topics
- "X tips / strategy / analysis" --> Blog posts

This ensures full query cluster coverage for every entity in the topical map.

---

### Technical Details

**Total new files: 12**
- 4 data files (`glossary.ts`, `topics.ts`, `guides.ts`, `comparisons.ts`)
- 8 page components (4 hubs + 4 detail pages)

**Total modified files: 6**
- `App.tsx`, `Navbar.tsx`, `ResourcesHub.tsx`, `Footer.tsx`, `Sitemap.tsx`, `sitemap.xml`

**Patterns followed:**
- Same data-driven template architecture as existing `FeatureDetail`/`SolutionDetail`
- Same `BlogPost` interface pattern (slug, entities, relatedSlugs, content as markdown)
- Same `BlogPost.tsx` markdown rendering approach for long-form content
- Breadcrumbs + JSON-LD on every page
- Framer Motion animations matching existing pages
- All pages wrapped in `Layout` component

**Estimated initial content:**
- 30+ glossary terms
- 10-15 topic pages
- 6-10 guides
- 8-12 comparisons

