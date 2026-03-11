export interface Guide {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  prerequisites: string[];
  steps: { name: string; text: string }[];
  relatedBlogSlugs: string[];
  relatedFeatures: string[];
  entities: { name: string; url?: string; type?: string }[];
}

export const guides: Guide[] = [
  {
    title: "Complete Technical SEO Audit Guide",
    slug: "complete-technical-seo-audit",
    excerpt: "Learn how to run a comprehensive technical SEO audit from scratch — covering crawlability, indexation, Core Web Vitals, schema markup, and site architecture.",
    category: "Technical SEO",
    difficulty: "Beginner",
    estimatedTime: "45 min",
    prerequisites: ["Basic understanding of how websites work", "Access to Google Search Console"],
    steps: [
      { name: "Set up your audit tools", text: "Configure Google Search Console, set up ZentroAudit, and prepare a spreadsheet for tracking issues." },
      { name: "Check crawlability", text: "Verify robots.txt configuration, submit your XML sitemap, and check for blocked resources." },
      { name: "Analyze indexation status", text: "Review the Index Coverage report in Search Console, check for noindex tags, and identify orphan pages." },
      { name: "Evaluate Core Web Vitals", text: "Run PageSpeed Insights on key pages, analyze LCP, INP, and CLS scores, and prioritize fixes." },
      { name: "Audit on-page elements", text: "Check title tags, meta descriptions, heading hierarchy, and image alt text across all pages." },
      { name: "Review site architecture", text: "Map your URL structure, internal linking patterns, and content hierarchy. Identify pages more than 3 clicks deep." },
      { name: "Validate structured data", text: "Test all JSON-LD markup with Google's Rich Results Test. Check for missing required properties." },
      { name: "Check mobile optimization", text: "Run the Mobile-Friendly Test, compare mobile vs. desktop content parity, and check responsive breakpoints." },
      { name: "Prioritize and create action plan", text: "Categorize issues by severity (critical, warning, info), estimate effort, and create a prioritized fix schedule." },
    ],
    content: `## Why Technical SEO Audits Matter

A technical SEO audit is the diagnostic process that reveals how well your website's infrastructure supports search engine visibility. Even great content can't rank if crawlers can't access it, render it, or index it properly.

Regular technical audits help you:

- Catch issues before they impact rankings
- Stay ahead of algorithm updates
- Optimize crawl budget efficiency
- Ensure new pages are indexed quickly
- Maintain site health as your content grows

## Step 1: Set Up Your Audit Tools

Before diving in, ensure you have the right tools ready:

- **Google Search Console** — Free, essential for indexation and performance data
- **[ZentroAudit](/features/zentroaudit/)** — Comprehensive automated audit with prioritized recommendations
- **PageSpeed Insights** — Core Web Vitals measurement
- **Screaming Frog or similar crawler** — For large-scale crawl analysis

Create a tracking spreadsheet with columns for: Issue, Severity, Affected URLs, Status, and Notes.

## Step 2: Check Crawlability

Crawlability is the foundation. If search engines can't reach your pages, nothing else matters.

### Robots.txt Review
- Access your robots.txt at \`yoursite.com/robots.txt\`
- Ensure important directories aren't blocked
- Verify your sitemap URL is referenced
- Check for accidental \`Disallow: /\` rules

### XML Sitemap Validation
- Submit your sitemap via Google Search Console
- Ensure all important pages are included
- Check that \`lastmod\` dates are accurate
- Remove non-canonical and noindex URLs

### Crawl Depth Analysis
- Pages should be reachable within 3 clicks from the homepage
- Identify and fix orphan pages (no internal links pointing to them)
- Check for redirect chains (more than 2 hops)

## Step 3: Analyze Indexation Status

### Search Console Index Coverage
- Review the "Pages" report for errors and warnings
- Check for "Discovered – currently not indexed" pages
- Investigate "Crawled – currently not indexed" (usually quality issues)
- Look for unexpected "Excluded by 'noindex' tag" entries

### Manual Checks
- Search \`site:yoursite.com\` to see indexed pages
- Compare indexed count vs. expected count
- Check individual important pages with URL Inspection tool

## Step 4: Evaluate Core Web Vitals

### Run Assessments
- Test your top 10 most-trafficked pages in PageSpeed Insights
- Check the Core Web Vitals report in Search Console
- Note whether field data (real users) matches lab data

### Common LCP Fixes
- Compress and properly size images
- Preload the LCP element
- Minimize render-blocking resources
- Use a CDN for static assets

### Common CLS Fixes
- Set explicit dimensions on images and videos
- Avoid inserting content above existing content
- Preload fonts to prevent text layout shifts

## Step 5: Audit On-Page Elements

### Title Tags
- Every page should have a unique title under 60 characters
- Include the primary keyword naturally
- Follow a consistent brand format

### Meta Descriptions
- Unique descriptions under 160 characters
- Include a call-to-action or value proposition
- Naturally include the target keyword

### Heading Structure
- One H1 per page matching the primary topic
- Logical H2/H3 hierarchy (no skipping levels)
- Descriptive headings that match subtopic queries

### Image Optimization
- Descriptive alt text on all meaningful images
- Compressed file sizes (WebP format preferred)
- Lazy loading for below-fold images

## Step 6: Review Site Architecture

### URL Structure
- Clean, descriptive URLs (no parameters or IDs)
- Consistent URL patterns across content types
- Proper trailing slash handling

### Internal Linking
- Every page should have 2+ internal links pointing to it
- Hub pages should link to all spoke content
- Use descriptive anchor text (not "click here")

### Content Hierarchy
- Clear category/subcategory structure
- Breadcrumb navigation on all pages
- Flat architecture (important pages within 3 clicks)

## Step 7: Validate Structured Data

### Check All Pages
- Test every page type with Google's Rich Results Test
- Verify Organization schema on homepage
- Check Article/BlogPosting schema on blog posts
- Validate Product schema on e-commerce pages

### Common Issues
- Missing required properties
- Mismatched structured data and visible content
- Broken JSON syntax
- Outdated schema types

## Step 8: Check Mobile Optimization

### Content Parity
- Compare mobile and desktop versions of key pages
- Ensure all content, links, and structured data are present on mobile
- Check that no important elements are hidden on mobile

### Performance
- Test mobile-specific Core Web Vitals
- Check touch target sizes (minimum 48x48px)
- Verify font readability on small screens

## Step 9: Prioritize and Create Action Plan

### Severity Classification
- **Critical** — Blocking indexation, security issues, site-wide errors
- **Warning** — Performance issues, missing metadata, broken links
- **Info** — Best practice improvements, optimization opportunities

### Create Your Fix Schedule
1. Fix all critical issues immediately
2. Address warnings within 2 weeks
3. Schedule info items for ongoing optimization
4. Set up monthly audit cadence to catch new issues

## Tools That Make Auditing Easier

[ZentroAudit](/features/zentroaudit/) automates the entire process above, running 100+ checks across crawlability, indexation, performance, and content quality. It provides a prioritized action plan with one-click fixes via [ZentroFix](/features/zentrofix/).`,
    relatedBlogSlugs: ["technical-seo-audit", "crawlability-vs-indexability", "improve-core-web-vitals", "on-page-seo-audit"],
    relatedFeatures: ["zentroaudit", "zentrofix"],
    entities: [
      { name: "Technical SEO Audit", type: "Thing" },
      { name: "Google Search Console", type: "SoftwareApplication", url: "https://search.google.com/search-console/" },
      { name: "Core Web Vitals", type: "Thing", url: "https://web.dev/vitals/" },
    ],
  },
  {
    title: "Building Topical Authority from Scratch",
    slug: "building-topical-authority",
    excerpt: "A step-by-step guide to establishing your website as the definitive authority on a topic through strategic content planning, creation, and internal linking.",
    category: "Semantic SEO",
    difficulty: "Intermediate",
    estimatedTime: "60 min",
    prerequisites: ["Basic keyword research skills", "Existing website with content publishing capability"],
    steps: [
      { name: "Choose your core topic", text: "Select a topic that aligns with your expertise, audience needs, and business goals. It should be specific enough to dominate but broad enough for 30+ content pieces." },
      { name: "Research the topical landscape", text: "Analyze what top-ranking competitors cover. Map all subtopics, questions, entities, and content gaps." },
      { name: "Build your topical map", text: "Create a structured document listing every subtopic, content type (article, guide, glossary, comparison), and target keywords." },
      { name: "Create your pillar content", text: "Write comprehensive hub pages (2,000-4,000 words) that provide broad topic overviews and link to detailed subtopic pages." },
      { name: "Produce spoke articles", text: "Create detailed articles for each subtopic, focusing on depth, entity coverage, and answering specific user questions." },
      { name: "Implement internal linking", text: "Connect all content within the topical cluster using descriptive, contextual anchor text. Every spoke links to the hub and related spokes." },
      { name: "Add structured data", text: "Implement Article, FAQPage, HowTo, and BreadcrumbList schema on all content to reinforce entity signals." },
      { name: "Monitor and iterate", text: "Track rankings, identify new subtopic opportunities, update existing content for freshness, and fill remaining content gaps." },
    ],
    content: `## What Is Topical Authority and Why Build It?

Topical authority is your website's established expertise on a specific subject area, recognized by both search engines and users. Building it is the most sustainable SEO strategy because it creates compounding returns — each new piece of content strengthens the entire cluster.

## Step 1: Choose Your Core Topic

The ideal core topic should be:

- **Aligned with your expertise** — You (or your team) have real knowledge to share
- **Relevant to your audience** — Your target customers search for these topics
- **Commercially valuable** — The topic connects to your product or service
- **Achievably deep** — You can create 30-50+ content pieces within it
- **Not too broad** — "Marketing" is too broad; "SEO for e-commerce" is focused enough

### Example Topic Breakdown
- Too broad: "Digital Marketing"
- Good: "Technical SEO"
- More specific: "Schema Markup for E-commerce"

## Step 2: Research the Topical Landscape

### Competitor Content Analysis
Use [ZentroCompare](/features/zentrocompare/) to analyze what top-ranking competitors cover:

- What subtopics do they have articles on?
- What content formats do they use? (guides, comparisons, glossaries)
- What entities do they reference consistently?
- Where are their content gaps?

### Question Discovery
- Google's "People Also Ask" for your seed keywords
- Reddit and Quora discussions in your topic area
- "Related searches" at the bottom of Google SERPs
- [ZentroKeywords](/features/zentrokeywords/) for question-based keyword discovery

### Entity Mapping
List every entity (person, tool, concept, organization) that relates to your topic. Each entity should be covered in at least one content piece.

## Step 3: Build Your Topical Map

A topical map is your content blueprint. Structure it like this:

| Subtopic | Content Type | Target Keywords | Priority |
|---|---|---|---|
| What is [Topic]? | Pillar Article | definition queries | High |
| [Subtopic A] explained | Deep-dive Article | specific queries | High |
| How to [do X] | Step-by-step Guide | how-to queries | Medium |
| [X] vs [Y] | Comparison | vs queries | Medium |
| [Term] definition | Glossary Entry | what is queries | Medium |

Aim for at least 20-30 content pieces in your initial map, with room to expand.

## Step 4: Create Your Pillar Content

Pillar pages are comprehensive overviews (2,000-4,000 words) that:

- Define the core topic and its scope
- Cover all major subtopics at a summary level
- Link to detailed subtopic pages for depth
- Target the broadest, most competitive keywords
- Serve as the central hub for the topical cluster

### Pillar Page Structure
1. Introduction with clear definition
2. Why the topic matters
3. Overview of each subtopic (with links to deep-dive articles)
4. How-to or actionable framework
5. Tools and resources
6. FAQ section

## Step 5: Produce Spoke Articles

Each spoke article should:

- Cover ONE subtopic in comprehensive depth
- Target a specific keyword cluster
- Reference and link to the pillar page
- Link to 2-3 related spoke articles
- Include relevant entities with proper context
- Answer specific user questions about the subtopic

## Step 6: Implement Internal Linking

Internal linking is the connective tissue of topical authority:

- **Every spoke → Hub**: Link back to the pillar page with descriptive anchor text
- **Hub → Every spoke**: The pillar page links to all subtopic articles
- **Spoke → Related spokes**: Cross-link between related subtopics
- **Cross-silo links**: Occasionally link between different topic clusters when relevant

Use [ZentroAudit](/features/zentroaudit/) to identify orphan pages and weak internal links.

## Step 7: Add Structured Data

Reinforce your content signals with schema markup:

- **BlogPosting/Article** with \`about\` and \`mentions\` entities
- **FAQPage** for Q&A sections
- **HowTo** for step-by-step content
- **BreadcrumbList** for navigation context
- **isPartOf/hasPart** to declare hub-spoke relationships

## Step 8: Monitor and Iterate

Building topical authority is ongoing:

- Track keyword rankings weekly with [ZentroRank](/features/zentrorank/)
- Identify new subtopics as the field evolves
- Update existing content with fresh information and dates
- Fill content gaps discovered through ranking data
- Monitor competitor content additions`,
    relatedBlogSlugs: ["topical-authority-how-to-build", "topical-maps-content-strategy", "what-is-semantic-seo", "internal-linking-strategy"],
    relatedFeatures: ["zentrokeywords", "zentrowrite", "zentroaudit", "zentrocompare"],
    entities: [
      { name: "Topical Authority", type: "Thing" },
      { name: "Content Strategy", type: "Thing" },
      { name: "Semantic SEO", type: "Thing" },
    ],
  },
  {
    title: "Schema Markup Implementation for Every Page Type",
    slug: "schema-markup-implementation",
    excerpt: "A practical guide to implementing JSON-LD structured data across your entire website — from organization and article schema to product, FAQ, and local business markup.",
    category: "Technical SEO",
    difficulty: "Intermediate",
    estimatedTime: "40 min",
    prerequisites: ["Basic HTML knowledge", "Understanding of JSON format", "Access to your website's code"],
    steps: [
      { name: "Audit existing structured data", text: "Use Google's Rich Results Test to check what schema is already present on your site." },
      { name: "Implement Organization schema", text: "Add Organization JSON-LD to your homepage with name, URL, logo, sameAs (social profiles), and contactPoint." },
      { name: "Add WebSite schema with search action", text: "Add WebSite schema to your homepage to enable sitelinks search box in Google." },
      { name: "Implement Article/BlogPosting schema", text: "Add Article or BlogPosting schema to all content pages with headline, author, datePublished, dateModified, and image." },
      { name: "Add BreadcrumbList to all pages", text: "Implement BreadcrumbList schema on every page to show navigation paths in search results." },
      { name: "Add page-type-specific schema", text: "Implement FAQPage, HowTo, Product, LocalBusiness, or other type-specific schema where applicable." },
      { name: "Validate all implementations", text: "Test every page type with Google's Rich Results Test and Schema Markup Validator. Fix all errors and warnings." },
    ],
    content: `## Why Schema Markup Is Essential

Schema markup helps search engines understand your content at a deeper level than HTML alone. It enables rich results, Knowledge Graph inclusion, and better AI understanding of your pages.

## Step 1: Audit Existing Structured Data

Before adding new schema, check what you already have:

1. Open [Google's Rich Results Test](https://search.google.com/test/rich-results)
2. Test your homepage, a blog post, a product page, and any other key page types
3. Note what schema types are present and what's missing
4. Check for errors or warnings in existing markup

## Step 2: Organization Schema (Homepage)

Every website should have Organization schema on the homepage:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png",
  "sameAs": [
    "https://twitter.com/yourcompany",
    "https://linkedin.com/company/yourcompany"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@yoursite.com",
    "contactType": "customer service"
  }
}
\`\`\`

## Step 3: WebSite Schema (Homepage)

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Your Site Name",
  "url": "https://yoursite.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://yoursite.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
\`\`\`

## Step 4: Article/BlogPosting Schema

For every blog post or article:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Your Article Title",
  "description": "Your meta description",
  "datePublished": "2026-01-15",
  "dateModified": "2026-02-28",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://yoursite.com/team/author-name/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Your Company",
    "logo": { "@type": "ImageObject", "url": "https://yoursite.com/logo.png" }
  },
  "image": "https://yoursite.com/images/article-image.jpg"
}
\`\`\`

## Step 5: BreadcrumbList Schema

Add to every page:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yoursite.com/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://yoursite.com/blog/" },
    { "@type": "ListItem", "position": 3, "name": "Article Title" }
  ]
}
\`\`\`

## Step 6: Page-Type-Specific Schema

### FAQPage
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is schema markup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Schema markup is structured data vocabulary from schema.org..."
      }
    }
  ]
}
\`\`\`

### HowTo
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Add Schema Markup",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Audit existing markup", "text": "..." },
    { "@type": "HowToStep", "position": 2, "name": "Add Organization schema", "text": "..." }
  ]
}
\`\`\`

## Step 7: Validate Everything

1. Test every page type with [Google's Rich Results Test](https://search.google.com/test/rich-results)
2. Use the [Schema Markup Validator](https://validator.schema.org/) for comprehensive validation
3. Check Google Search Console for structured data errors
4. Set up monitoring with [ZentroAudit](/features/zentroaudit/) for ongoing validation

## Pro Tips

- Always use **JSON-LD** format (not Microdata or RDFa)
- Keep structured data **consistent** with visible page content
- Include all **recommended properties**, not just required ones
- Use [ZentroMarkup](/features/zentromarkup/) to auto-generate valid schema for any page type`,
    relatedBlogSlugs: ["schema-markup-seo-guide", "structured-data-ecommerce-product-schema", "schema-markup-generators-compared"],
    relatedFeatures: ["zentromarkup", "zentroaudit"],
    entities: [
      { name: "Schema Markup", type: "Thing" },
      { name: "JSON-LD", type: "Thing" },
      { name: "Schema.org", type: "WebSite", url: "https://schema.org" },
    ],
  },
  {
    title: "Keyword Research to Content Strategy Pipeline",
    slug: "keyword-research-to-content-strategy",
    excerpt: "Transform raw keyword data into a structured content strategy — from seed keyword discovery through clustering, intent mapping, and editorial calendar creation.",
    category: "Content Strategy",
    difficulty: "Beginner",
    estimatedTime: "50 min",
    prerequisites: ["Access to a keyword research tool", "Understanding of your target audience"],
    steps: [
      { name: "Define your seed topics", text: "List 5-10 broad topics related to your business, products, or services that your target audience cares about." },
      { name: "Expand with keyword research", text: "Use ZentroKeywords or similar tools to generate hundreds of related keywords, long-tail variations, and questions." },
      { name: "Classify search intent", text: "Categorize each keyword as informational, navigational, transactional, or commercial investigation." },
      { name: "Cluster keywords by topic", text: "Group semantically related keywords that can be targeted by a single piece of content." },
      { name: "Map clusters to content types", text: "Assign each cluster to the most appropriate content format — blog post, guide, comparison, glossary entry, or landing page." },
      { name: "Prioritize by opportunity", text: "Score clusters by search volume, competition level, business relevance, and current ranking potential." },
      { name: "Create an editorial calendar", text: "Schedule content creation based on priority, seasonal trends, and available resources." },
    ],
    content: `## From Keywords to Strategy

Keyword research is only valuable when it translates into action. This guide walks you through the complete pipeline from raw keyword data to a structured content plan.

## Step 1: Define Your Seed Topics

Start with the broad themes your business covers. For example, an SEO platform might start with:

- Technical SEO
- Content optimization
- Link building
- Local SEO
- Keyword research

These seed topics will expand into hundreds of specific keywords.

## Step 2: Expand with Keyword Research

Use [ZentroKeywords](/features/zentrokeywords/) to expand each seed topic:

- Enter each seed term and collect all suggestions
- Include question-based keywords ("how to," "what is," "why")
- Capture long-tail variations (3+ word phrases)
- Note search volumes and difficulty scores
- Export to a master spreadsheet

## Step 3: Classify Search Intent

For each keyword, identify the user's goal:

| Intent | Signals | Content Format |
|---|---|---|
| Informational | "what is," "how to," "guide" | Blog posts, guides, glossary |
| Navigational | Brand names, product names | Landing pages, feature pages |
| Commercial | "best," "vs," "review," "comparison" | Comparisons, reviews |
| Transactional | "buy," "pricing," "sign up" | Product/pricing pages |

## Step 4: Cluster Keywords

Group keywords that share the same SERP results (meaning Google sees them as the same topic):

1. Pick a keyword and search it on Google
2. Note the top 5 ranking URLs
3. Search related keywords — if the same URLs rank, they belong in the same cluster
4. Assign one primary keyword per cluster

[ZentroKeywords](/features/zentrokeywords/) automates this with SERP-based clustering.

## Step 5: Map Clusters to Content Types

Each cluster needs the right content format:

- **"What is X"** → Glossary entry or explainer article
- **"How to do X"** → Step-by-step guide
- **"X vs Y"** → Comparison page
- **"Best X for Y"** → Roundup or review
- **"X tips/strategies"** → In-depth blog post

## Step 6: Prioritize by Opportunity

Score each cluster on four factors:

1. **Volume** — Total monthly searches across all keywords in the cluster
2. **Difficulty** — How hard it is to rank (based on competitor strength)
3. **Relevance** — How closely it relates to your product/service
4. **Current position** — Are you already ranking? (Quick wins vs. new topics)

Focus first on high-relevance, low-difficulty clusters where you can win quickly.

## Step 7: Create an Editorial Calendar

Plan your content production schedule:

- Start with pillar/hub content for your highest-priority topics
- Schedule spoke articles to publish 1-2 per week
- Account for seasonal trends and industry events
- Build in time for content updates and optimization

## Ongoing Optimization

- Track rankings with [ZentroRank](/features/zentrorank/)
- Identify new keyword opportunities monthly
- Update existing content for freshness
- Fill content gaps as they appear in ranking data`,
    relatedBlogSlugs: ["keyword-research-complete-guide", "search-intent-keyword-strategy", "keyword-clustering-topical-groups", "content-gap-analysis", "long-tail-keywords-strategy"],
    relatedFeatures: ["zentrokeywords", "zentrowrite", "zentrorank"],
    entities: [
      { name: "Keyword Research", type: "Thing" },
      { name: "Content Strategy", type: "Thing" },
      { name: "Search Intent", type: "Thing" },
    ],
  },
  {
    title: "Link Building Without Outreach: The Semantic Approach",
    slug: "semantic-link-building",
    excerpt: "Discover how to attract backlinks naturally through content quality, entity authority, and semantic optimization — without sending a single outreach email.",
    category: "Off-Page SEO",
    difficulty: "Advanced",
    estimatedTime: "35 min",
    prerequisites: ["Established website with existing content", "Understanding of topical authority", "Basic knowledge of link building concepts"],
    steps: [
      { name: "Create linkable assets", text: "Develop original research, data studies, interactive tools, or comprehensive guides that other sites naturally want to reference." },
      { name: "Build entity authority", text: "Establish your brand and authors as recognized entities through schema markup, consistent branding, and expert content." },
      { name: "Optimize for citation queries", text: "Target informational queries that journalists, bloggers, and researchers use to find sources and statistics." },
      { name: "Leverage content formats that attract links", text: "Create data visualizations, original statistics, industry surveys, and definitive guides." },
      { name: "Reclaim unlinked brand mentions", text: "Monitor the web for mentions of your brand, products, or content that don't include a link, then request the link." },
      { name: "Build strategic internal links", text: "Strengthen your most linkable pages with internal links so when they earn external links, the equity flows throughout your site." },
    ],
    content: `## The Semantic Approach to Link Building

Traditional link building relies on outreach — emailing strangers to ask for links. While that works, it's time-intensive and often yields diminishing returns. The semantic approach focuses on creating content so valuable and well-structured that links come naturally.

## Step 1: Create Linkable Assets

The best links come from content that others need to reference:

### Types of Linkable Assets
- **Original research** — Survey data, industry studies, benchmark reports
- **Data visualizations** — Charts, infographics, interactive maps
- **Definitive guides** — The most comprehensive resource on a topic
- **Free tools** — Calculators, generators, analyzers
- **Frameworks and methodologies** — Original models others want to cite

### What Makes Content Linkable?
- Contains **unique data** not available elsewhere
- Provides a **clear, quotable stat or finding**
- Is **well-structured** with easy-to-reference sections
- Has **permanent URL** (no date-based URLs that feel temporary)
- Is **regularly updated** to stay current and reliable

## Step 2: Build Entity Authority

When your brand is a recognized entity, links flow more naturally:

- Implement comprehensive Organization schema with \`knowsAbout\`
- Maintain consistent branding across all platforms (\`sameAs\` links)
- Publish author profiles with Person schema and expertise indicators
- Participate in industry discussions and events
- Contribute expert quotes and analysis to media

## Step 3: Optimize for Citation Queries

Certain queries are used by content creators looking for sources:

- "[industry] statistics 2026"
- "what percentage of [topic]"
- "[topic] benchmark data"
- "according to research [topic]"
- "[topic] definition"

Create content that directly answers these queries with citable data and definitions. When your content ranks for citation queries, links follow naturally.

## Step 4: Leverage Link-Attracting Content Formats

### Original Statistics
"43% of small businesses don't have a website" — This kind of stat gets cited endlessly. Conduct your own research to create quotable statistics.

### Industry Surveys
Survey your users or industry peers and publish the results. Original data is inherently linkable because no one else has it.

### Comprehensive Glossaries
Glossary pages get linked when other content creators need a reference definition. Your glossary becomes the authority source for terminology.

## Step 5: Reclaim Unlinked Mentions

Use tools to monitor mentions of:
- Your brand name
- Your product names
- Your team members
- Your original research or data

When you find a mention without a link, contact the author with a simple request to add one. This has a very high success rate because they already trust your brand enough to mention it.

## Step 6: Strategic Internal Linking

When your most linkable pages earn external backlinks, distribute that equity through smart internal linking:

- Link from linkable assets to your most important commercial pages
- Create hub pages that funnel link equity to all spoke content
- Use [ZentroAudit](/features/zentroaudit/) to map internal link flow and identify opportunities

## Measuring Success

Track your passive link acquisition with [ZentroBacklinks](/features/zentrobacklinks/):
- New referring domains per month
- Link velocity trends
- Anchor text distribution
- Quality of linking domains`,
    relatedBlogSlugs: ["link-building-strategies-guide", "brand-mentions-unlinked-seo", "broken-link-building-technique", "digital-pr-seo"],
    relatedFeatures: ["zentrobacklinks", "zentrocompare"],
    entities: [
      { name: "Link Building", type: "Thing" },
      { name: "Content Marketing", type: "Thing" },
      { name: "Digital PR", type: "Thing" },
    ],
  },
  {
    title: "Setting Up ZentroSEO for Your First Website",
    slug: "getting-started-zentroseo",
    excerpt: "Get up and running with ZentroSEO in minutes — from account creation through your first audit, keyword research, and ranking tracking setup.",
    category: "Getting Started",
    difficulty: "Beginner",
    estimatedTime: "20 min",
    prerequisites: ["A website you want to optimize", "A ZentroSEO account (free tier available)"],
    steps: [
      { name: "Create your account", text: "Sign up at app.zentroseo.com and complete the onboarding questionnaire about your website and goals." },
      { name: "Add your website", text: "Enter your website URL and let ZentroSEO verify ownership. Connect Google Search Console for enhanced data." },
      { name: "Run your first audit", text: "Launch a ZentroAudit scan to discover technical issues, on-page problems, and optimization opportunities." },
      { name: "Review audit results", text: "Examine the prioritized issue list, understand severity levels, and identify quick wins." },
      { name: "Set up keyword tracking", text: "Use ZentroKeywords to find your target keywords and add them to ZentroRank for daily position monitoring." },
      { name: "Apply your first fixes", text: "Use ZentroFix to implement one-click solutions for critical and high-priority issues." },
    ],
    content: `## Welcome to ZentroSEO

This guide walks you through setting up ZentroSEO for the first time. By the end, you'll have a complete picture of your site's SEO health and a plan to improve it.

## Step 1: Create Your Account

1. Visit [app.zentroseo.com/signup](https://app.zentroseo.com/signup?flow=direct)
2. Enter your email and create a password
3. Complete the quick onboarding questions:
   - What's your website URL?
   - What industry are you in?
   - What's your primary SEO goal? (traffic, leads, sales)
   - What's your experience level?

ZentroSEO tailors its recommendations based on your answers.

## Step 2: Add Your Website

### Enter Your URL
Type your full website URL (including https://) and click "Add Website."

### Verify Ownership
Choose a verification method:
- **Google Search Console** (recommended) — Connect your GSC account for the richest data
- **HTML meta tag** — Add a verification tag to your homepage
- **DNS record** — Add a TXT record to your domain

### Connect Integrations
For the best experience, connect:
- Google Search Console — For indexation and query data
- Google Analytics — For traffic and engagement metrics

## Step 3: Run Your First Audit

Launch [ZentroAudit](/features/zentroaudit/) by clicking "Run Audit" on your dashboard:

1. ZentroAudit crawls your entire website
2. It checks 100+ SEO factors across 7 categories
3. The audit typically takes 2-10 minutes depending on site size
4. You'll see a real-time progress indicator

## Step 4: Review Audit Results

### Your SEO Score
ZentroAudit provides an overall score (0-100) and category scores for:
- Technical SEO
- On-Page SEO
- Content Quality
- Performance (Core Web Vitals)
- Schema Markup
- Internal Linking
- Mobile Optimization

### Prioritized Issue List
Issues are categorized by severity:
- 🔴 **Critical** — Fix immediately (blocking indexation, security risks)
- 🟡 **Warning** — Fix soon (missing metadata, slow pages)
- 🔵 **Info** — Optimize when possible (best practices, enhancements)

### Quick Wins
ZentroAudit highlights "quick wins" — issues that are easy to fix but have significant SEO impact.

## Step 5: Set Up Keyword Tracking

### Discover Keywords
Use [ZentroKeywords](/features/zentrokeywords/) to:
1. Enter your seed keywords (e.g., "SEO tool," "website audit")
2. Review suggested keywords with volume and difficulty
3. Select keywords to track

### Add to Rank Tracking
Send selected keywords to [ZentroRank](/features/zentrorank/) for daily position monitoring:
- Track desktop and mobile rankings separately
- Monitor SERP features (featured snippets, PAA)
- Get alerts when positions change significantly

## Step 6: Apply Your First Fixes

[ZentroFix](/features/zentrofix/) offers one-click solutions for many common issues:

1. Open the issue details from your audit results
2. Click "Fix with ZentroFix" for supported issues
3. Review the proposed change
4. Apply the fix

### Common First Fixes
- Add missing meta descriptions
- Fix broken internal links
- Add missing image alt text
- Implement basic schema markup
- Fix heading hierarchy issues

## What's Next?

After your initial setup:
- Schedule **weekly audits** to track progress
- Explore [ZentroWrite](/features/zentrowrite/) for content optimization
- Use [ZentroCompare](/features/zentrocompare/) to analyze competitors
- Check [ZentroBacklinks](/features/zentrobacklinks/) for your backlink profile
- Set up [ZentroMarkup](/features/zentromarkup/) for advanced schema generation`,
    relatedBlogSlugs: ["technical-seo-audit", "on-page-seo-audit", "keyword-research-complete-guide"],
    relatedFeatures: ["zentroaudit", "zentrofix", "zentrokeywords", "zentrorank"],
    entities: [
      { name: "ZentroSEO", type: "SoftwareApplication" },
      { name: "SEO Audit", type: "Thing" },
      { name: "Google Search Console", type: "SoftwareApplication", url: "https://search.google.com/search-console/" },
    ],
  },
];
