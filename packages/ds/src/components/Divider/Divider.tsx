import { forwardRef } from 'react';
import { Divider as MuiDivider, DividerProps as MuiDividerProps, styled } from '@mui/material';
import { margin, MarginProps } from '@/system';
import { sizing, SizingProps } from '@mui/system';

export type DividerProps = Pick<MuiDividerProps, 'ref' | 'flexItem' | 'orientation' | 'variant'> &
    MarginProps &
    SizingProps;

const StyledDivider = styled(MuiDivider)<MarginProps & SizingProps>`
    ${margin}
    ${sizing}
`;

export const Divider = forwardRef((props: DividerProps, ref: DividerProps['ref']) => {
    return <StyledDivider ref={ref} {...props} />;
});
