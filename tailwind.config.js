module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "brown": {
          "50": "#FDECEC",
          "100": "#FCD9D9",
          "200": "#F9B4B4",
          "300": "#F58E8E",
          "400": "#F26969",
          "500": "#EF4444",
          "600": "#E11313",
          "700": "#A90F0F",
          "800": "#710A0A",
          "900": "#380505"
        }
      }
    },
  },
  plugins: [],
}
