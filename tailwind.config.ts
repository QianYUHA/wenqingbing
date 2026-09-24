import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F0E8",
        "paper-light": "#FAF8F3",
        ink: "#24221F",
        muted: "#777169",
        line: "#D8D1C5",
        accent: "#8A4B3A",
      },
    },
  },
  plugins: [],
};

export default config;
