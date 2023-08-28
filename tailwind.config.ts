import type { Config } from 'tailwindcss';

const config: Config = {
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
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
