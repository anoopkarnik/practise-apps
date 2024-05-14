/** @type {import('tailwindcss').Config}  modify the tailwind.config.js file*/
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight:{
        'custom-100': "10px"
      }
    },
    rotate:{
      '10': '10deg',
      '20': '20deg',
      '30': '30deg',
      '40': '40deg',
    }
  },
  plugins: [],
}