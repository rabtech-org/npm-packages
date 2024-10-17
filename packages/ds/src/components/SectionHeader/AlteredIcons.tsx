import { SxProps, Theme, styled } from '@mui/material';

const SlashIcon = styled('div')(({ theme: t }) => ({
    height: 14,
    width: 14,
    display: 'flex',
    borderBottom: '3px solid',
    borderColor: t.palette.secondary.main,
    transform: 'rotate(-45deg)',
    marginBottom: 8,
}));

const AlteredIcon = ({ sx }: { sx?: SxProps<Theme> }) => <SlashIcon sx={sx} />;

export default AlteredIcon;
