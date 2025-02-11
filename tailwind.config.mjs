/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        activityBorder: "#F2542D80",
        activityText: "#562C2C",
        activityHoverBg: "#FFEDE8",
        exploreBg: "#F2542D",
        exploreHoverBg: "#CA3E1B",
        headerBg: "#562C2CB2",
        productText: "#562C2CCC",
        calendarBorder: "#562C2C4D",
        mapBg: "#FFF6F4",
        calendarBg: "#FFF4F1",
      },
      maxWidth: {
        "screen-xl": "1240px",
      },
      screens: {
        "custom-md": "834px",
      },
    },
  },
  plugins: [],
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/*": ["./app/*"],
      "@public/*": ["./public/*"],
      "@videos/*": ["./public/videos/*"],
    },
  },
};
