import { forwardRef } from 'react';
import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps, styled } from '@mui/material';

export type SwitchProps = Pick<
    MuiSwitchProps,
    'ref' | 'onChange' | 'checked' | 'defaultChecked' | 'value' | 'color' | 'disabled' | 'size'
>;

const StyledSwitch = styled(
    MuiSwitch,
    {},
)<SwitchProps>(({ theme, color }) => {
    return {
        width: 68,
        height: 40,
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '7px',
        paddingBottom: '7px',
        display: 'flex',
        flexWrap: 'wrap',
        '& .MuiSwitch-switchBase': {
            padding: '10px',
            marginTop: '0px',
            marginLeft: '4px',
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(20px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor:
                        color === 'primary'
                            ? theme.palette.primary.main
                            : theme.palette.secondary.main,
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.3,
                },
            },
            '&.Mui-disabled': {
                backgroundColor: 'rgba(245, 245, 245, 0.5)',
                '.MuiSwitch-thumb': {
                    color: '#FFFFFF',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            boxShadow: 'none',
            width: 20,
            height: 20,
        },
        '& .MuiSwitch-track': {
            marginTop: '1px',
            width: 44,
            height: 24,
            backgroundColor: 'rgba(0 ,0 ,0 ,0.38)',
            borderRadius: 26 / 2,
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },

        '.MuiTouchRipple-child': {
            backgroundColor:
                color === 'primary' ? 'rgba(2, 27, 121, 0.3)' : 'rgba(7, 123, 255, 0.3)',
        },
    };
});

export const Switch = forwardRef((props: SwitchProps, ref: SwitchProps['ref']) => {
    return (
        <StyledSwitch
            ref={ref}
            focusVisibleClassName=".Mui-focusVisible"
            color="primary"
            {...props}
        />
    );
});
