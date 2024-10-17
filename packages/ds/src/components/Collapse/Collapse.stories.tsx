import type { Meta, StoryObj } from '@storybook/react';
import { Collapse } from './Collapse';

const meta = {
  title: 'Components/Collapse',
  component: Collapse,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Collapse',
  args: {},
};
