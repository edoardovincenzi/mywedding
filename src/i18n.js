import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { it_language } from './assets/language/it';
import { ro_language } from './assets/language/ro';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      it: {
        translation: it_language,
      },
      ro: {
        translation: ro_language,
      },
    },
  });

export default i18n;
