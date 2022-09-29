/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const turquoise = {
  DEFAULT: "#49EABC",
  50: "#D9FBDB",
  100: "#C9F9D0",
  200: "#A9F5BF",
  300: "#89F1B6",
  400: "#69EDB5",
  500: "#49EABC",
  600: "#1ADCC1",
  700: "#13A5A5",
  800: "#0D606E",
  900: "#072938",
};

const cinnabar = {
  DEFAULT: "#EA4949",
  50: "#FBEFD9",
  100: "#F9E5C9",
  200: "#F5CBA9",
  300: "#F1A889",
  400: "#ED7D69",
  500: "#EA4949",
  600: "#DC1A36",
  700: "#A5133E",
  800: "#6E0D38",
  900: "#380723",
};

const niagara = {
  DEFAULT: "#0DBCAD",
  50: "#9FF8DD",
  100: "#8AF7D8",
  200: "#5FF4D1",
  300: "#34F1CE",
  400: "#10E7CA",
  500: "#0DBCAD",
  600: "#0A9691",
  700: "#086E70",
  800: "#054549",
  900: "#022023",
};

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        spacing: "margin, padding",
      },
      screens: {
        print: { raw: "print" },
      },
      fontFamily: {
        sans: "Comfortaa, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        cursive:
          "Pacifico, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.stone,
        blue: colors.sky,
        green: colors.emerald,
        accent: cinnabar,
        primary: niagara,
        red: colors.red,
        yellow: colors.amber,
        orange: colors.orange,
      },
    },
    variants: {
      extend: {
        scale: ["active", "group-hover"],
        translate: ["group-hover"],
        borderRadius: ["first", "last"],
        padding: ["hover"],
      },
    },
  },
};
