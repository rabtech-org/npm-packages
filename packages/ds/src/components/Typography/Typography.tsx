import { CSSProperties, forwardRef } from 'react';
import {
    Typography as MuiTypography,
    TypographyProps as MuiTypographyProps,
    styled,
} from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type TypographyProps = OmitCustomStyles<
    Omit<MuiTypographyProps, 'fontSize' | 'fontWeight' | 'lineHeight' | 'textTransform'> &
        ExtraProps
>;

type ExtraProps = {
    wordBreak?: CSSProperties['wordBreak'];
    textDecoration?: CSSProperties['textDecoration'];
};

const StyledTypography = styled(MuiTypography, {
    shouldForwardProp: props => props !== 'textDecoration' && props !== 'wordBreak',
})<ExtraProps>(({ wordBreak, textDecoration }) => ({
    wordBreak,
    textDecoration,
}));

export const Typography = forwardRef((props: TypographyProps, ref: TypographyProps['ref']) => {
    return <StyledTypography ref={ref} {...props} />;
});
