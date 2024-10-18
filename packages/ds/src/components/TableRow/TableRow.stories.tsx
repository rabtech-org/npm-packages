import type { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './TableRow';

const meta = {
  title: 'Components/TableRow',
  component: TableRow,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'TableRow',
  args: {},
};
