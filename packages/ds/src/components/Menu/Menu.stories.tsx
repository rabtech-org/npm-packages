import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';
import { MenuItem } from '../MenuItem/MenuItem';
import { StarIcon } from '@/icons';
import { Box, Divider } from '@mui/material';
import { Button } from '../Button/Button';
import React from 'react';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const AnchoredMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Button variant="contained" onClick={handleClick}>
        Menu Button
      </Button>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem endAdornment="one">Menu Item 1</MenuItem>
        <MenuItem endAdornment="two">Menu Item 2</MenuItem>
        <MenuItem endAdornment="one">Menu Item 3</MenuItem>
      </Menu>
    </Box>
  );
};

export const Default: Story = {
  name: 'Menu',
  args: {
    open: true,
    children: (
      <>
        <MenuItem icon={<StarIcon />} endAdornment="one">
          Menu Item 1
        </MenuItem>
        <MenuItem icon={<StarIcon />} endAdornment="two">
          Menu Item 2
        </MenuItem>
        <MenuItem icon={<StarIcon />} endAdornment="one">
          Menu Item 3
        </MenuItem>
        <MenuItem icon={<StarIcon />} endAdornment="two">
          Menu Item 4
        </MenuItem>
        <Divider />
        <MenuItem icon={<StarIcon />} endAdornment="three">
          Menu Item 5
        </MenuItem>
      </>
    ),
  },
};

export const AnchoredMenuStory: Story = {
  render: () => <AnchoredMenu />,
  args: {
    open: true,
  },
};
