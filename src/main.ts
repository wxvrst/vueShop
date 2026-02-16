import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import piniaPluginPersistedsate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedsate);
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
