/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(0.7)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fade: "fade 600ms ease-in-out",
      },
    },
  },
  plugins: [],
};
