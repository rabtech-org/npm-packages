import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from './PageHeader';

const meta = {
  title: 'Components/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'PageHeader',
  args: {
    title: 'Test Page Header',
    overtext: 'test overtext',
    onBack: () => {},
  },
};
export const NoBack: Story = {
  name: 'PageHeader noBack',
  args: {
    title: 'Test Page Header',
    overtext: 'test overtext',
  },
};
