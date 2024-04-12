/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    keyframes: {
      "swipe-in": {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      "swipe-in": "swipe-in 2s ease-in",
    },
  },
};

export const plugins = [];
