import { forwardRef } from 'react';
import { List as MuiList, ListProps as MuiListProps } from '@mui/material';

export type ListProps = Pick<MuiListProps, 'ref' | 'children'> & {
    fullwidth?: boolean;
};

export const List = forwardRef((props: ListProps, ref: ListProps['ref']) => {
    const { fullwidth = true, ...rest } = props;
    return (
        <MuiList
            disablePadding
            ref={ref}
            {...rest}
            sx={{
                width: fullwidth ? '100%' : 'auto',
                '> .MuiListItem-root': {
                    '&:last-of-type': {
                        borderBottom: 'none',
                    },
                },
            }}
        />
    );
});
