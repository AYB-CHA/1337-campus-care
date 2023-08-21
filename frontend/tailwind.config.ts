/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0500FF",
          50: "#B9B8FF",
          100: "#A5A3FF",
          200: "#7D7AFF",
          300: "#5552FF",
          400: "#2D29FF",
          500: "#0500FF",
          600: "#0400C7",
          700: "#03008F",
          800: "#020057",
          900: "#01001F",
          950: "#000003",
        },
      },
    },
  },
  plugins: [],
};
