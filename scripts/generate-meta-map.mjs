/**
 * Post-build script: generates dist/meta-map.json
 * Maps every URL path → { title, description } for server-side meta injection.
 *
 * Run after `vite build` so that source TS files are available for parsing.
 */

import fs from "fs";
import path from "path";

const SITE = "https://zentroseo.com";

// ── Helpers ──────────────────────────────────────────────────────────────────

function readSrc(relPath) {
  return fs.readFileSync(path.join("src", relPath), "utf-8");
}

/** Extract array items with slug/title/excerpt etc from TS source */
function extractArrayItems(src, fields) {
  const items = [];
  // Split by object boundaries in array
  const regex = /\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/g;
  let m;
  while ((m = regex.exec(src)) !== null) {
    const block = m[0];
    const item = {};
    for (const f of fields) {
      const fRegex = new RegExp(`${f}:\\s*"([^"]*)"`, "s");
      const fm = fRegex.exec(block);
      if (fm) item[f] = fm[1];
    }
    if (item.slug) items.push(item);
  }
  return items;
}

/** Extract Record<string, { ... }> entries */
function extractRecordItems(src, fields) {
  const items = [];
  // Match "key": { ... } patterns
  const regex = /"([^"]+)":\s*\{/g;
  let m;
  while ((m = regex.exec(src)) !== null) {
    const key = m[1];
    const start = m.index + m[0].length;
    // Find matching closing brace (depth tracking)
    let depth = 1;
    let i = start;
    while (i < src.length && depth > 0) {
      if (src[i] === "{") depth++;
      if (src[i] === "}") depth--;
      i++;
    }
    const block = src.slice(start, i - 1);
    const item = { slug: key };
    for (const f of fields) {
      const fRegex = new RegExp(`${f}:\\s*"([^"]*)"`, "s");
      const fm = fRegex.exec(block);
      if (fm) item[f] = fm[1];
    }
    items.push(item);
  }
  return items;
}

function categorySlug(cat) {
  return cat.toLowerCase().replace(/[&\s]+/g, "-").replace(/-+/g, "-");
}

// ── Build meta map ───────────────────────────────────────────────────────────

const map = {};

function add(pathStr, title, description) {
  // Ensure trailing slash
  const p = pathStr.endsWith("/") ? pathStr : pathStr + "/";
  if (title && description) {
    map[p] = { title, description };
  }
}

// ── 1. Static pages ──

