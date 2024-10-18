import { CSSProperties, forwardRef } from 'react';
import {
    Box,
    ListItem as MuiListItem,
    ListItemProps as MuiListItemProps,
    useTheme,
} from '@mui/material';

export type ListItemProps = Pick<
    MuiListItemProps,
    | 'ref'
    | 'children'
    | 'dense'
    | 'disableGutters'
    | 'disablePadding'
    | 'divider'
    | 'onClick'
    | 'selected'
    | 'disabled'
    | 'onClick'
> & {
    label?: React.ReactNode;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    cursor?: CSSProperties['cursor'];
};

export const ListItem = forwardRef((props: ListItemProps, ref: ListItemProps['ref']) => {
    const theme = useTheme();
    const { label, startAdornment, endAdornment, children, cursor, ...rest } = props;

    return (
        <MuiListItem
            divider
            ref={ref}
            {...rest}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 1,
                cursor,
            }}
        >
            {startAdornment && (
                <Box flex="none" color="action.active" fontSize={20}>
                    {startAdornment}
                </Box>
            )}

            {children && (
                <Box
                    flex={1}
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    overflow="hidden"
                >
                    <Box
                        color={theme.palette.text.secondary}
                        fontSize={12}
                        fontWeight={400}
                        maxWidth="100%"
                        sx={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {label}
                    </Box>
                    <Box
                        color={theme.palette.text.primary}
                        fontSize={14}
                        fontWeight={500}
                        lineHeight="22px"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                        maxWidth="100%"
                    >
                        {children}
                    </Box>
                </Box>
            )}

            {endAdornment && (
                <Box flex="none" color="action.active" fontSize={20}>
                    {endAdornment}
                </Box>
            )}
        </MuiListItem>
    );
});
