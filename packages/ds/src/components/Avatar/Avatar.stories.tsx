import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { StarIcon } from '@/icons';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Avatar',
  args: {},
};
export const Icon: Story = {
  name: 'StarIcon',
  args: {
    children: <StarIcon />,
  },
};
export const Img: Story = {
  name: 'Image',
  args: {
    src: 'https://picsum.photos/200/200',
  },
};
 