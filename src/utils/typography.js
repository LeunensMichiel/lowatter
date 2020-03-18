import Typography from "typography"
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Asap", "sans-serif"],
  bodyFontFamily: ["Oswald", "sans-serif"],
  headerColor: "#2D302D",
  bodyColor: "#616765",
  googleFonts: [
    {
      name: "Oswald",
      styles: ["400", "600"],
    },
    {
      name: "Asap",
      styles: ["700"],
    },
  ],
})

typography.injectStyles()

export default typography
