import { CSSProperties, forwardRef } from 'react';
import { Paper as MuiPaper, PaperProps as MuiPaperProps, styled } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';
import { palette, PaletteProps } from '@mui/system';

export type PaperProps = Omit<
    OmitCustomStyles<MuiPaperProps>,
    'classes' | 'component' | 'elevation' | 'square' | 'className'
> &
    PickedPaletteProps &
    ExtraProps;

type ExtraProps = {
    overflow?: CSSProperties['overflow'];
    overflowX?: CSSProperties['overflowX'];
    overflowY?: CSSProperties['overflowY'];
    elevation?: 0 | 2 | 4 | 6;
};

type PickedPaletteProps = Pick<PaletteProps, 'bgcolor'>;

const StyledPaper = styled(MuiPaper, {
    shouldForwardProp: prop => prop !== 'bgcolor',
})<PaperProps>`
    ${palette}
`;

export const Paper = forwardRef((props: PaperProps, ref: PaperProps['ref']) => {
    const { elevation, variant, overflow, overflowY, overflowX, ...rest } = props;
    return (
        <StyledPaper
            elevation={elevation ?? 0}
            variant={variant ?? 'elevation'}
            ref={ref}
            {...rest}
            sx={{
                overflow,
                overflowY,
                overflowX,
            }}
        />
    );
});
