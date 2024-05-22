/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Instrument Sans, Inter", "SF Pro Display"],
      mono: ["Roboto Mono", "SF Mono", "Hack", "monospace"],
    },
  },
  plugins: [],
};
