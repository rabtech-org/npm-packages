import { forwardRef } from 'react';
import {
    CircularProgress as MuiCircularProgress,
    CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';

declare module '@mui/material/CircularProgress' {
    interface CircularProgressPropsColorOverrides {
        primary: true;
        secondary: true;
        inherit: true;
        error: false;
        info: false;
        success: false;
        warning: false;
    }
}

export type CircularProgressProps = Pick<
    MuiCircularProgressProps,
    'ref' | 'color' | 'value' | 'variant'
> & { size?: 'medium' | 'small' };

export const CircularProgress = forwardRef(
    (props: CircularProgressProps, ref: CircularProgressProps['ref']) => {
        const { size } = props;
        return (
            <MuiCircularProgress
                ref={ref}
                sx={{
                    height: 32,
                    width: 32,
                    ...(size === 'small' && {
                        height: 16,
                        width: 16,
                    }),
                }}
                {...props}
            />
        );
    },
);
