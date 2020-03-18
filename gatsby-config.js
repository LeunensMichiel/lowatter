module.exports = {
  siteMetadata: {
    title: `LoWatter`,
    description: `Controlling legionella in tapwater.`,
    author: `@michielleunens`,
    siteUrl: `https://www.lowatter.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/uploads`,
        name: "uploads",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: `markdown`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1440,
              quality: 85,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/utils/locales/`,
        languages: [`en`, `nl`],
        defaultLanguage: `nl`,
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LoWatter`,
        short_name: `LoWatter`,
        description: `Bestrijding van legionella in kraantjeswater.`,
        start_url: `/nl/`,
        lang: `nl`,
        background_color: `#4DD996`,
        theme_color: `#4DD996`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `LoWatter`,
            short_name: `LoWatter`,
            description: `Controlling legionella in tapwater.`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cache`,
  ],
}
