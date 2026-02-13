import nodeAdapter from '@sveltejs/adapter-node';
import autoAdapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isDocker = process.env.DOCKER_BUILD === 'true';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: isDocker ? nodeAdapter() : autoAdapter()
	}
};

export default config;
