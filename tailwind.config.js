/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#0070f3",
        "dark": "#000",
        "light": "#fff",
        "red": "#f00",
        "green": "#16a085",
        "gray": "#333",
        "white": "#fff",
        "black": "#000",
        "yellow": "#f1c40f",
        "orange": "#f39c12",
      },
    },
  },
  plugins: [],
};
