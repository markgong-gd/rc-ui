const path = require('path');

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'rc-ui/es': path.resolve(__dirname, '../components/'),
        'rc-ui': path.resolve(__dirname, '../components/index.tsx'),
        '@components': path.resolve(__dirname, '../components/'),
        '@doc-components': path.resolve(__dirname, '../doc-components/'),
      },
    },
  });
};
