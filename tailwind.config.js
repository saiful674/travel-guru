/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  themes: [
    {
      mytheme: {
        primary: "#a991f7",
        secondary: '#F1F1f1',
        accent: "#37cdbe",
        neutral: "#C4C4C4",
        second: "#F9A51A",
      },
    },
    "dark",
    "cupcake",
  ],
  plugins: [require("daisyui")],
}

