import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Tab',
  args: {
    label: 'Test tab',
  },
};
