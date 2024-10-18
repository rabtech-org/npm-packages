import type { Meta, StoryObj } from '@storybook/react';
import { MenuList } from './MenuList';

const meta = {
  title: 'Components/MenuList',
  component: MenuList,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'MenuList',
  args: {},
};
