import tailwindClipPath from "tailwind-clip-path";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        gTitle: "FingerPaint",
        gPage: "Roboto",
      },
      height: {
        screen: "100dvh",
      },
      colors: {
        gPurple: {
          DEFAULT: "#612f9d",
          light: "#c08ec1",
          dark: "#400D72",
        },
        gBlue: {
          DEFAULT: "#78b8f1",
        },
        gGray: {
          DEFAULT: "#666666",
          light: "#dedede",
          dark: "#1b1c1d",
        },
      },
      boxShadow: {
        gShadow: "#1b1c1d 0 0 5px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [tailwindClipPath],
};
