/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        darkGreen: `#3D5224`,
        transGray: `#D0D0D066`,
        lightGray: `#8B8B8B`,
        gray: `#464646`,
        darkGray: `#313131`,
        green: `#7B856F`,
        lightGreen: `#5D773D`,
        beige: `#E2E2CE`,
        lightBeige: `#F6F5EA`,
        lightBlue: `#bad9f1`,
      },
      fontFamily: {
        hortensia: `Hortensia`,
        glock: `Glock Grotesque`,
        canela: `Canela Deck Trial`,
      },
      fontSize: {
        96: [`clamp(32px, 96px, 10vw)`, `clamp(38px, 115px, 10vw)`],
        48: `clamp(24px, 48px, 3vw)`,
        36: `clamp(20px, 36px, 3vw)`,
        32: [`clamp(14px, 32px, 3vw)`, `clamp(16px, 38px, 3vw)`],
        28: `clamp(14px, 28px, 3vw)`,
        24: [`clamp(14px, 24px, 3vw)`, `clamp(20.4px, 34.8px, 6vw)`],
        20: [`clamp(14px, 20px, 3vw)`, `clamp(14.4px, 28.8px, 6vw)`],
        18: [`clamp(12px, 18px, 3vw)`, `clamp(14.4px, 28.8px, 6vw)`],
        16: [`clamp(14px, 16px, 3vw)`, `clamp(14.4px, 28.8px, 6vw)`],
        14: [`clamp(12px, 14px, 3vw)`, `clamp(14.4px, 20.37px, 6vw)`],
        12: [`clamp(10px, 12px, 3vw)`, `clamp(12px, 14.4px, 6vw)`],
      },
    },
  },
  plugins: [],
};
