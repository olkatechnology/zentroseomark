const fs = require("fs");
const path = require("path");

const SITE_URL = "https://zentroseo.com";

let htmlTemplate = null;
let metaMap = null;

function loadAssets() {
  if (!htmlTemplate) {
    htmlTemplate = fs.readFileSync(
      path.join(process.cwd(), "dist", "index.html"),
      "utf-8"
    );
  }
  if (!metaMap) {
    try {
      const raw = fs.readFileSync(
        path.join(process.cwd(), "dist", "meta-map.json"),
        "utf-8"
      );
      metaMap = JSON.parse(raw);
    } catch {
      metaMap = {};
    }
  }
}

function esc(s) {
  return (s || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function normalizePath(url) {
  // Strip query string and hash
  let p = url.split("?")[0].split("#")[0];
  // Ensure trailing slash
  if (!p.endsWith("/")) p += "/";
  return p;
}

module.exports = async function handler(req, res) {
  try {
    loadAssets();

    const rawPath = req.url || "/";
    const normalizedPath = normalizePath(rawPath);

    // Look up meta — try with and without trailing slash
    const meta =
      metaMap[normalizedPath] ||
      metaMap[normalizedPath.replace(/\/$/, "")] ||
      null;

    let html = htmlTemplate;
    const canonical = `${SITE_URL}${normalizedPath}`;

    if (meta) {
      // Replace <title>
      html = html.replace(
        /<title>[^<]*<\/title>/,
        `<title>${esc(meta.title)}</title>`
      );

      // Build meta block to inject before </head>
      const metaBlock = `
    <meta name="description" content="${esc(meta.description)}" />
    <link rel="canonical" href="${esc(canonical)}" />
    <meta property="og:title" content="${esc(meta.title)}" />
    <meta property="og:description" content="${esc(meta.description)}" />
    <meta property="og:url" content="${esc(canonical)}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ZentroSEO" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(meta.title)}" />
    <meta name="twitter:description" content="${esc(meta.description)}" />`;

      html = html.replace("</head>", `${metaBlock}\n  </head>`);
    } else {
      // Even for unmapped pages, inject canonical
      html = html.replace(
        "</head>",
        `\n    <link rel="canonical" href="${esc(canonical)}" />\n  </head>`
      );
    }

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );
    res.status(200).send(html);
  } catch (err) {
    console.error("render.js error:", err);
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
