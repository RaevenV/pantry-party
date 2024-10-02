/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Add TypeScript and JSX files
  theme: {
    extend: {
      colors: {
        cream: "#FAFAF0", // Comma instead of semicolon, and object format
        darkGreen: "#256B4A",
        mainGreen: "#22A768",
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here if needed, like typography, forms, etc.
  ],
};
