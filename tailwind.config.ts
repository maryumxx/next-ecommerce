import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "8px",
        xs: "10px",
        sm: "12px",
        base: "14px",
        lg: "18px",
        xl: "20px"
       
      },

      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
      },
      
    },
  },
  plugins: [],
};

export default config;
