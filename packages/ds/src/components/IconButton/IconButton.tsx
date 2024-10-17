import { forwardRef } from 'react';
import {
    alpha,
    iconButtonClasses,
    IconButton as MuiIconButton,
    IconButtonProps as MuiIconButtonProps,
    Palette,
    PaletteColor,
    styled,
} from '@mui/material';

declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        default: false;
        inherit: false;
        success: false;
        error: false;
        info: false;
        warning: false;
    }
}

export type IconButtonProps = Pick<MuiIconButtonProps, 'ref' | 'disabled' | 'edge' | 'size'> & {
    variant?: 'default' | 'contained';
    /**
     * The color of the component.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
     * @default 'primary'
     */
    color?: MuiIconButtonProps['color'];
    invertedColor?: boolean;
    visible?: boolean;
    contrastColor?: 'primary' | 'secondary';
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'style'>;

const StyledIconButton = styled(MuiIconButton, {
    shouldForwardProp: prop =>
        prop !== 'variant' &&
        prop !== 'invertedColor' &&
        prop !== 'visible' &&
        prop !== 'contrastColor',
})<IconButtonProps>(({ theme, variant, color, invertedColor, size, visible, contrastColor }) => {
    const paletteItem = theme.palette[color as keyof Palette] as PaletteColor;
    const paletteColor =
        paletteItem?.main && paletteItem?.dark && paletteItem?.contrastText
            ? paletteItem
            : undefined;

    return {
        visibility: visible ? 'visible' : 'hidden',

        ...(size === 'small' && {
            '.MuiSvgIcon-root': {
                fontSize: '18px',
            },
            padding: '5px',
        }),
        ...(size === 'medium' && {
            '.MuiSvgIcon-root': {
                fontSize: '20px',
            },
            padding: '7px',
        }),
        ...(size === 'large' && {
            '.MuiSvgIcon-root': {
                fontSize: '24px',
            },
            padding: '8px',
        }),

        ...((!variant || variant === 'default') && {
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

            [`&.${iconButtonClasses.disabled}`]: {
                ...(contrastColor && {
                    color: alpha(theme.palette[contrastColor].contrastText, 0.3),
                }),
            },
        }),

        ...(variant === 'contained' && {
            transition: theme.transitions.create(['background-color', 'box-shadow', 'color'], {
                duration: theme.transitions.duration.short,
            }),
            boxShadow: theme.shadows[2],

            ...(paletteColor && {
                color: paletteColor.contrastText,
                backgroundColor: paletteColor.main,

                ...(invertedColor && {
                    color: paletteColor.main,
                    backgroundColor: paletteColor.contrastText,
                }),
            }),

            '&:hover': {
                boxShadow: theme.shadows[4],

                ...(paletteColor && {
                    backgroundColor: paletteColor.dark,

                    ...(invertedColor && {
                        backgroundColor: paletteColor.contrastText,
                    }),
                }),

                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    boxShadow: theme.shadows[2],

                    ...(paletteColor && {
                        backgroundColor: paletteColor.main,

                        ...(invertedColor && {
                            backgroundColor: paletteColor.contrastText,
                        }),
                    }),
                },
            },

            '&:active': {
                boxShadow: theme.shadows[8],
            },

            [`&.${iconButtonClasses.disabled}`]: {
                color: theme.palette.action.disabled,
                boxShadow: theme.shadows[0],
                backgroundColor: theme.palette.action.disabledBackground,

                ...(contrastColor && {
                    color: theme.palette[contrastColor].main,
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                }),
            },
        }),
    };
});

export const IconButton = forwardRef((props: IconButtonProps, ref: IconButtonProps['ref']) => {
    return <StyledIconButton color="primary" ref={ref} visible size="medium" {...props} />;
});
