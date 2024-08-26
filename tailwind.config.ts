import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        'calc-sidebarfull': 'calc(100% - 200px)',
        'calc-sidebarmin': 'calc(100% - 70px)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
export default config;