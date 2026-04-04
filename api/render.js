import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://zentroseo.com";

let htmlTemplate = null;
let metaMap = null;

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

function loadAssets() {
  if (!htmlTemplate) {
    htmlTemplate = fs.readFileSync(getDistPath("index.html"), "utf-8");
  }
  if (!metaMap) {
    try {
      const raw = fs.readFileSync(getDistPath("meta-map.json"), "utf-8");
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
  let p = url.split("?")[0].split("#")[0];
  if (!p.endsWith("/")) p += "/";
  return p;
}

export default async function handler(req, res) {
  try {
    loadAssets();

    const rawPath = req.url || "/";
    const normalizedPath = normalizePath(rawPath);

    const meta =
      metaMap[normalizedPath] ||
      metaMap[normalizedPath.replace(/\/$/, "")] ||
      null;

    let html = htmlTemplate;
    const canonical = `${SITE_URL}${normalizedPath}`;

    if (meta) {
      html = html.replace(
        /<title>[^<]*<\/title>/,
        `<title>${esc(meta.title)}</title>`
      );

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
    const fallbackHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ZentroSEO</title>
  <meta http-equiv="refresh" content="0;url=${esc(req.url || "/")}" />
</head>
<body>
  <p>Loading...</p>
</body>
</html>`;
    try {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.status(200).send(fallbackHtml);
    } catch {
      res.status(500).send("Internal Server Error");
    }
  }
}
