import { Box, Button, Stack } from '@rabtech/ds';
import { AppMenuNavProps } from '../AppMenu.types';

const AppMenuNav = (props: AppMenuNavProps) => {
    const { onPageChange, pages, activePage } = props;

    const onMenuItemClicked = (pageLink: string) => onPageChange(pageLink);

    const isPageActive = (pageLink: string) => pageLink === activePage;

    return (
        <Box ml="auto">
            <Stack direction="row" flexGrow={1} gap={1} ml="auto" flex={1}>
                {pages.map(page => (
                    <Button
                        key={page.link}
                        onClick={() => onMenuItemClicked(page.link)}
                        color="secondary"
                        variant="contained"
                        data-active={isPageActive(page.link)}
                        data-testid={`desktop-menu-item-${page.link}`}
                    >
                        {page.label}
                    </Button>
                ))}
            </Stack>
        </Box>
    );
};

export default AppMenuNav;
