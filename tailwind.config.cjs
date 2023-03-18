/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        black: "#13121F",
        secondary: "#54565B",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        lgMax: {
          max: "1023px",
        },
        mdMax: {
          max: "767px",
        },
      },
    },
  },
  plugins: [],
};
