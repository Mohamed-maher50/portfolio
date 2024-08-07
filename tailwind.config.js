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
          sub: "#2F4858",
          "secondary-content":"#2F4858",
        },
        dark: {
          primary: "#34353A",
          secondary: "#3D3E42",
          "secondary-content":"#f7f7f7b0",
          accent: "#FFC86B",
          //#D5CEA3
          sub: "#E5E5CB",
        },
        natural: {
          primary: "#154128",
          secondary: "#246C44",
          accent: "#F3DB61", //61876E
          sub: "#61876E",
          "secondary-content":"#fff",
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
        fadeIn:{
          "0%":{opacity:0},
          "100%":{
            opacity:1
          }
          
        },
        fadeOut:{
          "0%":{opacity:1},
          "100%":{
            opacity:0
          }
        }
      },
      animation: {
        runRight: "runRight 0.8s ease-in infinite alternate both",
        fadeIn:"fadeIn 0.3s ease-in",
        fadeOut:"fadeOut 0.3s 1s ease-in"
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
