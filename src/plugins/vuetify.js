/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#015933",
          secondary: "#F3EFCC",
          "secondary-2": "#ABCA53",
          "secondary-3": "#fdfbe3",
          "secondary-4": "#4E8C43",

        },
      },
      
    },
  },
});
