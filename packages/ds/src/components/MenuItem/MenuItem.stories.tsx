import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from './MenuItem';
import { StarIcon } from '@/icons';

const meta = {
  title: 'Components/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'MenuItem',
  args: {
    children: 'Test item',
    icon: <StarIcon />,
    endAdornment: '⌘C',
  },
};
