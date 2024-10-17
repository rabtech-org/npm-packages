import { forwardRef } from 'react';
import {
    CardContent as MuiCardContent,
    CardContentProps as MuiCardContentProps,
} from '@mui/material';
import { OmitCustomStyles } from '@/types/typeUtils';

export type CardContentProps = OmitCustomStyles<MuiCardContentProps>;

export const CardContent = forwardRef((props: CardContentProps, ref: CardContentProps['ref']) => {
    return (
        <MuiCardContent
            ref={ref}
            {...props}
            sx={{
                '&.MuiCardContent-root:last-child': {
                    pb: 2,
                },
            }}
        />
    );
});
