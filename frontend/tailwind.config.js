/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        heading: ['Cardo', 'sans-serif'],
      },
      colors: {
        'bone': '#DDD8C4',
        'lightgreen': '#A3C9A8',
        'green': '#84B59F',
      },
    },
  },
  plugins: [require("daisyui")],
}
