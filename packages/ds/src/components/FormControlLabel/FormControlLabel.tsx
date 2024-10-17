import { forwardRef } from 'react';
import {
    FormControlLabel as MuiFormControlLabel,
    FormControlLabelProps as MuiFormControlLabelProps,
    TypographyProps,
} from '@mui/material';

export type FormControlLabelProps = Pick<
    MuiFormControlLabelProps,
    | 'ref'
    | 'control'
    | 'checked'
    | 'disabled'
    | 'label'
    | 'value'
    | 'onChange'
    | 'disabled'
    | 'required'
    | 'labelPlacement'
> & {
    typography?: TypographyProps['variant'];
    color?: TypographyProps['color'];
};

export const FormControlLabel = forwardRef(
    (props: FormControlLabelProps, ref: FormControlLabelProps['ref']) => {
        const { typography, color, ...rest } = props;
        return (
            <MuiFormControlLabel
                slotProps={{ typography: { variant: typography ?? 'input-label', color } }}
                ref={ref}
                {...rest}
            />
        );
    },
);
