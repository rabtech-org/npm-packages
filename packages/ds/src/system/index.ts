import {
    margin as MuiMargin,
    MarginProps as MuiMarginProps,
    SimpleStyleFunction,
} from '@mui/system';

type MarginKeys = 'm' | 'mt' | 'mr' | 'mb' | 'ml' | 'mx' | 'my';
export const margin: SimpleStyleFunction<MarginKeys> = MuiMargin;
export type MarginProps = Pick<MuiMarginProps, MarginKeys>;
