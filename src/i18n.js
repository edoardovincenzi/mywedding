import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { it_language } from './assets/language/it';
import { ro_language } from './assets/language/ro';
import { gb_language } from './assets/language/gb';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      it: {
        translation: it_language,
      },
      ro: {
        translation: ro_language,
      },
      gb: {
        translation: gb_language,
      },
    },
  });

export default i18n;
