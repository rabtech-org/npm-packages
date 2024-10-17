import { forwardRef } from 'react';
import { Collapse as MuiCollapse, CollapseProps as MuiCollapseProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type CollapseProps = OmitCustomStyles<MuiCollapseProps>;

export const Collapse = forwardRef((props: CollapseProps, ref: CollapseProps['ref']) => {
    return <MuiCollapse ref={ref} {...props} />;
});
