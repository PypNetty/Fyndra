// frontend/postcss.config.cjs
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

/** @type {import('postcss').ProcessOptions} */
module.exports = {
  plugins: {
    tailwindcss,
    autoprefixer,
  },
}
