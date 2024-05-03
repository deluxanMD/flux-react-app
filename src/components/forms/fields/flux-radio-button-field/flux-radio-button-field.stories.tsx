import type { Meta, StoryObj } from "@storybook/react";
import { withRHF } from "test-utils/storybook/with-rhf";
import { FluxRadioButtonField } from "./flux-radio-button-field.component";

const meta: Meta<typeof FluxRadioButtonField> = {
  component: FluxRadioButtonField,
  decorators: [withRHF],
};

export default meta;
type Story = StoryObj<typeof FluxRadioButtonField>;

export const Column: Story = {
  args: {
    label: "Multi Line",
    name: "testField",
    options: [
      { id: "one", label: "One" },
      { id: "two", label: "Two" },
    ],
  },
};

export const Row: Story = {
  args: {
    label: "Single Line",
    name: "testField",
    row: true,
    options: [
      { id: "one", label: "One" },
      { id: "two", label: "Two" },
    ],
  },
};

export const HelperText: Story = {
  args: {
    label: "Single Line",
    name: "testField",
    row: true,
    helperText: "Sample message",
    options: [
      { id: "one", label: "One" },
      { id: "two", label: "Two" },
    ],
  },
};
