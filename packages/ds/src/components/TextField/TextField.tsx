import { forwardRef } from 'react';
import {
    InputAdornment,
    TextField as MuiTextField,
    TextFieldProps as MuiTextFieldProps,
    styled,
    useTheme,
} from '@mui/material';
import { Typography } from '../Typography/Typography';
import { SvgIconComponent } from '@/icons';

declare module '@mui/material/TextField' {
    interface TextFieldPropsColorOverrides {
        primary: true;
        error: true;
        secondary: false;
        success: false;
        info: false;
        warning: false;
    }

    interface TextFieldPropsSizeOverrides {
        xs: true;
    }
}

export type TextFieldProps = Pick<
    MuiTextFieldProps,
    | 'ref'
    | 'children'
    | 'defaultValue'
    | 'disabled'
    | 'error'
    | 'fullWidth'
    | 'helperText'
    | 'label'
    | 'maxRows'
    | 'minRows'
    | 'multiline'
    | 'onChange'
    | 'placeholder'
    | 'required'
    | 'id'
    | 'type'
    | 'value'
    | 'autoFocus'
    | 'onBlur'
    | 'onKeyDown'
    | 'onFocus'
    | 'rows'
> & {
    minWidth?: 'none' | 'md';
    contrastColor?: 'primary';
    textAlign?: 'left' | 'right';
    size?: 'xs' | 'small' | 'medium';
    StartIcon?: SvgIconComponent;
    endAdornment?: string | React.ReactNode;
};

const StyledTextField = styled(MuiTextField, {
    shouldForwardProp: prop =>
        prop !== 'contrastColor' && prop !== 'minWidth' && prop !== 'textAlign',
})<TextFieldProps>(
    ({ theme, size, disabled, error, multiline, minWidth, contrastColor, textAlign }) => {
        const color = contrastColor ? theme.palette[contrastColor].contrastText : undefined;
        const disabledBgcolor = contrastColor
            ? theme.palette.contrastAction.disabledBackground
            : 'rgba(0,0,0,0.05)';

        return {
            backgroundColor: 'transparent',

            minWidth: !minWidth || minWidth === 'none' ? undefined : '100px',

            '.MuiInputBase-root.MuiFilledInput-root': {
                border: error && !disabled ? '1px solid' : 'none',
                borderColor: error && !disabled ? theme.palette.error.main : 'unset',
                borderRadius: theme.shape.borderRadius,
                boxShadow: disabled ? 'none' : theme.shadows[2],
                backgroundColor: disabled ? disabledBgcolor : theme.palette.common.white,

                ...(textAlign === 'right' && {
                    flexDirection: 'row-reverse',
                }),

                input: {
                    textAlign,
                },

                color: theme.palette.text.primary,
                ...(disabled && {
                    '.MuiInputBase-input.MuiFilledInput-input.Mui-disabled': {
                        WebkitTextFillColor: color ?? theme.palette.text.primary,
                    },
                }),

                ...(multiline && {
                    padding: theme.spacing(1.25),

                    textarea: {
                        padding: 0,
                        minHeight: 0,
                        lineHeight: 'normal',
                    },
                }),

                ...(!disabled && {
                    ':hover': {
                        boxShadow: theme.shadows[4],
                    },
                    ':focused': {
                        boxShadow: theme.shadows[6],
                    },
                }),

                '::before': {
                    display: 'none',
                },
                '::after': {
                    display: 'none',
                },
            },

            '.MuiInputBase-input.MuiFilledInput-input': {
                ...theme.typography['input-value'],

                paddingLeft: '10px',
                paddingRight: '10px',
                paddingTop: '0',
                paddingBottom: '0',

                minHeight: '40px',
                ...(size === 'xs' && {
                    minHeight: '24px',
                }),
                ...(size === 'small' && {
                    minHeight: '28px',
                }),
            },

            '.MuiFormLabel-root.MuiInputLabel-root': {
                ...theme.typography['input-label'],
                position: 'relative',
                transform: 'none',
                left: 'unset',
                marginBottom: theme.spacing(1),
                textAlign,

                color: color ?? theme.palette.text.secondary,
                ...(error &&
                    !disabled && {
                        color: theme.palette.error.main,
                    }),
            },
        };
    },
);

export const TextField = forwardRef((props: TextFieldProps, ref: TextFieldProps['ref']) => {
    const { endAdornment, StartIcon, ...rest } = props;
    const theme = useTheme();

    return (
        <StyledTextField
            InputLabelProps={{ disableAnimation: true, shrink: true }}
            variant="filled"
            ref={ref}
            {...rest}
            InputProps={{
                startAdornment: StartIcon ? (
                    <StartIcon fontSize="small" htmlColor={theme.palette.text.secondary} />
                ) : undefined,
                endAdornment: endAdornment ? (
                    <InputAdornment disableTypography position="end">
                        <Typography variant="input-value">{endAdornment}</Typography>
                    </InputAdornment>
                ) : undefined,
                ...((rest as MuiTextFieldProps).InputProps ?? {}),
            }}
        />
    );
});
