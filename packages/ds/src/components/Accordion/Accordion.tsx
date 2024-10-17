import { forwardRef } from 'react';
import {
    AccordionDetails,
    AccordionSummary,
    Accordion as MuiAccordion,
    AccordionProps as MuiAccordionProps,
    Typography,
} from '@mui/material';
import { ExpandMoreIcon } from '@/icons';

export type AccordionProps = Pick<
    MuiAccordionProps,
    'ref' | 'children' | 'defaultExpanded' | 'disabled' | 'expanded' | 'onChange'
> & { summary: string; onSummaryClick?: () => void; disableGutters?: boolean };

export const Accordion = forwardRef((props: AccordionProps, ref: AccordionProps['ref']) => {
    const { children, disabled, summary, onSummaryClick, disableGutters, ...rest } = props;

    return (
        <MuiAccordion
            sx={{
                bgcolor: 'transparent',

                '&:before': {
                    display: 'none',
                },

                ...(disableGutters && {
                    '.MuiAccordionSummary-root, .MuiAccordionDetails-root': {
                        px: 0.5,
                    },
                }),

                '.MuiAccordionSummary-expandIconWrapper': {
                    '>svg': {
                        color: t => t.palette.action.active,
                        fontSize: 20,
                    },
                },

                ...(disabled && {
                    '&.MuiPaper-root.MuiAccordion-root.Mui-disabled': {
                        color: t => t.palette.text.disabled,
                        bgcolor: 'transparent',
                    },

                    '.MuiAccordionSummary-expandIconWrapper': {
                        '>svg': {
                            color: t => t.palette.action.disabled,
                        },
                    },
                }),
            }}
            disableGutters
            elevation={0}
            variant="elevation"
            disabled={disabled}
            ref={ref}
            {...rest}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={onSummaryClick}>
                <Typography variant="subtitle2">{summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </MuiAccordion>
    );
});
