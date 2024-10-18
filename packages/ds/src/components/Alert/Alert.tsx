import { forwardRef } from 'react';
import { Alert as MuiAlert, AlertProps as MuiAlertProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type AlertProps = OmitCustomStyles<MuiAlertProps>;

export const Alert = forwardRef((props: AlertProps, ref: AlertProps['ref']) => {
    return <MuiAlert ref={ref} {...props} />;
});
