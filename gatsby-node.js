const alias = require('./webpack-alias');

exports.createPages = ({ actions, graphql }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: '/posts',
    toPath: '/',
    permanent: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: '/posts/',
    toPath: '/',
    permanent: true,
    redirectInBrowser: true,
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.example$/,
          use: 'raw-loader',
        },
      ],
    },
  });
};
