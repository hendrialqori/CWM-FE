import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        cwm_orange: "var(--cwm-orange)",
        cwm_blue: "var(--cwm-blue)",
        cwm_yellow: "var(--cwm-yellow)",
        cwm_green: "var(--cwm-green)"
      },
      fontFamily: {
        fredoka: ["var(--font-fredoka)"],
        mulish: ["var(--font-mulish)"],
        inter: ["var(--font-inter)"]
      },
      spacing: {
        space_between_section: "var(--space-between-section)",
        space_between_section_md: "var(--space-between-section_md)",
        space_between_section_sm: "var(--space-between-section_sm)"
      },
    },
  },
  plugins: [],
  darkMode: "class"
};
export default config;
