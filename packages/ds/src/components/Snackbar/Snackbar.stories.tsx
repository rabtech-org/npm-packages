import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from './Snackbar';

const meta = {
  title: 'Components/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Snackbar',
  args: {},
};
