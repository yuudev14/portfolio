/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "450px",
        mdlg: "1170px",
      },
      colors: {
        primary: "#12ffb0",
        primary_dark: "#15513d",
        bluish: "#1b2a42",
        text_light_bluish: "#7298c6",
        text_light_neon: "#dcfef3",
      },
    },
  },
  plugins: [],
};
