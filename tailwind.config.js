module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#26254F',
        'background': '#1D1A3B',
        'highlight': '#4A57FC',
        'light-grey': '#D6D6E0',
        'opacity-elements': 'rgba(255, 255, 255, 0.02)',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
      fontSize: {
        '24xl': '1.5rem', // H3
        '40xl': '2.5rem', // H2
        '56xl': '3.5rem', // H1
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
