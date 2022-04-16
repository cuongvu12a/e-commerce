module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2px': '1600px',
    },
    colors: {
      gray: {
        50: '#FFFFFF',
        100: '#F8F8F8',
        200: '#E9EAEC',
        300: '#B9B9C3',
        600: '#D8D6DE',
        700: '#6E6B7B;',
        800: '#5E5873',
      },
      neutral: {
        50: '#283046',
        100: '#161D31',
        200: '#3B4253',
        300: '#B9B9C3', //temp
        600: '#404656',
        700: '#B4B7BD',
        800: '#D0D2D6',
      },
      violet: {
        600: '#7367F0',
      },
      orange: {
        600: '#FF9F43',
      },
      red: {
        600: '#EA5455',
      },
      white: '#FFFFFF',
    },
    'flex-2': {
      flex: '2 2 0%',
    },
  },
  plugins: [],
};
