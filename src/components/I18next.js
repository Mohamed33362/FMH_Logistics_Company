import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .use(HttpApi)
  .init({
    backend: {
      loadPath: "/assests/localz/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    debug: true,
    fallbackLng: "en",
  });
