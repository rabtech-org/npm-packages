import { forwardRef } from 'react';
import { TableBody as MuiTableBody, TableBodyProps as MuiTableBodyProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type TableBodyProps = OmitCustomStyles<MuiTableBodyProps>;

export const TableBody = forwardRef((props: TableBodyProps, ref: TableBodyProps['ref']) => {
    return <MuiTableBody ref={ref} {...props} />;
});
