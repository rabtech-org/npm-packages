import type { Meta, StoryFn } from '@storybook/react';
import { useArgs, useEffect, useState } from '@storybook/client-api';
import AppMenu from './AppMenu';
import { AppMenuProps } from './AppMenu.types';

const meta: Meta<typeof AppMenu> = {
    title: 'AppMenu/AppMenu',
    component: AppMenu,
    argTypes: {},
};

export default meta;

type Story = StoryFn<typeof AppMenu>;

const Template: Story = args => {
    const { activePage } = args;
    const [selectedPage, setSelectedPage] = useState<string>(activePage);

    const [, setArgs] = useArgs<AppMenuProps>();

    useEffect(() => {
        setArgs({
            activePage: selectedPage,
        });
    }, [selectedPage]);

    return <AppMenu {...args} activePage={selectedPage} onPageChange={setSelectedPage} />;
};

export const Basic = Template.bind({});

Basic.args = {
    pages: [
        { label: 'Page 1', link: '/page1' },
        { label: 'Page 2', link: '/page2' },
        { label: 'Page 3', link: '/page3' },
    ],
    activePage: '/page1',
    logoUrl: 'https://img.logoipsum.com/264.svg',
};
