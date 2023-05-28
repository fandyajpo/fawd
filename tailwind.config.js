/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        gray50: "#F9F9F9",
        gray100: "#F1F1F1",
        gray200: "#E8E8E8",
        gray300: "#D8D8D8",
        gray400: "#B4B4B4",
        gray500: "#949494",
        gray600: "#6C6C6C",
        gray700: "#585858",
        gray800: "#1A1A1A",
        // RED
        red50: "#FFE9EE",
        red100: "#FFC9D2",
        red200: "#F99298",
        red400: "#FF334B",
        red500: "#FF002D",
        red600: "#F6002E",
        red700: "#E40028",
        red800: "#D80020",
        red900: "#C80013",
        // ORANGE
        orange50: "#FFF8E1",
        orange100: "#FFEBB2",
        orange200: "#FFDE81",
        orange300: "#FFD24E",
        orange400: "#FFC726",
        orange500: "#FEBE03",
        orange600: "#FEB000",
        orange700: "#FE9D00",
        orange800: "#FE8C01",
        orange900: "#D68E03",
        // BLUE
        blue50: "#E4F2FF",
        blue100: "#BEDFFF",
        blue200: "#95CCFF",
        blue300: "#6BB7FF",
        blue400: "#4EA8FF",
        blue500: "#3B99FD",
        blue600: "#398AEE",
        blue700: "#3578DB",
        blue800: "#3266C8",
        blue900: "#2C48A8",
        // THEME
        darkred: "#A01C20",
      },
    },
  },
  plugins: [],
};
