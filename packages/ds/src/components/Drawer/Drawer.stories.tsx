import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { ListItem } from '../ListItem/ListItem';
import { StarIcon } from '@/icons';
import { Avatar } from '../Avatar/Avatar';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Drawer',
  args: {
    hideBackdrop: true,
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
