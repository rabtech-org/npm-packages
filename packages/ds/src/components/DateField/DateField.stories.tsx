import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../Box/Box';
import { DateField } from './DateField';

const meta = {
  title: 'Components/DateField',
  component: DateField,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateField>;

export default meta;
type Story = StoryObj<typeof meta>;

const DateFieldComponent = () => {
  return (
    <Box minWidth={120}>
      <DateField placeholder="select something" label="Select date" fullWidth />
    </Box>
  );
};

export const Default: Story = {
  args: {},
  render: () => <DateFieldComponent />,
};
