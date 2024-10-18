import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Box',
  args: {
    children: (
      <>
        <div>item 1</div>
        <div>item 2</div>
      </>
    ),
  },
};
