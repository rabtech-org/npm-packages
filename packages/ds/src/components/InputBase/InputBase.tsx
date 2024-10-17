import { forwardRef } from 'react';
import { InputBase as MuiInputBase, InputBaseProps as MuiInputBaseProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type InputBaseProps = OmitCustomStyles<MuiInputBaseProps>;

export const InputBase = forwardRef((props: InputBaseProps, ref: InputBaseProps['ref']) => {
    return (
        <MuiInputBase
            ref={ref}
            {...props}
            inputProps={{
                sx: {
                    height: '100%',
                    padding: 0,
                },
            }}
            sx={{
                '.MuiInputAdornment-root': {
                    height: '100%',
                    maxHeight: '100%',
                },
            }}
        />
    );
});
