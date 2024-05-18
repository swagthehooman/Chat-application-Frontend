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
      },
      backgroundColor:{
        "primary-dark-blue":"#03001C",
        "primary-purple": "#85586F",
        "primary-pink" : "#BB4C85",
        "primary-dark-purple": "#571738",
        "neutral-dark-blue" : "#01000D",
        "neutral-gray-white": "#D9D9D9",
      },
      colors:{
        "primary-black":"#000000",
        "primary-white": "#FFFFFF"
      },
      blur:{
        "thirteen-percent": "13%",
        "forty-percent": "40%",
        "seventyfive-percent": "75%"
      }
    },
  },
  plugins: [],
};
export default config;
