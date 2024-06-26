import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/components/ui/button";
import { action } from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Basic Elements/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "default",
    size: "default",
    children: "Button",
    onClick: action("onClick"),
    onBlur: action("onBlur"),
    onFocus: action("onFocus"),
    onMouseOver: action("onMouseOver"),
  },
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
    },
    size: {
      control: {
        type: "radio",
      },
    },
    asChild: { control: false },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
