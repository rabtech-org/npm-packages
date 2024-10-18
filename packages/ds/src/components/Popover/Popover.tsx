import { CSSProperties, forwardRef } from 'react';
import { Popover as MuiPopover, PopoverProps as MuiPopoverProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type PopoverProps = OmitCustomStyles<MuiPopoverProps> & {
    zIndex?: CSSProperties['zIndex'];
};

export const Popover = forwardRef((props: PopoverProps, ref: PopoverProps['ref']) => {
    const { zIndex, ...rest } = props;
    return <MuiPopover ref={ref} {...rest} sx={{ zIndex }} />;
});
