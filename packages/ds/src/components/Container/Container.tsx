import { forwardRef } from 'react';
import {
    Container as MuiContainer,
    ContainerProps as MuiContainerProps,
    styled,
} from '@mui/material';
import { sizing, SizingProps, spacing, SpacingProps } from '@mui/system';
import { OmitCustomStyles } from '@/types/typeUtils';

export type ContainerProps = OmitCustomStyles<MuiContainerProps> & SpacingProps & SizingProps;

const StyledContainerWithSystem = styled(MuiContainer)<SpacingProps & SizingProps>`
    ${spacing}
    ${sizing}
`;

export const Container = forwardRef((props: ContainerProps, ref: ContainerProps['ref']) => {
    return <StyledContainerWithSystem ref={ref} {...props} />;
});
