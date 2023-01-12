import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";
import App from "./App.vue";

import "./assets/main.css";

const pinia = createPinia();

const i18n = createI18n({
  locale: "en",
  messages,
});

const app = createApp(App);
app.use(pinia)
app.use(i18n);
app.mount("#app");
