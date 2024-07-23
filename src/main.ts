import { createApp } from "vue";
import "./assets/css/fonts.css";
import "./assets/css/main.css";
import "animate.css";
import Playground from "./views/Playground.vue";
import { setup } from "./utils/bootstrap";
import App from "./App.vue";

setup({
  onProduction() {
    createApp(App).mount("#app");
  },
  onDevelopment() {
    createApp(Playground).mount("#app");
  },
});
