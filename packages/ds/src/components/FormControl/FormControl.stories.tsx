import type { Meta, StoryObj } from '@storybook/react';
import { FormControl } from './FormControl';

const meta = {
  title: 'Components/FormControl',
  component: FormControl,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'FormControl',
  args: {},
};
