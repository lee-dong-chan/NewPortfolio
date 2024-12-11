/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "480px" },
        tablet: { min: "481px", max: "1024px" },
        laptop: { min: "1026px", max: "1480px" },
        desktop: { min: "1480px" },
      },
    },
  },
  plugins: [],
};
