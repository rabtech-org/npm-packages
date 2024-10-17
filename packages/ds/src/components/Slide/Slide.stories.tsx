import type { Meta, StoryObj } from '@storybook/react';
import { Slide } from './Slide';
import { Box } from '@mui/material';

const meta = {
  title: 'Components/Slide',
  component: Slide,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Slide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Slide',
  args: {
    children: <Box>Slide</Box>,
  },
};
