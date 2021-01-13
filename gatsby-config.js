require("dotenv").config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: `Helena`,
    description: `Personal site of Helena Thompson`,
    author: `Helena Thompson`,
    url: `https://helenathompson.dev`,
    image: `/images/share.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Helena`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
  resolve: `gatsby-plugin-google-gtag`,
  options: {
    trackingId: process.env.GA_TRACKING_ID,
    ,
  },
},
  ],
}
