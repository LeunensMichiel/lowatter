import Typography from "typography"
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  headerFontFamily: [
    "Open Sans",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Ubuntu",
    "Cantarell",
    "Helvetica Neue",
    "sans-serif",
  ],
  bodyFontFamily: [
    "Oswald",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Ubuntu",
    "Cantarell",
    "Helvetica Neue",
    "sans-serif",
  ],
  headerColor: "#2D302D",
  bodyColor: "#616765",
  bodyWeight: "400",
  omitGoogleFont: true,
})

typography.injectStyles()

export default typography
