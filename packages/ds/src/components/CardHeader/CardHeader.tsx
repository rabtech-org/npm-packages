import React, { forwardRef } from 'react';
import {
    BoxProps,
    CardHeader as MuiCardHeader,
    CardHeaderProps as MuiCardHeaderProps,
    styled,
    Typography,
} from '@mui/material';
import { Avatar, AvatarProps } from '../Avatar/Avatar';

export type CardHeaderProps = Pick<MuiCardHeaderProps, 'ref'> & {
    AvatarProps?: Pick<AvatarProps, 'children' | 'src' | 'alt' | 'color'>;
} & {
    title: React.ReactNode;
    overline?: string;
    endAdornment?: React.ReactNode;
    disableGutters?: boolean;
    startAdornment?: React.ReactNode;
    notchColor?: BoxProps['bgcolor'];
};

const StyledCardHeader = styled(MuiCardHeader)<CardHeaderProps>(({ theme, disableGutters }) => {
    return {
        position: 'relative',

        ...(disableGutters && {
            padding: 0,
        }),

        '.MuiCardHeader-avatar': {
            flex: 'none',
        },
        '.MuiCardHeader-content': {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        '.MuiCardHeader-action': {
            flex: 'none',
            alignSelf: 'unset',
            display: 'flex',
            color: theme.palette.primary.main,
            marginRight: 0,
            '>svg': {
                fontSize: 28,
            },
        },
    };
});

export const CardHeader = forwardRef((props: CardHeaderProps, ref: CardHeaderProps['ref']) => {
    const {
        title,
        overline,
        endAdornment,
        AvatarProps,
        disableGutters,
        startAdornment,
        notchColor,
        ...rest
    } = props;

    return (
        <StyledCardHeader
            ref={ref}
            disableTypography
            disableGutters={disableGutters}
            title={
                overline ? (
                    <Typography color="text.secondary" variant="caption">
                        {overline}
                    </Typography>
                ) : (
                    ''
                )
            }
            subheader={
                <Typography color="text.primary" variant="subtitle2">
                    {title}
                </Typography>
            }
            avatar={
                startAdornment ?? (AvatarProps ? <Avatar size="lg" {...AvatarProps} /> : undefined)
            }
            action={endAdornment}
            {...rest}
            sx={{
                ...(notchColor && {
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        height: 24,
                        width: 3,
                        bgcolor: notchColor,
                        clipPath: 'polygon(0 0, 100% 6%, 100% 94%, 0% 100%)',
                    },
                }),
            }}
        />
    );
});
