/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#5D8C51",
        dark:"#141414",
        card:"#1E1E1E",
        grayText:"#B5B5B5",
      }
    },
  },
  plugins: [],
}