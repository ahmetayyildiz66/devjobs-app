// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: '327px',
        md: '690px',
        lg: '1110px'
      }
    },
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1440px'
    },
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