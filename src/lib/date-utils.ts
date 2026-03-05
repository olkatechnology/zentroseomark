/**
 * Maps i18n language codes to BCP-47 locale tags for date formatting.
 */
const localeMap: Record<string, string> = {
  en: "en-US",
  de: "de-DE",
  es: "es-ES",
  fr: "fr-FR",
  it: "it-IT",
  nl: "nl-NL",
  pl: "pl-PL",
  pt: "pt-BR",
  sv: "sv-SE",
  vi: "vi-VN",
  tr: "tr-TR",
  zh: "zh-CN",
  ja: "ja-JP",
  ko: "ko-KR",
};

export function getDateLocale(lang: string): string {
  return localeMap[lang] || "en-US";
}

export function formatDate(
  dateStr: string,
  lang: string,
  options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" }
): string {
  return new Date(dateStr).toLocaleDateString(getDateLocale(lang), options);
}

export function formatDateLong(dateStr: string, lang: string): string {
  return formatDate(dateStr, lang, { month: "long", day: "numeric", year: "numeric" });
}
