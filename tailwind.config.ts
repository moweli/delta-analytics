import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        full: "100%",
      },
      backgroundImage: {
        img: "url('/bgsite.svg')",
      },
      backgroundSize: {
        cover: "cover",
      },
      backgroundRepeat: {
        "no-repeat": "no-repeat",
      },
      colors: {
        primary: "#324C7A",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
