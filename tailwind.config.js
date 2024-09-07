/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '15': '15deg',
        '30': '30deg',
        '60': '60deg',
        '120': '120deg',
        '150': '150deg',
        '90':'90deg',
        '180':'180deg',

      }
    },
  },
  plugins: [],
}

