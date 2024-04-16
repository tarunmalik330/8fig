/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "lightgrey": "#76767F",
        "lightblack": "#0E1122",
      },
      fontSize: {
        "2sm": "12px",
        "4sm": "14px",
        "6sm": "16px",
        "8sm": "18px",
        "9sm": "19px",
        "4md": "24.42px",
        "9md": "39.42px",
        "5lg": "45px",
        "xl": "50px"
      },
      lineHeight: {
        "4sm": "24px",
        "6sm": "136%",
        "3lg": "138%",
        "6lg": "116%",
        "5lg": "158%",
        "xl": "166%",
      },
      borderRadius: {
        "4xs": "24px",
        "3sm": "30px",
        "md": "40px",
      },
      backgroundColor: {
        "purple": "#4C57FF",
        "bgblack": "#0E1122",
      },
      letterSpacing: {
        "8spacing": "0.08em"
      }

    },
  },
  plugins: [],
}

