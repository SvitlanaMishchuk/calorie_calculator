/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    fontFamily: {
      souv: ['Souvenir', 'sans-serif'],
      serif: ['serif']
    },
    extend: {
      colors: {
        primary: '#386641',
        secondary: '#bc4749',
        theme: '#f2e8cf'
      },
    },
  },
  plugins: [],
};
