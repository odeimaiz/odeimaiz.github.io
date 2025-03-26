// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import the translation files
import enTranslation from './locales/en.json';
import euTranslation from './locales/eu.json';
import chTranslation from './locales/ch.json';

// Initialize i18next
i18n
  .use(LanguageDetector)  // Detect language
  .use(initReactI18next)  // Pass i18n to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      eu: { translation: euTranslation },
      ch: { translation: chTranslation },
    },
    lng: 'eu', // Default language
    fallbackLng: 'eu',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
