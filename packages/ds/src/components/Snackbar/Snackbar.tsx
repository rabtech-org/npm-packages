import { forwardRef } from 'react';
import { Snackbar as MuiSnackbar, SnackbarProps as MuiSnackbarProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type SnackbarProps = OmitCustomStyles<MuiSnackbarProps>;

export const Snackbar = forwardRef((props: SnackbarProps, ref: SnackbarProps['ref']) => {
    return <MuiSnackbar ref={ref} {...props} />;
});
