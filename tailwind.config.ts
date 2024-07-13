import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        big: {
          "0% ,100%": { transform: "scale(3, 3)" },
          "20%": { transform: "rotate(45deg)" },
          "40%": { transform: "scale(3, 3)" },
          "60%": { transform: "rotate(-45deg)" },
          "80%": { transform: "scale(3, 3)" },
        },
      },
      animation: {
        "big-show": "big 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
