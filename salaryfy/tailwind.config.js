/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen:"#005F59",
        yellow: "#FECD08",
        secondaryYellow2: "FFCD05",
        white: "#FFFFFF",
        lightBlue: " #E9FEFF",
        grey: "#5B5B5B",
        black: "#000000",
       darkgrey:" #B3B3B3",
       red:"#660000",
       gradientblue:" #0E5F59",
       darkgrey:"#D9D9D9"
      },
      fontFamily: {
       "Lexend": ["Lexend,", "sans-serif"],
       "Inter": ["Inter,", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
        
    },
    
  },
  plugins: [],
}

}