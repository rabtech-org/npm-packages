import { AppBar, Toolbar } from '@rabtech/ds';
import { AppMenuProps } from './AppMenu.types';
import AppMenuLogo from './components/AppMenuLogo';
import AppMenuNav from './components/AppMenuNav';

const AppMenu = (props: AppMenuProps) => {
    const { logoUrl, activePage, onPageChange, pages } = props;

    const onMenuItemClicked = (pageLink: string) => onPageChange(pageLink);

    return (
        <AppBar position="sticky" color="primary">
            <Toolbar>
                {/* Logo */}
                <AppMenuLogo logoUrl={logoUrl} />
            </Toolbar>

            {/* Page Links */}
            <AppMenuNav
                activePage={activePage}
                onPageChange={(pageLink: string) => onMenuItemClicked(pageLink)}
                pages={pages}
            />
        </AppBar>
    );
};

export default AppMenu;
