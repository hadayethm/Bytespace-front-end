import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: "#0038E0", lime: "#D6FF1F", ink: "#1F1F1F" },
      fontFamily: { sans: ["var(--font-poppins)", "system-ui", "sans-serif"] },
      maxWidth: { page: "1200px" },
    },
  },
  plugins: [],
};
export default config;
