/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '4k': '2560px', //  breakpoint personalizado para pantallas 4k
      },
    },
  },
  plugins: [],
}
