/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: "var(--mint)",
        white: "var(--white)",
        black: "var(--black)",
        purple: "var(--purple)",
        "dull-mint": "var(--dull-mint)",
        "dull-white": "var(--dull-white)",
        "light-black": "var(--light-black)",
        "dull-purple": "var(--dull-purple)",
      },
      fontFamily: {
        protest: ["var(--font-protest)", ...fontFamily.sans],
        "neue-roman": ["var(--font-neue-roman)", ...fontFamily.sans],
        "neue-roman-italic": [
          "var(--font-neue-roman-italic)",
          ...fontFamily.sans,
        ],
        "neue-medium": ["var(--font-neue-medium)", ...fontFamily.sans],
        "neue-medium-italic": [
          "var(--font-neue-medium-italic)",
          ...fontFamily.sans,
        ],
        "neue-bold": ["var(--font-neue-bold)", ...fontFamily.sans],
        "neue-bold-italic": [
          "var(--font-neue-bold-italic)",
          ...fontFamily.sans,
        ],
        "neue-black": ["var(--font-neue-black)", ...fontFamily.sans],
        "neue-black-italic": [
          "var(--font-neue-black-italic)",
          ...fontFamily.sans,
        ],
        "neue-light": ["var(--font-neue-light)", ...fontFamily.sans],
        "neue-light-italic": [
          "var(--font-neue-light-italic)",
          ...fontFamily.sans,
        ],
        "neue-thin": ["var(--font-neue-thin)", ...fontFamily.sans],
        "neue-thin-italic": [
          "var(--font-neue-thin-italic)",
          ...fontFamily.sans,
        ],
        "neue-extra-thin": ["var(--font-neue-extra-thin)", ...fontFamily.sans],
        "neue-extra-thin-italic": [
          "var(--font-neue-extra-thin-italic)",
          ...fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
