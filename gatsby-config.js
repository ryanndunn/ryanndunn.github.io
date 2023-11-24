/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Ryan Dunn's Portfolio Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `work`,
        path: `${__dirname}/work`,
      }
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Bebas Neue`,
            file: `https://fonts.googleapis.com/css2?family=Bebas+Neue`,
          },
          {
            name: `Raleway`,
            file: `https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;1,400;1,600&display=swap`,
          },
        ],
      },
    },
  ],
}
