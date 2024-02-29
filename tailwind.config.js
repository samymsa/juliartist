/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif", "ui-sans-serif", "system-ui"],
        logo: ["New Walt Disney Font", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
