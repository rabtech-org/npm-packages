import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { fn } from '@storybook/test';
import { CloseIcon } from '@/icons';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn(), children: <CloseIcon /> },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'IconButton',
  args: {},
};
