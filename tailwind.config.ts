import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        SFBOLD: ["SFBOLD", "sans-serif"],
        SFMEDIUM: ["SFMEDIUM", "sans-serif"],
        SFREGULAR: ["SFREGULAR", "sans-serif"],
        SFROUNDED: ["SFROUNDED", "sans-serif"],
      },
      colors: {
        app: "#131A2A",
        cyan: "#32ADE6",
        gray0: "#131A2A",
        gray1: "#1E2E3E",
        gray2: "#2A3A4D",
        gray3: "#708193",
        gray4: "#8FA1B4",
        mainBlue: "#007AFF",
        mainPurple: "#734FD4",
        mainOrange: "#FF6633",
        mainGreen: "#34C759",
        mainRed: "#D33B1D",
        mainYellow: "#FFC966",
        mint: "#7EB77E",
      },
      fontSize: {
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        22: "22px",
        28: "28px",
        32: "32px",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
