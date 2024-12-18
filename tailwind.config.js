/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      perspective: {
        800: "800px",
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
  plugins: [],
};
