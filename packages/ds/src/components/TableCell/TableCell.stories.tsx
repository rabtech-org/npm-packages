import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';

const meta = {
  title: 'Components/TableCell',
  component: TableCell,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TableCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'TableCell',
  args: {},
};
