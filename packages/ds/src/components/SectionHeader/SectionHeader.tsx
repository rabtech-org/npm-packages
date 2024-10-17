import React, { forwardRef } from 'react';

import { StackProps } from '../Stack/Stack';
import { Box, Stack, Typography } from '@mui/material';
import AlteredIcon from './AlteredIcons';

export type SectionHeaderProps = {
    ref?: StackProps['ref'];
    label: string;
    endAdornment?: React.ReactNode;
    divider?: boolean;
};

export const SectionHeader = forwardRef(
    (props: SectionHeaderProps, ref: SectionHeaderProps['ref']) => {
        const { label, endAdornment, divider = true } = props;
        return (
            <Stack
                ref={ref}
                direction="row"
                width="100%"
                gap={1}
                py={2}
                borderBottom={divider ? '1px solid' : undefined}
                borderColor="divider"
                alignItems="center"
                justifyContent="flex-start"
            >
                <AlteredIcon sx={{ flex: 'none' }} />
                <Typography flex={1} variant="subtitle1">
                    {label}
                </Typography>
                <Box flex="none">{endAdornment}</Box>
            </Stack>
        );
    },
);
