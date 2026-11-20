// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://harrymunroe.com',
	integrations: [mdx(), sitemap()],
	redirects: {
		'/topics/resilience': '/topics/production',
		'/topics/ai': '/topics/adoption',
		'/topics/energy': '/topics/compute',
		'/topics/quantum': '/topics/compute',
		'/topics/data': '/topics',
	},
});
