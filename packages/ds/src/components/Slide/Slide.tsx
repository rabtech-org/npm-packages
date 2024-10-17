import { forwardRef } from 'react';
import { Slide as MuiSlide, SlideProps as MuiSlideProps } from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type SlideProps = OmitCustomStyles<MuiSlideProps> &
    Omit<React.ComponentPropsWithoutRef<'div'>, 'style'>;

export const Slide = forwardRef((props: SlideProps, ref: SlideProps['ref']) => {
    return <MuiSlide ref={ref} {...props} />;
});
