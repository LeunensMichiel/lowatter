export const onClientEntry = async () => {
  if (typeof IntersectionObserver === "undefined") {
    await import("intersection-observer")
    console.log("IntersectionObserver polyfilled! 🖐")
  }
}

export const onInitialClientRender = async () => {
  await import("typeface-open-sans")
  await import("typeface-oswald")
}
