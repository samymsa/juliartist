/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["New Walt Disney Font", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}

