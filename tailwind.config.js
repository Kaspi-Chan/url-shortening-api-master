/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-cyan": "hsl(180, 66%, 49%)",
        "primary-cyan-light": "hsl(181 55% 74%)",
        "primary-violet": "hsl(257, 27%, 26%)",
        "secondary-red": "hsl(0, 87%, 67%)",
        "neutral-gray": "hsl(0, 0%, 75%)",
        "neutral-grayish-violet": "hsl(257, 7%, 63%)",
        "neutral-dark-blue": "hsl(255, 11%, 22%)",
        "neutral-dark-violet": "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        base: "1.125rem",
      },
      fontWeight: {
        normal: "500",
      },
      backgroundImage: {
        'shorten-mobile': "url('./src/assets/images/bg-shorten-mobile.svg')",
        'shorten-desktop': "url('./src/assets/images/bg-shorten-desktop.svg')",
      }
    },
  },
  plugins: [],
};

