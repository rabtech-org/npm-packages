import type { Meta, StoryObj } from '@storybook/react';
import { InputLabel } from './InputLabel';

const meta = {
  title: 'Components/InputLabel',
  component: InputLabel,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'InputLabel',
  args: {
    children: 'Test label',
  },
};
