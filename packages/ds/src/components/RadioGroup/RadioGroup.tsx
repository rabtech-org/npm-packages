import { forwardRef } from 'react';
import { RadioGroup as MuiRadioGroup, RadioGroupProps as MuiRadioGroupProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type RadioGroupProps = OmitCustomStyles<MuiRadioGroupProps>;

export const RadioGroup = forwardRef((props: RadioGroupProps, ref: RadioGroupProps['ref']) => {
    return <MuiRadioGroup ref={ref} {...props} />;
}) as (props: RadioGroupProps, ref: RadioGroupProps['ref']) => JSX.Element;
