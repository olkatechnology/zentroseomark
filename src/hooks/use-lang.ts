import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLangFromPath, stripLangPrefix, localizedPath } from "@/lib/lang-utils";
import type { SupportedLang } from "@/lib/lang-utils";

/**
 * Reads the current language from the URL and syncs i18n.
 * Returns { lang, basePath, pathWithoutLang }.
 */
export function useLang() {
  const { i18n } = useTranslation();
  const location = useLocation();

  const lang: SupportedLang = getLangFromPath(location.pathname);
  const pathWithoutLang = stripLangPrefix(location.pathname);

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  return {
    lang,
    /** The prefix: "" for English, "/de" for German, etc. */
    basePath: lang === "en" ? "" : `/${lang}`,
    /** The current path without the language prefix */
    pathWithoutLang,
    /** Helper to create a localized path */
    lp: (path: string) => localizedPath(lang, path),
  };
}
