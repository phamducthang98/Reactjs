import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./resources/en";
import { vn } from "./resources/vn";

export const configLocalization = () => {
  return i18n.use(initReactI18next).init({
    lng: "",
    fallbackLng: "",

    resources: {
      En: {
        translation: en,
      },
      Vn: {
        translation: vn,
      },
    },
    debug: false,
    cache: {
      enabled: true,
    },
    interpolation: {
      escapeValue: false,
    },
  });
};
