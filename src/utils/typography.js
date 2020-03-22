import Typography from "typography"
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Open Sans", "sans-serif"],
  bodyFontFamily: ["Oswald", "sans-serif"],
  headerColor: "#2D302D",
  bodyColor: "#616765",
  omitGoogleFont: true,
})

typography.injectStyles()

export default typography
