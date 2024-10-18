import { forwardRef } from 'react';
import {
    DialogActions as MuiDialogActions,
    DialogActionsProps as MuiDialogActionsProps,
} from '@mui/material';

export type DialogActionsProps = Pick<MuiDialogActionsProps, 'ref'> &
    Omit<React.ComponentPropsWithoutRef<'div'>, 'style'>;

export const DialogActions = forwardRef(
    (props: DialogActionsProps, ref: DialogActionsProps['ref']) => {
        return <MuiDialogActions ref={ref} {...props} />;
    },
);
