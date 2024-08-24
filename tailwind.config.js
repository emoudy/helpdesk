/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        neutral: '#D0D0D0', // light grey
        primary: '#6744FF', // purple
        primary_alt: '#CC9A33', // soft gold
        primaryDark: '#4D25E5', // 10% darker than primary
      },
      fontSize: {
        'button-sm': ['12px', '16px'],
        'button-md': ['14px', '20px'],
        'button-lg': ['16px', '24px'],
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      },
    },
  },
  plugins: [],
};
