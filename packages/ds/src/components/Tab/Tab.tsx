import { forwardRef } from 'react';
import { Tab as MuiTab, TabProps as MuiTabProps, styled } from '@mui/material';

export type TabProps = Pick<MuiTabProps, 'ref' | 'disabled' | 'label' | 'value' | 'onClick'> & {
    color?: 'primary' | 'secondary';
};

const StyledTab = styled(MuiTab)<TabProps>(({ theme, disabled }) => {
    return {
        opacity: 1,
        borderRadius: theme.shape.borderRadius,
        alignItems: 'flex-start',
        minHeight: 42,
        padding: '9px 16px',

        textTransform: 'capitalize',
        fontSize: 14,
        fontWeight: 500,
        color: disabled ? theme.palette.text.disabled : theme.palette.text.primary,
    };
});

export const Tab = forwardRef((props: TabProps, ref: TabProps['ref']) => {
    return <StyledTab color="primary" ref={ref} {...props} />;
});
