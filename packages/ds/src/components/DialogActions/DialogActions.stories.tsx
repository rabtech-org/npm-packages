import type { Meta, StoryObj } from '@storybook/react';
import { DialogActions } from './DialogActions';

const meta = {
  title: 'Components/DialogActions',
  component: DialogActions,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DialogActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'DialogActions',
  args: {},
};
