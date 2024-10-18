import { forwardRef } from 'react';
import {
    TableRow as MuiTableRow,
    TableRowProps as MuiTableRowProps,
    useTheme,
} from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type TableRowProps = OmitCustomStyles<MuiTableRowProps> & {
    bgGrey?: boolean;
};

export const TableRow = forwardRef((props: TableRowProps, ref: TableRowProps['ref']) => {
    const { bgGrey, ...rest } = props;
    const theme = useTheme();

    return (
        <MuiTableRow
            ref={ref}
            {...rest}
            sx={{
                bgcolor: bgGrey ? theme.palette.grey[200] : undefined,
            }}
        />
    );
});
