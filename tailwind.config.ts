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
      transitionProperty: {
        height: "height",
      },
      keyframes: {
        "slide-down": {
          from: { height: "0" },
          to: { height: "100vh" },
        },
        "slide-up": {
          from: { height: "100vh" },
          to: { height: "0" },
        },
      },
      animation: {
        downMenu: "slide-down 300ms ease-out",
        upMenu: "slide-up 300ms ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
