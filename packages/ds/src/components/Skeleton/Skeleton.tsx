import { CSSProperties, forwardRef } from 'react';
import { Skeleton as MuiSkeleton, SkeletonProps as MuiSkeletonProps, styled } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';
import { typography, TypographyProps } from '@mui/system';

export type SkeletonProps = OmitCustomStyles<MuiSkeletonProps> & PickedTypographyProps & ExtraProps;

type PickedTypographyProps = Pick<TypographyProps, 'fontSize'>;

type ExtraProps = {
    flex?: CSSProperties['flex'];
};

const StyledSkeleton = styled(MuiSkeleton, {
    shouldForwardProp: prop => prop !== 'flex' && prop !== 'fontSize',
})<PickedTypographyProps & ExtraProps>`
    ${typography}
    flex: ${props => props.flex};
`;

export const Skeleton = forwardRef((props: SkeletonProps, ref: SkeletonProps['ref']) => {
    return <StyledSkeleton ref={ref} {...props} />;
});
