const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100px)' },
          '50%': { transform: 'translateX(120px)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        'slide-in': 'slide 450ms ease-in-out 1',
      }
    },
  },
  // corePlugins: {
  //   fontSize: false,
  // },
  plugins: [require("tailwindcss-fluid-type")],
};
