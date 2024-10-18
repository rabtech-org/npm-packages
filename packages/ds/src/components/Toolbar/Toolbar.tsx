import { forwardRef } from 'react';
import { Toolbar as MuiToolbar, ToolbarProps as MuiToolbarProps } from '@mui/material';

export type ToolbarProps = Pick<MuiToolbarProps, 'ref' | 'children' | 'disableGutters'> & {
    px?: 0 | 1 | 2 | 3;
};

export const Toolbar = forwardRef((props: ToolbarProps, ref: ToolbarProps['ref']) => {
    const { px, ...rest } = props;
    return <MuiToolbar ref={ref} disableGutters {...rest} sx={{ px }} />;
});
