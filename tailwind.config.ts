import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lilac: {
          cream: '#f5f3f0',
          sage: '#6b7e6d',
          dark: '#2d3a2e',
          muted: '#4a5a4c',
          purple: '#9b7a9b',
          light: '#c8a8c8',
          pale: '#d4b8d4',
          powder: '#e6d4e6',
          sky: '#c8d5d8',
          tan: '#a8a294',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
