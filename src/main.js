import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});
app.use(pinia);
app.use(router);
app.mount("#app");
