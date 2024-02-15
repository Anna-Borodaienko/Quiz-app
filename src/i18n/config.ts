import i18n from "i18next";                      
import { initReactI18next } from "react-i18next";
import { translationEN, translationES, translationDE, translationFR } from './index';

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  es: {
    translation: translationES,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("locale") || "en",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources
  });

export default i18n;