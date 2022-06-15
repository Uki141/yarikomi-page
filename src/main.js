import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

import "@/assets/load-font.css";

import VueSmoothScroll from "vue2-smooth-scroll";
import animate from "animate.css";
import AOS from "aos";
import aos_css from "aos/dist/aos.css";
import lazysizes from "lazysizes";
import unveilhooks from "lazysizes/plugins/unveilhooks/ls.unveilhooks.min.js";

Vue.config.productionTip = false;
Vue.use(VueSmoothScroll, {
  duration: 1200,
  offset: 0,
  updateHistory: true,
  easingFunction: (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
});

new Vue({
  router,
  vuetify,
  animate,
  aos_css,
  lazysizes,
  unveilhooks,
  render: (h) => h(App),
  mounted() {
    AOS.init({
      once: true,
    });
  },
}).$mount("#app");
