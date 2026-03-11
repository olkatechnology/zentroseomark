export interface SolutionData {
  slug: string;
  audience: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  heroDescription: string;
  painPoints: { title: string; description: string }[];
  solutions: { tool: string; toolHref: string; description: string }[];
  faqs: { q: string; a: string }[];
  testimonial: { quote: string; name: string; role: string; company: string };
  relatedSolutions: { label: string; href: string; description: string }[];
}

export const solutionsData: Record<string, SolutionData> = {
  "for-agencies": {
    slug: "for-agencies",
    audience: "Agencies",
    metaTitle: "SEO Tools for Agencies – Scale with White Label SEO",
    metaDescription: "Empower your agency with scalable audits, client reporting, white label dashboards, and automated SEO fixes from ZentroSEO.",
    heroTagline: "Scale Your Agency with White-Label SEO Tools",
    heroDescription: "Manage dozens of clients, automate reporting, and deliver results under your brand — all from one platform built for agency workflows.",
    painPoints: [
      { title: "Too Many Tools, Too Little Time", description: "Juggling multiple SEO tools across clients wastes hours and inflates costs. Agencies need one platform that does it all." },
      { title: "Client Reporting is a Time Sink", description: "Building custom reports for each client every month steals time from actual SEO work and strategy." },
      { title: "Scaling Without Losing Quality", description: "Adding more clients shouldn't mean compromising on the depth and quality of SEO services you deliver." },
      { title: "No Branded Experience", description: "Clients see third-party tool logos instead of your brand, weakening your agency's perceived expertise and value." },
    ],
    solutions: [
      { tool: "ZentroWhite", toolHref: "/features/zentrowhite/", description: "Deliver all SEO services under your brand with white-label dashboards and reports." },
      { tool: "ZentroAudit", toolHref: "/features/zentroaudit/", description: "Run comprehensive audits for all clients from a single dashboard." },
      { tool: "ZentroFix", toolHref: "/features/zentrofix/", description: "Auto-fix client SEO issues in bulk to save hours of manual work." },
      { tool: "ZentroRank", toolHref: "/features/zentrorank/", description: "Track keyword rankings across all client portfolios simultaneously." },
    ],
    faqs: [
      { q: "Can I manage multiple clients in one account?", a: "Yes! ZentroSEO's agency dashboard lets you manage unlimited clients with separate projects, users, and permissions." },
      { q: "Is there a white-label option?", a: "Absolutely. ZentroWhite lets you rebrand the entire platform with your agency's logo, colors, and custom domain." },
      { q: "How does pricing work for agencies?", a: "Agency pricing is based on the total number of pages and keywords tracked across all clients. Volume discounts apply." },
      { q: "Can my clients access their own reports?", a: "Yes. Create client portal logins where they can view dashboards and reports — all under your brand." },
    ],
    testimonial: { quote: "ZentroSEO replaced 4 separate tools for our agency. The white-label reporting alone saved us 15 hours per week.", name: "David Chen", role: "Founder", company: "Apex Digital Agency" },
    relatedSolutions: [
      { label: "For Startups", href: "/solutions/for-startups/", description: "Lean SEO for growing companies" },
      { label: "For E-commerce", href: "/solutions/for-e-commerce/", description: "Product page optimization at scale" },
      { label: "For Content Creators", href: "/solutions/for-content-creators/", description: "Content-first SEO tools" },
    ],
  },
  "for-startups": {
    slug: "for-startups",
    audience: "Startups",
    metaTitle: "SEO for Startups – Launch with Organic Growth",
    metaDescription: "Build visibility from day one with fast audits, topic planning, and easy fixes — all tailored for lean startup teams.",
    heroTagline: "Launch with Organic Growth from Day One",
    heroDescription: "You don't need an SEO team to rank. ZentroSEO gives startups the AI-powered tools to build organic visibility without the learning curve.",
    painPoints: [
      { title: "No SEO Expertise In-House", description: "Most startup teams lack dedicated SEO knowledge, making it hard to know what to prioritize for organic growth." },
      { title: "Limited Budget for Multiple Tools", description: "Startups can't afford enterprise SEO suites but still need comprehensive coverage to compete." },
      { title: "Need Results Fast", description: "With pressure from investors and limited runway, startups need SEO strategies that deliver results quickly." },
      { title: "Technical SEO Feels Overwhelming", description: "Fixing crawl errors, schema, and Core Web Vitals sounds intimidating when you're focused on building product." },
    ],
    solutions: [
      { tool: "ZentroAudit", toolHref: "/features/zentroaudit/", description: "Get a clear picture of your site's SEO health with AI-prioritized recommendations." },
      { tool: "ZentroFix", toolHref: "/features/zentrofix/", description: "Fix technical issues with 1-click — no developer needed." },
      { tool: "ZentroKeywords", toolHref: "/features/zentrokeywords/", description: "Find low-competition keywords where you can rank quickly." },
      { tool: "ZentroWrite", toolHref: "/features/zentrowrite/", description: "Generate SEO-optimized content aligned with your product positioning." },
    ],
    faqs: [
      { q: "Is ZentroSEO suitable for non-technical founders?", a: "Absolutely. ZentroSEO is built for non-techies. The AI handles the complexity while you focus on strategy and growth." },
      { q: "Do you have a free plan for startups?", a: "Yes! Our free plan includes site audits, basic keyword research, and content optimization — enough to get started with organic growth." },
      { q: "How quickly can I see SEO results?", a: "Technical fixes can show results in days. Content-driven improvements typically show ranking improvements within 4-8 weeks." },
      { q: "Can I grow into a paid plan later?", a: "Yes. Start free and upgrade as your traffic and team grow. All your data and history carries over." },
    ],
    testimonial: { quote: "As a solo founder, I needed SEO on autopilot. ZentroSEO found 47 issues on my site and fixed 40 of them in one click.", name: "Amara Obi", role: "CEO", company: "LaunchPad SaaS" },
    relatedSolutions: [
      { label: "For Agencies", href: "/solutions/for-agencies/", description: "Scale SEO across multiple clients" },
      { label: "For E-commerce", href: "/solutions/for-e-commerce/", description: "Optimize product pages for conversions" },
      { label: "For Content Creators", href: "/solutions/for-content-creators/", description: "Create content that ranks" },
    ],
  },
  "for-e-commerce": {
    slug: "for-e-commerce",
    audience: "E-commerce",
    metaTitle: "E-commerce SEO – Boost Rankings, Sales & Conversions",
    metaDescription: "Optimize product pages, fix crawl issues, and drive traffic with structured SEO workflows built for online stores.",
    heroTagline: "Boost Product Rankings, Traffic & Sales",
    heroDescription: "Optimize thousands of product pages, fix crawl issues at scale, and structure your store for maximum search visibility.",
    painPoints: [
      { title: "Thousands of Product Pages", description: "Managing SEO for hundreds or thousands of product pages manually is impossible without the right automation." },
      { title: "Duplicate Content Issues", description: "Product variations, filters, and pagination create duplicate content that confuses search engines." },
      { title: "Missing Product Schema", description: "Without proper Product schema markup, you're missing out on rich results that drive click-through rates." },
      { title: "Slow Page Speed", description: "Heavy images, third-party scripts, and complex layouts slow down product pages, hurting both rankings and conversions." },
    ],
    solutions: [
      { tool: "ZentroAudit", toolHref: "/features/zentroaudit/", description: "Crawl your entire store to find duplicate content, broken links, and indexation issues." },
      { tool: "ZentroMarkup", toolHref: "/features/zentromarkup/", description: "Auto-generate Product schema for rich results with prices, reviews, and availability." },
      { tool: "ZentroFix", toolHref: "/features/zentrofix/", description: "Batch-fix meta tags, canonical tags, and redirect chains across all product pages." },
      { tool: "ZentroKeywords", toolHref: "/features/zentrokeywords/", description: "Research buyer-intent keywords for product categories and landing pages." },
    ],
    faqs: [
      { q: "Can ZentroSEO handle large product catalogs?", a: "Yes! ZentroSEO is built for scale. Our Pro plan crawls up to 10,000 pages, and Agency plans support unlimited pages." },
      { q: "Does it generate Product schema automatically?", a: "Yes. ZentroMarkup auto-detects product pages and generates JSON-LD Product schema with prices, availability, reviews, and more." },
      { q: "How do you handle duplicate content from filters?", a: "ZentroAudit identifies duplicate content from faceted navigation and filters, and ZentroFix suggests canonical tags and noindex directives." },
      { q: "Can I optimize meta tags for all products at once?", a: "Absolutely. ZentroFix can batch-generate and optimize meta titles and descriptions using AI-powered templates." },
    ],
    testimonial: { quote: "We went from 0 to 150 product rich results in 2 weeks using ZentroMarkup. Our click-through rate increased 34%.", name: "Sarah Kim", role: "Head of Marketing", company: "StyleVault" },
    relatedSolutions: [
      { label: "For Agencies", href: "/solutions/for-agencies/", description: "Manage e-commerce clients at scale" },
      { label: "For Startups", href: "/solutions/for-startups/", description: "Launch your store with SEO built in" },
      { label: "For Content Creators", href: "/solutions/for-content-creators/", description: "Create product content that converts" },
    ],
  },
  "for-content-creators": {
    slug: "for-content-creators",
    audience: "Content Creators",
    metaTitle: "SEO for Content Creators – Rank Your Work, Faster",
    metaDescription: "Create content that ranks with keyword tools, semantic optimization, and AI-powered metadata generation from ZentroSEO.",
    heroTagline: "Rank Your Content, Faster",
    heroDescription: "Stop guessing what will rank. Use AI-powered keyword research, semantic optimization, and content scoring to create articles that search engines love.",
    painPoints: [
      { title: "Great Content, No Traffic", description: "You're creating valuable content but it's not ranking because it lacks the semantic depth and entity coverage search engines expect." },
      { title: "Keyword Research is Confusing", description: "Traditional keyword tools show numbers but don't explain which topics and entities to cover for real topical authority." },
      { title: "No Feedback on SEO Quality", description: "You publish and hope for the best — no real-time scoring or optimization guidance during the writing process." },
      { title: "Meta Tags are an Afterthought", description: "Manually writing title tags and descriptions for every post is tedious and often done poorly." },
    ],
    solutions: [
      { tool: "ZentroWrite", toolHref: "/features/zentrowrite/", description: "Generate SEO-optimized content with real-time entity coverage scoring." },
      { tool: "ZentroKeywords", toolHref: "/features/zentrokeywords/", description: "Discover topics and keywords based on entity relationships, not just volume." },
      { tool: "ZentroMarkup", toolHref: "/features/zentromarkup/", description: "Auto-generate Article schema for your blog posts and guides." },
      { tool: "ZentroRank", toolHref: "/features/zentrorank/", description: "Track how your content ranks and identify optimization opportunities." },
    ],
    faqs: [
      { q: "Will ZentroSEO write my content for me?", a: "ZentroWrite can generate drafts and outlines, but it's designed as a co-pilot. You bring the expertise and voice, we bring the SEO framework." },
      { q: "How does semantic content optimization work?", a: "ZentroWrite analyzes the entity landscape for your target topic and scores your content on how well it covers the expected entities, relationships, and topical depth." },
      { q: "Can I use ZentroSEO for YouTube SEO?", a: "ZentroKeywords helps with YouTube keyword research, and ZentroWrite can generate optimized video descriptions and titles." },
      { q: "Is there a free plan for individual creators?", a: "Yes! The free plan includes keyword research, content scoring, and basic rank tracking — perfect for individual creators getting started." },
    ],
    testimonial: { quote: "My blog traffic grew 280% in 3 months after I started using ZentroWrite's entity coverage scores. I finally understand what Google wants.", name: "Jordan Ellis", role: "Tech Blogger", company: "DevInsights" },
    relatedSolutions: [
      { label: "For Startups", href: "/solutions/for-startups/", description: "Build organic growth from scratch" },
      { label: "For E-commerce", href: "/solutions/for-e-commerce/", description: "Optimize product content" },
      { label: "For Agencies", href: "/solutions/for-agencies/", description: "Offer content SEO as a service" },
    ],
  },
};
