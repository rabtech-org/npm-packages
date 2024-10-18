import { forwardRef } from 'react';
import { Grid as MuiGrid, GridProps as MuiGridProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type GridProps = OmitCustomStyles<MuiGridProps>;

export const Grid = forwardRef((props: GridProps, ref: GridProps['ref']) => {
    return <MuiGrid ref={ref} {...props} />;
});
