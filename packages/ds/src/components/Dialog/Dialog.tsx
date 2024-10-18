import { forwardRef } from 'react';
import {
    Box,
    DialogActions,
    DialogContent,
    Dialog as MuiDialog,
    DialogProps as MuiDialogProps,
    Typography,
} from '@mui/material';
import { Button, ButtonProps } from '../Button/Button';
import { IconButton, IconButtonProps } from '../IconButton/IconButton';
import { CloseIcon } from '@/icons';
import { AppBar, AppBarProps } from '../AppBar/AppBar';

export type DialogProps = Pick<
    MuiDialogProps,
    'ref' | 'children' | 'open' | 'onClose' | 'maxWidth' | 'fullWidth' | 'fullScreen' | 'onClick'
> & {
    minWidth?: MuiDialogProps['maxWidth'];
    header?: {
        title?: string;
        onClose?: React.MouseEventHandler<HTMLButtonElement>;
        actions?: (IconButtonAction | ButtonAction)[];
        color?: AppBarProps['color'];
    };
    disablePaddings?: boolean;
    bgcolor?: 'background.paper' | 'background.secondary';
    actions?: ButtonAction[];
};

type ButtonAction = Pick<
    ButtonProps,
    | 'variant'
    | 'color'
    | 'disabled'
    | 'endIcon'
    | 'startIcon'
    | 'invertedColor'
    | 'loading'
    | 'onClick'
> & { label: ButtonProps['children']; hidden?: boolean };

type IconButtonAction = Pick<
    IconButtonProps,
    'variant' | 'color' | 'disabled' | 'invertedColor' | 'onClick'
> & { icon: IconButtonProps['children']; hidden?: boolean };

export const Dialog = forwardRef((props: DialogProps, ref: DialogProps['ref']) => {
    const { fullScreen } = props;
    const { actions, children, header, disablePaddings = fullScreen, bgcolor, ...rest } = props;

    return (
        <MuiDialog
            ref={ref}
            PaperProps={{
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor,
                    boxShadow: 24,
                    p: 0,
                },
            }}
            {...rest}
        >
            {/* Header */}
            {header && (
                <AppBar color={header.color ?? 'transparent'}>
                    <Box flex={1}>
                        {header.onClose && (
                            <IconButton
                                invertedColor={header.color === 'primary'}
                                contrastColor={header.color === 'primary' ? 'primary' : undefined}
                                onClick={header.onClose}
                                size="large"
                            >
                                <CloseIcon />
                            </IconButton>
                        )}
                    </Box>
                    <Box p={1}>
                        <Typography
                            variant="h6"
                            color={
                                header.color === 'primary' ? 'primary.contrastText' : 'text.primary'
                            }
                        >
                            {header.title}
                        </Typography>
                    </Box>
                    <Box flex={1}>
                        {header.actions?.map(
                            (action, key) =>
                                !action.hidden &&
                                (isButtonAction(action) ? (
                                    <Button
                                        key={key}
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        contrastColor={
                                            header.color === 'primary' ? 'primary' : undefined
                                        }
                                        {...action}
                                    >
                                        {action.label}
                                    </Button>
                                ) : (
                                    <IconButton
                                        key={key}
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        contrastColor={
                                            header.color === 'primary' ? 'primary' : undefined
                                        }
                                        {...action}
                                    >
                                        {action.icon}
                                    </IconButton>
                                )),
                        )}
                    </Box>
                </AppBar>
            )}

            {/* Content */}
            <DialogContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    ...(disablePaddings && {
                        p: 0,
                    }),
                }}
            >
                {children}
            </DialogContent>

            {/* Actions */}
            {actions && (
                <DialogActions
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        pb: 3,
                        gap: 1,
                    }}
                >
                    {actions.map(
                        (action, key) =>
                            !action.hidden && (
                                <Button key={key} variant="contained" size="large" {...action}>
                                    {action.label}
                                </Button>
                            ),
                    )}
                </DialogActions>
            )}
        </MuiDialog>
    );
});

function isButtonAction(action: IconButtonAction | ButtonAction): action is ButtonAction {
    return (action as ButtonAction).label !== undefined;
}
