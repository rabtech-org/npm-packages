import { forwardRef } from 'react';
import {
    styled,
    TextFieldProps as MuiTextFieldProps,
    SelectProps as MuiSelectProps,
} from '@mui/material';
import { TextField, TextFieldProps } from '../TextField/TextField';

export type SelectProps = Omit<TextFieldProps, 'multiline' | 'type' | 'maxRows'> & {
    multiple?: MuiSelectProps['multiple'];
    renderValue?: MuiSelectProps['renderValue'];
};

const StyledTextField = styled(TextField)<
    TextFieldProps & { select: true; SelectProps: MuiTextFieldProps['SelectProps'] }
>(({ size }) => {
    return {
        '.MuiInputBase-input.MuiFilledInput-input': {
            lineHeight: size === 'xs' ? '24px' : size === 'small' ? '28px' : '40px',
        },

        '.MuiSelect-select.MuiInputBase-input.MuiFilledInput-input:focus': {
            backgroundColor: 'transparent',
        },
    };
});

export const Select = forwardRef((props: SelectProps, ref: SelectProps['ref']) => {
    const { multiple, renderValue } = props;
    return (
        <StyledTextField
            select
            SelectProps={{
                multiple,
                renderValue,
                MenuProps: {
                    PaperProps: {
                        sx: {
                            mt: '4px',
                            color: t => t.palette.text.primary,
                            boxShadow: t => t.shadows[4],
                            '.MuiButtonBase-root.MuiMenuItem-root': {
                                fontSize: '12px',
                            },
                        },
                    },
                },
            }}
            ref={ref}
            {...props}
        />
    );
});
