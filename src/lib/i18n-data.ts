import i18n from '@/i18n';

/**
 * Translate a data field using the 'data' namespace with fallback to the English value.
 * Components calling getters that use `td()` must use `useTranslation()` to trigger
 * re-renders on language change.
 */
export function td(key: string, fallback: string): string {
  return i18n.t(key, { defaultValue: fallback, ns: 'data' });
}
