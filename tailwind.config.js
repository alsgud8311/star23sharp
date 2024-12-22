/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dotted: ["DungGeunMo", "sans-serif"],
      },
      perspective: {
        800: "800px",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
      rotate: {
        "x-0": "rotateX(0deg)",
        "x-90": "rotateX(90deg)",
        "x-180": "rotateX(180deg)",
      },
      translate: {
        "y-full": "translateY(100%)",
        "y-0": "translateY(0)",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".slideUp": {
          transform: "translateY(2.5rem)", // 올바른 구문: 문자열로 작성
          animation: "slide-up 1s ease-in-out", // 올바른 구문: 문자열로 작성
          opacity: "0",
        },
      });
    },
  ],
};
