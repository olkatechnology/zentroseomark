import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en';
import de from './locales/de';
import es from './locales/es';
import fr from './locales/fr';
import it from './locales/it';
import nl from './locales/nl';
import pl from './locales/pl';
import pt from './locales/pt';
import sv from './locales/sv';
import vi from './locales/vi';
import tr from './locales/tr';
import zh from './locales/zh';
import ja from './locales/ja';
import ko from './locales/ko';

const savedLang = (typeof window !== 'undefined' && localStorage.getItem('zentro-lang')) || 'EN';

i18n.use(initReactI18next).init({
  resources: { en, de, es, fr, it, nl, pl, pt, sv, vi, tr, zh, ja, ko },
  lng: savedLang.toLowerCase(),
  fallbackLng: 'en',
  ns: ['common', 'nav', 'home', 'pricing', 'pages'],
  defaultNS: 'common',
  interpolation: { escapeValue: false },
});

export default i18n;
