import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import removeConsole from 'vite-plugin-remove-console';

// import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
// import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

// https://vitejs.dev/config/
/* A function that returns a configuration object of vitejs. */
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    // convert the string number to a number
    const portToUseString: string = process.env.VITE_PORT || '3000';
    const portToUserNumber: number = parseInt(portToUseString, 10);

    return defineConfig({
        plugins: [react(), removeConsole()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        server: {
            port: portToUserNumber,
        },
        build: {
            chunkSizeWarningLimit: 350,
            minify: 'esbuild',
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return id
                                .toString()
                                .split('node_modules/')[1]
                                .split('/')[0]
                                .toString();
                        }

                        return null;
                    },
                },
            },
        },
    });
};
