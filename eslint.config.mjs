// eslint.config.js
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: reactPlugin,
            'jsx-a11y': jsxA11yPlugin,
            import: importPlugin,
        },
        rules: {
            'no-unused-vars': 'warn',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'jsx-a11y/anchor-is-valid': 'warn',
            'import/no-unresolved': 'error',
            'import/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
                    'newlines-between': 'always',
                },
            ],
        },
        settings: {
            react: {
                version: 'detect', // Automatically detect the React version
            },
            'import/resolver': {
                alias: {
                    map: [
                        ['@', './src'],
                        ['@components', './src/components'],
                        ['@hooks', './src/hooks'],
                        ['@api', './src/api'],
                        ['@config', './src/config'],
                        ['@pages', './src/pages'],
                        ['@constants', './src/constants'],
                    ],
                    extensions: ['.js', '.jsx', '.json'], // Specify file extensions
                },
                node: {
                    moduleDirectory: ['node_modules', 'src/'],
                },
            },
        },
    },
];
