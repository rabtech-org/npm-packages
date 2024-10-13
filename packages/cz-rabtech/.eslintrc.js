module.exports = {
    env: {
        es2021: true,
    },
    extends: ['airbnb-base', 'prettier'],
    ignorePatterns: ['node_modules', '.eslintrc.js', 'prettier.config.js', 'lib'],
    plugins: ['simple-import-sort', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'no-nested-ternary': 'off',
    },
};
