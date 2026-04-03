

## Fix: Duplicate Titles & Meta Descriptions Across All Pages

### The Problem

SEMrush shows **every single page** (95+ URLs) with the identical title "ZentroSEO – All-in-One AI SEO Platform for Non-techies." and the same description. This happens because the site is a client-side SPA — Vercel serves the same `index.html` for every route, and `react-helmet-async` only updates the `<title>` after JavaScript executes. Crawlers (SEMrush, and potentially Googlebot in some cases) see only the static HTML fallback.

The `/discover/` routes already solved this with `api/discover.js` — a Vercel serverless function that injects correct meta tags into the HTML before serving it. We need to extend this pattern to **all routes**.

### Solution: Server-Side Meta Injection for All Routes

#### Step 1 — Build-time meta map generation

Create a build script (`scripts/generate-meta-map.mjs`) that runs after `vite build`. It imports all data sources and produces a JSON file mapping every URL path to its title and description:

```text
{
  "/": { "title": "ZentroSEO – ...", "description": "..." },
  "/pricing/": { "title": "Pricing – ZentroSEO", "description": "..." },
  "/resources/blog/ai-seo-tools-future/": { "title": "AI SEO Tools...", "description": "..." },
  "/resources/glossary/anchor-text/": { "title": "Anchor Text – SEO Glossary | ZentroSEO", "description": "..." },
  ...
}
```

Data sources: `blog-posts.ts` (50+ posts), `glossary.ts` (30 terms), `features.ts`, `solutions.ts`, `guides.ts`, `comparisons.ts`, `topics.ts`, `legal.ts`, `tool-content.ts`, plus hardcoded entries for static pages (pricing, about, contact, etc.).

This script reads the compiled JS output from `dist/` to access the data, then writes `dist/meta-map.json`.

#### Step 2 — Catch-all Vercel serverless function

Create `api/render.js` (same pattern as the existing `api/discover.js`):

1. Read `dist/index.html` and `dist/meta-map.json`
2. Match the request URL against the meta map
3. Replace `<title>` and inject correct `<meta name="description">`, OG tags, and canonical URL
4. Serve the modified HTML with cache headers

Falls back to default meta if the path isn't in the map.

#### Step 3 — Update `vercel.json` rewrites

Change the catch-all rewrite from serving static `index.html` to routing through the new function:

```text
Before:  { "source": "/(.*)", "destination": "/" }
After:   { "source": "/(.*)", "destination": "/api/render" }
```

Keep the existing `/discover/` rewrites pointing to `api/discover` (it handles its own dynamic Supabase lookups).

#### Step 4 — Update `package.json` build command

Add the meta map generation as a post-build step:

```text
"build": "vite build && node scripts/generate-meta-map.mjs"
```

### What This Fixes

- Every page gets a unique `<title>` in the initial HTML response
- Every page gets a unique `<meta name="description">`
- Correct OG tags and canonical URLs for social sharing
- SEMrush, Google, Bing, and AI crawlers all see correct metadata without waiting for JS
- Zero impact on client-side behavior (React Helmet still works for SPA navigation)

### Files Created
- `scripts/generate-meta-map.mjs` — build-time script (~200 lines)
- `api/render.js` — Vercel serverless function (~80 lines)

### Files Modified
- `vercel.json` — update catch-all rewrite
- `package.json` — add post-build step

### What Stays the Same
- All React components and Helmet usage (still needed for SPA navigation)
- `api/discover.js` (already works correctly)
- No changes to any page component

