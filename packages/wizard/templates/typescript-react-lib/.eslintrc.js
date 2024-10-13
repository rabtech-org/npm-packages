module.exports = {
    root: true,
    env: {
        browser: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:import/warnings',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    ignorePatterns: [
        'node_modules',
        'playground',
        'test',
        'dist',
        'vite.config.js',
        '.eslintrc.js',
        'jest.config.js',
        'prettier.config.js',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: [
        'react',
        'eslint-plugin-react-hooks',
        '@typescript-eslint/eslint-plugin',
        'simple-import-sort',
        'prettier',
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'unicode-bom': 'error',
        'eol-last': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
