// Topic definitions. Slugs match the `topics` array in content frontmatter.
// Open questions are real questions Harry is sitting with. They render on
// topic pages so a table is never empty. DRAFTS: Harry should revise.

export interface Topic {
	slug: string;
	label: string;
	desc: string;
	openQuestions: string[];
}

export const topics: Topic[] = [
	{
		slug: 'adoption',
		label: 'Adoption',
		desc: 'Why useful technology sits unused, and what it takes for an institution to put it to work.',
		openQuestions: [
			'Why do promising AI pilots so rarely become something an organization runs every day?',
			'Which matters more for adoption: the acquisition rules, or who inside the institution owns the result?',
			'When a model can draft the analysis, what is the analyst for?',
			'Defense ministries and health systems are solving the same adoption problem separately. What would they learn from each other?',
		],
	},
	{
		slug: 'production',
		label: 'Production',
		desc: 'Factories, supply chains, and the capacity to build at scale, including what can and cannot be rebuilt quickly in a crisis.',
		openQuestions: [
			'Which parts of the industrial base can be rebuilt in 18 months, and which can’t be rebuilt in ten years?',
			'How much demand has to be promised before a supplier will build a new production line?',
			'Which industries should a government treat as strategic, and by what test?',
		],
	},
	{
		slug: 'capital',
		label: 'Capital',
		desc: 'Who pays for industrial capacity, who owns it, and how long they are willing to wait for a return.',
		openQuestions: [
			'What does an owner with a fifty-year horizon decide differently from a fund with a five-year one?',
			'How should governments and private investors split the risk of building capacity before the orders exist?',
			'Why does private money reach software so much more easily than factories, and what would change that?',
		],
	},
	{
		slug: 'allies',
		label: 'Allies & the Nordics',
		desc: 'How allies build things together, and what Sweden, Finland, and their neighbors do differently about industry, ownership, and defense.',
		openQuestions: [
			'When should allies run a joint program, and when should one company lead and the rest supply it?',
			'What does it take for two countries’ defense industries to share designs, data, and production lines?',
			'What does Nordic total defense have to teach American infrastructure?',
			'How have Swedish industrial companies stayed competitive for generations under the same long-term owners?',
		],
	},
	{
		slug: 'compute',
		label: 'Compute & energy',
		desc: 'AI, chips, quantum computing, and the power grids they depend on.',
		openQuestions: [
			'Data centers get built in two years; grid interconnections take ten. What actually closes that gap?',
			'What would it mean to design a grid for crisis instead of just for peacetime efficiency?',
			'A quantum computer depends on a short list of suppliers in a few allied countries. What does that supply chain need before the machines scale?',
			'What should a non-physicist executive actually understand about quantum, and what can they safely ignore?',
		],
	},
];

export function getTopic(slug: string): Topic | undefined {
	return topics.find((t) => t.slug === slug);
}
