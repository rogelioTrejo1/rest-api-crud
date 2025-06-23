// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/main.tsx'],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'resources/js'),
        },
    },
    server: {
        host: 'localhost',
        port: 5173,
        strictPort: true
    }
});