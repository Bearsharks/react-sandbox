import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ko from "./locales/ko";
import en from "./locales/en";
import resourcesToBackend from "i18next-resources-to-backend";

const resources = {
  ko: {
    translation: ko,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: "ko" | "en", namespace: "tasks" | "translation") => {
        console.log("resourcesToBackend", language, namespace);
        return import(`@locales/${namespace}/${language}.json`);
      }
    )
  )
  .init({
    resources,
    lng: "ko", // 기본 언어
    ns: ["translation", "tasks"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
    // 동적 네임스페이스 로딩을 위한 설정
    partialBundledLanguages: true,
    // 네임스페이스가 없을 때 기본 동작
    saveMissing: false,
  });

export default i18n;
