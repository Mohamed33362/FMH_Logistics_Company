/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        first: {
          100: "#0543be",
          200: "#053188",
          300: "#031e53",
          400: "#03153a",
        },
        second: {
          100: "#5767a3",
          200: "#3e4b79",
          300: "#2a3352",
          400: "#1e243a",
        },
        third: "#f2f2f1",
        fourth: {
          100: "#aad5ff",
          200: "#9dc5ec",
          300: "#90b5da",
          400: "#a1c8ef",
        },
        fifth: {
          100: "#c8d4e9",
          200: "#b1bccf",
          300: "#a6b0c2",
          400: "#8d95a4",
        },
        six: {
          100: "#d75825",
          200: "#ca5223",
          300: "#b8491d",
          400: "#9b3e19",
        },
        seventh: {
          100: "#e09d3a",
          200: "#c58b33",
          300: "#ad792b",
          400: "#966824",
        },
        eighth: "#dcca9d",
        nine: "#c8a192",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
