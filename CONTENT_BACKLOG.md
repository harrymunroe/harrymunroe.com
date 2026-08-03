# Content Backlog — vault ↔ site gap analysis

**Date:** July 19, 2026. Compared: `Obsidian/NewVault` + `Obsidian/AgentWiki` against harrymunroe.com.

---

## 1. The big gap: the site doesn't know about your best material

The site's five topics (Quantum, AI, Energy, Healthcare, Data) reflect the Innovation Studio era. But the vault's center of gravity since June is **mobilization, industrial base, great-power competition, and societal resilience** — Freedom's Forge, the Strategic Assessment synthesis, the Knudsen/Kaiser notes, supply-chain chokepoints, total defense. Your four staged blog drafts in `AgentWiki/writing/blog_posts/_inbox/` ALL live in this space, and the site has no home for them.

**Recommendation: add a sixth topic — "Resilience."** Scope: what it takes for infrastructure, industry, and institutions to hold under pressure; industrial mobilization history; supply chains as strategy; total-defense thinking. It absorbs the NDU-year material naturally, it's the Håkan Andersson conversation, and it's the diplomatic container for defense-adjacent writing while you're an IBM employee at NDU ("Defense" as a topic name would read differently). Suggested descriptor: *"What it takes for grids, factories, and institutions to hold under pressure. Systems built for crisis, and how societies learn to build them."*

Smaller gaps, both directions:

- **Vault → site:** your `0🌲` evergreen notes (Jevons, supply-chain disruption, civilian tech → military capability, grid inertia, waste-as-resource) are already site-ready "notes" for the thinking tables. The pipeline exists; it just doesn't terminate at the site yet. Point `AgentWiki/writing/blog_posts/ready/` at `src/content/blog/`.
- **Site → vault:** the site promises poems on topic pages; the vault has none surfaced. Either write a few or let that claim wait. Healthcare and Data are thin in the vault — fine; let those tables stay sparse rather than forcing content.
- **/work has vault evidence waiting:** the energy infrastructure demo (Jan 2026), GridWise/Brattle work, the Qiskit certification story. Three short project writeups would stock the Work page.

## 2. The backlog (weekly, sequenced around NDU)

Cadence honesty: weekly is ambitious for a no-Executing-themes profile entering a demanding program. The sequence below alternates real essays with short notes that are nearly written already. If a week collapses, ship the note, not nothing. Announce the cadence in the first post so the commitment is external.

| # | Week of | Piece | Type / Topic | Source material |
|---|---|---|---|---|
| 1 | Jul 27 | **Why I'm going to NDU** — Freedom's Forge, the margin question ("how do I become the Bill Knudsen of the 2030s?"), and choosing to be a beginner again at 31. Publish before orientation; it's the site's origin story. | essay / Resilience | Freedoms_Forge notes, coaching framework |
| 2 | Aug 3 | **We're measuring the wrong column** — US leads invention, China leads manufacturing; the one historical precedent says manufacturing decides. Short and sharp; your first real spike. | note / Resilience | `_inbox/scoreboard-column-problem` |
| 3 | Aug 10 | **The mobilization decision comes before the war** — the two-number collision (2030 window vs. 18-month conversion lag). | essay / Resilience | `_inbox/mobilization-window` |
| 4 | Aug 17 | **What software's zero price will make scarce** — Jevons: when code costs nothing, the bottlenecks move to electricity, materials, manufacturing. Bridges Resilience ↔ Energy ↔ AI. | note / AI, Energy | Jevons note + Hank Green clipping |
| 5 | Aug 24 | **The energy transition is a chokepoint story** — batteries, solar, EVs as strategic supply chains. The bridge post between your energy past and security future; flagship candidate. | essay / Energy, Resilience | `_inbox/energy-as-gpc-domain` |
| 6 | Aug 31 | **Why wind turbines can't steady the grid (yet)** — the inertia/inverter explainer. First "explainer" type; shows the range. | explainer / Energy | VRE grid stability note |
| 7 | Sep 7 | **The terms haven't changed in 80 years** — 1940 contract refusals vs. today's non-traditional vendors, with the grid-investment parallel. | essay / Resilience | `_inbox/contracting-terms-gate` |
| 8 | Sep 14 | **Waste is a label, not a property** — short note; quietly connects circular economy to resource strategy. | note / Energy, Data | waste-as-resource note |
| 9 | Sep 21 | **The map is back** — reading The New Map: energy security's return to the center, and what Yergin's lens says about the AI-electricity collision. | essay / Energy | The New Map reading notes (in progress) |
| 10 | Sep 28 | **People on the ground** — the Achilles Trap insight: why translation across cultural distance fails, and why every institution needs people who live in both worlds. Your translator thesis, made universal. | note / Resilience | Fog of Interpersonal Space note |
| 11 | Oct | **Operating systems for society** — the flagship: energy and compute as the levers, institutions as the OS. The essay the whole site points at; write it slowly. | essay / all topics | Operating Systems note, About page |
| 12 | Oct | **Quantum's industrial moment** — response to the CNAS supply-chains paper: what quantum should learn from solar's manufacturing story before it repeats it. | essay / Quantum, Resilience | CNAS paper ingest |

Ongoing filler between essays: promote remaining `0🌲` notes (supply-chain disruption, civilian tech innovation) and NDU reading notes as short table entries.

## 3. Cautions

- **The France–Germany / shared-prosperity capture:** the mechanism (generational prosperity heals conflict cycles) is a beautiful note, but the Israel–Palestine framing is a third rail with zero upside for your positioning, especially entering NDU. If you write it, write the general mechanism with France–Germany as the case, and stop there.
- **NDU material:** the Strategic Assessment is published and citable; classroom discussion and classmates are not. Establish the habit in week one: cite documents, never rooms.
- **The CNAS response piece:** you know the author and want to collaborate — write it as building on her work, generously, and send it to her before publishing. A good response essay is a better door-opener than a cold email.

## 4. Site plumbing this backlog needs (small)

1. Add `resilience` to `src/data/topics.ts` (descriptor above; open questions: *"Which parts of the industrial base can be rebuilt in 18 months, and which can't be rebuilt in ten years?"*, *"What does Nordic total defense have to teach American infrastructure?"*).
2. Stock `/work` with three project writeups (energy demo, GridWise, Qiskit story).
3. When Buttondown goes live, the Week 1 essay is the launch announcement.
