// frontend/postcss.config.js
import tailwindcssPostcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

/** @type {import('postcss').ProcessOptions} */
export default {
  plugins: [tailwindcssPostcss(), autoprefixer()],
};
