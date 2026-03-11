export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  longDescription: string;
  category: string;
  relatedTerms: string[];
  relatedBlogSlugs: string[];
  relatedFeatures: string[];
  entities: { name: string; url?: string; type?: string }[];
}

export const glossaryCategories = [
  "Technical SEO",
  "Semantic SEO",
  "On-Page SEO",
  "Off-Page SEO",
  "Local SEO",
  "Content Strategy",
  "Analytics & Tools",
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Topical Authority",
    slug: "topical-authority",
    definition: "Topical authority is a website's perceived expertise on a specific subject, established by publishing comprehensive, interlinked content that covers a topic and its subtopics in depth.",
    longDescription: `## What Is Topical Authority?

Topical authority refers to a website's **demonstrated expertise and comprehensive coverage** of a specific subject area. Search engines like Google evaluate topical authority to determine which sites deserve to rank highest for queries within a given topic.

Unlike domain authority (which measures overall link equity), topical authority is **content-driven**. It's built by creating a network of semantically related content that covers a topic from every angle — including subtopics, related questions, entities, and use cases.

## Why Topical Authority Matters for SEO

Google's algorithms have evolved from keyword matching to **entity understanding and topical relevance**. A site that publishes one article about "keyword research" will struggle to outrank a site with 20+ interlinked articles covering keyword research, search intent, keyword clustering, long-tail keywords, and content gap analysis.

Key benefits of building topical authority:

- **Higher rankings** across an entire topic cluster, not just individual pages
- **Faster indexing** of new content within your established topics
- **Featured snippet eligibility** for informational queries
- **Resistance to algorithm updates** — topically authoritative sites tend to recover faster
- **LLM visibility** — AI models like ChatGPT and Google's SGE favor authoritative sources

## How to Build Topical Authority

1. **Create a topical map** — Outline every subtopic, entity, and question within your subject area
2. **Publish hub-and-spoke content** — Create pillar pages (hubs) that link to detailed subtopic articles (spokes)
3. **Interlink extensively** — Use contextual internal links between related articles
4. **Cover entity attributes and values** — Go beyond surface-level definitions; cover the "how," "why," and relationships between entities
5. **Update content regularly** — Content freshness signals ongoing expertise
6. **Demonstrate E-E-A-T** — Show real experience, expertise, authoritativeness, and trustworthiness

## Topical Authority vs. Domain Authority

| Aspect | Topical Authority | Domain Authority |
|---|---|---|
| What it measures | Depth of content coverage on a topic | Overall backlink profile strength |
| How it's built | Content creation + internal linking | External link acquisition |
| Scope | Topic-specific | Site-wide |
| Signal type | Content + semantic | Link equity |

## How ZentroSEO Helps Build Topical Authority

[ZentroAudit](/features/zentroaudit/) analyzes your site's content coverage and identifies topical gaps. [ZentroWrite](/features/zentrowrite/) generates semantically optimized content briefs that help you fill those gaps efficiently. [ZentroKeywords](/features/zentrokeywords/) discovers related keywords and entities to ensure comprehensive coverage.`,
    category: "Semantic SEO",
    relatedTerms: ["topical-map", "content-silo", "entity-based-seo", "e-e-a-t"],
    relatedBlogSlugs: ["topical-authority-how-to-build", "topical-maps-content-strategy", "what-is-semantic-seo"],
    relatedFeatures: ["zentroaudit", "zentrowrite", "zentrokeywords"],
    entities: [
      { name: "Topical Authority", type: "Thing" },
      { name: "Search Engine Optimization", type: "Thing" },
      { name: "Content Strategy", type: "Thing" },
    ],
  },
  {
    term: "Entity-Based SEO",
    slug: "entity-based-seo",
    definition: "Entity-based SEO is an optimization approach that focuses on defining and connecting real-world entities (people, places, concepts) rather than just keywords to help search engines understand content contextually.",
    longDescription: `## What Is Entity-Based SEO?

Entity-based SEO is the practice of optimizing content around **entities** — uniquely identifiable things like people, organizations, concepts, or places — rather than relying solely on keyword frequency. Search engines use entities to understand the meaning and relationships within content.

An entity is any distinct concept that can be identified and differentiated. "Apple" the fruit and "Apple" the company are different entities, distinguished by context and attributes.

## Why Entity-Based SEO Matters

Google's Knowledge Graph contains billions of entities and their relationships. When your content clearly defines entities and their attributes, search engines can:

- **Disambiguate** your content (understand exactly what you mean)
- **Connect** your content to related topics in the Knowledge Graph
- **Surface** your content in knowledge panels, featured snippets, and AI answers
- **Evaluate** your topical authority based on entity coverage depth

## How to Implement Entity-Based SEO

1. **Identify core entities** in your content using tools or manual analysis
2. **Define entity attributes** — Cover the who, what, when, where, why, and how
3. **Use structured data** (JSON-LD) to explicitly declare entities via schema.org
4. **Create entity-rich content** that discusses relationships between concepts
5. **Build internal links** between entity-related pages to reinforce topical clusters

## Entity SEO and Structured Data

Schema markup is the technical bridge between your content and entity recognition. Using types like \`Organization\`, \`Person\`, \`Product\`, \`DefinedTerm\`, and \`Thing\` with proper attributes helps search engines map your content to their knowledge bases.

## How ZentroSEO Supports Entity-Based SEO

[ZentroMarkup](/features/zentromarkup/) generates schema markup that declares entities in your content. [ZentroAudit](/features/zentroaudit/) identifies missing entity signals and structured data gaps.`,
    category: "Semantic SEO",
    relatedTerms: ["knowledge-graph", "structured-data", "semantic-seo", "topical-authority"],
    relatedBlogSlugs: ["entity-based-seo-explained", "entity-attribute-value-seo", "knowledge-graph-optimization"],
    relatedFeatures: ["zentromarkup", "zentroaudit"],
    entities: [
      { name: "Entity", type: "Thing" },
      { name: "Knowledge Graph", type: "Thing" },
      { name: "Schema.org", type: "WebSite", url: "https://schema.org" },
    ],
  },
  {
    term: "Semantic SEO",
    slug: "semantic-seo",
    definition: "Semantic SEO is an optimization methodology that focuses on meaning, context, and intent behind search queries rather than exact keyword matching, using entities, topics, and natural language understanding.",
    longDescription: `## What Is Semantic SEO?

Semantic SEO is the practice of creating content that satisfies the **meaning and intent** behind search queries, not just the literal keywords. It involves understanding how search engines process language, identify entities, and map relationships between concepts.

Rather than optimizing for a single keyword, semantic SEO optimizes for the **entire topic** — covering related subtopics, answering implicit questions, and using natural language patterns that align with how users actually search.

## Core Principles of Semantic SEO

- **Topic completeness** — Cover a subject comprehensively, not just surface-level
- **Entity coverage** — Reference and define all relevant entities within a topic
- **Search intent alignment** — Match content format and depth to user expectations
- **Natural language** — Write the way people speak and search
- **Contextual relevance** — Connect ideas logically with transitional phrases and internal links

## How Search Engines Use Semantics

Google's BERT, MUM, and other NLP models analyze:

- Word relationships and context (not just frequency)
- Entity mentions and their attributes
- Query reformulations and related searches
- Content structure (headings, lists, tables) as semantic signals

## Implementing Semantic SEO

1. **Research the full topic** — Use "People Also Ask," related searches, and topical map tools
2. **Create comprehensive content** — Cover subtopics, FAQs, definitions, and comparisons
3. **Use structured data** — Declare entities and content types via JSON-LD
4. **Optimize headings** — Use descriptive H2s/H3s that match subtopic queries
5. **Build semantic internal links** — Link between related content with descriptive anchor text

## How ZentroSEO Enables Semantic SEO

[ZentroWrite](/features/zentrowrite/) generates semantic content briefs with entity coverage recommendations. [ZentroKeywords](/features/zentrokeywords/) identifies semantically related terms and questions. [ZentroAudit](/features/zentroaudit/) scores your content's semantic completeness.`,
    category: "Semantic SEO",
    relatedTerms: ["entity-based-seo", "topical-authority", "nlp", "search-intent"],
    relatedBlogSlugs: ["what-is-semantic-seo", "nlp-search-engines-how-google-understands-content", "semantic-content-briefs"],
    relatedFeatures: ["zentrowrite", "zentrokeywords", "zentroaudit"],
    entities: [
      { name: "Semantic SEO", type: "Thing" },
      { name: "Natural Language Processing", type: "Thing" },
      { name: "Google BERT", type: "Thing" },
    ],
  },
  {
    term: "Core Web Vitals",
    slug: "core-web-vitals",
    definition: "Core Web Vitals are a set of Google-defined metrics — LCP, INP, and CLS — that measure real-world user experience in terms of loading performance, interactivity, and visual stability.",
    longDescription: `## What Are Core Web Vitals?

Core Web Vitals (CWV) are a set of three specific page experience metrics that Google uses as ranking signals. They measure how users experience your page in terms of:

- **Largest Contentful Paint (LCP)** — How quickly the main content loads (target: ≤2.5s)
- **Interaction to Next Paint (INP)** — How responsive the page is to user interactions (target: ≤200ms)
- **Cumulative Layout Shift (CLS)** — How visually stable the page is during loading (target: ≤0.1)

## Why Core Web Vitals Matter for SEO

Since June 2021, Core Web Vitals have been an official Google ranking factor. While content relevance still matters most, CWV can be the tiebreaker between pages with similar content quality.

Poor CWV also leads to:

- Higher bounce rates from frustrated users
- Lower engagement metrics
- Reduced conversion rates
- Negative signals to search engine crawlers

## How to Improve Core Web Vitals

### Improving LCP
- Optimize and compress images (WebP, AVIF)
- Preload critical resources
- Minimize render-blocking CSS/JS
- Use a CDN for faster asset delivery

### Improving INP
- Reduce JavaScript execution time
- Break up long tasks into smaller chunks
- Optimize event handlers
- Use web workers for heavy computation

### Improving CLS
- Set explicit width/height on images and videos
- Avoid inserting content above existing content
- Use CSS containment for dynamic elements
- Preload fonts to prevent layout shifts

## How ZentroSEO Monitors Core Web Vitals

[ZentroAudit](/features/zentroaudit/) tests your Core Web Vitals across all pages and provides actionable fixes. [ZentroFix](/features/zentrofix/) can implement one-click optimizations for common CWV issues.`,
    category: "Technical SEO",
    relatedTerms: ["largest-contentful-paint", "cumulative-layout-shift", "page-speed"],
    relatedBlogSlugs: ["improve-core-web-vitals", "mobile-first-indexing-seo", "technical-seo-audit"],
    relatedFeatures: ["zentroaudit", "zentrofix"],
    entities: [
      { name: "Core Web Vitals", type: "Thing", url: "https://web.dev/vitals/" },
      { name: "Largest Contentful Paint", type: "Thing" },
      { name: "Cumulative Layout Shift", type: "Thing" },
    ],
  },
  {
    term: "Schema Markup",
    slug: "schema-markup",
    definition: "Schema markup is structured data vocabulary from schema.org added to web pages using JSON-LD, Microdata, or RDFa to help search engines understand content type, entities, and relationships for rich results.",
    longDescription: `## What Is Schema Markup?

Schema markup is a standardized vocabulary of tags (from [schema.org](https://schema.org)) that you add to your HTML to help search engines understand the meaning of your content. It creates a bridge between human-readable content and machine-readable data.

The most common implementation format is **JSON-LD** (JavaScript Object Notation for Linked Data), which Google recommends. It's added as a \`<script>\` tag in your page's \`<head>\` section.

## Types of Schema Markup

Common schema types include:

- **Organization** — Company name, logo, social profiles, contact info
- **Article / BlogPosting** — Author, publish date, headline, content
- **Product** — Price, availability, reviews, brand
- **FAQPage** — Questions and answers
- **HowTo** — Step-by-step instructions
- **BreadcrumbList** — Navigation path
- **LocalBusiness** — Address, hours, phone number
- **Person** — Author bio, expertise, social links
- **DefinedTerm** — Glossary term definitions

## Why Schema Markup Matters

- **Rich results** — Star ratings, FAQ dropdowns, recipe cards in SERPs
- **Knowledge Graph inclusion** — Help Google connect your content to entities
- **Voice search optimization** — Structured data powers voice assistant answers
- **AI/LLM visibility** — Structured data helps AI models understand and cite your content

## How ZentroSEO Generates Schema Markup

[ZentroMarkup](/features/zentromarkup/) automatically generates JSON-LD for any page type — articles, products, FAQs, how-to guides, and more. It validates against Google's requirements and suggests missing properties.`,
    category: "Technical SEO",
    relatedTerms: ["structured-data", "rich-result", "knowledge-graph", "json-ld"],
    relatedBlogSlugs: ["schema-markup-seo-guide", "schema-markup-generators-compared", "structured-data-ecommerce-product-schema"],
    relatedFeatures: ["zentromarkup"],
    entities: [
      { name: "Schema.org", type: "WebSite", url: "https://schema.org" },
      { name: "JSON-LD", type: "Thing" },
      { name: "Structured Data", type: "Thing" },
    ],
  },
  {
    term: "Crawlability",
    slug: "crawlability",
    definition: "Crawlability is a website's ability to be discovered and accessed by search engine bots, determined by factors like robots.txt rules, internal linking, XML sitemaps, and server response codes.",
    longDescription: `## What Is Crawlability?

Crawlability refers to how easily search engine bots (like Googlebot) can discover, access, and navigate your website's pages. If a page can't be crawled, it can't be indexed — and if it's not indexed, it can't rank.

## Factors That Affect Crawlability

- **Robots.txt** — Rules that allow or block crawler access to specific paths
- **Internal linking** — Pages without internal links may never be discovered
- **XML sitemaps** — Help crawlers find all important pages
- **Server response codes** — 200 (OK), 301 (redirect), 404 (not found), 500 (server error)
- **Crawl budget** — The number of pages a search engine will crawl in a given timeframe
- **JavaScript rendering** — Content loaded via JS may not be accessible to all crawlers
- **Page depth** — Pages more than 3-4 clicks from the homepage may be deprioritized

## Crawlability vs. Indexability

Crawlability is about **access** — can the bot reach the page? Indexability is about **permission** — is the page allowed to be stored in the search index? A page can be crawlable but not indexable (e.g., if it has a \`noindex\` meta tag).

## How to Improve Crawlability

1. Submit an XML sitemap via Google Search Console
2. Fix broken internal links (404 errors)
3. Ensure clean robots.txt configuration
4. Flatten site architecture (reduce click depth)
5. Use internal links to connect orphan pages
6. Monitor crawl stats in Search Console

## How ZentroSEO Audits Crawlability

[ZentroAudit](/features/zentroaudit/) simulates search engine crawlers to identify pages that are blocked, orphaned, or returning errors. It provides a crawlability score and prioritized recommendations.`,
    category: "Technical SEO",
    relatedTerms: ["indexability", "robots-txt", "xml-sitemap", "crawl-budget"],
    relatedBlogSlugs: ["crawlability-vs-indexability", "robots-vs-meta-robots", "xml-sitemap-optimization"],
    relatedFeatures: ["zentroaudit"],
    entities: [
      { name: "Web Crawler", type: "Thing" },
      { name: "Googlebot", type: "Thing", url: "https://developers.google.com/search/docs/crawling-indexing/googlebot" },
    ],
  },
  {
    term: "Indexability",
    slug: "indexability",
    definition: "Indexability is whether a web page is permitted and eligible to be stored in a search engine's index, controlled by meta robots tags, canonical tags, HTTP headers, and content quality signals.",
    longDescription: `## What Is Indexability?

Indexability determines whether a crawled page is allowed to be added to a search engine's index. Even if a search engine can crawl your page, various signals can prevent it from being indexed.

## What Controls Indexability

- **Meta robots tag** — \`noindex\` prevents indexing
- **X-Robots-Tag HTTP header** — Server-level indexing control
- **Canonical tags** — May redirect indexing to a different URL
- **Robots.txt** — Blocking crawl access prevents discovery (and thus indexing)
- **Content quality** — Thin, duplicate, or low-value content may be excluded
- **Manual penalties** — Google may deindex pages that violate guidelines

## How to Check Indexability

1. Use Google Search Console's URL Inspection tool
2. Search \`site:yoursite.com/page-url\` on Google
3. Review meta robots and canonical tags in page source
4. Use [ZentroAudit](/features/zentroaudit/) to scan all pages for indexability issues

## Common Indexability Issues

- Accidental \`noindex\` tags left from staging
- Canonical tags pointing to wrong URLs
- Duplicate content without proper canonicalization
- Soft 404 pages (200 status but no real content)
- Pages blocked by robots.txt that also have important content`,
    category: "Technical SEO",
    relatedTerms: ["crawlability", "canonical-tag", "meta-robots", "robots-txt"],
    relatedBlogSlugs: ["crawlability-vs-indexability", "robots-vs-meta-robots", "canonicalization"],
    relatedFeatures: ["zentroaudit"],
    entities: [
      { name: "Search Engine Indexing", type: "Thing" },
      { name: "Meta Robots Tag", type: "Thing" },
    ],
  },
  {
    term: "SERP",
    slug: "serp",
    definition: "SERP (Search Engine Results Page) is the page displayed by a search engine in response to a user's query, containing organic results, paid ads, featured snippets, knowledge panels, and other rich elements.",
    longDescription: `## What Is a SERP?

SERP stands for **Search Engine Results Page** — the page you see after entering a query into Google, Bing, or any other search engine. Modern SERPs contain much more than just ten blue links.

## SERP Features

- **Organic results** — Traditional blue links ranked by relevance and authority
- **Featured snippets** — Direct answer boxes at position zero
- **Knowledge panels** — Entity information from the Knowledge Graph
- **People Also Ask (PAA)** — Expandable related questions
- **Local pack** — Map with local business listings
- **Image/video carousels** — Visual media results
- **Shopping results** — Product listings with prices
- **AI Overviews** — Google's AI-generated summary answers

## Why SERP Analysis Matters

Understanding SERP features for your target keywords helps you:

- Choose the right content format (article vs. video vs. FAQ)
- Optimize for specific SERP features (featured snippets, PAA)
- Estimate real click-through rates (CTR) considering SERP layout
- Identify competitive gaps and opportunities

## How ZentroSEO Tracks SERP Performance

[ZentroRank](/features/zentrorank/) monitors your keyword positions across all SERP features, tracking volatility and identifying opportunities to capture featured snippets and other rich results.`,
    category: "Analytics & Tools",
    relatedTerms: ["featured-snippet", "rich-result", "search-intent", "keyword-ranking"],
    relatedBlogSlugs: ["search-intent-keyword-strategy", "keyword-research-complete-guide"],
    relatedFeatures: ["zentrorank"],
    entities: [
      { name: "Search Engine Results Page", type: "Thing" },
      { name: "Featured Snippet", type: "Thing" },
    ],
  },
  {
    term: "Backlinks",
    slug: "backlinks",
    definition: "Backlinks are incoming hyperlinks from one website to another, serving as votes of confidence that signal authority and trustworthiness to search engines for ranking purposes.",
    longDescription: `## What Are Backlinks?

Backlinks (also called inbound links or incoming links) are links from one website to another. When Site A links to Site B, Site B has earned a backlink from Site A. Search engines treat backlinks as endorsements — the more quality backlinks a page has, the more authoritative it appears.

## Why Backlinks Matter for SEO

Backlinks remain one of Google's top ranking factors. They signal:

- **Authority** — Trusted sites linking to you transfers credibility
- **Relevance** — Links from topically related sites strengthen topical authority
- **Popularity** — Pages with more quality backlinks tend to rank higher
- **Discovery** — Crawlers follow links to discover new pages

## Quality vs. Quantity

Not all backlinks are equal. Key quality factors:

- **Domain authority** of the linking site
- **Topical relevance** — A link from an SEO blog to an SEO tool is more valuable than from a cooking blog
- **Anchor text** — Descriptive anchor text provides context
- **Link placement** — Editorial links within content are more valuable than footer/sidebar links
- **Dofollow vs. nofollow** — Dofollow links pass link equity; nofollow links don't (directly)

## How to Build Quality Backlinks

1. Create linkable assets (research, tools, infographics)
2. Guest posting on relevant industry sites
3. Digital PR and media outreach
4. Broken link building
5. Unlinked brand mention reclamation

## How ZentroSEO Tracks Backlinks

[ZentroBacklinks](/features/zentrobacklinks/) monitors your backlink profile, identifies new and lost links, analyzes anchor text distribution, and alerts you to toxic links.`,
    category: "Off-Page SEO",
    relatedTerms: ["anchor-text", "domain-authority", "link-building", "digital-pr"],
    relatedBlogSlugs: ["link-building-strategies-guide", "broken-link-building-technique", "brand-mentions-unlinked-seo"],
    relatedFeatures: ["zentrobacklinks"],
    entities: [
      { name: "Backlink", type: "Thing" },
      { name: "PageRank", type: "Thing" },
      { name: "Link Equity", type: "Thing" },
    ],
  },
  {
    term: "Canonical Tag",
    slug: "canonical-tag",
    definition: "A canonical tag (rel=\"canonical\") is an HTML element that tells search engines which URL is the preferred version of a page, preventing duplicate content issues and consolidating link equity.",
    longDescription: `## What Is a Canonical Tag?

A canonical tag is an HTML element placed in the \`<head>\` section of a webpage that specifies the preferred (canonical) URL for that content. It looks like:

\`\`\`html
<link rel="canonical" href="https://example.com/preferred-page/" />
\`\`\`

## Why Canonical Tags Matter

Websites often have multiple URLs serving the same or very similar content:

- HTTP vs. HTTPS versions
- WWW vs. non-WWW versions
- URL parameters (sorting, filtering, tracking)
- Print-friendly versions
- AMP pages

Without canonical tags, search engines may:

- **Split ranking signals** across duplicate URLs
- **Index the wrong version** of your page
- **Waste crawl budget** on duplicates

## Canonical Tag Best Practices

1. Every page should have a self-referencing canonical tag
2. Point all duplicate/variant URLs to the canonical version
3. Use absolute URLs (not relative paths)
4. Ensure canonical URLs return 200 status codes
5. Don't canonical to redirected URLs
6. Be consistent — canonical should match the URL in your sitemap

## Canonical Tags vs. 301 Redirects

| Scenario | Use Canonical | Use 301 |
|---|---|---|
| Multiple URL parameters | ✅ | ❌ |
| Permanently moved page | ❌ | ✅ |
| Similar content on different URLs | ✅ | ❌ |
| Domain migration | ❌ | ✅ |

## How ZentroSEO Audits Canonical Tags

[ZentroAudit](/features/zentroaudit/) checks every page for proper canonical tag implementation, identifying conflicts, missing canonicals, and chains.`,
    category: "Technical SEO",
    relatedTerms: ["indexability", "duplicate-content", "crawlability"],
    relatedBlogSlugs: ["canonicalization", "crawlability-vs-indexability"],
    relatedFeatures: ["zentroaudit"],
    entities: [
      { name: "Canonical Tag", type: "Thing" },
      { name: "Duplicate Content", type: "Thing" },
    ],
  },
  {
    term: "Hreflang",
    slug: "hreflang",
    definition: "Hreflang is an HTML attribute that tells search engines which language and regional version of a page to show to users, ensuring the correct localized content appears in search results.",
    longDescription: `## What Is Hreflang?

Hreflang is an HTML attribute used to specify the language and geographic targeting of a webpage. It helps search engines serve the correct localized version of your content to users based on their language and location.

## How Hreflang Works

Hreflang tags are placed in the \`<head>\` of your HTML or in your XML sitemap:

\`\`\`html
<link rel="alternate" hreflang="en-us" href="https://example.com/en-us/page/" />
<link rel="alternate" hreflang="es" href="https://example.com/es/page/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/page/" />
\`\`\`

## When to Use Hreflang

- You have content in multiple languages
- You serve different content to different countries (even if the language is the same)
- You want to prevent "duplicate content" issues between regional versions

## Common Hreflang Mistakes

1. Missing return tags (every hreflang relationship must be bidirectional)
2. Using incorrect language/country codes
3. Not including an x-default tag
4. Pointing hreflang to non-canonical URLs
5. Mixing hreflang in HTML and sitemap simultaneously

## How ZentroSEO Validates Hreflang

[ZentroAudit](/features/zentroaudit/) validates all hreflang implementations, checking for missing return tags, invalid codes, and conflicts with canonical tags.`,
    category: "Technical SEO",
    relatedTerms: ["canonical-tag", "international-seo", "indexability"],
    relatedBlogSlugs: ["international-seo-hreflang"],
    relatedFeatures: ["zentroaudit"],
    entities: [
      { name: "Hreflang", type: "Thing" },
      { name: "International SEO", type: "Thing" },
    ],
  },
  {
    term: "Robots.txt",
    slug: "robots-txt",
    definition: "Robots.txt is a text file at a website's root directory that instructs search engine crawlers which pages or sections they are allowed or disallowed to crawl and access.",
    longDescription: `## What Is Robots.txt?

Robots.txt is a plain text file located at the root of your domain (e.g., \`https://example.com/robots.txt\`) that provides instructions to web crawlers about which parts of your site they should or shouldn't access.

## Basic Robots.txt Syntax

\`\`\`
User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /public/

Sitemap: https://example.com/sitemap.xml
\`\`\`

## Important Robots.txt Rules

- **User-agent** — Specifies which crawler the rules apply to (\`*\` = all crawlers)
- **Disallow** — Blocks access to specified paths
- **Allow** — Explicitly permits access (overrides Disallow for specific paths)
- **Sitemap** — Points crawlers to your XML sitemap

## Robots.txt vs. Meta Robots

| Feature | Robots.txt | Meta Robots |
|---|---|---|
| Scope | Controls crawl access | Controls indexing behavior |
| Location | Root directory file | HTML \`<head>\` tag |
| Granularity | Directory/path level | Page level |
| Prevents crawling | ✅ | ❌ (page is still crawled) |
| Prevents indexing | ❌ (indirectly) | ✅ (\`noindex\`) |

## How ZentroSEO Validates Robots.txt

[ZentroAudit](/features/zentroaudit/) parses your robots.txt file and checks for common mistakes like accidentally blocking important pages, missing sitemap references, or conflicting rules.`,
    category: "Technical SEO",
    relatedTerms: ["crawlability", "meta-robots", "xml-sitemap", "crawl-budget"],
    relatedBlogSlugs: ["robots-vs-meta-robots", "crawlability-vs-indexability"],
    relatedFeatures: ["zentroaudit"],
    entities: [
      { name: "Robots Exclusion Protocol", type: "Thing" },
      { name: "Web Crawler", type: "Thing" },
    ],
  },
  {
    term: "Meta Robots",
    slug: "meta-robots",
    definition: "Meta robots is an HTML meta tag that instructs search engines whether to index a page and whether to follow its links, offering page-level control over search engine behavior.",
    longDescription: `## What Is the Meta Robots Tag?

The meta robots tag is an HTML element placed in a page's \`<head>\` that tells search engine crawlers how to handle that specific page. Common directives include:

\`\`\`html
<meta name="robots" content="noindex, nofollow" />
\`\`\`

## Common Meta Robots Directives

- **index** — Allow the page to be indexed (default)
- **noindex** — Prevent the page from appearing in search results
- **follow** — Follow links on the page (default)
- **nofollow** — Don't follow any links on the page
- **noarchive** — Don't show a cached copy
- **nosnippet** — Don't show a text snippet in results
- **max-snippet:[number]** — Limit snippet length

## When to Use Noindex

- Thank you / confirmation pages
- Internal search results pages
- Login/registration pages
- Staging or test pages
- Thin content that shouldn't rank

## How ZentroSEO Checks Meta Robots

[ZentroAudit](/features/zentroaudit/) scans all pages for meta robots tags and alerts you when important pages have accidental \`noindex\` directives or when pages that should be excluded are missing them.`,
    category: "Technical SEO",
    relatedTerms: ["robots-txt", "indexability", "crawlability"],
    relatedBlogSlugs: ["robots-vs-meta-robots", "crawlability-vs-indexability"],
    relatedFeatures: ["zentroaudit"],
    entities: [
      { name: "Meta Robots Tag", type: "Thing" },
      { name: "Search Engine Indexing", type: "Thing" },
    ],
  },
  {
    term: "Knowledge Graph",
    slug: "knowledge-graph",
    definition: "Google's Knowledge Graph is a massive database of entities and their relationships, used to power knowledge panels, featured snippets, and AI-generated answers in search results.",
    longDescription: `## What Is the Knowledge Graph?

Google's Knowledge Graph is a knowledge base of billions of facts about people, places, things, and their interconnections. Launched in 2012, it powers many SERP features including knowledge panels, entity cards, and AI Overviews.

## How the Knowledge Graph Works

The Knowledge Graph stores entities as nodes and their relationships as edges. For example:

- **Entity:** "ZentroSEO" (type: SoftwareApplication)
- **Attributes:** founded 2024, category: SEO tool, creator: OLKA Technology
- **Relationships:** competes with Ahrefs, SEMrush; related to SEO

## How to Get Into the Knowledge Graph

1. **Use structured data** — Organization, Person, Product schema
2. **Create a Wikipedia/Wikidata entry** (if notable enough)
3. **Maintain consistent entity information** across the web
4. **Build topical authority** with comprehensive content
5. **Use \`sameAs\` schema** to link to authoritative profiles

## Why Knowledge Graph Matters for SEO

- Triggers **knowledge panels** in search results
- Powers **voice search** answers
- Feeds into **Google's AI Overviews** and **LLM training data**
- Establishes **entity authority** that benefits all related content

## How ZentroSEO Supports Knowledge Graph Optimization

[ZentroMarkup](/features/zentromarkup/) generates entity-rich schema markup that helps Google connect your content to Knowledge Graph entities. [ZentroAudit](/features/zentroaudit/) identifies missing entity signals.`,
    category: "Semantic SEO",
    relatedTerms: ["entity-based-seo", "structured-data", "schema-markup"],
    relatedBlogSlugs: ["knowledge-graph-optimization", "entity-based-seo-explained"],
    relatedFeatures: ["zentromarkup", "zentroaudit"],
    entities: [
      { name: "Google Knowledge Graph", type: "Thing" },
      { name: "Entity", type: "Thing" },
    ],
  },
  {
    term: "E-E-A-T",
    slug: "e-e-a-t",
    definition: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness — Google's framework for evaluating content quality and the credibility of content creators and websites.",
    longDescription: `## What Is E-E-A-T?

E-E-A-T stands for **Experience, Expertise, Authoritativeness, and Trustworthiness**. It's a framework from Google's Search Quality Rater Guidelines used to evaluate the quality and credibility of content and its creators.

## The Four Components

- **Experience** — Has the content creator actually used/experienced what they're writing about?
- **Expertise** — Does the creator have relevant knowledge or qualifications?
- **Authoritativeness** — Is the creator or website recognized as a leading source?
- **Trustworthiness** — Is the content accurate, transparent, and safe?

## How to Demonstrate E-E-A-T

1. **Author bios** with credentials, experience, and social links
2. **Bylines** on all content with links to author profiles
3. **Citations** and links to authoritative sources
4. **Structured data** (Person schema with \`knowsAbout\`)
5. **Reviews and testimonials** from real users
6. **About page** with company information and team details
7. **Contact information** visible and accessible

## E-E-A-T and YMYL (Your Money or Your Life)

E-E-A-T is especially important for YMYL topics (health, finance, legal) where inaccurate information could harm users. Google applies stricter quality standards to these topics.

## How ZentroSEO Supports E-E-A-T

[ZentroAudit](/features/zentroaudit/) checks for E-E-A-T signals like author markup, about pages, and trust indicators. [ZentroMarkup](/features/zentromarkup/) generates Person and Organization schema to declare expertise.`,
    category: "Content Strategy",
    relatedTerms: ["topical-authority", "semantic-seo", "structured-data"],
    relatedBlogSlugs: ["eeat-signals-author-authority", "topical-authority-how-to-build"],
    relatedFeatures: ["zentroaudit", "zentromarkup"],
    entities: [
      { name: "E-E-A-T", type: "Thing" },
      { name: "Google Search Quality Rater Guidelines", type: "Thing" },
    ],
  },
  {
    term: "Topical Map",
    slug: "topical-map",
    definition: "A topical map is a strategic content plan that outlines all subtopics, entities, and relationships within a subject area to guide comprehensive content creation and establish topical authority.",
    longDescription: `## What Is a Topical Map?

A topical map is a structured plan that outlines every subtopic, entity, question, and content piece needed to comprehensively cover a subject area. It serves as a blueprint for building topical authority.

## Components of a Topical Map

- **Core topic** — The main subject you want to be an authority on
- **Subtopics** — Secondary topics that branch from the core
- **Supporting articles** — Individual pieces covering specific aspects
- **Entity list** — All entities (people, tools, concepts) that need coverage
- **Question inventory** — All questions users ask about the topic
- **Content types** — Blog posts, guides, glossary entries, comparisons

## How to Create a Topical Map

1. Define your core topic and primary keywords
2. Research all subtopics using tools, PAA boxes, and competitor analysis
3. Identify entities and their attributes within each subtopic
4. Map content types to each subtopic (article, guide, glossary, comparison)
5. Plan internal linking structure (hub-and-spoke)
6. Prioritize by search volume, competition, and business value

## How ZentroSEO Creates Topical Maps

[ZentroKeywords](/features/zentrokeywords/) discovers related keywords and entities to populate your topical map. [ZentroWrite](/features/zentrowrite/) generates content briefs aligned to your map structure.`,
    category: "Content Strategy",
    relatedTerms: ["topical-authority", "content-silo", "semantic-seo", "keyword-clustering"],
    relatedBlogSlugs: ["topical-maps-content-strategy", "topical-authority-how-to-build"],
    relatedFeatures: ["zentrokeywords", "zentrowrite"],
    entities: [
      { name: "Topical Map", type: "Thing" },
      { name: "Content Strategy", type: "Thing" },
    ],
  },
  {
    term: "Content Silo",
    slug: "content-silo",
    definition: "A content silo is a site architecture strategy that groups related content into thematic clusters connected by internal links, making it easier for search engines to understand topical focus.",
    longDescription: `## What Is a Content Silo?

A content silo is an organizational structure where related content is grouped together and interlinked within its thematic cluster. Each silo focuses on a specific topic, with a hub page linking to detailed subtopic pages.

## Silo Structure

\`\`\`
/technical-seo/ (Hub)
├── /technical-seo/crawlability/
├── /technical-seo/core-web-vitals/
├── /technical-seo/schema-markup/
└── /technical-seo/site-architecture/
\`\`\`

## Benefits of Content Silos

- **Topical clarity** — Search engines understand your expertise areas
- **Link equity flow** — Internal links strengthen the entire cluster
- **User experience** — Visitors can easily navigate related content
- **Ranking power** — Silo hubs tend to rank for competitive head terms

## Silo vs. Topic Cluster

These terms are often used interchangeably, but silos traditionally emphasize strict URL hierarchy, while topic clusters focus more on internal linking patterns regardless of URL structure.

## How ZentroSEO Supports Silo Architecture

[ZentroAudit](/features/zentroaudit/) analyzes your internal linking structure and identifies weak connections within content silos.`,
    category: "Content Strategy",
    relatedTerms: ["topical-map", "internal-linking", "topical-authority", "site-architecture"],
    relatedBlogSlugs: ["site-architecture-seo", "internal-linking-strategy", "topical-maps-content-strategy"],
    relatedFeatures: ["zentroaudit"],
    entities: [
      { name: "Content Silo", type: "Thing" },
      { name: "Information Architecture", type: "Thing" },
    ],
  },
  {
    term: "Internal Linking",
    slug: "internal-linking",
    definition: "Internal linking is the practice of connecting pages within the same website using hyperlinks, helping distribute link equity, establish content hierarchy, and guide both users and crawlers.",
    longDescription: `## What Is Internal Linking?

Internal linking is the practice of creating hyperlinks between pages on the same website. Unlike external links (which point to other domains), internal links help distribute authority, establish hierarchy, and improve navigation within your site.

## Why Internal Linking Matters

- **Distributes link equity** across your site
- **Helps crawlers discover** new and deep pages
- **Establishes content hierarchy** and topical relationships
- **Reduces bounce rate** by guiding users to related content
- **Passes contextual signals** through anchor text

## Internal Linking Best Practices

1. Use **descriptive anchor text** that describes the target page
2. Link from **high-authority pages** to pages you want to boost
3. Create **contextual links** within body content (not just navigation)
4. Ensure **every page** has at least 2-3 internal links pointing to it
5. Build **hub-and-spoke** structures with pillar pages and supporting content
6. Regularly audit for **orphan pages** (pages with no internal links)

## How ZentroSEO Audits Internal Links

[ZentroAudit](/features/zentroaudit/) maps your entire internal linking structure, identifies orphan pages, finds broken links, and recommends strategic linking opportunities to strengthen topical clusters.`,
    category: "On-Page SEO",
    relatedTerms: ["anchor-text", "content-silo", "site-architecture", "crawlability"],
    relatedBlogSlugs: ["internal-linking-strategy", "internal-vs-external-links-seo", "site-architecture-seo"],
    relatedFeatures: ["zentroaudit"],
    entities: [
      { name: "Internal Link", type: "Thing" },
      { name: "Anchor Text", type: "Thing" },
    ],
  },
  {
    term: "Anchor Text",
    slug: "anchor-text",
    definition: "Anchor text is the visible, clickable text in a hyperlink that provides context to both users and search engines about the content of the linked page.",
    longDescription: `## What Is Anchor Text?

Anchor text is the clickable text portion of a hyperlink. It appears as colored (usually blue) underlined text and provides context about the page being linked to.

## Types of Anchor Text

- **Exact match** — Uses the target keyword exactly ("keyword research")
- **Partial match** — Includes a variation ("best keyword research tools")
- **Branded** — Uses the brand name ("ZentroSEO")
- **Generic** — Non-descriptive ("click here," "read more")
- **Naked URL** — The URL itself ("https://zentroseo.com")
- **Image anchor** — The alt text of a linked image

## Anchor Text Best Practices

1. Use **descriptive, natural** anchor text
2. Vary your anchor text (avoid over-optimization)
3. Avoid excessive exact-match anchors (can trigger spam filters)
4. Make anchor text **relevant** to the linked content
5. Use contextual anchors within body content for maximum SEO value

## How ZentroSEO Analyzes Anchor Text

[ZentroBacklinks](/features/zentrobacklinks/) analyzes your backlink anchor text distribution and flags potential over-optimization risks.`,
    category: "Off-Page SEO",
    relatedTerms: ["backlinks", "internal-linking", "link-building"],
    relatedBlogSlugs: ["anchor-text-optimization", "internal-vs-external-links-seo", "link-building-strategies-guide"],
    relatedFeatures: ["zentrobacklinks"],
    entities: [
      { name: "Anchor Text", type: "Thing" },
      { name: "Hyperlink", type: "Thing" },
    ],
  },
  {
    term: "Domain Authority",
    slug: "domain-authority",
    definition: "Domain authority is a third-party metric (originally by Moz) that predicts a website's likelihood of ranking in search results, calculated from backlink profile quality and quantity.",
    longDescription: `## What Is Domain Authority?

Domain Authority (DA) is a search engine ranking score developed by Moz that predicts how likely a website is to rank in search engine result pages (SERPs). Scores range from 1 to 100, with higher scores indicating greater ranking potential.

**Important:** Domain Authority is not a Google ranking factor. It's a third-party metric used for competitive analysis and benchmarking.

## How Domain Authority Is Calculated

DA is calculated based on:

- Number and quality of linking root domains
- Total number of backlinks
- Link diversity and distribution
- MozRank and MozTrust scores

## Domain Authority vs. Page Authority

- **Domain Authority** — Predicts ranking potential for the entire domain
- **Page Authority** — Predicts ranking potential for a specific page

## How to Improve Domain Authority

1. Build high-quality backlinks from authoritative sites
2. Remove or disavow toxic backlinks
3. Create linkable content (research, tools, data studies)
4. Improve internal linking structure
5. Be patient — DA builds over time

## How ZentroSEO Tracks Authority

[ZentroBacklinks](/features/zentrobacklinks/) tracks your domain's backlink metrics and authority scores over time, comparing against competitors.`,
    category: "Off-Page SEO",
    relatedTerms: ["backlinks", "page-authority", "link-building"],
    relatedBlogSlugs: ["link-building-strategies-guide", "broken-link-building-technique"],
    relatedFeatures: ["zentrobacklinks"],
    entities: [
      { name: "Domain Authority", type: "Thing" },
      { name: "Moz", type: "Organization", url: "https://moz.com" },
    ],
  },
  {
    term: "Featured Snippet",
    slug: "featured-snippet",
    definition: "A featured snippet is a highlighted search result box at the top of Google's organic results (position zero) that directly answers a user's query using content extracted from a webpage.",
    longDescription: `## What Is a Featured Snippet?

A featured snippet is a special search result that appears above the traditional organic results (often called "position zero"). Google extracts content directly from a webpage to answer the user's query without requiring a click.

## Types of Featured Snippets

- **Paragraph** — A text block answering "what is" or "why" queries
- **List** — Ordered or unordered lists (steps, rankings, tips)
- **Table** — Data presented in tabular format
- **Video** — YouTube video clips with timestamps

## How to Optimize for Featured Snippets

1. Target question-based queries (what, how, why, when)
2. Provide a clear, concise answer (40-60 words for paragraph snippets)
3. Use structured formatting (H2s, lists, tables)
4. Already rank on page 1 for the target query
5. Match the current snippet format (paragraph, list, or table)

## How ZentroSEO Helps Capture Featured Snippets

[ZentroRank](/features/zentrorank/) identifies queries where you're eligible for featured snippets and tracks snippet ownership over time.`,
    category: "Analytics & Tools",
    relatedTerms: ["serp", "rich-result", "search-intent"],
    relatedBlogSlugs: ["search-intent-keyword-strategy", "content-gap-analysis"],
    relatedFeatures: ["zentrorank"],
    entities: [
      { name: "Featured Snippet", type: "Thing" },
      { name: "Google Search", type: "WebApplication" },
    ],
  },
  {
    term: "Rich Result",
    slug: "rich-result",
    definition: "Rich results are enhanced search result listings that display additional visual elements like star ratings, images, prices, or FAQ dropdowns, powered by structured data markup.",
    longDescription: `## What Are Rich Results?

Rich results (formerly "rich snippets") are enhanced search result listings that display extra information beyond the standard title, URL, and description. They're powered by structured data (schema markup) on your pages.

## Types of Rich Results

- **Review stars** — Aggregate ratings for products/services
- **FAQ dropdowns** — Expandable Q&A sections
- **How-to steps** — Step-by-step visual instructions
- **Recipe cards** — Ingredients, cook time, nutrition
- **Event listings** — Date, location, ticket info
- **Product markup** — Price, availability, reviews
- **Breadcrumbs** — Navigation path display
- **Sitelinks** — Sub-page links under main result

## How to Earn Rich Results

1. Add valid structured data to your pages
2. Follow Google's specific requirements for each rich result type
3. Test with Google's Rich Results Test tool
4. Ensure content matches the structured data claims
5. Maintain high content quality (E-E-A-T)

## How ZentroSEO Enables Rich Results

[ZentroMarkup](/features/zentromarkup/) generates valid structured data for all supported rich result types and validates against Google's requirements.`,
    category: "Technical SEO",
    relatedTerms: ["schema-markup", "structured-data", "serp", "featured-snippet"],
    relatedBlogSlugs: ["schema-markup-seo-guide", "structured-data-ecommerce-product-schema"],
    relatedFeatures: ["zentromarkup"],
    entities: [
      { name: "Rich Result", type: "Thing" },
      { name: "Structured Data", type: "Thing" },
    ],
  },
  {
    term: "Structured Data",
    slug: "structured-data",
    definition: "Structured data is a standardized format for providing explicit information about a page's content to search engines, typically implemented using schema.org vocabulary in JSON-LD format.",
    longDescription: `## What Is Structured Data?

Structured data is a way of organizing and labeling content on your webpage so that search engines can understand it more precisely. It uses a standardized vocabulary (primarily from schema.org) to describe entities, attributes, and relationships.

## Implementation Formats

- **JSON-LD** (recommended by Google) — A script block in \`<head>\`
- **Microdata** — Inline HTML attributes
- **RDFa** — HTML attribute-based annotation

## Common Structured Data Types

- Organization, Person, Product, Article
- FAQPage, HowTo, BreadcrumbList
- LocalBusiness, Event, Recipe
- DefinedTerm, WebPage, WebSite

## Benefits of Structured Data

1. Enables rich results in search
2. Improves Knowledge Graph eligibility
3. Powers voice search answers
4. Feeds AI/LLM understanding of your content
5. Provides explicit entity signals

## How ZentroSEO Implements Structured Data

[ZentroMarkup](/features/zentromarkup/) generates, validates, and deploys structured data across all your pages, supporting 20+ schema types.`,
    category: "Technical SEO",
    relatedTerms: ["schema-markup", "rich-result", "knowledge-graph", "json-ld"],
    relatedBlogSlugs: ["schema-markup-seo-guide", "structured-data-ecommerce-product-schema"],
    relatedFeatures: ["zentromarkup"],
    entities: [
      { name: "Structured Data", type: "Thing" },
      { name: "Schema.org", type: "WebSite", url: "https://schema.org" },
    ],
  },
  {
    term: "Mobile-First Indexing",
    slug: "mobile-first-indexing",
    definition: "Mobile-first indexing means Google predominantly uses the mobile version of a website's content for indexing and ranking, reflecting the majority of users who browse on mobile devices.",
    longDescription: `## What Is Mobile-First Indexing?

Mobile-first indexing is Google's approach of using the **mobile version** of your website as the primary source for indexing and ranking. This means Googlebot crawls and evaluates your mobile pages first, and the desktop version is secondary.

## Why Google Switched to Mobile-First

- Over 60% of searches happen on mobile devices
- Many websites had incomplete mobile versions
- Google wants search results to reflect the actual user experience

## Impact on SEO

- Content missing from mobile pages won't be indexed
- Mobile page speed directly affects rankings
- Structured data must be present on mobile versions
- Internal links on mobile are the source of truth

## How to Ensure Mobile-First Compliance

1. Use responsive design (same HTML, different CSS)
2. Ensure content parity between mobile and desktop
3. Test with Google's Mobile-Friendly Test
4. Optimize mobile Core Web Vitals
5. Check structured data on mobile pages

## How ZentroSEO Tests Mobile-First Readiness

[ZentroAudit](/features/zentroaudit/) simulates mobile crawling and compares mobile vs. desktop content parity, structured data, and performance metrics.`,
    category: "Technical SEO",
    relatedTerms: ["core-web-vitals", "crawlability", "page-speed"],
    relatedBlogSlugs: ["mobile-first-indexing-seo"],
    relatedFeatures: ["zentroaudit", "zentrofix"],
    entities: [
      { name: "Mobile-First Indexing", type: "Thing" },
      { name: "Responsive Web Design", type: "Thing" },
    ],
  },
  {
    term: "Long-Tail Keywords",
    slug: "long-tail-keywords",
    definition: "Long-tail keywords are specific, multi-word search phrases with lower search volume but higher conversion intent, making them easier to rank for and more targeted than broad head terms.",
    longDescription: `## What Are Long-Tail Keywords?

Long-tail keywords are search queries that are typically 3+ words long and very specific. They have lower individual search volume but collectively account for the majority of all searches. They also tend to have higher conversion rates because they indicate clearer intent.

## Examples

| Head Term | Long-Tail Keyword |
|---|---|
| SEO tools | best SEO audit tools for small business |
| keyword research | how to do keyword research for ecommerce |
| backlinks | how to get quality backlinks without outreach |

## Why Long-Tail Keywords Matter

- **Less competition** — Easier to rank for
- **Higher conversion** — More specific intent
- **Voice search alignment** — People speak in full phrases
- **Content depth** — Drive comprehensive topic coverage
- **Collective volume** — 70% of all searches are long-tail

## How to Find Long-Tail Keywords

1. Google's "People Also Ask" and "Related Searches"
2. Answer-based tools (AnswerThePublic, AlsoAsked)
3. Keyword research tools with question filters
4. Forum mining (Reddit, Quora)
5. Search Console query reports

## How ZentroSEO Discovers Long-Tail Keywords

[ZentroKeywords](/features/zentrokeywords/) surfaces long-tail keyword opportunities with volume, difficulty, and intent classification.`,
    category: "Content Strategy",
    relatedTerms: ["search-intent", "keyword-clustering", "keyword-research"],
    relatedBlogSlugs: ["long-tail-keywords-strategy", "keyword-research-complete-guide", "search-intent-keyword-strategy"],
    relatedFeatures: ["zentrokeywords"],
    entities: [
      { name: "Long-Tail Keyword", type: "Thing" },
      { name: "Keyword Research", type: "Thing" },
    ],
  },
  {
    term: "Search Intent",
    slug: "search-intent",
    definition: "Search intent is the underlying goal or purpose behind a user's search query, classified as informational, navigational, transactional, or commercial investigation.",
    longDescription: `## What Is Search Intent?

Search intent (also called user intent or query intent) is the **reason** behind a search query — what the user is actually trying to accomplish. Understanding and matching search intent is critical for SEO success.

## The Four Types of Search Intent

1. **Informational** — User wants to learn something ("what is semantic SEO")
2. **Navigational** — User wants to reach a specific page ("ZentroSEO login")
3. **Transactional** — User wants to take action ("buy SEO tool subscription")
4. **Commercial Investigation** — User is comparing options ("ZentroSEO vs Ahrefs")

## Why Search Intent Matters for SEO

Google prioritizes results that best match the user's intent. A product page won't rank for an informational query, and a blog post won't rank for a transactional query.

## How to Determine Search Intent

1. **Analyze the SERP** — What type of content currently ranks?
2. **Look at SERP features** — Featured snippets suggest informational; shopping results suggest transactional
3. **Examine query modifiers** — "how to," "what is" = informational; "buy," "price" = transactional; "vs," "best" = commercial

## How ZentroSEO Classifies Intent

[ZentroKeywords](/features/zentrokeywords/) automatically classifies keywords by intent type, helping you create the right content format for each query.`,
    category: "Content Strategy",
    relatedTerms: ["long-tail-keywords", "keyword-research", "serp"],
    relatedBlogSlugs: ["search-intent-keyword-strategy", "keyword-research-complete-guide"],
    relatedFeatures: ["zentrokeywords"],
    entities: [
      { name: "Search Intent", type: "Thing" },
      { name: "User Intent", type: "Thing" },
    ],
  },
  {
    term: "NAP Consistency",
    slug: "nap-consistency",
    definition: "NAP consistency means ensuring your business Name, Address, and Phone number are identical across all online directories, citations, and platforms to strengthen local SEO signals.",
    longDescription: `## What Is NAP Consistency?

NAP stands for **Name, Address, Phone Number**. NAP consistency means ensuring these three pieces of business information are identical across every online mention — your website, Google Business Profile, directories, social media, and citation sites.

## Why NAP Consistency Matters for Local SEO

Search engines cross-reference your NAP information across the web to verify your business's legitimacy and location. Inconsistencies create confusion and can:

- Lower local search rankings
- Reduce Google Business Profile visibility
- Erode trust with search engines and users
- Split your local authority across multiple entity variations

## How to Maintain NAP Consistency

1. Audit all existing citations and listings
2. Use the exact same format everywhere (e.g., "Street" vs "St.")
3. Update all listings when you move or change phone numbers
4. Monitor for unauthorized changes on third-party sites
5. Use a citation management tool to track all mentions

## How ZentroSEO Checks NAP Consistency

[ZentroAudit](/features/zentroaudit/) scans your local listings for NAP inconsistencies and provides a correction checklist.`,
    category: "Local SEO",
    relatedTerms: ["local-pack", "google-business-profile"],
    relatedBlogSlugs: ["local-citations-nap-consistency", "google-business-profile-optimization"],
    relatedFeatures: ["zentroaudit"],
    entities: [
      { name: "NAP Consistency", type: "Thing" },
      { name: "Local SEO", type: "Thing" },
    ],
  },
  {
    term: "Local Pack",
    slug: "local-pack",
    definition: "The local pack is a SERP feature showing the top 3 local business results with a map, triggered by location-based queries and powered by Google Business Profile data.",
    longDescription: `## What Is the Local Pack?

The local pack (also called the "map pack" or "3-pack") is a prominent SERP feature that displays the top 3 local business results alongside a Google Maps widget. It appears for queries with local intent.

## Local Pack Ranking Factors

- **Google Business Profile** completeness and optimization
- **NAP consistency** across the web
- **Proximity** to the searcher's location
- **Reviews** — Quantity, quality, and recency
- **Local citations** from relevant directories
- **On-page local signals** (address, local content, local schema)

## How to Rank in the Local Pack

1. Claim and optimize your Google Business Profile
2. Build consistent local citations
3. Encourage and respond to customer reviews
4. Add LocalBusiness schema to your website
5. Create location-specific content
6. Optimize for local keywords

## How ZentroSEO Supports Local SEO

[ZentroAudit](/features/zentroaudit/) evaluates your local SEO signals and identifies gaps in your Google Business Profile optimization, citation consistency, and local schema implementation.`,
    category: "Local SEO",
    relatedTerms: ["nap-consistency", "google-business-profile", "serp"],
    relatedBlogSlugs: ["google-business-profile-optimization", "local-keyword-research", "local-citations-nap-consistency"],
    relatedFeatures: ["zentroaudit"],
    entities: [
      { name: "Local Pack", type: "Thing" },
      { name: "Google Maps", type: "WebApplication" },
    ],
  },
  {
    term: "Keyword Clustering",
    slug: "keyword-clustering",
    definition: "Keyword clustering is the process of grouping semantically related keywords together so they can be targeted by a single page, maximizing topical relevance and ranking potential.",
    longDescription: `## What Is Keyword Clustering?

Keyword clustering is the practice of grouping related keywords that share the same search intent and can be effectively targeted by a single piece of content. Instead of creating separate pages for each keyword variant, you create one comprehensive page that targets the entire cluster.

## Why Keyword Clustering Matters

- **Avoids keyword cannibalization** — Prevents multiple pages competing for the same query
- **Improves topical relevance** — A single page targeting related terms appears more comprehensive
- **Saves resources** — Create fewer, better pages instead of many thin ones
- **Aligns with semantic search** — Google understands that related queries can be served by one page

## How to Cluster Keywords

1. Collect all target keywords from research
2. Group by shared SERP overlap (pages that rank for multiple keywords in the group)
3. Assign one primary keyword per cluster
4. Map each cluster to a single URL or content piece
5. Use secondary keywords as H2s and supporting content

## How ZentroSEO Clusters Keywords

[ZentroKeywords](/features/zentrokeywords/) automatically clusters keywords by SERP overlap and semantic similarity, helping you build efficient content plans.`,
    category: "Content Strategy",
    relatedTerms: ["long-tail-keywords", "topical-map", "search-intent", "keyword-research"],
    relatedBlogSlugs: ["keyword-clustering-topical-groups", "keyword-research-complete-guide"],
    relatedFeatures: ["zentrokeywords"],
    entities: [
      { name: "Keyword Clustering", type: "Thing" },
      { name: "Content Planning", type: "Thing" },
    ],
  },
  {
    term: "XML Sitemap",
    slug: "xml-sitemap",
    definition: "An XML sitemap is a file that lists all important URLs on a website along with metadata like last modification date and priority, helping search engine crawlers discover and index pages efficiently.",
    longDescription: `## What Is an XML Sitemap?

An XML sitemap is a file (usually at \`/sitemap.xml\`) that provides search engines with a structured list of all the pages you want indexed. It includes metadata about each URL, such as when it was last modified, how often it changes, and its relative importance.

## XML Sitemap Structure

\`\`\`xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/page/</loc>
    <lastmod>2026-02-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
\`\`\`

## Best Practices

1. Include only canonical, indexable URLs
2. Keep \`lastmod\` dates accurate and updated
3. Submit via Google Search Console
4. Keep under 50,000 URLs per sitemap (use sitemap index for larger sites)
5. Reference sitemap location in robots.txt

## How ZentroSEO Manages Sitemaps

[ZentroAudit](/features/zentroaudit/) validates your XML sitemap against your actual site structure, identifying missing URLs, stale dates, and inconsistencies.`,
    category: "Technical SEO",
    relatedTerms: ["crawlability", "robots-txt", "indexability"],
    relatedBlogSlugs: ["xml-sitemap-optimization"],
    relatedFeatures: ["zentroaudit"],
    entities: [
      { name: "XML Sitemap", type: "Thing" },
      { name: "Search Engine Crawling", type: "Thing" },
    ],
  },
  {
    term: "NLP",
    slug: "nlp",
    definition: "Natural Language Processing (NLP) is a branch of AI that enables search engines to understand the meaning, context, and relationships within text, powering semantic search and entity recognition.",
    longDescription: `## What Is NLP in SEO?

Natural Language Processing (NLP) is a field of artificial intelligence that focuses on the interaction between computers and human language. In SEO, NLP powers how search engines understand, interpret, and rank content.

## Google's NLP Models

- **BERT** (2019) — Understands word context in both directions
- **MUM** (2021) — Multimodal, multilingual understanding
- **Gemini** — Powers AI Overviews and advanced query understanding

## How NLP Affects SEO

- Search engines understand **meaning**, not just keywords
- **Entity recognition** identifies people, places, and concepts in your content
- **Sentiment analysis** evaluates the tone of your content
- **Query understanding** matches complex queries to relevant content

## Optimizing for NLP

1. Write naturally and conversationally
2. Cover topics comprehensively with clear entity mentions
3. Use structured headings that match query patterns
4. Include definitions, examples, and context for technical terms
5. Use schema markup to reinforce entity signals

## How ZentroSEO Leverages NLP

[ZentroWrite](/features/zentrowrite/) uses NLP analysis to ensure content covers the entities and topics that search engines expect for a given query.`,
    category: "Semantic SEO",
    relatedTerms: ["semantic-seo", "entity-based-seo", "search-intent"],
    relatedBlogSlugs: ["nlp-search-engines-how-google-understands-content", "what-is-semantic-seo"],
    relatedFeatures: ["zentrowrite"],
    entities: [
      { name: "Natural Language Processing", type: "Thing" },
      { name: "BERT", type: "Thing" },
      { name: "Google MUM", type: "Thing" },
    ],
  },
];
