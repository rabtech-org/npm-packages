import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { name, peerDependencies } from './package.json';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const libName = name.split('/')[1];

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/assets/fonts/Montserrat/*',
                    dest: 'assets/fonts/Montserrat',
                },
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: format => `${libName}.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(peerDependencies)],
        },
        sourcemap: true,
    },
});
