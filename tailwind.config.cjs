const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
        "./src/theme/*.css"
    ],
  theme: {
    extend: {
        colors: {
            'primary': colors.purple["600"],
            'danger': colors.red["600"],
        }
    },
  },
  plugins: [],
}
