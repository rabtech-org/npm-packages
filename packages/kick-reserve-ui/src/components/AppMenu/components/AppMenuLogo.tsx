import { Img } from '@rabtech/ds';
import { AppMenuLogoProps } from '../AppMenu.types';

const AppMenuLogo = (props: AppMenuLogoProps) => {
    const { logoUrl } = props;
    return (
        <Img
            alt="logo"
            src={logoUrl}
            height="30px"
            width="auto"
            data-testid="header-menu-logo"
            mr="auto"
        />
    );
};

export default AppMenuLogo;
