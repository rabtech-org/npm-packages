import type { Meta, StoryObj } from '@storybook/react';
import { CardContent } from './CardContent';

const meta = {
  title: 'Components/CardContent',
  component: CardContent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'CardContent',
  args: {},
};
