import React, { forwardRef } from 'react';

import { Stack } from '@mui/material';
import { SectionHeader, SectionHeaderProps } from '../SectionHeader/SectionHeader';

export type SectionProps = SectionHeaderProps & { children?: React.ReactNode };

export const Section = forwardRef((props: SectionProps, ref: SectionProps['ref']) => {
    const { children, ...rest } = props;
    return (
        <Stack ref={ref}>
            <SectionHeader {...rest} />
            {children}
        </Stack>
    );
});
