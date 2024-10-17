import { forwardRef } from 'react';
import {
    DialogContentText as MuiDialogContentText,
    DialogContentTextProps as MuiDialogContentTextProps,
} from '@mui/material';

export type DialogContentTextProps = Pick<MuiDialogContentTextProps, 'ref' | 'id'> &
    Omit<React.ComponentPropsWithoutRef<'span'>, 'style'>;

export const DialogContentText = forwardRef(
    (props: DialogContentTextProps, ref: DialogContentTextProps['ref']) => {
        return <MuiDialogContentText ref={ref} {...props} />;
    },
);
