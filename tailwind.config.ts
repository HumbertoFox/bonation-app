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
      },
      keyframes: {
        alertmsg: {
          '0%': { opacity: '0', transform: 'translate3d(0, -100%, 0)' },
          '100%': { opacity: '1' }
        }
      },
      colors: {
        'alert-blue': 'hsla(205.46, 86.5%, 46.47%, .7)'
      },
      boxShadow: {
        '3xm': '0 35px 60px -15px hsla(120, 73.44%, 74.9%, .5)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
export default config;