/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FCFCD4",//FCFCD4
          secondary: "#ffffff",//FCFCD4
          accent: "#00524C",
          sub: "#e1aa74",
        },
        dark: {
          primary: "#34353A",
          secondary: "#3D3E42",
          "secondary-content":"#ffffff",
          accent: "#FFC86B",
          //#D5CEA3
          sub: "#E5E5CB",
        },
        natural: {
          primary: "#BFD2B6",
          secondary: "#FAFAFA",
          accent: "#1C723D", //61876E
          sub: "#61876E",
          "secondary-content":"#1D3911",
        },
        CoolTonesPalette: {
          primary: "#F1F6F9",
          secondary: "#fff",
          accent: "#344B47", //BBC0C2
         
          "secondary-content":"#000",
        },
      },
    ],
  },
  theme: {
    extend: {
      keyframes: {
        runRight: {
          "0%": { transform: " translateX(-10%)" },
          "100%": { transform: " translateX(30%)" },
        },
      },
      animation: {
        runRight: "runRight 0.8s ease-in infinite alternate both",
      },
      fontFamily: {
        Rubik: ["Rubik"],
        NotoKufi: ["Noto Kufi Arabic", "Karla"],
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: ".1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "5rem",
      },
    },
  },

  plugins: [require("daisyui")],
};
