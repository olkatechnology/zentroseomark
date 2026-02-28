export interface Topic {
  name: string;
  slug: string;
  description: string;
  heroContent: string;
  subtopics: string[];
  relatedBlogSlugs: string[];
  relatedFeatures: string[];
  relatedGlossaryTerms: string[];
  entities: { name: string; url?: string; type?: string }[];
}

export const topics: Topic[] = [
  {
    name: "Technical SEO",
    slug: "technical-seo",
    description: "Master the infrastructure that makes your site discoverable — crawlability, indexation, Core Web Vitals, schema markup, and server-side optimization.",
    heroContent: `Technical SEO is the foundation of every successful search strategy. It covers the infrastructure, code, and configuration that determines whether search engines can **discover, crawl, render, and index** your content.

Without strong technical SEO, even the best content won't rank. Think of it as the plumbing of your website — invisible when working well, catastrophic when broken.

## What Technical SEO Covers

- **Crawlability & Indexability** — Can search engines find and store your pages?
- **Site Architecture** — Is your content logically organized and easy to navigate?
- **Page Speed & Core Web Vitals** — Does your site load fast and feel responsive?
- **Schema Markup & Structured Data** — Are you speaking the search engine's language?
- **Mobile Optimization** — Is your mobile experience equal to (or better than) desktop?
- **Security (HTTPS)** — Is your site encrypted and secure?
- **International SEO** — Are you serving the right content to the right regions?

## Why Technical SEO Matters

Google's crawlers process billions of pages daily. Technical SEO ensures your pages make it through the funnel:

1. **Discovery** → Crawlers find your pages via links and sitemaps
2. **Crawling** → Crawlers access and download your pages
3. **Rendering** → Crawlers execute JavaScript and see your content
4. **Indexing** → Your pages are stored and eligible to rank
5. **Ranking** → Your pages compete for search positions

A failure at any stage means your content is invisible to searchers.`,
    subtopics: ["Crawlability", "Indexability", "Core Web Vitals", "Schema Markup", "Site Architecture", "Mobile-First Indexing", "Page Speed", "HTTPS Security", "JavaScript SEO", "Log File Analysis", "XML Sitemaps", "Robots.txt", "International SEO (Hreflang)"],
    relatedBlogSlugs: ["technical-seo-audit", "crawlability-vs-indexability", "improve-core-web-vitals", "schema-markup-seo-guide", "site-architecture-seo", "mobile-first-indexing-seo", "robots-vs-meta-robots", "xml-sitemap-optimization", "https-security", "javascript-seo-rendering", "log-file-analysis-seo", "international-seo-hreflang"],
    relatedFeatures: ["zentroaudit", "zentrofix", "zentromarkup"],
    relatedGlossaryTerms: ["crawlability", "indexability", "core-web-vitals", "schema-markup", "robots-txt", "meta-robots", "xml-sitemap", "mobile-first-indexing", "hreflang", "structured-data", "rich-result"],
    entities: [
      { name: "Technical SEO", type: "Thing" },
      { name: "Web Crawling", type: "Thing" },
      { name: "Search Engine Indexing", type: "Thing" },
    ],
  },
  {
    name: "Semantic SEO",
    slug: "semantic-seo",
    description: "Optimize for meaning, not just keywords. Learn entity-based SEO, topical authority, Knowledge Graph optimization, and how search engines understand content.",
    heroContent: `Semantic SEO is about helping search engines understand the **meaning** behind your content, not just the words on the page. It's the shift from keyword-centric optimization to entity-centric, topic-comprehensive content strategy.

## The Core Idea

Traditional SEO asked: "Does this page contain the target keyword?"
Semantic SEO asks: "Does this page comprehensively cover the topic, its entities, attributes, and relationships?"

## Key Concepts in Semantic SEO

- **Entity-Based Optimization** — Focus on real-world things (entities) rather than keyword strings
- **Topical Authority** — Establish yourself as the definitive source on a subject
- **Knowledge Graph Alignment** — Structure content so it feeds into Google's entity database
- **Entity-Attribute-Value (EAV) Coverage** — Cover every dimension of an entity
- **Semantic Content Networks** — Build interconnected content that reinforces topical depth

## Why Semantic SEO Is the Future

Google's NLP models (BERT, MUM, Gemini) understand language at a deeper level than ever before. LLMs like ChatGPT and Perplexity rely on semantically rich content for their answers. Websites that embrace semantic SEO are positioned to win in both traditional search and AI-powered discovery.`,
    subtopics: ["Entity-Based SEO", "Topical Authority", "Topical Maps", "Knowledge Graph Optimization", "Content Silos", "Semantic Content Briefs", "NLP & Search Engines", "Entity-Attribute-Value (EAV)"],
    relatedBlogSlugs: ["what-is-semantic-seo", "entity-based-seo-explained", "topical-authority-how-to-build", "topical-maps-content-strategy", "knowledge-graph-optimization", "entity-attribute-value-seo", "semantic-content-briefs", "nlp-search-engines-how-google-understands-content"],
    relatedFeatures: ["zentrowrite", "zentrokeywords", "zentromarkup"],
    relatedGlossaryTerms: ["semantic-seo", "entity-based-seo", "topical-authority", "knowledge-graph", "topical-map", "nlp"],
    entities: [
      { name: "Semantic SEO", type: "Thing" },
      { name: "Entity", type: "Thing" },
      { name: "Natural Language Processing", type: "Thing" },
    ],
  },
  {
    name: "On-Page SEO",
    slug: "on-page-seo",
    description: "Optimize individual page elements — title tags, headings, content structure, internal links, and E-E-A-T signals — to maximize relevance and ranking potential.",
    heroContent: `On-page SEO encompasses everything you can optimize on an individual webpage to improve its search ranking. This includes content, HTML source code, metadata, internal links, and user experience elements.

## Core On-Page Elements

- **Title Tags** — The most important on-page ranking signal
- **Meta Descriptions** — Influence click-through rates from SERPs
- **Heading Hierarchy** — H1-H6 structure that organizes content logically
- **Content Quality** — Comprehensive, well-written, intent-matching content
- **Internal Linking** — Strategic links between related pages
- **Image Optimization** — Alt text, file names, compression
- **E-E-A-T Signals** — Author bios, citations, expertise indicators

## On-Page SEO vs. Technical SEO

On-page SEO focuses on **content and HTML elements** visible on individual pages. Technical SEO deals with **infrastructure and configuration** at the site level. Both are essential — technical SEO gets your pages crawled and indexed; on-page SEO gets them ranked.`,
    subtopics: ["Title Tags", "Meta Descriptions", "Heading Hierarchy", "Content Optimization", "Internal Linking", "Image Alt Text", "E-E-A-T Signals", "Content Freshness"],
    relatedBlogSlugs: ["on-page-seo-audit", "title-tag-optimization", "meta-description-best-practices", "heading-hierarchy-h1-h6-guide", "image-alt-text-seo", "internal-linking-strategy", "content-freshness-updating-old-posts", "eeat-signals-author-authority"],
    relatedFeatures: ["zentroaudit", "zentrofix", "zentrowrite"],
    relatedGlossaryTerms: ["internal-linking", "anchor-text", "e-e-a-t", "search-intent"],
    entities: [
      { name: "On-Page SEO", type: "Thing" },
      { name: "Title Tag", type: "Thing" },
      { name: "Meta Description", type: "Thing" },
    ],
  },
  {
    name: "Off-Page SEO",
    slug: "off-page-seo",
    description: "Build authority through link building, digital PR, brand mentions, and external signals that tell search engines your site is trustworthy and authoritative.",
    heroContent: `Off-page SEO refers to all optimization activities that happen **outside** your website to improve its search rankings. The primary focus is building authority through backlinks, brand mentions, and external signals of trust.

## Key Off-Page SEO Activities

- **Link Building** — Earning backlinks from authoritative, relevant websites
- **Digital PR** — Getting featured in news, industry publications, and media
- **Brand Mentions** — Building brand awareness and unlinked mentions
- **Social Signals** — Social media presence and engagement
- **Guest Posting** — Contributing content to other sites for exposure and links
- **Broken Link Building** — Finding and replacing broken links with your content

## Why Off-Page SEO Matters

While on-page SEO demonstrates relevance, off-page SEO demonstrates **authority and trust**. Google uses external signals (especially backlinks) to evaluate how the web perceives your content. A page with strong on-page optimization AND authoritative backlinks will consistently outrank a page with only one of these.`,
    subtopics: ["Link Building Strategies", "Digital PR", "Anchor Text Optimization", "Brand Mentions", "Guest Posting", "Broken Link Building", "Competitor Backlink Analysis"],
    relatedBlogSlugs: ["link-building-strategies-guide", "digital-pr-seo", "anchor-text-optimization", "brand-mentions-unlinked-seo", "broken-link-building-technique", "internal-vs-external-links-seo"],
    relatedFeatures: ["zentrobacklinks", "zentrocompare"],
    relatedGlossaryTerms: ["backlinks", "anchor-text", "domain-authority", "link-building"],
    entities: [
      { name: "Off-Page SEO", type: "Thing" },
      { name: "Link Building", type: "Thing" },
      { name: "Digital PR", type: "Thing" },
    ],
  },
  {
    name: "Local SEO",
    slug: "local-seo",
    description: "Dominate local search results with Google Business Profile optimization, local citations, NAP consistency, and location-based content strategies.",
    heroContent: `Local SEO is the practice of optimizing your online presence to attract business from relevant local searches. These are queries with geographic intent — "dentist near me," "best Italian restaurant in Brooklyn," or "plumber in Austin."

## What Makes Local SEO Different

Local SEO has its own ranking algorithm and SERP features, separate from traditional organic search:

- **Google Business Profile** — The central hub for local visibility
- **Local Pack** — The map-based 3-pack results in SERPs
- **Local Citations** — Consistent business listings across directories
- **Reviews** — Customer reviews impact rankings and trust
- **NAP Consistency** — Identical business info everywhere online

## Why Local SEO Matters

- 46% of all Google searches have local intent
- 76% of people who search for something nearby visit a business within a day
- Local pack results get significantly more clicks than organic results for local queries`,
    subtopics: ["Google Business Profile", "Local Pack", "NAP Consistency", "Local Citations", "Local Keyword Research", "Review Management", "Local Schema Markup"],
    relatedBlogSlugs: ["google-business-profile-optimization", "local-citations-nap-consistency", "local-keyword-research"],
    relatedFeatures: ["zentroaudit"],
    relatedGlossaryTerms: ["nap-consistency", "local-pack"],
    entities: [
      { name: "Local SEO", type: "Thing" },
      { name: "Google Business Profile", type: "SoftwareApplication" },
    ],
  },
  {
    name: "E-commerce SEO",
    slug: "e-commerce-seo",
    description: "Drive product visibility and sales with product page optimization, structured data, category SEO, and e-commerce-specific technical strategies.",
    heroContent: `E-commerce SEO is the practice of optimizing online stores to rank higher in search results and drive organic traffic to product and category pages. It combines technical SEO, on-page optimization, and content strategy with e-commerce-specific challenges.

## Key E-commerce SEO Challenges

- **Large product catalogs** with thousands of pages to optimize
- **Duplicate content** from product variations, sorting, and filtering
- **Thin content** on product pages that lack unique descriptions
- **Faceted navigation** creating crawl budget waste
- **Seasonal inventory** with pages that come and go

## E-commerce SEO Essentials

- **Product Page Optimization** — Unique titles, descriptions, schema markup
- **Category Page SEO** — Optimized hub pages for head terms
- **Product Schema Markup** — Price, availability, reviews in search results
- **Internal Linking** — Cross-selling and related product links
- **Site Architecture** — Logical category hierarchy and URL structure`,
    subtopics: ["Product Page SEO", "Category Page Optimization", "Product Schema Markup", "Faceted Navigation", "E-commerce Site Architecture", "Shopping Feed Optimization"],
    relatedBlogSlugs: ["product-page-seo-ecommerce", "structured-data-ecommerce-product-schema"],
    relatedFeatures: ["zentroaudit", "zentromarkup", "zentrowrite"],
    relatedGlossaryTerms: ["schema-markup", "structured-data", "crawlability"],
    entities: [
      { name: "E-commerce SEO", type: "Thing" },
      { name: "Product Schema", type: "Thing" },
    ],
  },
  {
    name: "Content Strategy",
    slug: "content-strategy",
    description: "Build strategic content plans using topical maps, keyword clustering, content gap analysis, and intent-driven editorial calendars to maximize organic growth.",
    heroContent: `Content strategy for SEO is the systematic planning, creation, and optimization of content to achieve search visibility and business goals. It goes beyond writing blog posts — it's about building a **content ecosystem** that establishes topical authority.

## Content Strategy Framework

1. **Research** — Keyword research, competitor analysis, content gap identification
2. **Planning** — Topical maps, content calendars, editorial workflows
3. **Creation** — Intent-matched, entity-rich, semantically complete content
4. **Optimization** — On-page SEO, internal linking, structured data
5. **Measurement** — Rank tracking, traffic analysis, conversion tracking
6. **Maintenance** — Content updates, freshness signals, consolidation

## Key Content Strategy Concepts

- **Topical Maps** — Blueprint of all content needed for topical authority
- **Keyword Clustering** — Grouping related keywords for efficient targeting
- **Content Gap Analysis** — Finding topics competitors cover but you don't
- **Search Intent Matching** — Creating the right format for each query type
- **Hub-and-Spoke Model** — Pillar content linked to detailed supporting articles`,
    subtopics: ["Topical Maps", "Keyword Research", "Content Gap Analysis", "Search Intent", "Keyword Clustering", "Content Freshness", "Editorial Calendars", "AI Content Optimization"],
    relatedBlogSlugs: ["keyword-research-complete-guide", "topical-maps-content-strategy", "content-gap-analysis", "search-intent-keyword-strategy", "keyword-clustering-topical-groups", "content-freshness-updating-old-posts", "ai-content-optimization-seo", "competitor-keyword-analysis"],
    relatedFeatures: ["zentrokeywords", "zentrowrite", "zentrocompare"],
    relatedGlossaryTerms: ["topical-map", "keyword-clustering", "search-intent", "long-tail-keywords", "content-silo"],
    entities: [
      { name: "Content Strategy", type: "Thing" },
      { name: "Content Marketing", type: "Thing" },
    ],
  },
  {
    name: "Link Building",
    slug: "link-building",
    description: "Master ethical, effective link building strategies — from digital PR and guest posting to broken link building and brand mention reclamation.",
    heroContent: `Link building is the process of acquiring hyperlinks from other websites to your own. It remains one of the most important ranking factors in Google's algorithm, serving as a signal of trust and authority.

## Why Link Building Still Matters

Despite the rise of semantic SEO and content quality signals, backlinks remain a top 3 ranking factor. Google uses links to:

- **Discover** new pages through crawling
- **Evaluate authority** based on who links to you
- **Understand relevance** through anchor text and linking context
- **Measure trust** through the quality of referring domains

## Modern Link Building Strategies

1. **Digital PR** — Create newsworthy content that earns media links
2. **Content-Led Link Building** — Publish research, tools, and data studies
3. **Broken Link Building** — Find and replace broken links on other sites
4. **Brand Mention Reclamation** — Convert unlinked brand mentions into links
5. **Guest Posting** — Contribute valuable content to relevant publications
6. **Resource Page Link Building** — Get listed on curated resource pages

## What Makes a Good Backlink

- From a **relevant, authoritative** domain
- Placed **editorially** within content (not sidebar/footer)
- Uses **descriptive anchor text** (not "click here")
- Comes from a **unique referring domain** (diversity matters)
- Points to **relevant target pages** (not always homepage)`,
    subtopics: ["Digital PR", "Broken Link Building", "Guest Posting", "Brand Mention Reclamation", "Anchor Text Strategy", "Competitor Link Analysis", "Link Quality Assessment"],
    relatedBlogSlugs: ["link-building-strategies-guide", "digital-pr-seo", "broken-link-building-technique", "brand-mentions-unlinked-seo", "anchor-text-optimization", "internal-vs-external-links-seo"],
    relatedFeatures: ["zentrobacklinks", "zentrocompare"],
    relatedGlossaryTerms: ["backlinks", "anchor-text", "domain-authority"],
    entities: [
      { name: "Link Building", type: "Thing" },
      { name: "Backlink", type: "Thing" },
      { name: "Digital PR", type: "Thing" },
    ],
  },
  {
    name: "Schema Markup",
    slug: "schema-markup-topic",
    description: "Learn to implement structured data using JSON-LD to unlock rich results, Knowledge Graph inclusion, and AI visibility across all your page types.",
    heroContent: `Schema markup is the technical language that bridges your content and search engine understanding. By adding structured data to your pages, you explicitly tell search engines what your content means — not just what it says.

## Why Schema Markup Is Essential

- **Rich Results** — Star ratings, FAQ dropdowns, recipe cards, event listings
- **Knowledge Graph** — Get your brand and entities into Google's entity database
- **Voice Search** — Structured data powers voice assistant answers
- **AI Visibility** — LLMs and AI Overviews use structured data for accurate responses
- **Click-Through Rate** — Rich results consistently outperform plain blue links

## Schema Types Every Site Needs

- **Organization** — Who you are, your social profiles, contact info
- **WebSite** — Search action, name, URL
- **BreadcrumbList** — Navigation path on every page
- **Article / BlogPosting** — Content metadata for blog posts
- **FAQPage** — Questions and answers
- **Product** — E-commerce product details
- **LocalBusiness** — Location-specific business info
- **Person** — Author bios and expertise

## Implementation Best Practices

1. Use **JSON-LD** format (Google's recommended format)
2. Validate with Google's Rich Results Test
3. Include all **required and recommended** properties
4. Keep structured data **consistent** with visible content
5. Update structured data when content changes`,
    subtopics: ["JSON-LD Implementation", "Organization Schema", "Article Schema", "Product Schema", "FAQ Schema", "HowTo Schema", "LocalBusiness Schema", "BreadcrumbList", "Rich Results Testing"],
    relatedBlogSlugs: ["schema-markup-seo-guide", "structured-data-ecommerce-product-schema", "schema-markup-generators-compared"],
    relatedFeatures: ["zentromarkup"],
    relatedGlossaryTerms: ["schema-markup", "structured-data", "rich-result", "knowledge-graph"],
    entities: [
      { name: "Schema.org", type: "WebSite", url: "https://schema.org" },
      { name: "JSON-LD", type: "Thing" },
      { name: "Structured Data", type: "Thing" },
    ],
  },
  {
    name: "Keyword Research",
    slug: "keyword-research",
    description: "Discover high-value keywords with search intent classification, clustering, difficulty analysis, and competitive opportunity identification.",
    heroContent: `Keyword research is the foundation of every SEO strategy. It's the process of discovering what your target audience searches for, understanding their intent, and prioritizing which terms to target with your content.

## Modern Keyword Research Goes Beyond Volume

Traditional keyword research focused on search volume and competition. Modern keyword research considers:

- **Search intent** — What does the user really want?
- **Topical relevance** — Does this fit your content ecosystem?
- **SERP features** — What does the results page look like?
- **Entity relationships** — How does this keyword connect to broader topics?
- **AI query patterns** — How do people phrase questions for LLMs?

## The Keyword Research Process

1. **Seed keyword generation** — Start with core topics and brand terms
2. **Keyword expansion** — Use tools to find related and long-tail keywords
3. **Intent classification** — Categorize by informational, navigational, transactional, commercial
4. **Keyword clustering** — Group semantically related keywords
5. **Prioritization** — Rank by opportunity (volume × relevance × achievability)
6. **Content mapping** — Assign keyword clusters to content pieces`,
    subtopics: ["Search Intent Classification", "Long-Tail Keywords", "Keyword Clustering", "Competitor Keyword Analysis", "Content Gap Analysis", "Local Keyword Research", "Keyword Difficulty"],
    relatedBlogSlugs: ["keyword-research-complete-guide", "search-intent-keyword-strategy", "long-tail-keywords-strategy", "keyword-clustering-topical-groups", "competitor-keyword-analysis", "content-gap-analysis", "local-keyword-research"],
    relatedFeatures: ["zentrokeywords", "zentrocompare"],
    relatedGlossaryTerms: ["search-intent", "long-tail-keywords", "keyword-clustering"],
    entities: [
      { name: "Keyword Research", type: "Thing" },
      { name: "Search Volume", type: "Thing" },
      { name: "Keyword Difficulty", type: "Thing" },
    ],
  },
  {
    name: "Core Web Vitals",
    slug: "core-web-vitals-topic",
    description: "Understand and optimize LCP, INP, and CLS — the performance metrics Google uses as ranking signals for page experience.",
    heroContent: `Core Web Vitals are Google's standardized set of metrics that measure real-world user experience on your website. Since 2021, they've been an official ranking factor, making page performance optimization essential for SEO.

## The Three Core Web Vitals

### Largest Contentful Paint (LCP)
Measures how quickly the largest visible content element loads. Target: **≤ 2.5 seconds**.

### Interaction to Next Paint (INP)
Measures how responsive the page is to user interactions. Target: **≤ 200 milliseconds**.

### Cumulative Layout Shift (CLS)
Measures visual stability — how much the page layout shifts during loading. Target: **≤ 0.1**.

## Why Core Web Vitals Matter

- Direct Google ranking signal
- Correlate with user engagement and conversion rates
- Poor scores lead to higher bounce rates
- Google Search Console flags CWV issues prominently
- Part of the broader Page Experience signals

## Measuring Core Web Vitals

- **Field data** (real users) — Chrome User Experience Report (CrUX), Search Console
- **Lab data** (simulated) — Lighthouse, PageSpeed Insights, WebPageTest`,
    subtopics: ["Largest Contentful Paint (LCP)", "Interaction to Next Paint (INP)", "Cumulative Layout Shift (CLS)", "Page Speed Optimization", "Image Optimization", "JavaScript Performance", "Server Response Time"],
    relatedBlogSlugs: ["improve-core-web-vitals", "mobile-first-indexing-seo"],
    relatedFeatures: ["zentroaudit", "zentrofix"],
    relatedGlossaryTerms: ["core-web-vitals", "mobile-first-indexing"],
    entities: [
      { name: "Core Web Vitals", type: "Thing", url: "https://web.dev/vitals/" },
      { name: "Largest Contentful Paint", type: "Thing" },
      { name: "Cumulative Layout Shift", type: "Thing" },
    ],
  },
  {
    name: "AI in SEO",
    slug: "ai-in-seo",
    description: "Explore how AI is transforming search — from content generation and optimization to AI Overviews, LLM visibility, and automated SEO workflows.",
    heroContent: `Artificial intelligence is fundamentally changing how search works — both how search engines rank content and how SEO professionals create and optimize it. Understanding AI's role in SEO is essential for staying competitive.

## AI's Impact on Search

### How Search Engines Use AI
- **Query understanding** — BERT, MUM, and Gemini interpret complex queries
- **Content evaluation** — AI assesses quality, relevance, and helpfulness
- **AI Overviews** — Google generates AI-powered answer summaries in SERPs
- **Spam detection** — Machine learning identifies manipulation attempts

### How SEO Professionals Use AI
- **Content generation** — AI-assisted writing and optimization
- **Keyword research** — AI-powered discovery and clustering
- **Technical auditing** — Automated issue detection and prioritization
- **Content briefs** — AI-generated outlines based on SERP analysis
- **Workflow automation** — Connecting tools and processes with AI

## Preparing for AI-Driven Search

1. Create content that AI can easily understand and cite
2. Use structured data extensively for machine readability
3. Focus on unique expertise and original research
4. Build strong entity associations through semantic SEO
5. Monitor AI visibility across platforms (ChatGPT, Perplexity, Google SGE)`,
    subtopics: ["AI Content Generation", "AI SEO Tools", "Google AI Overviews", "LLM Visibility", "SEO Automation", "AI Content Optimization", "Prompt Engineering for SEO"],
    relatedBlogSlugs: ["ai-seo-tools-future", "ai-content-optimization-seo", "seo-automation-workflows"],
    relatedFeatures: ["zentrowrite", "zentroaudit"],
    relatedGlossaryTerms: ["nlp", "semantic-seo", "structured-data"],
    entities: [
      { name: "Artificial Intelligence", type: "Thing" },
      { name: "Google AI Overview", type: "Thing" },
      { name: "Large Language Model", type: "Thing" },
    ],
  },
];
