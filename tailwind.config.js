/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "grey": "#76767F",
        "lightblack": "#0E1122",
        "purple": "#4C57FF"
      },
      fontSize: {
        "textxs": "19px",
        "textsm": "24.42px",
        "textmd": "35px",
        "textlg": "39.42px",
        "textxl": "45px",
        "textxxl": "50px"
      },
      lineHeight: {
        "leadingxs": "24px",
        "leadingsm": "136%",
        "leadingmd": "138%",
        "leadinglg": "116%",
        "leadingxl": "158%",
        "leadingxxl": "150%",
      },
      borderRadius: {
        "radiusxs": "24px",
        "radiussm": "30px",
        "md": "40px",
      },
      backgroundColor: {
        "bggrey": "#EFECE6",
        "purple": "#4C57FF",
        "bgblack": "#0E1122",
      },
      letterSpacing: {
        "spacing": "0.08em"
      }

    },
  },
  plugins: [],
}

