import { forwardRef } from 'react';
import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from '@mui/material';

export type TabsProps = Pick<
    MuiTabsProps,
    'ref' | 'action' | 'children' | 'onChange' | 'value' | 'variant'
> & { color?: 'primary' | 'secondary' };

export const Tabs = forwardRef((props: TabsProps, ref: TabsProps['ref']) => {
    const { color } = props;
    return (
        <MuiTabs
            sx={{
                overflowY: 'auto',
                '.MuiTabs-flexContainer': { gap: 0.1 },

                '.MuiButtonBase-root.MuiTab-root.Mui-selected': {
                    fontSize: 14,
                    fontWeight: 700,
                    color: t => t.palette.primary.main,
                    bgcolor: '#E7E9F5',
                    ...(color === 'secondary' && {
                        color: t => t.palette.secondary.main,
                        bgcolor: '#E3F4FF',
                    }),
                },
            }}
            color="primary"
            orientation="vertical"
            variant="fullWidth"
            TabIndicatorProps={{ sx: { display: 'none' } }}
            visibleScrollbar
            ref={ref}
            {...props}
        />
    );
});
