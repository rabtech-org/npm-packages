import type { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';

const meta = {
  title: 'Components/Img',
  component: Img,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Img',
  args: {},
};
