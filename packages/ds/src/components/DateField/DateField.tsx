import { forwardRef } from 'react';
import { TextField, TextFieldProps } from '../TextField/TextField';
import { styled, TextFieldProps as MuiTextFieldProps } from '@mui/material';

export type DateFieldProps = Pick<
    TextFieldProps,
    | 'ref'
    | 'defaultValue'
    | 'disabled'
    | 'error'
    | 'fullWidth'
    | 'helperText'
    | 'label'
    | 'placeholder'
    | 'required'
    | 'id'
    | 'value'
    | 'minWidth'
    | 'contrastColor'
    | 'textAlign'
    | 'size'
    | 'onChange'
> & {
    minDate?: string;
    maxDate?: string;
};

const StyledTextField = styled(TextField)<
    TextFieldProps & {
        InputProps?: MuiTextFieldProps['InputProps'];
    }
>(() => ({}));

export const DateField = forwardRef((props: DateFieldProps, ref: DateFieldProps['ref']) => {
    const { minDate, maxDate, ...rest } = props;

    return (
        <StyledTextField
            type="date"
            ref={ref}
            InputProps={{
                inputProps: {
                    min: minDate,
                    max: maxDate,
                },
            }}
            {...rest}
        />
    );
});
