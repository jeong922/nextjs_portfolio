import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        React: 'rgb(20 158 202)',
        JS: '#f8c832',
        TS: '#3178c6',
        NextJS: 'black',
        darkbg: '#0A102B',
        darkModeText: 'rgb(229, 229, 229)',
      },
      keyframes: {
        blink: {
          '0%, 100%': {
            borderRight: '3px solid rgb(229, 229, 229)',
          },
          '50%': {
            borderRight: '3px solid transparent',
          },
        },
      },
      animation: {
        blink: 'blink 1.2s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
