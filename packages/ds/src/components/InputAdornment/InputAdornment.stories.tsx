import type { Meta, StoryObj } from '@storybook/react';
import { InputAdornment } from './InputAdornment';

const meta = {
  title: 'Components/InputAdornment',
  component: InputAdornment,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputAdornment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'InputAdornment',
  args: {
    position: 'start',
  },
};
