import type { Meta, StoryObj } from '@storybook/react';
import { Toolbar } from './Toolbar';

const meta = {
  title: 'Components/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Toolbar',
  args: {},
};
