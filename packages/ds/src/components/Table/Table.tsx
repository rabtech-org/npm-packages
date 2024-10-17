import { forwardRef } from 'react';
import { Table as MuiTable, TableProps as MuiTableProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type TableProps = OmitCustomStyles<MuiTableProps>;

export const Table = forwardRef((props: TableProps, ref: TableProps['ref']) => {
    return <MuiTable ref={ref} {...props} />;
});
