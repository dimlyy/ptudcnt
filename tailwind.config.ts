import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        shine: {
          "0%": { left: "-75%" },
          "100%": { left: "125%" },
        },
      },
      animation: {
        shine: "shine 0.75s linear",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

} satisfies Config;
