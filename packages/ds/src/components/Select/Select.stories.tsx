import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box } from '../Box/Box';
import { Select } from './Select';
import { MenuItem } from '../MenuItem/MenuItem';
import { Divider } from '../Divider/Divider';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const SelectComponent = () => {
  const [test, setTest] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTest(event.target.value as string);
  };

  return (
    <Box minWidth={120}>
      <Select
        value={test}
        defaultValue="Test1"
        label="Test"
        onChange={(e) => handleChange(e)}
        size="small"
        multiple={undefined}
      >
        <MenuItem value={1}>Test1</MenuItem>
        <MenuItem value={2}>Test2</MenuItem>
        <Divider />
        <MenuItem value={3}>Test3</MenuItem>
      </Select>
    </Box>
  );
};

export const Default: Story = {
  args: {
    defaultValue: 'Test1',
    label: 'Test',
    size: 'small',
    multiple: undefined,
  },
  render: () => <SelectComponent />,
};
