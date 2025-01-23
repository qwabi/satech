module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00008B", // Dark blue
        secondary: "#FFD700", // Gold
        white: "#FFFFFF",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        bounce: "bounce 2s infinite",
        fadeIn: "fadeIn 1s ease-out",
        slideIn: "slideIn 0.5s ease-out",
      },
    },
  },
  plugins: [],
}

