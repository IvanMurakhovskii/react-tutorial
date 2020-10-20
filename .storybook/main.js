const custom = require("../webpack.config.js");

module.exports = {
  stories: [
    "../src/**/*.stories.tsx"
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: custom.resolve,
      module: {
        ...config.module,
        rules: custom.module.rules
      },
    };
  },
};
