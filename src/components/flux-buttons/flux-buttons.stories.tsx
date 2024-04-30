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

export const LoadingTextButton: Story = {
  args: {
    variant: "text",
    children: "Loading Text",
    loading: true,
  },
};

export const ContainedButton: Story = {
  args: {
    variant: "contained",
    children: "Contained Button",
  },
};

export const LoadingContainedButton: Story = {
  args: {
    variant: "contained",
    children: "Loading Text",
    loading: true,
  },
};

export const OutlinedButton: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
  },
};

export const LoadingOutlinedButton: Story = {
  args: {
    variant: "outlined",
    children: "Loading Text",
    loading: true,
  },
};
