import { forwardRef } from 'react';
import { Box, Radio as MuiRadio, RadioProps as MuiRadioProps, styled } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

declare module '@mui/material/Radio' {
    interface RadioPropsColorOverrides {
        primary: true;
        secondary: true;
        error: true;
        default: false;
        info: false;
        success: false;
        warning: false;
    }

    interface RadioPropsSizeOverrides {
        small: true;
        medium: true;
        large: true;
    }
}

export type RadioProps = Pick<
    MuiRadioProps,
    'ref' | 'checked' | 'color' | 'disabled' | 'id' | 'onChange' | 'required' | 'size' | 'onClick'
>;

const StyledRadio = styled(MuiRadio)<RadioProps>(({ theme, color, checked, disabled, size }) => {
    return {
        backgroundColor: 'transparent',

        height: '42px',
        width: '42px',
        ...(size === 'small' && {
            height: '38px',
            width: '38px',
        }),
        ...(size === 'large' && {
            height: '46px',
            width: '46px',
        }),

        ...(!disabled && {
            '&:hover': {
                '.MuiBox-root': {
                    backgroundColor: 'transparent',
                    boxShadow: theme.shadows[4],
                },
            },
            '&:focus': {
                '.MuiBox-root': {
                    backgroundColor: 'transparent',
                    boxShadow: theme.shadows[6],
                },
            },
        }),

        '.MuiBox-root': {
            backgroundColor: disabled ? 'rgba(0,0,0,0.05)' : theme.palette.background.paper,
            boxShadow: disabled ? 'none' : theme.shadows[2],
            ...(color === 'error' &&
                !checked &&
                !disabled && {
                    border: '1px solid',
                    borderColor: theme.palette.error.main,
                }),
        },

        '.MuiSvgIcon-root': {
            ...(color === 'primary' && {
                color: theme.palette.primary.main,
            }),
            ...(color === 'secondary' && {
                color: theme.palette.secondary.main,
            }),
            ...(color === 'error' && {
                color: theme.palette.error.main,
            }),
            ...(disabled && {
                opacity: 0.3,
            }),
        },
    };
});

const Icon = (props: { size?: string; children?: React.ReactNode }) => {
    const { size, children } = props;
    return (
        <Box
            height={20}
            width={20}
            borderRadius={40}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                ...(size === 'small' && {
                    height: '16.67px',
                    width: '16.67px',
                }),
                ...(size === 'large' && {
                    height: '23.33px',
                    width: '23.33px',
                }),
            }}
        >
            {children}
        </Box>
    );
};
const CheckedIcon = (props: { size?: string }) => {
    const { size } = props;
    return (
        <CircleIcon
            sx={{
                fontSize: 16,
                ...(size === 'small' && {
                    height: '12.67px',
                    width: '12.67px',
                }),
                ...(size === 'large' && {
                    height: '19.33px',
                    width: '19.33px',
                }),
            }}
        />
    );
};

export const Radio = forwardRef((props: RadioProps, ref: RadioProps['ref']) => {
    const { size } = props;

    return (
        <StyledRadio
            disableRipple
            icon={<Icon size={size} />}
            checkedIcon={<Icon size={size} children={<CheckedIcon size={size} />} />}
            ref={ref}
            {...props}
        />
    );
});
