/* eslint-disable no-undef */
// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/main.tsx'], // ✔️ correcto
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),       // ✔️ base alias
            '@Components': path.resolve(__dirname, 'resources/js/components'),
            '@Config': path.resolve(__dirname, 'resources/js/config'),
            '@Css': path.resolve(__dirname, 'resources/js/css'),
            '@Hooks': path.resolve(__dirname, 'resources/js/hooks'),
            '@Images': path.resolve(__dirname, 'resources/js/images'),
            '@Services': path.resolve(__dirname, 'resources/js/services'),
            '@Util': path.resolve(__dirname, 'resources/js/util'), // typo fix if "utiles" was "utils"
        },
    },
    server: {
        host: 'localhost',
        port: 5173,
        strictPort: true
    }
});