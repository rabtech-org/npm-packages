import { forwardRef } from 'react';
import {
    DialogContent as MuiDialogContent,
    DialogContentProps as MuiDialogContentProps,
} from '@mui/material';

export type DialogContentProps = Pick<MuiDialogContentProps, 'ref'> &
    Omit<React.ComponentPropsWithoutRef<'div'>, 'style'>;

export const DialogContent = forwardRef(
    (props: DialogContentProps, ref: DialogContentProps['ref']) => {
        return <MuiDialogContent ref={ref} {...props} />;
    },
);
