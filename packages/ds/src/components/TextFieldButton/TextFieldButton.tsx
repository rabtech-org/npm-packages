import { forwardRef } from 'react';
import { TextField, TextFieldProps } from '../TextField/TextField';
import { ClearIcon, SvgIconComponent } from '@/icons';
import {
    styled,
    TextFieldProps as MuiTextFieldProps,
    InputAdornment,
    useTheme,
} from '@mui/material';
import { IconButton } from '../IconButton/IconButton';

export type TextFieldButtonProps = Pick<
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
    | 'StartIcon'
> & {
    StartIcon?: SvgIconComponent;
    EndIcon?: SvgIconComponent;
    onClick?: () => void;
    onClear?: ({ value }: { value: TextFieldProps['value'] }) => void;
};

const StyledTextField = styled(TextField)<
    TextFieldProps & {
        InputProps?: MuiTextFieldProps['InputProps'];
    }
>(() => ({}));

export const TextFieldButton = forwardRef(
    (props: TextFieldButtonProps, ref: TextFieldButtonProps['ref']) => {
        const {
            value = '',
            onClick,
            onClear,
            disabled,
            contrastColor,
            textAlign,
            StartIcon,
            EndIcon,
            ...rest
        } = props;
        const theme = useTheme();

        return (
            <StyledTextField
                ref={ref}
                value={value}
                disabled={disabled}
                contrastColor={contrastColor}
                textAlign={textAlign}
                StartIcon={StartIcon}
                InputProps={{
                    onClick: disabled ? undefined : onClick,
                    endAdornment:
                        onClear && value ? (
                            <InputAdornment
                                position="end"
                                sx={{ minWidth: 28, justifyContent: 'center' }}
                            >
                                <IconButton
                                    size="small"
                                    disabled={disabled}
                                    contrastColor={contrastColor}
                                    invertedColor={!!disabled && !!contrastColor}
                                    onClick={e => {
                                        e.stopPropagation();
                                        onClear({ value });
                                    }}
                                >
                                    <ClearIcon />
                                </IconButton>
                            </InputAdornment>
                        ) : EndIcon ? (
                            <InputAdornment
                                position="end"
                                sx={{ minWidth: 28, justifyContent: 'center' }}
                            >
                                <EndIcon
                                    fontSize="small"
                                    htmlColor={
                                        disabled && contrastColor
                                            ? theme.palette[contrastColor].contrastText
                                            : theme.palette.text.secondary
                                    }
                                />
                            </InputAdornment>
                        ) : undefined,
                    sx: {
                        cursor: onClick && !disabled ? 'pointer' : undefined,
                        pr: textAlign === 'right' ? 0 : 1,
                        'input.MuiInputBase-input.MuiInputBase-input': {
                            pointerEvents: 'none',
                            textOverflow: 'ellipsis',
                            px: 1,
                            pr: textAlign === 'right' ? undefined : 0,
                            pl: textAlign === 'right' ? 0 : undefined,
                        },
                    },
                    inputProps: {
                        disabled: true,
                    },
                }}
                {...rest}
            />
        );
    },
);
