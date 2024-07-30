import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationDE from './de.json';
import translationEN from './en.json';
import translationHE from './he.json';

const savedLanguage = localStorage.getItem('language') || 'de';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: translationDE },
      en: { translation: translationEN },
      he: { translation: translationHE }
    },
    lng: savedLanguage,
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;