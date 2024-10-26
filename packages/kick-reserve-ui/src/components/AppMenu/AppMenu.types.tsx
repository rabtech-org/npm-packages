import { Theme, SxProps } from '@mui/material';

export interface AppMenuPageProps {
    label: string;
    link: string;
}

export interface AppMenuLogoProps {
    logoUrl: string;
}

export type MenuPageChangeHandler = (pageLink: string) => void;

export interface AppMenuUserProps {
    avatar?: string;
}

export interface AppMenuProfileActionProps {
    label: string;
    Icon: React.ReactNode;
    onClick: () => void;
    labelSx?: SxProps<Theme>;
}

export interface AppMenuProfileProps {
    user: AppMenuUserProps;
    goToSettings: () => void;
    logout: () => void;
    hideRole?: boolean;
    additionalActions?: AppMenuProfileActionProps[];
}

export interface AppMenuProps {
    logoUrl: string;
    pages: AppMenuPageProps[];
    activePage: string;
    onPageChange: MenuPageChangeHandler;
    user?: AppMenuUserProps;
}

export interface AppMenuNavProps {
    pages: AppMenuPageProps[];
    activePage: string;
    onPageChange: MenuPageChangeHandler;
}
