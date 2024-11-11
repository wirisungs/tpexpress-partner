import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        normalText: "#1C1C1C",
        primaryText300 : "#EB455F",
        navbarText: "#696969",
        navbarActiveBG: "#F9FAFF",
        headBackground: "#FCFCFC",
        subtitleText: "#5B5958",
        yellowText: "#FBA333",
        error: "#F61317",
        success: "#0DA651",
        boxOuline: "#CBCBCB",
        backButton: "#B8DDFF",
        ssoButton: "#1560BD",
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
export default config;
