import { forwardRef } from 'react';
import {
    DialogTitle as MuiDialogTitle,
    DialogTitleProps as MuiDialogTitleProps,
} from '@mui/material';

export type DialogTitleProps = Pick<MuiDialogTitleProps, 'ref'> &
    Omit<React.ComponentPropsWithoutRef<'span'>, 'style'>;

export const DialogTitle = forwardRef((props: DialogTitleProps, ref: DialogTitleProps['ref']) => {
    return <MuiDialogTitle ref={ref} {...props} />;
});
