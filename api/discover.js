import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SITE_URL = "https://zentroseo.com";

function getDistPath(file) {
  const candidates = [
    path.join(__dirname, "..", "dist", file),
    path.join(process.cwd(), "dist", file),
    path.join("/var/task", "dist", file),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return candidates[0];
}

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

function esc(s) {
  return (s || "").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
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

function injectIntoHtml(html, { title, description, og, ld, ssrData }) {
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);

  const metaBlock = `
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${ssrData?._canonical || ""}" />
    ${og}
    ${ld}
  `;
  html = html.replace("</head>", `${metaBlock}</head>`);

  if (ssrData) {
    const script = `<script>window.__SSR_DATA__=${JSON.stringify(ssrData)}</script>`;
    html = html.replace("</body>", `${script}</body>`);
  }

  return html;
}

export default async function handler(req, res) {
  try {
    let html = fs.readFileSync(getDistPath("index.html"), "utf-8");

    const url = req.url || "/discover/";
    const { type, param, sub } = parsePath(url);

    let meta;
    let ssrData = {};

    if (type === "hub") {
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
      const categories = await supabaseFetch(
        `discover_categories?slug=eq.${param}&select=*`
      );

      if (categories && categories.length > 0) {
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
          meta = buildMeta({
            title: "Discover | ZentroSEO",
            description: "Explore SEO performance across industries.",
            url: `${SITE_URL}/discover/${param}/`,
          });
          ssrData = { type: "notfound", _canonical: `${SITE_URL}/discover/${param}/` };
        }
      }

    } else if (type === "sub") {
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
    try {
      const fallback = fs.readFileSync(getDistPath("index.html"), "utf-8");
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.status(200).send(fallback);
    } catch {
      res.status(500).send("Internal Server Error");
    }
  }
}
