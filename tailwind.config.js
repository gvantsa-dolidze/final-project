/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1116': '1116px',
       
    },
    colors: {
      BackgroundGray: '#F6F6F6',
      PrimaryTextGray: '#717171',
      SecondaryTextGray: '#878A92',
      MainTextGray: '#5C5F6A',
      MidnightBlue: '#0E1422',
      
    },
  },
  },
  plugins: [],
  }