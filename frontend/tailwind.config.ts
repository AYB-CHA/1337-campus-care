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
          DEFAULT: "#8B3DFF",
          50: "#F9F5FF",
          100: "#EDE0FF",
          200: "#D4B7FF",
          300: "#BC8FFF",
          400: "#A366FF",
          500: "#8B3DFF",
          600: "#6905FF",
          700: "#5200CC",
          800: "#3B0094",
          900: "#25005C",
          950: "#1A0040",
        },
      },
      screens: {
        "3xl": "2200px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
