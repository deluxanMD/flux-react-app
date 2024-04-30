import type { Meta, StoryObj } from "@storybook/react";
import { FluxPasswordField } from "./flux-password-field.component";
import { withRHF } from "test-utils/storybook/with-rhf";

const meta: Meta<typeof FluxPasswordField> = {
  component: FluxPasswordField,
  decorators: [withRHF],
};

export default meta;
type Story = StoryObj<typeof FluxPasswordField>;

export const PasswordField: Story = {
  args: {
    label: "Password Field",
    name: "testField",
    value: "1234",
  },
};
