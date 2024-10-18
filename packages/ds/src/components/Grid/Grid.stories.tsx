import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';

const meta = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Grid',
  args: {},
};
