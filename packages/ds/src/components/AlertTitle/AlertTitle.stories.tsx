import type { Meta, StoryObj } from '@storybook/react';
import { AlertTitle } from './AlertTitle';

const meta = {
  title: 'Components/AlertTitle',
  component: AlertTitle,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AlertTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'AlertTitle',
  args: {},
};
