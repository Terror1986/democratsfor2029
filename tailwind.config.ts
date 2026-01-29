import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1E3A5F",
          dark: "#152B47",
          light: "#2A4A70",
        },
        patriot: {
          red: "#C1272D",
          "red-dark": "#9A1F24",
          cream: "#F5F5DC",
          "cream-light": "#FAFAF5",
        },
      },
      fontFamily: {
        // Don’t rely on missing CSS vars until we wire next/font correctly
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Merriweather", "serif"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
