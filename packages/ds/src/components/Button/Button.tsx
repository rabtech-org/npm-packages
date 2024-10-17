import { forwardRef } from 'react';

import {
    alpha,
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
    styled,
    CircularProgress,
    Palette,
    PaletteColor,
} from '@mui/material';
import { PositionsProps } from '@mui/system';
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        inherit: false;
        success: false;
        error: false;
        info: false;
        warning: false;
    }
    interface ButtonPropsVariantOverrides {
        outlined: false;
    }
}

export type ButtonProps = Pick<
    MuiButtonProps,
    'ref' | 'variant' | 'color' | 'size' | 'disabled' | 'endIcon' | 'fullWidth' | 'startIcon'
> &
    Omit<React.ComponentPropsWithoutRef<'button'>, 'style' | 'children'> & {
        children: string;
        invertedColor?: boolean;
        zIndex?: PositionsProps['zIndex'];
        loading?: boolean;
        contrastColor?: 'primary' | 'secondary';
    };

const StyledButton = styled(MuiButton, {
    shouldForwardProp: prop =>
        prop !== 'invertedColor' &&
        prop !== 'zIndex' &&
        prop !== 'loading' &&
        prop !== 'contrastColor',
})<Pick<ButtonProps, 'loading' | 'size' | 'invertedColor' | 'contrastColor'>>(
    ({ theme, loading, size, color, invertedColor, variant, contrastColor, disabled }) => {
        const paletteItem = theme.palette[color as keyof Palette] as PaletteColor;
        const paletteColor =
            paletteItem?.main && paletteItem?.contrastText ? paletteItem : undefined;

        return {
            fontWeight: 700,
            borderRadius: 40,
            paddingTop: 0,
            paddingBottom: 0,

            ...((!variant || variant === 'text') && {
                ...(invertedColor && {
                    ...(paletteColor && {
                        color: paletteColor.contrastText,
                        '@media (hover: hover)': {
                            '&:hover': {
                                backgroundColor: theme.palette.action.hover,
                            },
                        },
                    }),
                }),

                ...(disabled &&
                    contrastColor && {
                        '&.MuiButton-root.Mui-disabled': {
                            color: alpha(theme.palette[contrastColor].contrastText, 0.3),
                        },
                    }),
            }),

            ...(variant === 'contained' && {
                ...(invertedColor && {
                    ...(paletteColor && {
                        color: paletteColor.main,
                        backgroundColor: paletteColor.contrastText,
                        '@media (hover: hover)': {
                            '&:hover': {
                                backgroundColor: paletteColor.contrastText,
                            },
                        },
                    }),
                }),

                ...(disabled &&
                    contrastColor && {
                        '&.MuiButton-root.Mui-disabled': {
                            color: theme.palette[contrastColor].main,
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        },
                    }),
            }),

            ...(loading && {
                '&.MuiButtonBase-root.Mui-disabled': {
                    color: 'transparent',
                },
            }),

            ...(size === 'small' && {
                fontSize: theme.typography.pxToRem(12),
                minHeight: 28,
            }),
            ...(size === 'medium' && {
                fontSize: theme.typography.pxToRem(13),
                minHeight: 34,
            }),
            ...(size === 'large' && {
                fontSize: theme.typography.pxToRem(14),
                minHeight: 40,
            }),
        };
    },
);

const AbsoluteCircularProgress = () => {
    return (
        <CircularProgress
            size={16}
            color="inherit"
            sx={{
                position: 'absolute',
                color: 'action.disabled',
            }}
        />
    );
};

export const Button = forwardRef((props: ButtonProps, ref: ButtonProps['ref']) => {
    const { children, loading, disabled, ...rest } = props;
    return (
        <StyledButton
            ref={ref}
            loading={loading}
            size="medium"
            color="primary"
            {...rest}
            disabled={loading ? true : disabled}
        >
            {children}
            {loading ? <AbsoluteCircularProgress /> : undefined}
        </StyledButton>
    );
});
