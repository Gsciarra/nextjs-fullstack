import type { Preview } from "@storybook/react";
import "../app/globals.css";
import {
  withThemeByClassName,
  withThemeByDataAttribute,
} from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#fefefe",
        },
        {
          name: "dark",
          value: "#333",
        },
        {
          name: "white",
          value: "#fff",
        },
        {
          name: "black",
          value: "#000",
        },
        {
          name: "light grey",
          value: "#f4f4f4",
        },
        {
          name: "dark grey",
          value: "#333",
        },
      ],
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];

export default preview;
