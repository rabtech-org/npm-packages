import type { Meta, StoryObj } from '@storybook/react';
import { Paper } from './Paper';

const meta = {
  title: 'Components/Paper',
  component: Paper,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Paper',
  args: { children: "I'm a paper!" },
};
