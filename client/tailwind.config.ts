import { blue } from "@mui/material/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages//*.{ts,tsx}",
    "./components//*.{ts,tsx}",
    "./app//*.{ts,tsx}",
    "./src//*.{ts,tsx}",
    "./src//*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: {
        1000: "#05477b",
        800: "#0664ac",
        600: "#0881dd",
        400: "#229af7",
        200: "#53b1f9",
        0: "#84c7fa",
      },
      gray: {
        1000: "#404040",
        800: "#595959",
        600: "#737373",
        400: "#8c8c8c",
        200: "#a6a6a6",
        0: "#bfbfbf",
      },
      white: {
        0: "#FFFFFF",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-animate")],
};
