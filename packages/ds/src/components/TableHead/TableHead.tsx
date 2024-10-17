import { forwardRef } from 'react';
import { TableHead as MuiTableHead, TableHeadProps as MuiTableHeadProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type TableHeadProps = OmitCustomStyles<MuiTableHeadProps>;

export const TableHead = forwardRef((props: TableHeadProps, ref: TableHeadProps['ref']) => {
    return <MuiTableHead ref={ref} {...props} />;
});
