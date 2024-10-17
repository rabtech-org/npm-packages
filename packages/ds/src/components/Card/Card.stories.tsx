import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Stack } from '@mui/material';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  args: { children: <Stack p={4}>I'm a card</Stack> },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Card',
  args: {},
};
