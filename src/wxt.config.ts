import { defineConfig } from 'wxt';

export default defineConfig({
    manifest: {
        cors: {
            origin: '*',
            methods: ['GET'],
        },
    }
});