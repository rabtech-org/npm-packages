import { forwardRef } from 'react';
import { Menu as MuiMenu, MenuProps as MuiMenuProps, styled } from '@mui/material';
import { display, DisplayProps } from '@mui/system';

export type MenuProps = Pick<
    MuiMenuProps,
    | 'ref'
    | 'open'
    | 'id'
    | 'anchorEl'
    | 'anchorOrigin'
    | 'transformOrigin'
    | 'children'
    | 'onClose'
    | 'onClick'
    | 'keepMounted'
    | 'variant'
> & { maxHeight?: number } & DisplayProps;

const StyledMenu = styled(MuiMenu)<DisplayProps>`
    ${display}
`;

export const Menu = forwardRef((props: MenuProps, ref: MenuProps['ref']) => {
    const { maxHeight, ...rest } = props;
    return (
        <StyledMenu
            elevation={6}
            sx={{
                my: 1,
                ...(maxHeight && {
                    '.MuiPaper-root.MuiPopover-paper': {
                        maxHeight: { maxHeight },
                    },
                }),
            }}
            ref={ref}
            {...rest}
        />
    );
});
