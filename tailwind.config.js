const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
