/**
 * SSR Data Hydration Hook
 *
 * When the Vercel ISR serverless function renders a Discover page,
 * it injects `window.__SSR_DATA__` with pre-fetched data.
 * This hook reads that data so React Query can use it as `initialData`,
 * avoiding a duplicate fetch on first load.
 */

declare global {
  interface Window {
    __SSR_DATA__?: {
      type?: "hub" | "category" | "profile" | "sub" | "notfound";
      categories?: unknown[];
      listings?: unknown[];
      listing?: unknown;
      category?: unknown;
      sub?: string;
      _canonical?: string;
    };
  }
}

export function useSSRData() {
  if (typeof window === "undefined") return null;
  return window.__SSR_DATA__ ?? null;
}

/**
 * Consume SSR data once — clears it after first read so subsequent
 * client-side navigations don't use stale pre-rendered data.
 */
export function consumeSSRData() {
  if (typeof window === "undefined") return null;
  const data = window.__SSR_DATA__ ?? null;
  if (data) {
    delete window.__SSR_DATA__;
  }
  return data;
}
