import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import vuetify from "./plugins/vuetify"

import "@/assets/load-font.css"

import VueSmoothScroll from "vue2-smooth-scroll"
import AOS from "aos"
import aos_css from "aos/dist/aos.css"
import lazysizes from "lazysizes"
import unveilhooks from "lazysizes/plugins/unveilhooks/ls.unveilhooks.min.js"

import ApiCommons from "@/api/ApiCommons.js"

Vue.prototype.$api = ApiCommons

Vue.config.productionTip = false
const vScrollConfig = {
  duration: 800,
  offset: 0,
  updateHistory: false,
  easingFunction: (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
}
Vue.use(VueSmoothScroll, vScrollConfig)

new Vue({
  router,
  vuetify,
  aos_css,
  lazysizes,
  unveilhooks,
  mounted() {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: "ease-out-cubic", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    })
  },
  render: (h) => h(App),
}).$mount("#app")
