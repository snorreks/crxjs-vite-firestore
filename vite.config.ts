import { crx } from '@crxjs/vite-plugin';
import { defineConfig,type UserConfig } from 'vite';
import manifest from './manifest.config';


export default defineConfig(() => {
	const config: UserConfig = {
		plugins: [
			crx({ manifest }),
		],
	};
	return config;
});
