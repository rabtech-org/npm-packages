import type { Meta, StoryObj } from '@storybook/react';
import { CardHeader } from './CardHeader';
import { StarIcon, InsertEmoticonOutlinedIcon } from '@/icons';

const meta = {
  title: 'Components/CardHeader',
  component: CardHeader,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'CardHeader',
  args: {
    title: 'Test header',
    overline: 'Test subheader',
    AvatarProps: { color: 'primary', children: <InsertEmoticonOutlinedIcon /> },
    endAdornment: <StarIcon />,
  },
};
export const OverlineActive: Story = {
  name: 'Overline',
  args: {
    title: 'Test header',
    overline: 'Test subheader',
  },
};
export const AvatarSrc: Story = {
  name: 'AvatarSrc',
  args: {
    title: 'Test header',
    overline: 'Test subheader',
    AvatarProps: { src: 'https://picsum.photos/200/200', alt: 'picsum' },
  },
};
export const EndAdornment: Story = {
  name: 'Action',
  args: {
    title: 'Test header',
    overline: 'Test subheader',
    endAdornment: <StarIcon />,
  },
};
