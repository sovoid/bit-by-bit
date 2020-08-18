const path = require('path');
const alias = require('./webpack-alias');
const rssConfig = require('./rss-plugin-config');

module.exports = {
  siteMetadata: {
    title: 'Bit by Bit | Soham Parekh',
    author: 'Soham Parekh',
    description: 'It took me a couple bytes',
    siteUrl: 'https://bit-by-bit.netlify.app',
    social: {
      github: 'https://github.com/und3fined_v01d',
      linkedin: 'https://linkedin.com/in/soham-parekh',
      twitter: 'https://twitter.com/und3fined_v01d',
    },
  },
  plugins: [
    rssConfig,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias,
        extensions: [],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-flow`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     defaultLayouts: {
    //       post: require.resolve('./src/components/BlogPost/BlogPost.js'),
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `posts`,
    //     path: `${__dirname}/src/pages/posts`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, 'src', 'assets', 'images'),
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GA_TRACKING_ID,
    //     cookieExpires: 63072000, // two years
    //   },
    // },
  ],
};
