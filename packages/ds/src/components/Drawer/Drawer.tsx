import { forwardRef } from 'react';
import { Drawer as MuiDrawer, DrawerProps as MuiDrawerProps } from '@mui/material';

export type DrawerProps = Pick<
    MuiDrawerProps,
    'ref' | 'children' | 'hideBackdrop' | 'onClose' | 'open' | 'variant' | 'keepMounted'
> & { anchor?: 'left' | 'right'; width?: number };

export const Drawer = forwardRef((props: DrawerProps, ref: DrawerProps['ref']) => {
    const { width, ...rest } = props;
    return (
        <MuiDrawer
            open={false}
            anchor="left"
            ref={ref}
            sx={{
                width: width ?? '25%',
            }}
            PaperProps={{
                sx: {
                    width: 'inherit',
                    height: '100%',
                },
            }}
            {...rest}
        />
    );
});
