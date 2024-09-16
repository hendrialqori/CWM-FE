import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}"
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
        mulish: ["var(--font-mulish)"]
      },
      spacing: {
        space_between_section: "var(--space-between-section)"
      },
    },
  },
  plugins: [],
};
export default config;
