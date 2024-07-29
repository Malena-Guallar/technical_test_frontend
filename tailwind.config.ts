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
        "cinema": "url('https://c8.alamy.com/compfr/cr90ap/theatre-d-epoque-avec-des-neons-a-sacramento-californie-cr90ap.jpg')"
      },
    },
  },
  plugins: [],
};
export default config;
