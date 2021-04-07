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
        'dark-grey': '#9F9FB7',
        'opacity-elements': 'rgba(255, 255, 255, 0.02)',
        'primary-gradient-1': '#35346C',
        'primary-gradient-2': '#2C2B5A',
        'button-gradient-1': '#4A57FC',
        'button-gradient-2': '#1D2DFB',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
      radialGradientColors: (theme) => theme('colors'),
      conicGradientColors: (theme) => theme('colors'),
      linearGradientColors: {
        'button1-button2': ['#4A57FC', '#1D2DFB'],
        'btnwhite1-btnwhite2': ['#fff', '#fff'],
      },
      fontSize: {
        '24xl': '1.5rem', // H3
        '40xl': '2.5rem', // H2
        '56xl': '3.5rem', // H1
      },
      letterSpacing: {
        widestPilltable: '.45em',
      },
    },
  },
  variants: {
    extend: {
      scale: ['responsive', 'hover', 'active', 'focus'],
    },
  },
  plugins: [require('tailwindcss-gradients')],
}
