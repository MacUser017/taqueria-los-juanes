import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        masa: "#fdf6e9",
        chile: "#c1272d",
        chileDark: "#8f1c21",
        lime: "#6b8e23",
        cocoa: "#3b2314",
        marigold: "#f4a300",
      },
      fontFamily: {
        display: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
