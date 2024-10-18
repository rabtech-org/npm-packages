import { forwardRef } from 'react';
import { InputLabel as MuiInputLabel, InputLabelProps as MuiInputLabelProps } from '@mui/material';

export type InputLabelProps = Pick<MuiInputLabelProps, 'ref' | 'children' | 'error' | 'required'>;

export const InputLabel = forwardRef((props: InputLabelProps, ref: InputLabelProps['ref']) => {
    return (
        <MuiInputLabel
            sx={t => ({
                ...t.typography['input-label'],
                color: t.palette.text.secondary,
            })}
            ref={ref}
            {...props}
        />
    );
});
