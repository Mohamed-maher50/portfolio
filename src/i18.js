import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import eng from "./locales/en/translation.json";
import ar from "./locales/ar/translation.json";

const english = {
  translation: eng,
};
const arabic = {
  translation: ar,
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: english,
      ar: arabic,
    },
    lng: "en", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false, // react already escapes by default
    },
  });

export default i18n;
