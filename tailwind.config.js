/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",

      }
    },
    extend: {
      fontFamily: {
        'Inter': ['Inter, sans-serif:']
      },
      spacing:{
        '128':"24rem"
      }
    },
  },
  plugins: [],
}