import { forwardRef } from 'react';
import {
    FormControl as MuiFormControl,
    FormControlProps as MuiFormControlProps,
} from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type FormControlProps = OmitCustomStyles<MuiFormControlProps>;

export const FormControl = forwardRef((props: FormControlProps, ref: FormControlProps['ref']) => {
    return <MuiFormControl ref={ref} {...props} />;
});
