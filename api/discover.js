const fs = require("fs");
const path = require("path");

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SITE_URL = "https://zentroseo.com";

async function supabaseFetch(endpoint) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${endpoint}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });
  if (!res.ok) return null;
  return res.json();
}

function stripTrailingSlash(s) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

function parsePath(url) {
  const parts = stripTrailingSlash(url)
    .replace(/^\/discover/, "")
    .split("/")
    .filter(Boolean);

  if (parts.length === 0) return { type: "hub" };
  if (parts.length === 1) return { type: "single", param: parts[0] };
  if (parts.length === 2) return { type: "sub", param: parts[0], sub: parts[1] };
  return { type: "hub" };
}

function buildMeta({ title, description, url, jsonLd }) {
  const og = `
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${esc(url)}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ZentroSEO" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />`;

  const ld = jsonLd
    ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
    : "";

  return { title, description, og, ld };
}

function esc(s) {
  return (s || "").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function injectIntoHtml(html, { title, description, og, ld, ssrData }) {
  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);

  // Inject meta + OG + JSON-LD before </head>
  const metaBlock = `
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${ssrData?._canonical || ""}" />
    ${og}
    ${ld}
  `;
  html = html.replace("</head>", `${metaBlock}</head>`);

  // Inject SSR data before </body>
  if (ssrData) {
    const script = `<script>window.__SSR_DATA__=${JSON.stringify(ssrData)}</script>`;
    html = html.replace("</body>", `${script}</body>`);
  }

  return html;
}

module.exports = async function handler(req, res) {
  try {
    const htmlPath = path.join(process.cwd(), "dist", "index.html");
    let html = fs.readFileSync(htmlPath, "utf-8");

    const url = req.url || "/discover/";
    const { type, param, sub } = parsePath(url);

    let meta;
    let ssrData = {};

    if (type === "hub") {
      // ── Hub page ──
      const categories = await supabaseFetch(
        "discover_categories?order=sort_order&select=*"
      );
      const listings = await supabaseFetch(
        "discover_listings?published=eq.true&order=seo_score.desc&limit=8&select=*"
      );

      meta = buildMeta({
        title: "Discover SEO Performance of Businesses, SaaS & Local Companies | ZentroSEO",
        description:
          "Explore SEO visibility, AI presence, and website performance across industries and locations powered by ZentroSEO. Claim your business profile today.",
        url: `${SITE_URL}/discover/`,
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "ZentroDiscover — Business & SaaS SEO Directory",
          description:
            "Explore SEO visibility, AI presence, and website performance of companies and tools across industries.",
          url: `${SITE_URL}/discover/`,
        },
      });

      ssrData = { type: "hub", categories, listings, _canonical: `${SITE_URL}/discover/` };

    } else if (type === "single") {
      // Could be a category slug OR a listing profile slug
      const categories = await supabaseFetch(
        `discover_categories?slug=eq.${param}&select=*`
      );

      if (categories && categories.length > 0) {
        // ── Category page ──
        const cat = categories[0];
        const listings = await supabaseFetch(
          `discover_listings?published=eq.true&category_slug=eq.${param}&order=seo_score.desc&select=*`
        );

        meta = buildMeta({
          title: `${cat.label} SEO Directory — Discover ${cat.label} Performance | ZentroSEO`,
          description: `Explore SEO scores, AI visibility, and website health for ${cat.label.toLowerCase()}. Compare and benchmark ${cat.label.toLowerCase()} in the ZentroSEO directory.`,
          url: `${SITE_URL}/discover/${param}/`,
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${cat.label} SEO Directory — ZentroSEO`,
            description: cat.description,
            url: `${SITE_URL}/discover/${param}/`,
          },
        });

        ssrData = { type: "category", category: cat, listings, _canonical: `${SITE_URL}/discover/${param}/` };
      } else {
        // ── Profile page (listing slug) ──
        const listings = await supabaseFetch(
          `discover_listings?slug=eq.${param}&select=*`
        );
        const listing = listings?.[0];

        if (listing) {
          meta = buildMeta({
            title: `${listing.name} SEO Analysis & Score | ZentroSEO`,
            description: `${listing.name} (${listing.domain}) has an SEO score of ${listing.seo_score}/100. View detailed technical health, content strength, and AI visibility analysis.`,
            url: `${SITE_URL}/discover/${param}/`,
            jsonLd: {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: `${listing.name} SEO Analysis`,
              description: listing.description,
              url: `${SITE_URL}/discover/${param}/`,
              about: {
                "@type": "Organization",
                name: listing.name,
                url: `https://${listing.domain}`,
              },
            },
          });

          ssrData = { type: "profile", listing, _canonical: `${SITE_URL}/discover/${param}/` };
        } else {
          // Not found — fall through to SPA
          meta = buildMeta({
            title: "Discover | ZentroSEO",
            description: "Explore SEO performance across industries.",
            url: `${SITE_URL}/discover/${param}/`,
          });
          ssrData = { type: "notfound", _canonical: `${SITE_URL}/discover/${param}/` };
        }
      }

    } else if (type === "sub") {
      // ── Sub-page: /discover/:category/:location-or-industry ──
      const listings = await supabaseFetch(
        `discover_listings?published=eq.true&category_slug=eq.${param}&or=(location_slug.eq.${sub},subcategory.eq.${sub})&order=seo_score.desc&select=*`
      );

      const label = sub.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      const catLabel = param.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

      meta = buildMeta({
        title: `${catLabel} in ${label} — SEO Directory | ZentroSEO`,
        description: `Explore SEO scores and website performance for ${catLabel.toLowerCase()} in ${label}. Compare businesses in the ZentroSEO directory.`,
        url: `${SITE_URL}/discover/${param}/${sub}/`,
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${catLabel} in ${label} — ZentroSEO Directory`,
          url: `${SITE_URL}/discover/${param}/${sub}/`,
        },
      });

      ssrData = { type: "sub", category: param, sub, listings, _canonical: `${SITE_URL}/discover/${param}/${sub}/` };
    }

    html = injectIntoHtml(html, { ...meta, ssrData });

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );
    res.status(200).send(html);
  } catch (err) {
    console.error("ISR discover error:", err);
    // Fallback: serve plain SPA index.html
    try {
      const fallback = fs.readFileSync(
        path.join(process.cwd(), "dist", "index.html"),
        "utf-8"
      );
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.status(200).send(fallback);
    } catch {
      res.status(500).send("Internal Server Error");
    }
  }
};
