// Topic definitions. Slugs match the `topics` array in content frontmatter.
// Open questions are real questions Harry is sitting with — they render on
// topic pages so a table is never empty. DRAFTS: Harry should revise.

export interface Topic {
	slug: string;
	label: string;
	desc: string;
	openQuestions: string[];
}

export const topics: Topic[] = [
	{
		slug: 'energy',
		label: 'Energy',
		desc: 'Grids, infrastructure, and long timelines — the physical layer of everything else.',
		openQuestions: [
			'Data centers get built in two years; grid interconnections take ten. What actually closes that gap?',
			'What would it mean to design a grid for crisis, not just for peacetime efficiency?',
		],
	},
	{
		slug: 'ai',
		label: 'AI',
		desc: 'Decision-making under uncertainty, and what institutions do when judgment gets cheap.',
		openQuestions: [
			'When a model can draft the analysis, what is the analyst for?',
			'Which decisions should institutions refuse to automate, even when they could?',
		],
	},
	{
		slug: 'quantum',
		label: 'Quantum',
		desc: 'New ways of reasoning about computation — early enough that authority is still cheap.',
		openQuestions: [
			'Where does quantum simulation change energy research first: battery chemistry or nuclear materials?',
			'What should a non-physicist executive actually understand about quantum, and what can they safely ignore?',
		],
	},
	{
		slug: 'data',
		label: 'Data',
		desc: 'Measurement, context, and trust — why numbers persuade and when they shouldn’t.',
		openQuestions: [
			'Why do organizations that collect everything still decide by anecdote?',
		],
	},
	{
		slug: 'healthcare',
		label: 'Healthcare',
		desc: 'Systems, equity, and evidence — where complexity meets people at their most vulnerable.',
		openQuestions: [
			'What does healthcare IT keep getting wrong about the people who use it?',
		],
	},
];

export function getTopic(slug: string): Topic | undefined {
	return topics.find((t) => t.slug === slug);
}
