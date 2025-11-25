/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        alkalami: ["Alkalami", "serif"],
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
    },
  },
  plugins: [],
};
