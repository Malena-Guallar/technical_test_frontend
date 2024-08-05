import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['var(--font-italiana)', 'serif'],
      },
      fontSize: {
        "13xl" : "13rem",
      },
      colors: {
        "black": "#020202",
        "green": "#e1f672",
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
    },
}
export default config
