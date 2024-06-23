/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-grey": "#5A698F",
        "dark-grey": "#485472",
        "pretty-purple": "#a997f0",
        "pretty-green": "#7acabf",
        "semi-dark-green": "#3e8088",
        "dark-green": "#435f69",
      },
      fontFamily: {
        jetbrains: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
