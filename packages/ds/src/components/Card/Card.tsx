import { CSSProperties, forwardRef } from 'react';
import { Card as MuiCard, CardProps as MuiCardProps, styled } from '@mui/material';
import { PaletteProps, sizing, SizingProps, spacing, SpacingProps } from '@mui/system';

export type CardProps = Pick<MuiCardProps, 'ref' | 'children' | 'onClick' | 'id'> &
    SizingProps &
    SpacingProps &
    ExtraProps;

type ExtraProps = {
    cursor?: CSSProperties['cursor'];
    aspectRatio?: CSSProperties['aspectRatio'];
    elevation?: 0 | 2 | 4 | 6;
    bgcolor?: PaletteProps['bgcolor'];
    border?: 'error' | 'warning' | 'transparent';
    flexShrink?: CSSProperties['flexShrink'];
    overflow?: CSSProperties['overflow'];
};

const StyledCard = styled(MuiCard, {
    shouldForwardProp: prop => prop !== 'elevation' && prop !== 'minWidth',
})<CardProps>`
    ${sizing}
    ${spacing}
`;

export const Card = forwardRef((props: CardProps, ref: CardProps['ref']) => {
    const {
        cursor,
        aspectRatio,
        bgcolor,
        border,
        elevation = 2,
        flexShrink,
        overflow,
        ...rest
    } = props;
    return (
        <StyledCard
            ref={ref}
            {...rest}
            sx={{
                cursor,
                aspectRatio,
                bgcolor,
                boxShadow: elevation,
                flexShrink,
                overflow,

                ...(border && {
                    border: '2px solid',
                    borderColor: t =>
                        border === 'transparent' ? 'transparent' : t.palette[border].main,
                }),
            }}
        />
    );
});
