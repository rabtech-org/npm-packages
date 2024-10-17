import { CSSProperties, forwardRef } from 'react';
import { Backdrop as MuiBackdrop, BackdropProps as MuiBackdropProps, styled } from '@mui/material';
import { positions, PositionsProps } from '@mui/system';

export type BackdropProps = Pick<MuiBackdropProps, 'ref' | 'open' | 'children' | 'invisible'> &
    PickedPositionProps &
    ExtraProps;

type PickedPositionProps = Pick<PositionsProps, 'position' | 'zIndex'>;
type ExtraProps = {
    backdropFilter?: CSSProperties['backdropFilter'];
    pointerEvents?: CSSProperties['pointerEvents'];
};

const StyledBackdrop = styled(MuiBackdrop, {
    shouldForwardProp: prop =>
        prop !== 'backdropFilter' &&
        prop !== 'position' &&
        prop !== 'zIndex' &&
        prop !== 'pointerEvents',
})<PickedPositionProps & ExtraProps>`
    ${positions}
    backdrop-filter: ${props => props.backdropFilter};
    pointer-events: ${props => props.pointerEvents};
`;

export const Backdrop = forwardRef((props: BackdropProps, ref: BackdropProps['ref']) => {
    return <StyledBackdrop ref={ref} {...props} />;
});
