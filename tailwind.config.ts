import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00a0e3",
          "primary-content": "#ffffff",
          "secondary": "#EF8018",
          "secondary-content": "#ffffff",
          "neutral": "#F2FBFF", 
          "neutral-content": "#A1A1A1",
          "base-100": "#ffffff", 
          "base-200": "#222222",   
          "base-300": "#81807F",  
          "base-content": "#2D2B29",  
          "accent": "#FEDB00",
          "accent-content": "#FEDB00",
          "info": "#C4EEFD",
          "info-content": "#000000",
          "success": "#AEFF6E",
          "success-content": "#000000",
          "warning": "#FFEE94",
          "warning-content": "#000000",
          "error": "#FF9494",
          "error-content": "#000000",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
export default config;
