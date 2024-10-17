import React, { forwardRef } from 'react';
import {
    Box,
    MenuItem as MuiMenuItem,
    MenuItemProps as MuiMenuItemProps,
    styled,
    useTheme,
} from '@mui/material';

export type MenuItemProps = Pick<
    MuiMenuItemProps,
    | 'ref'
    | 'autoFocus'
    | 'dense'
    | 'disabled'
    | 'disableGutters'
    | 'divider'
    | 'selected'
    | 'value'
    | 'onClick'
> & {
    children: string;
    icon?: React.ReactNode;
    endAdornment?: string;
    color?: 'error' | 'primary' | 'success';
};

const StyledMenuItem = styled(MuiMenuItem, {
    shouldForwardProp: prop => prop !== 'color',
})<Omit<MenuItemProps, 'children'>>(({ theme, dense, disabled, color }) => {
    return {
        color: color ? theme.palette[color].main : theme.palette.text.primary,

        fontSize: 12,
        ...(dense && {
            fontSize: 14,
        }),
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        },

        ...(disabled && {
            '&.MuiButtonBase-root.MuiMenuItem-root.Mui-disabled': {
                backgroundColor: 'transparent',
                color: theme.palette.text.disabled,
                opacity: 1,
            },
        }),
    };
});

export const MenuItem = forwardRef((props: MenuItemProps, ref: MenuItemProps['ref']) => {
    const { dense, icon, endAdornment, children, color, disabled } = props;
    const theme = useTheme();

    return (
        <StyledMenuItem
            ref={ref}
            {...props}
            color={color}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 2,
            }}
        >
            <>
                {icon && (
                    <Box
                        display="flex"
                        flex="none"
                        color="action.active"
                        fontSize={20}
                        sx={{
                            '> .MuiSvgIcon-root': {
                                color: color
                                    ? theme.palette[color].main
                                    : theme.palette.action.active,
                                fontSize: 20,
                                ...(disabled && {
                                    color: theme.palette.action.active,
                                }),
                            },
                        }}
                    >
                        {icon}
                    </Box>
                )}
                <Box
                    flex={1}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="flex-start"
                    gap={0}
                >
                    {children}
                    {endAdornment && (
                        <Box
                            display="flex"
                            alignItems="center"
                            flex="none"
                            color={t => (color ? t.palette[color].main : 'text.secondary')}
                            fontSize={dense ? 14 : 12}
                        >
                            {endAdornment}
                        </Box>
                    )}
                </Box>
            </>
        </StyledMenuItem>
    );
});
