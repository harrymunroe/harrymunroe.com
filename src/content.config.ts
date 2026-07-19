import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// All written content lives in one collection. `type` and `topics` drive
// where a piece appears (topic thinking tables, /work, /writing).
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			// essay: long-form argument · note: short, provisional · explainer: teaches one thing
			// poem: a poem · project: something built · surge: high-voltage enthusiasm (marked in --surge)
			type: z
				.enum(['essay', 'note', 'explainer', 'poem', 'project', 'surge'])
				.default('note'),
			topics: z.array(z.string()).default([]),
			// Epistemic status, shown to readers. Unfinished is a feature.
			status: z.enum(['forming', 'confident', 'revised']).optional(),
			// For type: project — external links
			projectUrl: z.string().url().optional(),
		}),
});

export const collections = { blog };
