import { forwardRef } from 'react';
import {
    Avatar,
    lighten,
    Chip as MuiChip,
    ChipProps as MuiChipProps,
    useTheme,
} from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type ChipProps = Omit<OmitCustomStyles<MuiChipProps>, 'avatar' | 'color'> & {
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'success';
    avatarProps?: {
        children: React.ReactNode;
    };
};

export const Chip = forwardRef((props: ChipProps, ref: ChipProps['ref']) => {
    const { color = 'default', avatarProps, size = 'medium', ...rest } = props;
    const theme = useTheme();

    return (
        <MuiChip
            ref={ref}
            color={color}
            size={size}
            avatar={avatarProps ? <Avatar>{avatarProps.children}</Avatar> : undefined}
            {...rest}
            sx={{
                ...(size === 'small' && {
                    height: 24,
                }),
                ...(size === 'medium' && {
                    height: avatarProps ? 38 : 32,
                }),

                ...(color === 'default' && {
                    bgcolor: theme.palette.action.selected,
                    color: 'text.primary',
                }),
                ...(color !== 'default' && {
                    bgcolor: lighten(theme.palette[color].main, 0.8),
                    color: theme.palette[color].dark,
                }),

                '&.MuiChip-root .MuiChip-avatar': {
                    color: '#FFFFFF',
                    lineHeight: '18px',
                    letterSpacing: '0.16px',

                    ...(size === 'small' && {
                        width: 18,
                        height: 18,
                        fontSize: '12px',
                    }),
                    ...(size === 'medium' && {
                        width: 30,
                        height: 30,
                        fontSize: '13px',
                    }),

                    ...(color === 'default' && {
                        color: '#FFFFFF',
                    }),
                    ...(color !== 'default' && {
                        bgcolor: theme.palette[color].dark,
                        color: theme.palette[color].contrastText,
                    }),
                },
            }}
        />
    );
});
