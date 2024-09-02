import App from "./App.tsx";
import { I18nextProvider } from "react-i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import common_en from "./locales/en/common.json";
import common_fr from "./locales/fr/common.json";
import i18next from "i18next";
import theme from "./theme";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "fr",
  resources: {
    en: {
      translations: common_en,
    },
    fr: {
      translations: common_fr,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </div>
);
