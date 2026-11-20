// Papers, reports, talks, and teaching. Only items with confirmed: true render.
// Harry confirms each item before it is shown.

export interface ResearchItem {
	title: string;
	kind: 'paper' | 'report' | 'talk' | 'teaching';
	venue: string;
	date?: string; // e.g. 'March 2026'. Items without a date are not rendered unless inProgress is true.
	inProgress?: boolean;
	url?: string;
	note?: string;
	confirmed: boolean; // only confirmed items render
}

export const research: ResearchItem[] = [
	{
		title: 'How allies build defense and dual-use technology together',
		kind: 'paper',
		venue: 'Eisenhower School, National Defense University',
		inProgress: true,
		note: 'Research paper, expected spring 2027.',
		confirmed: false,
	},
	{
		title: 'Technology adoption in defense organizations',
		kind: 'paper',
		venue: 'Venue to be confirmed',
		inProgress: true,
		confirmed: false,
	},
	{
		title: 'AI and the Grid',
		kind: 'report',
		venue: 'GridWise Alliance white paper (contributor)',
		confirmed: false,
	},
	{
		title: 'Quantum computing for protein science and neurodegeneration',
		kind: 'talk',
		venue: 'Karolinska Institutet, Stockholm',
		confirmed: false,
	},
];
