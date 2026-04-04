

## Fix: `api/render.js` Crashing with 500 on All Pages

### Root Cause

The `api/render.js` serverless function crashes because it cannot locate `dist/index.html` at runtime. On Vercel, serverless functions don't automatically include files from the build output directory in their bundle. The function uses `process.cwd()` to construct the path, but the `dist/` files aren't packaged with the function unless explicitly configured.

`api/discover.js` uses the same pattern but was deployed before and may have worked due to caching or a different deployment state. Now that **all** routes funnel through `render.js`, any crash there takes down the entire site.

### Fix

**File: `vercel.json`** — Add `functions` config to include `dist/` files in the render function bundle:

```json
{
  "functions": {
    "api/render.js": {
      "includeFiles": "dist/**"
    },
    "api/discover.js": {
      "includeFiles": "dist/**"
    }
  }
}
```

**File: `api/render.js`** — Use `path.join(__dirname, "..", "dist", ...)` instead of `process.cwd()` for more reliable path resolution in the Lambda environment. Also add a safeguard: if `index.html` can't be loaded at all, return a minimal HTML page with a client-side redirect instead of a bare 500.

**File: `scripts/generate-meta-map.mjs`** — Wrap the entire script in a top-level try/catch so a parsing failure in any data file doesn't crash the build. If the script fails, write an empty `{}` to `dist/meta-map.json` so the build succeeds and render.js can still serve pages (just without custom meta).

### Files Modified
- `vercel.json` — add `functions.includeFiles` config
- `api/render.js` — fix file paths, improve fallback
- `scripts/generate-meta-map.mjs` — ensure build never fails

