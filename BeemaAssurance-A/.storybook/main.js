<<<<<<< HEAD


/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  }
};
export default config;
=======
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",

    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-docs"

  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;
>>>>>>> 8a2b8829467f80228337cb97c375bc69e037dd28
