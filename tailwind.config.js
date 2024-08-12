/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6744FF',
        primaryDark: '#4D25E5', // 10% darker than primary
      },
    },
  },
  plugins: [],
};
