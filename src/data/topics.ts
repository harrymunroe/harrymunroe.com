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
		slug: 'quantum',
		label: 'Quantum',
		desc: 'New ways of reasoning about computation, early enough that curiosity still beats credentials.',
		openQuestions: [
			'Where does quantum simulation change energy research first: battery chemistry or nuclear materials?',
			'What should a non-physicist executive actually understand about quantum, and what can they safely ignore?',
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
		slug: 'energy',
		label: 'Energy',
		desc: 'Grids, infrastructure, and long timelines. The physical layer of everything else.',
		openQuestions: [
			'Data centers get built in two years; grid interconnections take ten. What actually closes that gap?',
			'What would it mean to design a grid for crisis instead of just for peacetime efficiency?',
		],
	},
	{
		slug: 'healthcare',
		label: 'Healthcare',
		desc: 'Drugs discovered by simulation, prevention as infrastructure, and care systems for a world growing old.',
		openQuestions: [
			'Which pharmaceutical discoveries become possible once we can simulate molecules honestly?',
			'If hormone therapy can compress decades of age-related decline, what does deploying it at population scale look like, and who decides?',
			'An aging world needs new models of health management. Who builds them, and who pays?',
		],
	},
	{
		slug: 'data',
		label: 'Data',
		desc: 'Measurement, context, and trust. Why numbers persuade, and when they shouldn’t.',
		openQuestions: [
			'Why do organizations that collect everything still decide by anecdote?',
		],
	},
];

export function getTopic(slug: string): Topic | undefined {
	return topics.find((t) => t.slug === slug);
}
