import type { Meta, StoryObj } from '@storybook/react';
import { DialogTitle } from './DialogTitle';

const meta = {
  title: 'Components/DialogTitle',
  component: DialogTitle,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DialogTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'DialogTitle',
  args: {},
};
