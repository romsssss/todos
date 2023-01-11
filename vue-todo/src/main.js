import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import en from "./locales/en.js";
import App from "./App.vue";

import "./assets/main.css";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: en,
  },
});

const app = createApp(App);
app.use(i18n);
app.mount("#app");
