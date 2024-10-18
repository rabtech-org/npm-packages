import type { Meta, StoryObj } from '@storybook/react';
import { DialogContent } from './DialogContent';

const meta = {
  title: 'Components/DialogContent',
  component: DialogContent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DialogContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'DialogContent',
  args: {},
};
