import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { Typography } from '@mui/material';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Accordion',
  args: {
    summary: 'Test summary',
    children: (
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
        amet blandit leo lobortis eget.
      </Typography>
    ),
  },
};
