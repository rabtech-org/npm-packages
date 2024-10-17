import React, { forwardRef } from 'react';
import {
    Box,
    Checkbox as MuiCheckbox,
    CheckboxProps as MuiCheckboxProps,
    styled,
    SxProps,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';

declare module '@mui/material/Checkbox' {
    interface CheckboxPropsColorOverrides {
        default: false;
        success: false;
        info: false;
        warning: false;
    }
}

export type CheckboxProps = Pick<
    MuiCheckboxProps,
    | 'ref'
    | 'color'
    | 'disabled'
    | 'checked'
    | 'readOnly'
    | 'required'
    | 'value'
    | 'onChange'
    | 'onClick'
    | 'id'
    | 'indeterminate'
    | 'size'
>;

const StyledCheckbox = styled(MuiCheckbox)<CheckboxProps>(({ theme, disabled, size }) => {
    return {
        ...(size === 'small' && {
            padding: '11.5px',
        }),
        ...(size === 'medium' && {
            padding: '12px',
        }),
        ...(size === 'large' && {
            padding: '12.5px',
        }),

        ...(!disabled && {
            '&:hover': {
                '.MuiBox-root': {
                    boxShadow: theme.shadows[4],
                },
            },
            '&:focus': {
                '.MuiBox-root': {
                    boxShadow: theme.shadows[6],
                },
            },
        }),
    };
});

const UncheckedIcon = (props: { size?: string; isError?: boolean; isDisabled?: boolean }) => {
    const { size, isError, isDisabled } = props;
    return (
        <Box
            sx={{
                borderRadius: '2px',
                bgcolor: t => (isDisabled ? t.palette.common.black : t.palette.common.white),
                opacity: isDisabled ? 0.05 : 1,
                boxShadow: t => (isDisabled ? 'none' : t.shadows[2]),

                ...(isError && {
                    border: '1px solid',
                    borderColor: t => t.palette.error.main,
                }),

                width: 18,
                height: 18,
                ...(size === 'small' && {
                    width: 15,
                    height: 15,
                }),
                ...(size === 'large' && {
                    width: 21,
                    height: 21,
                }),
            }}
        />
    );
};
const CheckedIcon = (props: {
    size?: string;
    color?: string;
    isDisabled?: boolean;
    children: React.ReactNode;
}) => {
    const { size, color, isDisabled, children } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                borderRadius: '2px',
                boxShadow: t => (isDisabled ? 'none' : t.shadows[2]),

                width: 18,
                height: 18,
                ...(size === 'small' && {
                    width: 15,
                    height: 15,
                }),
                ...(size === 'large' && {
                    width: 21,
                    height: 21,
                }),

                color: t => t.palette.common.white,
                bgcolor: t => t.palette.primary.main,
                opacity: isDisabled ? 0.3 : 1,
                ...(color === 'secondary' && {
                    bgcolor: t => t.palette.secondary.main,
                }),
                ...(color === 'error' && {
                    bgcolor: t => t.palette.error.main,
                }),
            }}
        >
            {children}
        </Box>
    );
};
const StylesCheckboxIcon = (props: { size?: string; isIndeterminate?: boolean }) => {
    const { size, isIndeterminate } = props;

    const iconSx: SxProps = {
        fontSize: 18,
        ...(size === 'small' && {
            fontSize: 15,
        }),
        ...(size === 'large' && {
            fontSize: 21,
        }),
    };

    return isIndeterminate ? <RemoveIcon sx={iconSx} /> : <CheckIcon sx={iconSx} />;
};

export const Checkbox = forwardRef((props: CheckboxProps, ref: CheckboxProps['ref']) => {
    const { size = 'medium' } = props;

    return (
        <StyledCheckbox
            icon={
                <UncheckedIcon
                    size={size}
                    isError={props.color === 'error'}
                    isDisabled={props.disabled}
                />
            }
            checkedIcon={
                <CheckedIcon size={size} color={props.color} isDisabled={props.disabled}>
                    <StylesCheckboxIcon size={size} />
                </CheckedIcon>
            }
            indeterminateIcon={
                <CheckedIcon size={size} color={props.color} isDisabled={props.disabled}>
                    <StylesCheckboxIcon size={size} isIndeterminate />
                </CheckedIcon>
            }
            disableRipple
            ref={ref}
            {...props}
        />
    );
});
