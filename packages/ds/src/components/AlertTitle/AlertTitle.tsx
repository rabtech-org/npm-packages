import { forwardRef } from 'react';
import { AlertTitle as MuiAlertTitle, AlertTitleProps as MuiAlertTitleProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type AlertTitleProps = OmitCustomStyles<MuiAlertTitleProps>;

export const AlertTitle = forwardRef((props: AlertTitleProps, ref: AlertTitleProps['ref']) => {
    return <MuiAlertTitle ref={ref} {...props} />;
});
