import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@repo/components/ui/input";
import { typeOptions } from "./utils";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Basic Elements/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onInput: action("onInput"),
    onChange: action("onChange"),
    onFocus: action("onFocus"),
    onBlur: action("onBlur"),
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    type: {
      control: {
        type: "select",
        options: typeOptions,
        defaultValue: "text",
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (props) => (
    <Input
      {...props}
      className={"min-w-12"}
      placeholder={props.placeholder ?? props.type}
    />
  ),
};
