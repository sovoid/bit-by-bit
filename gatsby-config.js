module.exports = {
  siteMetadata: {
    title: `Bit by Bit`,
    author: `Soham Parekh`,
    description: `Blog focussing on Data Structures & Algorithms`,
    siteUrl: `https://bit-by-bit.netlify.app`,
    social: {
      twitter: `und3fined-v01d`,
    },
    categories: [
      {
        name: "Facebook",
        slug: "facebook",
        color: "#0c9ee4",
      },
      {
        name: "Amazon",
        slug: "amazon",
        color: "#f7615f",
      },
      {
        name: "Adobe",
        slug: "adobe",
        color: "#ffa22b",
      },
      {
        name: "Microsoft",
        slug: "microsoft",
        color: "#ffa22b",
      },
      {
        name: "Google",
        slug: "google",
        color: "#ffaddb",
      },
      {
        name: "Array",
        slug: "array",
        color: "#ed716a",
      },
      {
        name: "Backtracking",
        slug: "backtracking",
        color: "#f4cab0",
      },
      {
        name: "Bits",
        slug: "bits",
        color: "#3d3d3d",
      },
      {
        name: "D&C",
        slug: "divide-and-conquer",
        color: "#bebbf9",
      },
      {
        name: "DP",
        slug: "dynamic-programming",
        color: "#537dd1",
      },
      {
        name: "Graph",
        slug: "graph",
        color: "#8e1601",
      },
      {
        name: "Heap",
        slug: "heap",
        color: "#b8e07d",
      },
      {
        name: "Linked List",
        slug: "linked-list",
        color: "#f79d6c",
      },
      {
        name: "Queue",
        slug: "queue",
        color: "#45e8dd",
      },
      {
        name: "Stack",
        slug: "stack",
        color: "#e502bf",
      },
      {
        name: "String",
        slug: "string",
        color: "#ffd8c4",
      },
      {
        name: "Tree",
        slug: "tree",
        color: "#8110ea",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 650,
              height: 365,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                simple: {
                  classes: "simple",
                  title: "optional",
                },
                info: {
                  classes: "info",
                  title: "optional",
                },
                alert: {
                  classes: "alert",
                  title: "optional",
                },
                notice: {
                  classes: "notice",
                  title: "optional",
                },
                imageSmall: {
                  classes: "image-small",
                },
                imageMedium: {
                  classes: "image-medium",
                },
              },
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bit by Bit`,
        short_name: `Bit by Bit`,
        start_url: `/`,
        background_color: `rgb(33, 36, 45)`,
        theme_color: `#0c9ee4`,
        display: `minimal-ui`,
        icon: `content/assets/avatar.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134661352-1",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
  ],
};
