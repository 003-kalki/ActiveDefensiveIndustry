/** @type {import('tailwindcss').Config} */
import svgToDataUri from "mini-svg-data-uri";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        blue900: "#001f3f", // Dark blue for gradients
        green800: "#004d40", // Deep green for gradients
        customText: "#e5e5e5", // Light grey for text
        cardBackground: "#1a202c", // Dark background for card elements
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        // Add a circular dot pattern
        'dot-pattern': `
          radial-gradient(circle, #444444, 1px, transparent 1px)`,
        'hero-gradient': 'linear-gradient(270.3deg, rgba(84, 212, 228, 1) 0.2%, rgba(68, 36, 164, 1) 100%)',
      },
      backgroundSize: {
        'dots-spacing': '20px 20px',
      },
      animation: {
        bgChange: 'bgChange 5s ease-in-out infinite',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    require("tailwindcss-animate"),
  ],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const colorVars = Object.fromEntries(
    Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
  );
  addBase({ ":root": colorVars });
}
