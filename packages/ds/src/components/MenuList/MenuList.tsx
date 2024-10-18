import { forwardRef } from 'react';
import { MenuList as MuiMenuList, MenuListProps as MuiMenuListProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type MenuListProps = OmitCustomStyles<MuiMenuListProps>;

export const MenuList = forwardRef((props: MenuListProps, ref: MenuListProps['ref']) => {
    return <MuiMenuList ref={ref} {...props} />;
});
