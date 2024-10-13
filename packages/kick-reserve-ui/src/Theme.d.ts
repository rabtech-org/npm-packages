import * as _Theme from '@mui/material/styles';

declare module '@mui/material/styles' {
    export interface Theme extends _Theme.Theme {
        customLayout: {
            left: {
                width: {
                    xs: string;
                    lg: string;
                };
                maxWidth: string;
            };
            right: {
                width: {
                    xs: string;
                    lg: string;
                };
                maxWidth: string;
                minWidth: {
                    xs: string;
                    sm: string;
                    lg: string;
                };
            };
            actionHeader: {
                height: string;
            };
            multiForm: {
                boxShadow: string;
            };
        };
        shape: {
            borderRadius: number;
            borderRadiusXs: number;
            borderRadiusSm: number;
            borderRadiusMd: number;
            borderRadiusLg: number;
            borderRadiusXl: number;
        };
        formSpacing?: number;
    }

    export interface Palette extends _Theme.Palette {
        disabled?: {
            background?: string;
        };
    }

    export interface ZIndex extends _Theme.ZIndex {
        hints: number;
    }

    export interface TypeBackground extends _Theme.TypeBackground {
        secondary?: string;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        inverted: true;
    }
}
