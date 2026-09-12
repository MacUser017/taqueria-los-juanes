import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        masa: "#0d0d0d",
        chile: "#c89b3c",
        chileDark: "#9b7429",
        lime: "#55451f",
        cocoa: "#f2e4c2",
        marigold: "#dfb552",
      },
      fontFamily: {
        display: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
