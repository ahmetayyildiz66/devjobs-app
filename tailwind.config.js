// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          '350': "#C5C9F4",
          '550': '#5964E0',
          '650': "#939BF4"
        },
        gray: {
          '250': '#EEF0FC',
          '550': '#696E76'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}