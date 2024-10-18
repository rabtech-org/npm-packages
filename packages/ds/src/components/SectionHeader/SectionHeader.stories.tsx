import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader } from './SectionHeader';
import { Button } from '../Button/Button';
import { Stack } from '@mui/material';

const meta = {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'SectionHeader',
  args: {
    label: 'Test Section Header',
    endAdornment: (
      <Stack direction="row" gap={1}>
        <Button color="secondary" variant="contained">
          Test1
        </Button>
        <Button color="primary" variant="contained">
          Test2
        </Button>
      </Stack>
    ),
  },
};
