"use client";

import { composeStories } from "@storybook/react";

import * as stories from "../../../packages/canon/src/Button/Button.stories";

export default function Home() {
  const { Variants } = composeStories(stories);

  return <Variants />;
}
