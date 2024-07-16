// Import type definition for Config from Tailwind CSS
import type { Config } from "tailwindcss";

// Define your Tailwind CSS configuration
const config: Config = {
  // Specify content paths for Tailwind to scan for classes
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Extend Tailwind CSS theme
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // Specify Tailwind CSS plugins (empty in this case)
  plugins: [],
  // Add the dark mode configuration
  darkMode: "class", // Enables dark mode based on the class applied to <html>
};

// Export the Tailwind CSS configuration
export default config;
