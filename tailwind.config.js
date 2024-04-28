import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth: {
      container: "1320px"
    },
    fontFamily: {
      'pops': ['Poppins', 'sans-serif'],
    },
    backgroundImage: {
      'ban': "url('/src/assets/banner.png')",
      'our': "url('/src/assets/our.png')",
      'our2': "url('/src/assets/our2.png')",
      'our3': "url('/src/assets/our3.png')",
      'learn': "url('/src/assets/learn.png')",
      'd1': "url('/src/assets/d1.png')",
      'd2': "url('/src/assets/d2.png')",
      'd3': "url('/src/assets/d3.png')",
    }
  },
  plugins: [],
}