/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-1": "#ff0000",
        primary2: "#ffc49a",
        primary3: "#2b2b2b",
        primary4: "#979797",
        primary5: "#f8f8f8",
        primary6: "#ffffff",
        base: "#333333",
      },
      fontFamily: {
        header: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
