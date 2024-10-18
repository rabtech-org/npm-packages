import type { Meta, StoryObj } from '@storybook/react';
import { DialogContentText } from './DialogContentText';

const meta = {
  title: 'Components/DialogContentText',
  component: DialogContentText,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DialogContentText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'DialogContentText',
  args: {},
};
