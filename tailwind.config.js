/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "640px",
        tablet: "768px",
        laptop: "1000px",
        desktop: "1200px",
      },
    },
  },
  plugins: [],
};
