import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'field': "url('https://images.pexels.com/photos/13672305/pexels-photo-13672305.jpeg')",
        'night': "url('https://images.pexels.com/photos/2434627/pexels-photo-2434627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      },
      fontFamily: {
        italiana: ['var(--font-italiana)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
