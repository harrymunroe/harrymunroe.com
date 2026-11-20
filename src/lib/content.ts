import { getCollection } from 'astro:content';

// Everything the public site shows. Drafts are excluded everywhere.
export async function getPublished() {
	return getCollection('blog', ({ data }) => data.draft !== true);
}
