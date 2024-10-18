import type { Meta, StoryObj } from '@storybook/react';
import { Backdrop } from './Backdrop';

const meta = {
  title: 'Components/Backdrop',
  component: Backdrop,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Backdrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Backdrop',
  args: {
    open: true,
  },
};
