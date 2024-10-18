import { forwardRef } from 'react';
import { TableCell as MuiTableCell, TableCellProps as MuiTableCellProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';
import { BordersProps, sizing, SizingProps, spacing, SpacingProps, styled } from '@mui/system';

export type TableCellProps = OmitCustomStyles<MuiTableCellProps> &
    SpacingProps &
    SizingProps &
    BordersProps & {
        size?: 'medium';
        borderB?: boolean;
    };

const StyledMuiTableCell = styled(MuiTableCell, {
    shouldForwardProp: prop =>
        prop !== 'size' && prop !== 'borderB' && prop !== 'minWidth' && prop !== 'width',
})<SpacingProps & SizingProps & BordersProps>`
    padding: ${({ theme }) => theme.spacing(1)};
    padding-left: ${({ theme }) => theme.spacing(2.5)};
    ${spacing}
    ${sizing}
`;

export const TableCell = forwardRef((props: TableCellProps, ref: TableCellProps['ref']) => {
    const { size, borderB, ...rest } = props;
    return (
        <StyledMuiTableCell
            ref={ref}
            {...rest}
            sx={{
                ...(size === 'medium' && {
                    minWidth: 128,
                    width: 128,
                }),

                ...(borderB && {
                    borderBottom: '1px solid #e0e0e0',
                }),
            }}
        />
    );
});
