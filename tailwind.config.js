/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      custom: "0 0 15px 1px rgba(166,163,223,0.5)",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
