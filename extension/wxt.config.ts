import { defineConfig } from 'wxt';

export default defineConfig({
    manifest: {
        name: 'Link Defender',
        version: '0.0.1',
        description: 'A browser extension that helps you to avoid phishing links.',
        permissions: ['storage'],
    }
});