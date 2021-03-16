require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Sean Cameron Cooley | Design, Motion, & Interactive`,
    description: `A multi-disciplinary designer with 10 years of experience weaving pixels, coffee, code, and insights into meanigful design solutions.`,
    siteUrl: 'https://www.seancameroncooley.com',
    author: `@co0l3y`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `case-studies`,
        path: `${__dirname}/src/content/case-studies`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sean-Cameron-Cooley`,
        short_name: `Sean-Cooley`,
        start_url: `/`,
        background_color: `#061423`,
        theme_color: `#061423`,
        display: `minimal-ui`,
        icon: `src/images/icon-1024.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
