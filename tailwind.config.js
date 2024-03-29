/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        green: "#707E60",
        lightgreen: "#89DC88",
        red: "#C86A72",
        purple: "#907ad6",
        cream: "#FFE9DA",
        bgdark: "#272833",
        darkblue: "#1E1E1E",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
