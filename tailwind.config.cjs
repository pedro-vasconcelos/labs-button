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
            'primary-hover': colors.purple["700"],
            'danger': colors.red["600"],
            'danger-hover': colors.red["700"],
        }
    },
  },
  plugins: [],
}
