import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from './ListItem';
import { Avatar } from '../Avatar/Avatar';
import { StarIcon } from '@/icons';

const meta = {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'ListItem Complete',
  args: {
    startAdornment: (
      <Avatar color="secondary">
        <StarIcon />
      </Avatar>
    ),
    label: 'Test label long long longer longer',
    children: 'Test title long long longer longer',
    endAdornment: <StarIcon />,
  },
};
export const OnlyStartAdornment: Story = {
  name: 'ListItem only startAdornment',
  args: {
    startAdornment: (
      <Avatar color="secondary">
        <StarIcon />
      </Avatar>
    ),
    label: 'Test label',
    children: 'Test title long long longer longer',
  },
};
export const OnlyEndAdornment: Story = {
  name: 'ListItem only endAdornment',
  args: {
    label: 'Test label',
    children: 'Test title long long longer longer',
    endAdornment: <StarIcon />,
  },
};
