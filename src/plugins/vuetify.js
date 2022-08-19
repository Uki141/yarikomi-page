import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        base: "#06080D",
        primary: "#22A2F2",
        secondary: "#1B8EF2",
        accent: "#1A2E40",
        error: "#F23B33",
        info: "#FFFFFF",
        success: "#63F216",
        warning: "#FFC107",
      },
      dark: {
        base: "#FFFFFF",
        primary: "#5CB9F2",
        secondary: "#1B8EF2",
        accent: "#1A2E40",
        error: "#F23B33",
        info: "#5CB9F2",
        success: "#72DE50",
        warning: "#FFC107",
      },
    },
  },
});
