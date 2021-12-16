import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// import HttpApi from "i18next-http-backend";

// import { defaultLanguage, supportedLanguages } from "../config/i18n";
import format from "./i18n-format";

const resources = {
  en: {
    translation: {
      change_language: "Change language",
      date: "{{date, date(weekday: long; day: numeric; month: long; year: numeric)}}",
      banana: "I've eaten {{count}} banana",
      banana_plural: "I've eaten {{count}} bananas",
    },
  },
  ru: {
    translation: {
      change_language: "Сменить язык",
      date: "{{date, date(weekday: long; day: numeric; month: long; year: numeric)}}",
      banana: "Съела {{count}} банан",
      banana_0: "Съела {{count}} бананов",
      banana_2: "Съела {{count}} банана",
      banana_3: "Съела {{count}} банана",
      banana_4: "Съела {{count}} банана",
      banana_plural: "Съела {{count}} бананов",
    },
  },
}

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    supportedLngs: ["en", "ru"],
    interpolation: {
      escapeValue: false,
      format,
    },
    debug: process.env.NODE_ENV === "development",
  });

export default i18next;
