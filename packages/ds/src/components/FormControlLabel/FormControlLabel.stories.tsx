import type { Meta, StoryObj } from '@storybook/react';
import { FormControlLabel } from './FormControlLabel';
import { Checkbox } from '@mui/material';

const meta = {
  title: 'Components/FormControlLabel',
  component: FormControlLabel,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'FormControlLabel',
  args: {
    control: <Checkbox />,
    label: 'FormControlLabel',
  },
};
