import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';
import { Button } from '../Button/Button';
import { Stack } from '@mui/material';
import { ListItem } from '../ListItem/ListItem';
import { Avatar } from '../Avatar/Avatar';
import { StarIcon } from '@/icons';

const meta = {
  title: 'Components/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Section',
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
    children: (
      <>
        <ListItem
          label="Test label 1"
          endAdornment={<StarIcon />}
          startAdornment={
            <Avatar color="secondary">
              <StarIcon />
            </Avatar>
          }
        >
          Test title 1
        </ListItem>
        <ListItem
          label="Test label 2"
          endAdornment={<StarIcon />}
          startAdornment={
            <Avatar color="secondary">
              <StarIcon />
            </Avatar>
          }
        >
          Test title 2
        </ListItem>
        <ListItem
          label="Test label 3"
          endAdornment={<StarIcon />}
          startAdornment={
            <Avatar color="secondary">
              <StarIcon />
            </Avatar>
          }
        >
          Test title 3
        </ListItem>
      </>
    ),
  },
};
