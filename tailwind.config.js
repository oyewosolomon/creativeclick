/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        background: "hls(var(--background))",
        foreground: "hls(var(--foreground))",
        primary: "hls(var(--primary))",
        customPurple: 'rgba(54, 9, 79, 1)',
        customOrange: 'rgba(255, 102, 0, 1)',
      },
    },
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('neon','.neon &')
    })
  ],
};
