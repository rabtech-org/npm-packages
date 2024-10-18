import { forwardRef } from 'react';
import { AppBar as MuiAppBar, AppBarProps as MuiAppBarProps, Toolbar } from '@mui/material';

declare module '@mui/material/AppBar' {
    interface AppBarPropsColorOverrides {
        white: true;
        primary: true;
        transparent: true;
        default: false;
        inherit: false;
        secondary: false;
        error: false;
        info: false;
        success: false;
        warning: false;
    }
}

export type AppBarProps = Pick<MuiAppBarProps, 'ref' | 'children' | 'color' | 'position'> & {
    height?: 'auto' | 'default';
    divider?: boolean;
};

export const AppBar = forwardRef((props: AppBarProps, ref: AppBarProps['ref']) => {
    const { children, height, divider, ...rest } = props;

    return (
        <MuiAppBar
            ref={ref}
            color="white"
            position="relative"
            {...rest}
            sx={{
                height: 'auto',
                width: '100%',
                boxShadow: 'none',
                ...(divider && { borderBottom: '1px solid', borderColor: '#E0E0E0' }),
            }}
        >
            <Toolbar sx={{ ...(height === 'auto' && { '&.MuiToolbar-root': { minHeight: 0 } }) }}>
                {children}
            </Toolbar>
        </MuiAppBar>
    );
});
