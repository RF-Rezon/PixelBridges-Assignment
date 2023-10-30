/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    divideWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      colors: {
        "base-theme": "#181819",
        "custom-green": "#3fb589",
        "custom-white-text": "#fefeff",
        "custom-white-text2": "#fcf8f6",
        "custom-gray-text": "#c2c3c2",
        "custom-gray-line": "#3f3e3f",
        "custom-gray-footer-icon": "#797983",
        "custom-card-color": "#181819",
        "custom-token-bg": "#141514",

      },
      fontFamily: {
        'body': ["Sans-serif"],
        'headlines': ["Cantarell"],
        'paragaraph': ["Segoe UI"],
        'logoText': ['Orbitron']
      },
    }
  },
  plugins: [],
}

