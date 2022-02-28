module.exports = {
  "stories": ['../src/stories/**/*.stories.jsx'],
  "staticDirs": ['../public'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions"
  ],
  features: {
    postcss: false,
  },
  "framework": "@storybook/react",
  core: {
    builder: 'webpack4',
  }
}