import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'IdGenerator',
            fileName: 'index',
            formats: ['es']
        },
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            external: ['crypto']
        },
        minify: 'terser',
        terserOptions: {
            format: { comments: false },
            compress: { drop_console: true, drop_debugger: true },
            mangle: true,
        },
    },
    plugins: [
        dts({
            include: ['src/index.ts'],
            exclude: ['src/**/*.spec.ts', 'src/**/*.dev.ts'],
            outDir: 'dist',
            insertTypesEntry: true,
        }),
    ],
});
