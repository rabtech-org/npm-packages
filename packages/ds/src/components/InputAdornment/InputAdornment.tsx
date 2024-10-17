import { forwardRef } from 'react';
import {
    InputAdornment as MuiInputAdornment,
    InputAdornmentProps as MuiInputAdornmentProps,
} from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type InputAdornmentProps = OmitCustomStyles<MuiInputAdornmentProps>;

export const InputAdornment = forwardRef(
    (props: InputAdornmentProps, ref: InputAdornmentProps['ref']) => {
        return <MuiInputAdornment ref={ref} {...props} />;
    },
);
