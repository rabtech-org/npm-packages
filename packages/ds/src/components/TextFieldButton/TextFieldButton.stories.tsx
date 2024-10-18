import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box } from '../Box/Box';
import { TextFieldButton } from './TextFieldButton';
import { Button } from '../Button/Button';
import { Dialog } from '../Dialog/Dialog';
import { Stack } from '@mui/material';
import { InputIcon } from '@/icons';

const meta = {
  title: 'Components/TextFieldButton',
  component: TextFieldButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextFieldButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const TextFieldButtonComponent = () => {
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');

  const handleSelect = (value: string) => {
    setValue(value);
    setDialogOpen(false);
  };

  return (
    <Box minWidth={120}>
      <TextFieldButton
        placeholder="select something"
        label="select one"
        value={value}
        onClick={() => setDialogOpen(true)}
        onClear={() => setValue('')}
        EndIcon={InputIcon}
      />

      <Dialog
        open={dialogOpen}
        header={{
          title: 'Select one',
          onClose: () => setDialogOpen(false),
        }}
      >
        <Stack gap={2}>
          <Button variant="contained" onClick={() => handleSelect('Test1')}>
            Test1
          </Button>
          <Button variant="contained" onClick={() => handleSelect('Test2')}>
            Test2
          </Button>
          <Button variant="contained" onClick={() => handleSelect('Test3')}>
            Test3
          </Button>
        </Stack>
      </Dialog>
    </Box>
  );
};

export const Default: Story = {
  args: {},
  render: () => <TextFieldButtonComponent />,
};