add("/", "ZentroSEO – All-in-One AI SEO Platform for Smarter Rankings", "AI-powered SEO platform with 200+ checks. Run technical audits, track keywords, fix SEO issues, and boost your rankings — built for non-techies and agencies.");
add("/pricing", "Pricing – ZentroSEO", "Explore ZentroSEO pricing plans. Free forever plan available. Scale with Pro and Agency tiers for advanced SEO auditing, keyword tracking, and AI-powered optimization.");
add("/features", "Features – ZentroSEO", "Discover all ZentroSEO features: technical audits, keyword research, content optimization, schema markup, rank tracking, and AI-powered SEO tools.");
add("/solutions", "Solutions – ZentroSEO", "SEO solutions tailored for agencies, freelancers, startups, and enterprise teams. Find the right ZentroSEO plan for your workflow.");
add("/company", "Company – ZentroSEO", "Learn about ZentroSEO, the AI-powered SEO platform. Meet the team, explore careers, and get in touch.");
add("/company/about-us", "About Us – ZentroSEO", "ZentroSEO is building the future of AI-powered SEO. Learn about our mission, values, and the team behind the platform.");
add("/company/careers", "Careers – ZentroSEO", "Join the ZentroSEO team. Explore open positions in engineering, marketing, and product. Help us build the future of AI-powered SEO.");
add("/company/contact-us", "Contact Us – ZentroSEO", "Get in touch with the ZentroSEO team. We're here to help with questions about our SEO platform, pricing, partnerships, and more.");
add("/resources", "Resources – ZentroSEO", "Explore ZentroSEO resources: blog articles, guides, glossary, comparisons, and free SEO tools to improve your search rankings.");
add("/resources/blog", "SEO Blog – ZentroSEO", "Read expert SEO articles on technical SEO, content optimization, keyword research, link building, and AI-powered SEO strategies.");
add("/resources/help-center", "Help Center – ZentroSEO", "Find answers to common questions about ZentroSEO. Browse FAQs, troubleshooting guides, and platform documentation.");
add("/resources/case-studies", "Case Studies – ZentroSEO", "See how businesses use ZentroSEO to improve their SEO performance. Real results from real users.");
add("/resources/documentation", "Documentation – ZentroSEO", "Complete ZentroSEO documentation. Learn how to use every feature, API reference, and integration guide.");
add("/resources/seo-toolkit", "Free SEO Tools – ZentroSEO", "Free SEO tools: title checker, meta description analyzer, schema generator, keyword density checker, and more. No signup required.");
add("/resources/glossary", "SEO Glossary – ZentroSEO", "Learn SEO terminology with clear, practical definitions. From anchor text to topical authority — understand every SEO concept.");
add("/resources/topics", "SEO Topics – ZentroSEO", "Explore SEO topics in depth: technical SEO, semantic SEO, on-page optimization, link building, local SEO, and more.");
add("/resources/topics/map", "Topical Map – ZentroSEO", "Visual topical map of SEO concepts. Explore how topics, subtopics, and entities connect across the SEO knowledge graph.");
add("/resources/guides", "SEO Guides – ZentroSEO", "Step-by-step SEO guides for beginners and advanced practitioners. Learn technical audits, keyword research, content optimization, and more.");
add("/resources/comparisons", "SEO Tool Comparisons – ZentroSEO", "Compare ZentroSEO with Ahrefs, SEMrush, Moz, and other SEO tools. Feature-by-feature comparisons to find the right platform.");
add("/sitemap", "Sitemap – ZentroSEO", "Browse the complete ZentroSEO sitemap. Find every page, tool, blog post, and resource on our platform.");
add("/scan", "Free SEO Scan – ZentroSEO", "Run a free SEO scan on any website. Get instant results with actionable recommendations to improve your search rankings.");
add("/results", "SEO Scan Results – ZentroSEO", "View your SEO scan results. Detailed analysis of technical issues, content quality, and optimization opportunities.");

// ── 2. Blog posts ──

try {
  const blogSrc = readSrc("data/blog-posts.ts");
  // Extract slug, title, excerpt from each blog post object
  const slugRegex = /slug:\s*"([^"]+)"/g;
  const posts = [];
  let sm;
  while ((sm = slugRegex.exec(blogSrc)) !== null) {
    const slug = sm[1];
    const contextStart = Math.max(0, sm.index - 200);
    const contextEnd = Math.min(blogSrc.length, sm.index + 500);
    const context = blogSrc.slice(contextStart, contextEnd);
    
    const titleMatch = /title:\s*"([^"]+)"/.exec(context);
    const excerptMatch = /excerpt:\s*"([^"]+)"/.exec(context);
    
    if (titleMatch) {
      posts.push({
        slug,
        title: titleMatch[1],
        excerpt: excerptMatch ? excerptMatch[1] : "",
      });
    }
  }
  
  for (const p of posts) {
    add(`/resources/blog/${p.slug}`, `${p.title} | ZentroSEO`, p.excerpt);
  }
  
  // Blog categories
  const catMetaRegex = /"([^"]+)":\s*\{\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)"/g;
  const catMetaSection = blogSrc.slice(blogSrc.indexOf("categoryMeta"));
  let cm;
  while ((cm = catMetaRegex.exec(catMetaSection)) !== null) {
    const catName = cm[1];
    const catTitle = cm[2];
    const catDesc = cm[3];
    add(`/resources/blog/category/${categorySlug(catName)}`, `${catTitle} | ZentroSEO Blog`, catDesc);
  }
} catch (e) {
  console.warn("Could not parse blog-posts.ts:", e.message);
}

