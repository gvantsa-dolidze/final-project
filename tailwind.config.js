/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1116': '1116px',
        '1440': '1440px',
    },
    colors: {
      lightGray: '#F6F6F6',
    },
  },
  },
  plugins: [],
  }