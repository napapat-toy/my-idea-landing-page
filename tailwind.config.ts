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
          "25%": { transform: "rotate(45deg)" },
          "50%": { transform: "scale(3, 3)" },
          "75%": { transform: "rotate(-45deg)" },
        },
      },
      animation: {
        "big-show": "big 3s ease-in-out infinite",
      },
      boxShadow: {
        "full": "15px 15px 0 0 rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
