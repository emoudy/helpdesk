/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        neutral: '#D0D0D0', // light grey
        primary: '#6744FF', // purple
        secondary: '#CC9A33', // soft gold
        primaryDark: '#4D25E5', // 10% darker than primary
      },
      fontSize: {
        'button-sm': ['12px', '16px'], // small button text size with line-height
        'button-md': ['14px', '20px'], // medium button text size with line-height
        'button-lg': ['16px', '24px'], // large button text size with line-height
      },
    },
  },
  plugins: [],
};
