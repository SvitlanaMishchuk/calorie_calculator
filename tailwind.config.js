/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    fontFamily: {
      souv: ['Souvenir', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#386641',
        secondary: '#bc4749',
      },
    },
  },
  plugins: [],
};
