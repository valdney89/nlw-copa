/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      }
    },

    colors: {
      'white': '#ffffff',
      'primary': {
        500: '#F7DD43',
        700: '#B2A139',
      },
      'secondary': {
        100: '#121214',
        200: '#129E57',
        300: '#047C3F',
      },
      'neutral': {
        100: '#E1E1E6',
        200: '#C4C4CC',
        300: '#8D8D99',
        600: '#323238',
        700: '#29292E',
        800: '#202024',
        900: '#121214',
        950: '#09090A',
      },
    }
  },
  plugins: [],
}