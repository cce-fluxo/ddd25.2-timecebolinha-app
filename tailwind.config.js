/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        lato: ['Lato'], // nossa fonte padrão do projeto
        'lato-bold': ['Lato-Bold'], 
        'lato-italic': ['Lato-Italic'],
        'lato-thin': ['Lato-Thin'],
        'lato-regular': ['Lato-Regular'],
      },
    },
  },
  plugins: [],
}

