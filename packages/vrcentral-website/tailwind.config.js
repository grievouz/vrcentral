/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: {
          DEFAULT: "#67E4E5",
          50: "#FFFFFF",
          100: "#F2FDFD",
          200: "#D0F7F7",
          300: "#ADF0F1",
          400: "#8AEAEB",
          500: "#67E4E5",
          600: "#37DBDD",
          700: "#20BABC",
          800: "#188B8C",
          900: "#105B5C",
          950: "#0C4344",
        },
      },
      gridTemplateColumns: {
        layout: "360px 1fr auto",
      },
    },
  },
  plugins: [],
};
