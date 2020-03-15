const screens = {
  mobileS: `(max-width: 374px)`,
  mobileSLandscape: `(max-width: 750px) and (max-height: 500px) and (orientation: landscape)`,

  mobileM: `(max-width: 767px)`,
  mobileMLandscape: `(max-width: 890px) and (max-height: 500px) and (orientation: landscape)`,

  tablet: `(max-width: 1024px)`,
  tabletland: `(max-width: 1024px) and (orientation: landscape)`,
  tabletPortrait: `(max-width: 1024px) and (orientation: portrait)`,

  ipadProPortrait: `(min-width: 1024px) 
     and (max-height: 1366px) 
     and (orientation: portrait) 
     and (-webkit-min-device-pixel-ratio: 1.5)`,

  laptop: `(max-width: 1440px)`,

  desktop: `(min-width: 1680px)`,
}

export default screens
