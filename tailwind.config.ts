import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C5DD3",
        primaryLight: "#A29BFE",
        bgLight: "#F8F8FC",
        card: "#FFFFFF",
        textMuted: "#A0A3BD",
      },
      boxShadow: {
        card: "0px 10px 30px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        xl2: "20px",
      },
    },
  },
};

export default config;