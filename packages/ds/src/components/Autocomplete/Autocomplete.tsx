import { forwardRef } from 'react';
import {
    ChipTypeMap,
    Autocomplete as MuiAutocomplete,
    AutocompleteProps as MuiAutocompleteProps,
} from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';
import { SizingProps } from '@mui/system';
import { TextField, TextFieldProps } from '../TextField/TextField';

export type AutocompleteProps<
    Value,
    Multiple extends boolean | undefined = false,
    DisableClearable extends boolean | undefined = false,
    FreeSolo extends boolean | undefined = false,
    ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> = OmitCustomStyles<
    Omit<
        MuiAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>,
        'renderInput'
    >
> &
    PickedSizingProps & {
        label?: TextFieldProps['label'];
        error?: TextFieldProps['error'];
        required?: TextFieldProps['required'];
        helperText?: TextFieldProps['helperText'];
    };

type PickedSizingProps = Pick<SizingProps, 'width' | 'maxWidth' | 'minWidth'>;

export const Autocomplete = forwardRef(
    <
        Value,
        Multiple extends boolean | undefined,
        DisableClearable extends boolean | undefined,
        FreeSolo extends boolean | undefined,
        ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
    >(
        props: AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>,
        ref: AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>['ref'],
    ) => {
        const { width, maxWidth, minWidth, helperText, label, error, required, ...rest } = props;
        return (
            <MuiAutocomplete
                ref={ref}
                sx={{
                    width,
                    maxWidth,
                    minWidth,
                    '.MuiInputBase-root.MuiFilledInput-root': {
                        py: 0,
                        '.MuiInputBase-input': {
                            py: 0,
                        },
                    },
                }}
                {...rest}
                renderInput={params => (
                    <TextField
                        label={label}
                        required={required}
                        error={error}
                        helperText={helperText}
                        {...params}
                    />
                )}
            />
        );
    },
) as <
    Value,
    Multiple extends boolean | undefined = false,
    DisableClearable extends boolean | undefined = false,
    FreeSolo extends boolean | undefined = false,
    ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>(
    props: AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    ref: AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>['ref'],
) => JSX.Element;