// ── 3. Glossary terms ──

try {
  const glossarySrc = readSrc("data/glossary.ts");
  const termRegex = /term:\s*"([^"]+)"/g;
  let gm;
  while ((gm = termRegex.exec(glossarySrc)) !== null) {
    const term = gm[1];
    const contextStart = Math.max(0, gm.index - 100);
    const contextEnd = Math.min(glossarySrc.length, gm.index + 600);
    const context = glossarySrc.slice(contextStart, contextEnd);
    
    const slugMatch = /slug:\s*"([^"]+)"/.exec(context);
    const defMatch = /definition:\s*"([^"]+)"/.exec(context);
    
    if (slugMatch) {
      add(
        `/resources/glossary/${slugMatch[1]}`,
        `${term} – SEO Glossary | ZentroSEO`,
        defMatch ? defMatch[1].slice(0, 160) : `Learn what ${term} means in SEO.`
      );
    }
  }
} catch (e) {
  console.warn("Could not parse glossary.ts:", e.message);
}

// ── 4. Features (Record<string, FeatureData>) ──

try {
  const featuresSrc = readSrc("data/features.ts");
  const items = extractRecordItems(featuresSrc, ["metaTitle", "metaDescription", "slug"]);
  for (const f of items) {
    if (f.metaTitle && f.metaDescription) {
      add(`/features/${f.slug}`, f.metaTitle, f.metaDescription);
    }
  }
} catch (e) {
  console.warn("Could not parse features.ts:", e.message);
}

// ── 5. Solutions (Record<string, SolutionData>) ──

try {
  const solutionsSrc = readSrc("data/solutions.ts");
  const items = extractRecordItems(solutionsSrc, ["metaTitle", "metaDescription", "slug"]);
  for (const s of items) {
    if (s.metaTitle && s.metaDescription) {
      add(`/solutions/${s.slug}`, s.metaTitle, s.metaDescription);
    }
  }
} catch (e) {
  console.warn("Could not parse solutions.ts:", e.message);
}

// ── 6. Guides ──

try {
  const guidesSrc = readSrc("data/guides.ts");
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let gm;
  while ((gm = slugRegex.exec(guidesSrc)) !== null) {
    const slug = gm[1];
    const contextStart = Math.max(0, gm.index - 300);
    const contextEnd = Math.min(guidesSrc.length, gm.index + 500);
    const context = guidesSrc.slice(contextStart, contextEnd);
    
    const titleMatch = /title:\s*"([^"]+)"/.exec(context);
    const excerptMatch = /excerpt:\s*"([^"]+)"/.exec(context);
    
    if (titleMatch) {
      add(
        `/resources/guides/${slug}`,
        `${titleMatch[1]} | ZentroSEO Guide`,
        excerptMatch ? excerptMatch[1] : ""
      );
    }
  }
} catch (e) {
  console.warn("Could not parse guides.ts:", e.message);
}

// ── 7. Comparisons ──

try {
  const compSrc = readSrc("data/comparisons.ts");
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let cm;
  while ((cm = slugRegex.exec(compSrc)) !== null) {
    const slug = cm[1];
    const contextStart = Math.max(0, cm.index - 300);
    const contextEnd = Math.min(compSrc.length, cm.index + 500);
    const context = compSrc.slice(contextStart, contextEnd);
    
    const titleMatch = /title:\s*"([^"]+)"/.exec(context);
    const excerptMatch = /excerpt:\s*"([^"]+)"/.exec(context);
    
    if (titleMatch) {
      add(
        `/resources/comparisons/${slug}`,
        `${titleMatch[1]} | ZentroSEO`,
        excerptMatch ? excerptMatch[1] : ""
      );
    }
  }
} catch (e) {
  console.warn("Could not parse comparisons.ts:", e.message);
}

// ── 8. Topics ──

