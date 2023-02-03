/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        themeColor: '#faa916',
      },
      boxShadow: {
        custom:
          'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      },
      screens: {
        buttonNav: '1125px',
        // => @media (min-width: 1125px) { ... }
      },
    },
  },
  plugins: [],
};
