/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: { max: "500px" },
        md: { max: "780px" },
        lg: { max: "1080px" },
        xl: { max: "1440px" },
      },
      backgroundImage: {
        "nav-gradient":
          "linear-gradient(122.719deg, rgba(78, 78, 78, 0.1) 0%, rgba(78, 78, 78, 0.1) 0.01%, rgba(79, 79, 79, 0.1) 32.8125%, rgba(61, 61, 61, 0.1) 100%)",
      },
    },
  },
  plugins: [],
};
