import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import BackendAdapter from "i18next-multiload-backend-adapter";

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .use(HttpApi)
  .use(BackendAdapter)
  .init({
    supportedLngs: ["en", "ar"],
    backend: {
      loadPath: "/locales/resources.json?lng={{lng}}&ns={{ns}}",
      allowMultiLoading: true,
      addPath: "/locales/add/{{lng}}/{{ns}}",
      crossDomain: false,
    },

    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    debug: true,
    fallbackLng: "en",
  });
