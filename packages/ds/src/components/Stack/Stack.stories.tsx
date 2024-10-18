import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';

const meta = {
  title: 'Components/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Stack',
  args: {
    children: (
      <>
        <div>item 1</div>
        <div>item 2</div>
      </>
    ),
  },
};
