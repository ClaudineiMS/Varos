/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
  "./src/app/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      dark: "#0e0f10",
      lightDark: "#1b1c1e",
      accent: "#00ff87",
    },
  },
};
export const plugins = [];
