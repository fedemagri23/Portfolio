/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/util/colors'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: colors.blueGrey.lighten4,
          primary: colors.brown.darken4,
          secondary: colors.brown.darken1,
          tertiary: colors.blueGrey.lighten5,
          colortext: colors.blueGrey.lighten5,
          colortext2: colors.shades.black,
        }
      },
      dark: {
        light: false,
        colors: {
          background: colors.grey.darken3,
          primary: colors.shades.black,
          secondary: colors.grey.darken2,
          tertiary: colors.grey.darken1,
          colortext: colors.shades.white,
          colortext2: colors.shades.white,
        }
      }
    }
  },
})
