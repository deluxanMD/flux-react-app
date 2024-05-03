import type { Meta, StoryObj } from "@storybook/react";
import { FluxCheckboxField } from "./flux-checkbox-field.component";
import { withRHF } from "test-utils/storybook/with-rhf";

const meta: Meta<typeof FluxCheckboxField> = {
  component: FluxCheckboxField,
  decorators: [withRHF],
};

export default meta;
type Story = StoryObj<typeof FluxCheckboxField>;

export const CheckboxField: Story = {
  args: {
    label: "Checkbox Field",
    name: "testField",
  },
};
