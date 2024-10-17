import { Box, BoxProps } from '@mui/material';

export type LogoProps = {
    src: string;
    height?: BoxProps['height'];
    width?: BoxProps['width'];
    alt?: string;
} & Omit<React.ComponentPropsWithoutRef<'img'>, 'style'>;

export const Logo = (props: LogoProps) => {
    const { src, ...rest } = props;
    return <Box component="img" alt="logo" src={src} height={30} width="auto" {...rest} />;
};
