import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1b3764",
          light: "#2a4a7f",
          dark: "#122647",
        },
        orange: {
          DEFAULT: "#f39200",
          light: "#ffab2e",
          dark: "#c97600",
        },
        cream: {
          DEFAULT: "#faf7f2",
          dark: "#f0ebe1",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(27, 55, 100, 0.18)",
        card: "0 4px 24px -6px rgba(27, 55, 100, 0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
