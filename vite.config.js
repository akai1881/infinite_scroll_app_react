import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    build: {
        target: 'es2015',
        minify: 'terser',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@constants': path.resolve(__dirname, 'src/constants'),
        },
    },
});
