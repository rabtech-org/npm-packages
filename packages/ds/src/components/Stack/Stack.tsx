import { forwardRef, CSSProperties } from 'react';
import { Stack as MuiStack, StackProps as MuiStackProps, styled } from '@mui/material';
import { StyleFunction, unstable_styleFunctionSx } from '@mui/system';
import { OmitCustomStyles } from '@/types/typeUtils';

export type StackProps = Omit<OmitCustomStyles<MuiStackProps>, 'spacing'> & ExtraProps;

type ExtraProps = {
    overflowY?: CSSProperties['overflowY'];
    overflowX?: CSSProperties['overflowX'];
    opacity?: CSSProperties['opacity'];
    cursor?: CSSProperties['cursor'];
    aspectRatio?: CSSProperties['aspectRatio'];
    hideScrollbar?: boolean;
};

const StyledStack = styled(MuiStack, {
    shouldForwardProp: prop =>
        prop !== 'overflowY' &&
        prop !== 'overflowX' &&
        prop !== 'opacity' &&
        prop !== 'cursor' &&
        prop !== 'aspectRatio' &&
        prop !== 'hideScrollbar',
})<ExtraProps>(props => {
    const { overflowY, overflowX, opacity, cursor, aspectRatio, hideScrollbar } = props;
    return {
        overflowY,
        overflowX,
        opacity,
        cursor,
        aspectRatio,

        ...(hideScrollbar && {
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '::-webkit-scrollbar': {
                display: 'none',
            },
        }),
    };
});

export const Stack = forwardRef((props: StackProps, ref: StackProps['ref']) => {
    return <StyledStack ref={ref} {...props} />;
});

export const StackUnstable = styled(Stack)<StackProps>(
    unstable_styleFunctionSx as StyleFunction<StackProps>,
);
