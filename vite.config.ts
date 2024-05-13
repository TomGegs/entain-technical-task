/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        poolOptions: {
            singleThread: true,
        },
        environment: 'jsdom',
    },
});
