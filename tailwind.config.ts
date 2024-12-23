import type { Config } from "tailwindcss";

const config: Config = {
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
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #7A87FB, #FFD49C)',
        'gradient-four': 'linear-gradient(to left, #96c93d, #00b09b)',
        // Add more gradients as needed
      },
      rotate: {
        '85': '85deg',
        '90': '90deg',
      }
    },
  },
  plugins: [],
};
export default config;
