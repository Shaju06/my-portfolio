import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Custom keyframe for a curve animation
        curves: {
          "0%": { borderWidth: "2px" },
          "25%": { borderWidth: "6px" },
          "50%": { borderWidth: "10px" },
          "75%": { borderWidth: "6px" },
          "100%": { borderWidth: "2px" },
        },
      },
      animation: {
        // Animation name and duration
        curve: "curves 4s infinite", // 4-second infinite animation
      },
      container: {
        center: true,
        padding: "2rem", // Adjust this value as needed
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px", // Set the minimum width for lg and above screens
          // xl: '1280px',
        },
      },
      colors: {
        primary: "#22c55e",
        "hover-primary": "#15803d",
        light: {
          background: "#fff",
          Primary: "#16a34a",
          Secondary: "#4f46e5",
          Accent: "#64748b",
          "text-color": "#6366f1",
        },
        dark: {
          background: "#172554",
          Primary: "#16a34a",
          Secondary: "#4f46e5",
          Accent: "#e2e8f0",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: ["class"],
};
export default config;
