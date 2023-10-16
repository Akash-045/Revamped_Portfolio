/** @type {import('tailwindcss').Config} */
import colors, { purple, pink } from "tailwindcss/colors";
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    colors: {
      ...colors,
      primary: purple,
      secondary: pink,
    },
  },
};
export const plugins = [];
