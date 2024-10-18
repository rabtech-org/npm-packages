import type { Meta, StoryObj } from '@storybook/react';
import { InputBase } from './InputBase';

const meta = {
  title: 'Components/InputBase',
  component: InputBase,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'InputBase',
  args: {},
};
