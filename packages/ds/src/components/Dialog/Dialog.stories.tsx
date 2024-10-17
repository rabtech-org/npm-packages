import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Dialog',
  args: {
    open: true,
    header: {
      title: 'Dialog Title',
      onClose: () => {},
    },
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    fullWidth: true,
    actions: [
      { label: 'Test1', color: 'primary', variant: 'contained' },
      { label: 'Test2', color: 'secondary', variant: 'contained' },
    ],
  },
};
