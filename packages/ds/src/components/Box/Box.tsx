import { forwardRef, CSSProperties } from 'react';
import { Box as MuiBox, BoxProps as MuiBoxProps, styled } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';
import { StyleFunction, unstable_styleFunctionSx } from '@mui/system';

export type BoxProps = OmitCustomStyles<MuiBoxProps> &
    Omit<React.ComponentPropsWithoutRef<'div'>, 'style'> &
    ExtraProps;

type ExtraProps = {
    overflowY?: CSSProperties['overflowY'];
    overflowX?: CSSProperties['overflowX'];
    opacity?: CSSProperties['opacity'];
    cursor?: CSSProperties['cursor'];
    transform?: CSSProperties['transform'];
    textDecoration?: CSSProperties['textDecoration'];
    float?: CSSProperties['float'];
    hideScrollbar?: boolean;
};

export const Box = forwardRef((props: BoxProps, ref: BoxProps['ref']) => {
    const {
        overflowY,
        overflowX,
        opacity,
        cursor,
        transform,
        textDecoration,
        float,
        hideScrollbar,
        ...rest
    } = props;
    return (
        <MuiBox
            ref={ref}
            {...rest}
            sx={{
                overflowY,
                overflowX,
                opacity,
                cursor,
                transform,
                textDecoration,
                float,

                ...(hideScrollbar && {
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }),
            }}
        />
    );
});

export const BoxUnstable = styled(Box)<BoxProps>(
    unstable_styleFunctionSx as StyleFunction<BoxProps>,
);
