/** @type {import('tailwindcss').Config} */
const { colors } = require('./src/colors.js');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [...Object.keys(colors).map((color) => `bg-${color}`)],
  theme: {
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
      hand: ['Rock Salt', 'cursive'],
      terminal: ['"Press Start 2P"', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent', // Transparent
      white: '#ffffff', // White
      ...colors, // Custom colors
    },
  },
  plugins: [],
};