try {
  const topicsSrc = readSrc("data/topics.ts");
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let tm;
  while ((tm = slugRegex.exec(topicsSrc)) !== null) {
    const slug = tm[1];
    const contextStart = Math.max(0, tm.index - 300);
    const contextEnd = Math.min(topicsSrc.length, tm.index + 600);
    const context = topicsSrc.slice(contextStart, contextEnd);
    
    const nameMatch = /name:\s*"([^"]+)"/.exec(context);
    const descMatch = /description:\s*"([^"]+)"/.exec(context);
    
    if (nameMatch) {
      add(
        `/resources/topics/${slug}`,
        `${nameMatch[1]} – SEO Topic | ZentroSEO`,
        descMatch ? descMatch[1].slice(0, 160) : ""
      );
    }
  }
} catch (e) {
  console.warn("Could not parse topics.ts:", e.message);
}

// ── 9. Legal pages ──

try {
  const legalSrc = readSrc("data/legal.ts");
  const items = extractRecordItems(legalSrc, ["metaTitle", "metaDescription", "slug"]);
  for (const l of items) {
    if (l.metaTitle && l.metaDescription) {
      add(`/${l.slug}`, l.metaTitle, l.metaDescription);
    }
  }
} catch (e) {
  console.warn("Could not parse legal.ts:", e.message);
}

// ── 10. Tools (hardcoded from tool page files) ──

const tools = [
  { path: "/resources/seo-toolkit/title-meta-checker", title: "Title & Meta Description Pixel Checker – Free SEO Tool | ZentroSEO", desc: "Check your title tag and meta description pixel widths against Google's SERP limits. Preview your search snippet and fix truncation issues." },
  { path: "/resources/seo-toolkit/website-fix-scanner", title: "Free Website Fix Scanner – Find & Fix SEO Issues | ZentroSEO", desc: "Scan any website for SEO issues and get prioritized, actionable fix recommendations. Detects CMS, hosting, speed issues, and more." },
  { path: "/resources/seo-toolkit/eeat-analyzer", title: "Free E-E-A-T Content Analyzer – Check Google Trust Signals | ZentroSEO", desc: "Analyze your content for E-E-A-T signals. Get category scores, risk level, and actionable fixes to boost your content's trust and authority." },
  { path: "/resources/seo-toolkit/paa-extractor", title: "Free PAA Extractor – People Also Ask Questions | ZentroSEO", desc: "Extract People Also Ask questions from Google for any keyword. Use them for content ideas, FAQ schema, and featured snippet targeting." },
  { path: "/resources/seo-toolkit/internal-link-finder", title: "Free Internal Linking Finder – SEO Link Suggestions | ZentroSEO", desc: "Find internal linking opportunities for any URL. Get anchor text recommendations based on NLP topic analysis and entity detection." },
  { path: "/resources/seo-toolkit/autocomplete-keyword-finder", title: "Autocomplete Keyword Finder – Free Google Suggest Tool | ZentroSEO", desc: "Extract Google autocomplete suggestions for any keyword. Discover long-tail keywords, content ideas, and search trends with this free SEO tool." },
  { path: "/resources/seo-toolkit/word-counter", title: "Word Counter & Text Analyzer – Free SEO Tool | ZentroSEO", desc: "Free word counter tool. Count words, characters, sentences, paragraphs, and estimate reading time for your content. Optimize content length for SEO." },
  { path: "/resources/seo-toolkit/robots-txt-generator", title: "Robots.txt Generator – Free SEO Tool | ZentroSEO", desc: "Create a robots.txt file for your website. Configure user-agents, disallow/allow rules, sitemap URL, and crawl delay. Free SEO tool." },
  { path: "/resources/seo-toolkit/open-graph-generator", title: "Open Graph Meta Tag Generator – Free SEO Tool | ZentroSEO", desc: "Generate Open Graph (OG) and Twitter Card meta tags for your website. Preview how your content will look when shared on social media. Free tool." },
  { path: "/resources/seo-toolkit/heading-analyzer", title: "Heading Analyzer – Check H1-H6 Structure | ZentroSEO", desc: "Free heading analyzer tool. Check your page's H1-H6 heading hierarchy for SEO issues, skipped levels, and missing H1 tags. Improve your content structure." },
  { path: "/resources/seo-toolkit/keyword-density-checker", title: "Keyword Density Checker – Free SEO Tool | ZentroSEO", desc: "Check keyword density in your content. Find top words, analyze target keyword frequency, and avoid over-optimization. Free SEO keyword density tool." },
  { path: "/resources/seo-toolkit/sitemap-validator", title: "Sitemap XML Validator – Free SEO Tool | ZentroSEO", desc: "Validate your sitemap.xml file for errors, duplicate URLs, missing elements, and SEO best practices. Free sitemap validation tool." },
  { path: "/resources/seo-toolkit/schema-markup-generator", title: "Schema Markup Generator (JSON-LD) – Free SEO Tool | ZentroSEO", desc: "Free JSON-LD schema markup generator. Create structured data for Articles, FAQs, Products, Local Businesses, How-To guides, and Events to boost rich results." },
  { path: "/resources/seo-toolkit/hreflang-generator", title: "Hreflang Tag Generator – Free SEO Tool | ZentroSEO", desc: "Free hreflang tag generator. Create hreflang link elements for multilingual websites. Ensure Google serves the right language version to the right audience." },
  { path: "/resources/seo-toolkit/serp-simulator", title: "Google SERP Simulator – Free SEO Preview Tool | ZentroSEO", desc: "Free Google SERP simulator. Preview how your page appears in search results. Optimize title tags and meta descriptions for better click-through rates." },
  { path: "/resources/seo-toolkit/slug-generator", title: "SEO-Friendly URL Slug Generator – Free Tool | ZentroSEO", desc: "Free URL slug generator. Convert titles to clean, SEO-friendly slugs. Remove stop words, diacritics, and special characters for better search rankings." },
  { path: "/resources/seo-toolkit/ai-blog-title-generator", title: "AI Blog Title Generator – Free SEO Tool | ZentroSEO", desc: "Free AI blog title generator. Get 10 click-worthy, SEO-optimized blog title suggestions for any topic. Powered by AI with tone customization." },
  { path: "/resources/seo-toolkit/ai-meta-description-generator", title: "AI Meta Description Generator – Free SEO Tool | ZentroSEO", desc: "Free AI meta description generator. Create compelling, SEO-optimized meta descriptions from your page or content. Boost CTR from search results." },
];

