module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_7f: "#ffffff7f", A700: "#ffffff" },
        blue_gray: { 100: "#d9d9d9", 400: "#8a8a8a", "400_01": "#888888" },
        amber: { 400: "#fbca1a" },
        deep_purple: {
          50: "#eee5ff",
          A100_02: "#b795ff",
          A100_01: "#b795ff01",
          A100: "#b694ff",
          A200: "#8753f3",
          A200_01: "#9747ff",
        },
        gray: { 200: "#ececec" },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_1e": "#0000001e",
          "900_99": "#00000099",
          "900_33": "#00000033",
          "900_00": "#00000000",
          "900_72": "#00000072",
          "900_36": "#00000036",
        },
        red: { A700: "#ea0000" },
      },
      fontFamily: { questrial: "Questrial" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#0000001e,#0000001e,#0000001e)",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
