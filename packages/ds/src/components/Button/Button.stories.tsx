import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { fn } from '@storybook/test';
import { CloseIcon } from '@/icons';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn(), children: 'Button', variant: 'contained', size: 'medium' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};

export const StartIcon: Story = {
  args: {
    color: 'primary',
    startIcon: <CloseIcon />,
  },
};
