import { forwardRef } from 'react';
import {
    alpha,
    Badge,
    BadgeProps,
    Avatar as MuiAvatar,
    AvatarProps as MuiAvatarProps,
    styled,
} from '@mui/material';

export type AvatarProps = Pick<MuiAvatarProps, 'ref' | 'children' | 'src' | 'alt'> & {
    cursor?: React.CSSProperties['cursor'];
    color?: 'primary' | 'secondary' | 'grey';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    badge?: boolean;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'style'>;

const StyledAvatar = styled(MuiAvatar, {
    shouldForwardProp: prop =>
        prop !== 'cursor' && prop !== 'color' && prop !== 'size' && prop !== 'badge',
})<AvatarProps>(({ theme, cursor, color, size }) => ({
    cursor: cursor ?? 'auto',

    height: 34,
    width: 34,
    fontSize: 20,
    '.MuiSvgIcon-root': { fontSize: 20 },
    ...(size === 'xs' && {
        height: 18,
        width: 18,
        fontSize: 10,
        '.MuiSvgIcon-root': { fontSize: 16 },
    }),
    ...(size === 'sm' && {
        height: 30,
        width: 30,
        fontSize: 12,
        '.MuiSvgIcon-root': { fontSize: 18 },
    }),
    ...(size === 'lg' && {
        height: 36,
        width: 36,
        '.MuiSvgIcon-root': { fontSize: 24 },
    }),

    backgroundColor: '#BDBDBD',
    color: theme.palette.common.white,
    ...(color === 'primary' && {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
        color: theme.palette.primary.main,
    }),
    ...(color === 'secondary' && {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.focusOpacity),
        color: theme.palette.secondary.main,
    }),
}));

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    '& .MuiBadge-badge': {
        top: 19,
        right: 3,
        padding: 0,
        border: '2.5px solid #FFF',
        height: 12,
        width: 12,
        minWidth: 0,
        minHeight: 0,
    },
}));

export const Avatar = forwardRef((props: AvatarProps, ref: AvatarProps['ref']) => {
    return (
        <StyledBadge
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent=" "
            color="secondary"
            invisible={!props.badge}
        >
            <StyledAvatar ref={ref} badge={false} {...props} />
        </StyledBadge>
    );
});
