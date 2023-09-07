import { defineManifest } from '@crxjs/vite-plugin';

export default defineManifest((env) => ({
	background: {
		service_worker: 'src/background/index.ts',
		type: 'module',
	},
	manifest_version: 3,
	name: 'Test',
	version: '0.0.1',
}));
