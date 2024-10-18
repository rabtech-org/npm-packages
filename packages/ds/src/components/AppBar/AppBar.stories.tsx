import type { Meta, StoryObj } from '@storybook/react';
import { AppBar } from './AppBar';
import { StarIcon } from '@/icons';

const meta = {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'AppBar',
  args: {
    children: <StarIcon fontSize="small" />,
  },
};
