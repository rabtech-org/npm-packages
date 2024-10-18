import { forwardRef } from 'react';
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material';

export type TooltipProps = Pick<
    MuiTooltipProps,
    | 'ref'
    | 'arrow'
    | 'children'
    | 'id'
    | 'onClose'
    | 'onOpen'
    | 'open'
    | 'title'
    | 'disableHoverListener'
> & { placement?: 'top' | 'bottom' | 'left' | 'right' };

export const Tooltip = forwardRef((props: TooltipProps, ref: TooltipProps['ref']) => {
    const { placement, arrow = true, ...rest } = props;

    return (
        <MuiTooltip
            arrow={arrow}
            PopperProps={{
                sx: {
                    '.MuiTooltip-tooltip': {
                        bgcolor: '#000',
                        fontSize: 10,
                        lineHeight: '14px',
                    },
                    '.MuiTooltip-arrow': {
                        '::before': {
                            bgcolor: '#000',
                        },
                    },

                    '.MuiTooltip-arrow.MuiTooltip-arrow': {
                        top: 1,
                    },
                    ...(placement === 'top' && {
                        '.MuiTooltip-arrow.MuiTooltip-arrow': {
                            bottom: 1,
                        },
                    }),
                    ...(placement === 'left' && {
                        '.MuiTooltip-arrow.MuiTooltip-arrow': {
                            right: 1,
                        },
                    }),
                    ...(placement === 'right' && {
                        '.MuiTooltip-arrow.MuiTooltip-arrow': {
                            left: 1,
                        },
                    }),
                },
            }}
            ref={ref}
            placement={placement}
            {...rest}
        />
    );
});
