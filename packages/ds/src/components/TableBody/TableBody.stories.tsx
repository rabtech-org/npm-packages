import type { Meta, StoryObj } from '@storybook/react';
import { TableBody } from './TableBody';

const meta = {
  title: 'Components/TableBody',
  component: TableBody,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TableBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'TableBody',
  args: {},
};
