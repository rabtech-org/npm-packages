import { forwardRef } from 'react';
import {
    ButtonGroup as MuiButtonGroup,
    ButtonGroupProps as MuiButtonGroupProps,
} from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type ButtonGroupProps = OmitCustomStyles<MuiButtonGroupProps>;

export const ButtonGroup = forwardRef((props: ButtonGroupProps, ref: ButtonGroupProps['ref']) => {
    return <MuiButtonGroup ref={ref} {...props} />;
});
