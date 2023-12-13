import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "app-bg": "#282c33",
      },
      borderWidth: {
        1: "1px",
      },
      margin: {
        "1px": "1px",
      },
      fontSize: {
        xsm: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
