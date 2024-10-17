import { createTheme, Shadows } from '@mui/material';
import('../assets/fonts/Montserrat/fontFace.css');

declare module '@mui/material/styles' {
    interface Palette {
        black: Palette['primary'];
        white: Palette['primary'];
        contrastAction: Pick<Palette['action'], 'disabledBackground'>;
    }

    interface PaletteOptions {
        black?: PaletteOptions['primary'];
        white?: PaletteOptions['primary'];
        contrastAction?: PaletteOptions['action'];
    }

    interface TypographyVariants {
        subtitle3: React.CSSProperties;
        'input-label': React.CSSProperties;
        'input-value': React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        subtitle3?: React.CSSProperties;
        'input-label'?: React.CSSProperties;
        'input-value'?: React.CSSProperties;
    }

    interface TypeBackground {
        secondary?: string;
    }

    interface ZIndex {
        hints: number;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        subtitle3: true;
        'input-label': true;
        'input-value': true;
    }
}

const fontFamily = 'Maven Pro, Roboto, Helvetica, Arial, sans-serif';

const muiTheme = createTheme({});

export const defaultTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1367,
            xl: 1536,
        },
    },

    palette: {
        primary: {
            main: '#021B79',
            dark: '#2B41A5',
            light: '#5264BB',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#077BFF',
            dark: '#008EFF',
            light: '#20ADFF',
            contrastText: '#FFFFFF',
        },
        black: muiTheme.palette.augmentColor({
            color: {
                main: '#000000',
            },
            name: 'black',
        }),
        white: muiTheme.palette.augmentColor({
            color: {
                main: '#FFFFFF',
            },
            name: 'white',
        }),
        background: {
            secondary: '#F2F4F9',
        },
        action: {
            active: 'rgba(0, 0, 0, 0.56)',
            disabled: 'rgba(0, 0, 0, 0.38)',
        },
        contrastAction: {
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
        },
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily,
        h1: {
            fontFamily,
            fontWeight: 400,
            fontSize: '96px',
            lineHeight: '112.03px',
            letterSpacing: '-1.5px',
        },
        h2: {
            fontFamily,
            fontWeight: 400,
            fontSize: '60px',
            lineHeight: '72px',
            letterSpacing: '-0.5px',
        },
        h3: {
            fontFamily,
            fontWeight: 400,
            fontSize: '48px',
            lineHeight: '56.0.2px',
            letterSpacing: 0,
        },
        h4: {
            fontFamily,
            fontWeight: 400,
            fontSize: '34px',
            lineHeight: '41.99px',
            letterSpacing: '0.25px',
        },
        h5: {
            fontFamily,
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '32.02px',
            letterSpacing: 0,
        },
        h6: {
            fontFamily,
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '32px',
            letterSpacing: '0.15px',
        },
        subtitle1: {
            fontFamily,
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '28px',
            letterSpacing: '0.15px',
        },
        subtitle2: {
            fontFamily,
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '21.98px',
            letterSpacing: '0.1px',
        },
        subtitle3: {
            fontFamily,
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '18.84px',
            letterSpacing: '0.1px',
        },
        body1: {
            fontFamily,
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0.15px',
        },
        body2: {
            fontFamily,
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20.02px',
            letterSpacing: '0.17px',
        },
        caption: {
            fontFamily,
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '19.92px',
            letterSpacing: '0.4px',
        },
        overline: {
            fontFamily,
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '31.92px',
            letterSpacing: '1px',
        },
        'input-label': {
            fontFamily,
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '12px',
            letterSpacing: '0.15px',
        },
        'input-value': {
            fontFamily,
            fontWeight: 700,
            fontSize: '12px',
            lineHeight: '12px',
            letterSpacing: '0.15px',
        },
    },
    shadows: muiTheme.shadows.map((s, idx) => {
        if (idx === 2) {
            return '0px 3px 6px rgba(0, 0, 0, 0.16)';
        }
        if (idx === 4) {
            return '0px 3px 8px rgba(0, 0, 0, 0.20)';
        }
        if (idx === 6) {
            return '0px 3px 10px rgba(0, 0, 0, 0.24)';
        }
        return s;
    }) as Shadows | undefined,
    zIndex: {
        hints: 99999,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '#root': {
                    '> main': {
                        display: 'flex',
                        flexDirection: 'column',
                    },
                },
            },
        },
    },
});
