import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#141D2B",
          border: "#0B1321",
          logo: "#A46428",
          logoText: "#E16666",
          navText: "#C2C2C2",
          accent: "#D19016",
          dark: "#0F1626",
        },
      },
      fontFamily: {
        hardpixel: ["Hardpixel", "JetBrains Mono", "monospace"],
        circular: ["Circular Std", "Inter", "sans-serif"],
      },
      spacing: {
        "2": "4px",
        "4": "12px",
        "5": "16px",
        "8": "32px",
      },
      borderRadius: {
        "3": "8px",
      },
    },
  },
  plugins: [],
} satisfies Config;
