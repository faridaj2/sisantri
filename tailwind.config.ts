// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    container: {
      center: true,
    },

    extend: {
        boxShadow: {
          'my': 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'  
        },
    },
  },
  variants: {},
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#006834",

          "secondary": "#c49aea",

          "accent": "#b9d7f7",

          "neutral": "#1d1924",

          "base-100": "#f5f6f9",

          "info": "#90d4f9",

          "success": "#1a7f62",

          "warning": "#eba028",

          "error": "#f1375f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}