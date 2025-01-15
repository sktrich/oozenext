import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "h-blue-p": "rgb(40, 23, 83)",
        "font-body": "rgb(15, 15, 16)",
        "h-red-s": "rgb(191, 28, 28, 75%)",
        "border-style": "rgb(204, 110, 110, 75%)",

        "h-link-t": "rgb(240, 248, 255)",
        "h-link-h": "rgb(100, 159, 210)",
        "h-black-u": "rgb(16, 15, 15, 0.953)",

        "h-page-o": "rgb(211, 85, 148)",
        "h-opage-h": "rgb(240, 248, 255)",
        "cor-be": "rgb(183, 22, 36)",
        "cor-ve": "rgb(255, 255, 255)",
      },

      boxShadow: {
        "black-u": "0px 9px 10px var(--bg-h-black-u)",
      },

      transitionDuration: {
        "dur-s": "0.7s",
      },
    },
  },
  plugins: [],
};
export default config;
