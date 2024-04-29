import type { Meta, StoryObj } from "@storybook/react";
import { FluxButtons } from "./flux-buttons.component";

const meta: Meta<typeof FluxButtons> = {
  component: FluxButtons,
};

export default meta;
type Story = StoryObj<typeof FluxButtons>;

export const TextButton: Story = {
  args: {
    variant: "text",
    children: "Text Button",
  },
};