for (const t of tools) {
  add(t.path, t.title, t.desc);
}

// ── 11. Team / Author pages ──

try {
  const teamSrc = readSrc("data/team.ts");
  const authorSlugRegex = /authorSlug:\s*"([^"]+)"/g;
  let am;
  while ((am = authorSlugRegex.exec(teamSrc)) !== null) {
    const slug = am[1];
    const contextStart = Math.max(0, am.index - 400);
    const contextEnd = Math.min(teamSrc.length, am.index + 200);
    const context = teamSrc.slice(contextStart, contextEnd);
    
    const nameMatch = /name:\s*"([^"]+)"/.exec(context);
    const roleMatch = /role:\s*"([^"]+)"/.exec(context);
    
    if (nameMatch) {
      add(
        `/company/team/${slug}`,
        `${nameMatch[1]} – ${roleMatch ? roleMatch[1] : "Team"} | ZentroSEO`,
        `Learn about ${nameMatch[1]}, ${roleMatch ? roleMatch[1] : "team member"} at ZentroSEO. Read their articles and learn about their SEO expertise.`
      );
    }
  }
} catch (e) {
  console.warn("Could not parse team.ts:", e.message);
}

// ── Write output ──

const outPath = path.join("dist", "meta-map.json");

// Ensure dist exists (should after vite build)
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist", { recursive: true });
}

fs.writeFileSync(outPath, JSON.stringify(map, null, 2));
console.log(`✅ meta-map.json generated with ${Object.keys(map).length} entries → ${outPath}`);
