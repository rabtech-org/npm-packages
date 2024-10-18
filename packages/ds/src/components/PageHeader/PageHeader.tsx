import React, { forwardRef } from 'react';
import { StackProps } from '../Stack/Stack';

import { Box, Stack, Toolbar, Typography } from '@mui/material';
import { ChevronLeftIcon } from '@/icons';
import { IconButton, IconButtonProps } from '../IconButton/IconButton';
import { styled, StyleFunction, unstable_styleFunctionSx } from '@mui/system';

export type PageHeaderProps = {
    ref?: StackProps['ref'];
    children?: React.ReactNode;
    divider?: boolean;
    title: string;
    onBack?: React.MouseEventHandler<HTMLButtonElement>;
    overtext?: string;
    color?: 'default' | 'contrastText';
    height?: 'toolbar';
    endAdornment?: React.ReactNode;
    disableGutters?: boolean;
    nowrap?: boolean;
};

const StyledIconButton = styled(IconButton)<IconButtonProps>(
    unstable_styleFunctionSx as StyleFunction<IconButtonProps>,
);

export const PageHeader = forwardRef((props: PageHeaderProps, ref: PageHeaderProps['ref']) => {
    const {
        divider,
        onBack,
        overtext,
        title,
        color,
        height,
        endAdornment,
        disableGutters,
        nowrap,
    } = props;
    return (
        <Stack
            ref={ref}
            direction="row"
            width="100%"
            height={height}
            gap={0.5}
            px={disableGutters ? 0 : 2}
            alignItems="center"
            justifyContent="flex-start"
            sx={{
                whiteSpace: nowrap ? 'nowrap' : undefined,
            }}
        >
            <Toolbar
                disableGutters
                sx={{
                    width: '100%',
                    py: height === 'toolbar' ? 0 : 1,

                    ...(height !== 'toolbar' && {
                        height: 'auto',
                        '&.MuiToolbar-root': {
                            minHeight: 0,
                        },
                    }),

                    ...(divider && {
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                    }),
                }}
            >
                {onBack && (
                    <StyledIconButton
                        color="primary"
                        invertedColor={color === 'contrastText'}
                        onClick={onBack}
                        sx={{
                            '>svg': {
                                ...(color !== 'contrastText' && {
                                    color: t => t.palette.action.active,
                                }),
                                fontSize: 24,
                            },
                        }}
                    >
                        <ChevronLeftIcon />
                    </StyledIconButton>
                )}
                <Stack flex="1" py={0.5} overflow="hidden">
                    {overtext && (
                        <Typography
                            variant="caption"
                            color={
                                color === 'contrastText' ? 'primary.contrastText' : 'text.secondary'
                            }
                            overflow="hidden"
                            textOverflow="ellipsis"
                        >
                            {overtext}
                        </Typography>
                    )}
                    <Typography
                        variant="h6"
                        color={color === 'contrastText' ? 'primary.contrastText' : undefined}
                        overflow="hidden"
                        textOverflow="ellipsis"
                    >
                        {title}
                    </Typography>
                </Stack>
                <Box>{endAdornment}</Box>
            </Toolbar>
        </Stack>
    );
});
