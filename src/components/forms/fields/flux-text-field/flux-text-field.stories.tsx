import type { Meta, StoryObj } from "@storybook/react";
import { FluxTextField } from "./flux-text-field.component";
import { withRHF } from "test-utils/storybook/with-rhf";

const meta: Meta<typeof FluxTextField> = {
  component: FluxTextField,
  decorators: [withRHF],
};

export default meta;
type Story = StoryObj<typeof FluxTextField>;

export const TextField: Story = {
  args: {
    label: "Text Field",
    name: "testField",
    value: "1234",
  },
};
