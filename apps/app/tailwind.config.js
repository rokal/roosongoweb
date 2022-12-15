const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: colors.green,
      secondary: colors.yellow,
      neutral: colors.gray,
      grayLogo: {
        50: "#f1f2f3",
        100: "#d6d7dc",
        200: "#babdc4",
        300: "#9fa2ad",
        400: "#838795",
        500: "#6a6e7c",
        600: "#525560",
        700: "#3b3d45",
        800: "#232529",
        900: "#0c0c0e",
      },
    },
  },
};
