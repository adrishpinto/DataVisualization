const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        hairline: 100,
        "extra-light": 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        "extra-bold": 800,
        black: 900,
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        "noto-jp": ["Noto Sans JP", "sans-serif"],
      },
      colors: {
        slate: colors.slate,
      },
    },
  },
  plugins: [],
});
