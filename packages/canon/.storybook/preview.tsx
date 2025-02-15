import React from "react";
import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Core Concepts", "Components"],
      },
    },
  },
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        Light: "light",
        Dark: "dark",
        "Backstage Light": "backstage-light",
        "Backstage Dark": "backstage-dark",
      },
      defaultTheme: "Light",
    }),
    (Story) => {
      document.body.style.backgroundColor = "var(--canon-background)";

      const docsStoryElements = document.getElementsByClassName("docs-story");
      Array.from(docsStoryElements).forEach((element) => {
        (element as HTMLElement).style.backgroundColor =
          "var(--canon-background)";
      });

      return <Story />;
    },
  ],
};

export default preview;
