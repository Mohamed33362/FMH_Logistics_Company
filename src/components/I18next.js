import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ar"],
    backend: {
      loadPath:"/FMH_Logistics_Company/public/assests/localz/{{lng}}/translation.json",
    },
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    debug: true,
    fallbackLng: "en",
  });
