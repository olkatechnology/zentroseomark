export const supportedLangs = ["en", "de", "es", "fr", "it", "nl", "pl", "pt", "sv", "vi", "tr", "zh", "ja", "ko"] as const;
export type SupportedLang = (typeof supportedLangs)[number];

const nonEnglishLangs = supportedLangs.filter((l) => l !== "en");

export function isValidLang(code: string): code is SupportedLang {
  return (supportedLangs as readonly string[]).includes(code);
}

export function isNonEnglishLang(code: string): boolean {
  return (nonEnglishLangs as readonly string[]).includes(code);
}

/**
 * Returns a language-prefixed path.
 * English (default) → /pricing/
 * German → /de/pricing/
 */
export function localizedPath(lang: string, path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (lang === "en") return cleanPath;
  return `/${lang}${cleanPath}`;
}

/**
 * Strip a language prefix from a pathname.
 * /de/pricing/ → /pricing/
 * /pricing/ → /pricing/
 */
export function stripLangPrefix(pathname: string): string {
  const match = pathname.match(/^\/([a-z]{2})(\/.*)/);
  if (match && isNonEnglishLang(match[1])) {
    return match[2] || "/";
  }
  return pathname;
}

/**
 * Detect the language from a pathname.
 * /de/pricing/ → "de"
 * /pricing/ → "en"
 */
export function getLangFromPath(pathname: string): SupportedLang {
  const match = pathname.match(/^\/([a-z]{2})(?:\/|$)/);
  if (match && isNonEnglishLang(match[1])) {
    return match[1] as SupportedLang;
  }
  return "en";
}

const BASE_URL = "https://zentroseo.com";

/**
 * Returns a full canonical URL for a given language and path.
 * getCanonicalUrl("en", "/pricing/") → "https://zentroseo.com/pricing/"
 * getCanonicalUrl("de", "/pricing/") → "https://zentroseo.com/de/pricing/"
 */
export function getCanonicalUrl(lang: string, path: string): string {
  return `${BASE_URL}${localizedPath(lang, path)}`;
}

export { BASE_URL };
