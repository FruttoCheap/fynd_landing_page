/** @type {import('tailwindcss').Config} */

import tailwindcssMotion from "tailwindcss-motion";

const config = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindcssMotion],
};

export default config;
