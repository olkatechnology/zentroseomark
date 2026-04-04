
Goal: stop the sitewide Vercel crash on all marketing pages.

Root cause:
- `package.json` sets `"type": "module"`.
- `api/render.js` and `api/discover.js` are still written in CommonJS (`require`, `module.exports`).
- On Vercel, that can crash at module load time before the handler runs, which matches the generic `FUNCTION_INVOCATION_FAILED` page. It also explains why the fallback response inside `api/render.js` is never shown.

Implementation plan:
1. Convert both serverless handlers to ESM
   - Replace `require(...)` with `import ...`
   - Replace `module.exports = ...` with `export default ...`
   - Recreate `__dirname` using `fileURLToPath(import.meta.url)` and `path.dirname(...)`
2. Keep the current SEO rendering logic
   - Preserve the existing `dist/index.html` / `meta-map.json` loading and meta injection in `api/render.js`
   - Preserve the discover SSR logic in `api/discover.js`
3. Standardize runtime-safe file resolution
   - Use the same robust asset lookup approach in both handlers so `dist` files are found reliably in Vercel
   - Keep the `vercel.json` `includeFiles` config already added
4. Verify after redeploy
   - Test `/`, one blog post, one tool page, and `/discover/`
   - Confirm Vercel logs no longer show module-scope crashes and pages return HTML instead of the Vercel error screen

Technical details:
- This is a deployment compatibility fix, not a metadata-content change.
- No React page components need to change.
- `scripts/generate-meta-map.mjs` can stay as-is unless a separate build error appears later.
