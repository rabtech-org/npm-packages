import type { Meta, StoryObj } from '@storybook/react';
import { TableHead } from './TableHead';

const meta = {
  title: 'Components/TableHead',
  component: TableHead,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TableHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'TableHead',
  args: {},
};
