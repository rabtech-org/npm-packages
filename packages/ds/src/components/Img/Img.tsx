import { CSSProperties, forwardRef } from 'react';
import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type ImgProps = OmitCustomStyles<MuiBoxProps> &
    Omit<React.ComponentPropsWithoutRef<'img'>, 'style'> & {
        objectFit?: CSSProperties['objectFit'];
        aspectRatio?: CSSProperties['aspectRatio'];
    };

export const Img = forwardRef((props: ImgProps, ref: ImgProps['ref']) => {
    const { objectFit, aspectRatio, ...rest } = props;
    return (
        <MuiBox
            component="img"
            ref={ref}
            {...rest}
            sx={{
                objectFit,
                aspectRatio,
            }}
        />
    );
});
