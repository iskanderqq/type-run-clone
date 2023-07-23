/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      content:{
        'tgIcon': 'url("../src/tg.png")'
      }
    },
  },
  plugins: [],
}

