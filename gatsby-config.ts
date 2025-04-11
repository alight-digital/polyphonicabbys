import type { GatsbyConfig } from "gatsby";

require("dotenv").config();

const config: GatsbyConfig = {
  siteMetadata: {  
    siteUrl: `https://pinkwhale.sk`,  // 🌐 Updated for sitemap generation
    title: `Pinkwhale`,
    description: `Krátka definícia neexistuje/dlhá nikoho nezaujíma. Sme priestor. Pre umenie. Aj pre umenie žiť. Program v roku 2024 podporila Nadácia mesta Bratislava.`,
    image: `src/images/icon.png`,  // Make sure the image is in the static folder
    twitterUsername: `@pinkwhale`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pinkwhale`,
        short_name: `Pinkwhale`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#FFF`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    // 🌐 Sitemap Generation Plugin
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
]
};

export default config;
