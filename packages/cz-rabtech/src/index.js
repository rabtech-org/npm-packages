/* eslint-disable prefer-destructuring */
/* eslint-disable global-require */
import { configLoader } from 'commitizen';
import engine from './engine';
import _types from './types';

const config = configLoader.load() || {};
const options = {
    types: config.types || _types,
    maxHeaderWidth: config.maxHeaderWidth || 100,
    maxLineWidth: config.maxLineWidth || 100,
};

(async opts => {
    try {
        // eslint-disable-next-line import/no-extraneous-dependencies
        const commitlintLoad = require('@commitlint/load').default;
        const clConfig = await commitlintLoad();
        if (clConfig.rules) {
            const maxHeaderLengthRule = clConfig.rules['header-max-length'];
            if (
                typeof maxHeaderLengthRule === 'object' &&
                maxHeaderLengthRule.length >= 3 &&
                !config.maxHeaderWidth
            ) {
                // eslint-disable-next-line no-param-reassign
                opts.maxHeaderWidth = maxHeaderLengthRule[2];
            }
        }
    } catch (err) {
        //
    }
})(options);

export default engine(options);
