import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { Tab } from '../Tab/Tab';
import React from 'react';
import { Box } from '@mui/system';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabsComponent = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box minWidth={120}>
      <Tabs value={value} onChange={handleChange} color="primary">
        <Tab value={1} label="Tab 1" />
        <Tab value={2} label="Tab 2" />
        <Tab value={3} label="Tab 3" />
      </Tabs>
    </Box>
  );
};

const TabsComponentScrollable = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box minWidth={120} sx={{ '.MuiTabs-scroller': { maxHeight: 150 } }}>
      <Tabs value={value} onChange={handleChange} color="secondary" variant="scrollable">
        <Tab value={1} label="Tab 1" />
        <Tab value={2} label="Tab 2" />
        <Tab value={3} label="Tab 3" />
        <Tab value={4} label="Tab 4" />
        <Tab value={5} label="Tab 5" />
        <Tab value={6} label="Tab 6" />
        <Tab value={7} label="Tab 7" />
        <Tab value={8} label="Tab 8" />
        <Tab value={9} label="Tab 9" />
        <Tab value={10} label="Tab 10" />
      </Tabs>
    </Box>
  );
};

export const Default: Story = {
  name: 'Tabs',
  render: () => <TabsComponent />,
};
export const Scrollable: Story = {
  name: 'Scrollable Tabs',
  render: () => <TabsComponentScrollable />,
};
