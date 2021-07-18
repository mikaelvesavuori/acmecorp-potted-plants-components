module.exports = {
  "stories": [
    "../src/docs.stories.mdx",
    "../src/**/*.stories.@(js|jsx|mdx)"
  ],
  "addons": [
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
};