# harrymunroe.com — Redesign Strategy & Implementation Brief

**Date:** July 2026
**Purpose:** Strategy decisions + precise implementation guidance. Written so any competent implementer (human or model) can execute without re-deriving intent. Read alongside `styleguide.md`, which this brief amends (see §8).

---

## 1. Positioning (the decision everything else follows from)

**The reader:** a decision-maker who secretly still feels like a beginner. Someone with a title they're not sure they can live up to; whose domain skills got them the seat but no longer satisfy what their organization demands of them. They are smart, busy, quietly anxious, and allergic to both hype and condescension.

This resolves the tension between the old styleguide (written for curious beginners) and Harry's strategic goals (authority with policy/energy/tech decision-makers, future advisory clients). The answer is not "pick one" — it's that **the decision-maker IS the beginner.** The site speaks with authority *about ideas* and with permission *about the reader's uncertainty*. That combination is rare and is itself the spike.

**The voice in one line:** *An optimist who has done the reading, talking to leaders who are allowed to not know yet.*

**What "spiky" means here (and what it doesn't):**
- Spike via **conviction**, not provocation. Every essay must contain at least one claim a reasonable, informed person would dispute. If a piece could have been written by "a thoughtful analyst in general," it isn't done.
- Spike via **naming the private feeling** — e.g., that most leaders' expertise is quietly depreciating; that "waiting for certainty" is a decision with costs; that optimism is a discipline, not a temperament. Naming what readers feel but won't say builds loyalty faster than hot takes.
- Never spike via dunking, culture-war bait, or naming-and-shaming individuals.

**The danger-writing rule:** Harry will sometimes write clear-eyed about real dangers (grid fragility, Baltic security, institutional decay). Codify: **never doom without a door.** Every dark piece must end with a credible path forward and a reassuring register. The reader should close the tab more capable, not more afraid.

**The mania container:** Harry's enthusiasm sometimes runs hot, and that's an asset — but the styleguide correctly wants enthusiasm contained. Solution: give mania a **designated formal container** rather than suppressing it. Create a post type/tag called **"Surges"** (or similar) — short, high-voltage, unapologetically excited pieces, visually marked (see §5). The container signals: *this intensity is intentional.* Everything outside the container stays calm. This is how the site is both low-dopamine AND pulsating.

---

## 2. Audit: what's right (keep these)

1. **The styleguide itself.** Unusually good. The litmus test (§9), "no feeds on the homepage," "one place to break the grid," "white space is functional," "unfinished is a feature" — all keep. It needs amendments (§8), not replacement.
2. **Timeless homepage / no recency signals.** Doubly right given Harry's CliftonStrengths profile (no Executing themes): the site must not *look* stale when publishing slows. This choice makes irregular cadence invisible. Protect it.
3. **Topics over formats.** Confirmed by Harry: topic pages should hold notes, explainers, blog entries, poems, *and projects* side by side. Topics remain primary navigation.
4. **Astro + GitHub Pages.** Right stack: content-first, fast, free, no lock-in. Keep.
5. **"Thinking tables" concept** for topic pages — non-linear, provisional, skimmable. This is the site's most distinctive structural idea. Build it for real.

## 3. Audit: what's broken or contradictory (fix these)

1. **The homepage visual language contradicts the styleguide.** White cards, drop shadows, pill buttons, hover-lift animations, cobalt accents = SaaS landing page. That's dopamine UI. The styleguide asks for a calm room; the homepage is a product demo. Strip it (spec in §5).
2. **The hero line is the vacuous statement Harry says he doesn't want.** "I explore how emerging technologies can help societies build a better future" offends no one and hooks no one. Replace (options in §6).
3. **Two competing design systems.** `global.css` (Atkinson font, accent `#2337ff`, gradient background) vs. `index.astro` inline styles (Inter, panels, `#1e4ed8`). Unify into one token set in `global.css`; pages must not carry their own parallel design systems.
4. **Template debris.** `consts.ts` still says "Astro Blog"; blog contains 5 placeholder posts with stock images; About page is lorem ipsum dated 2021; `astro.config.mjs` site is `https://example.com`. All of this is live. Fix first — it costs credibility with exactly the audience being courted.
5. **Broken links.** Homepage links to `/topics`, `/writing`, `/ai`, `/energy`, `/quantum`, `/data`, `/healthcare` — none exist as pages.
6. **No follower mechanism.** "Loyal followers" is a stated goal; the site has RSS only. Add a newsletter (§7).
7. **The styleguide has no conviction rule.** As written ("nothing should feel demanding," permission-everywhere) it would sand off the spikes. Amend per §8.

---

## 4. Site architecture

Primary nav (4 items max): **Topics · Work · About · Now**
Footer: Writing index (chronological, for completists), RSS, Newsletter, Email, LinkedIn, Colophon.

- **/ (Home)** — timeless orientation page. Spiky hero, short "who this is for" paragraph, topic doors, quiet newsletter line. No feeds, no dates. (§6)
- **/topics/** — index of topic doors. Topics: AI, Energy, Quantum, Data, Healthcare (revisit whether Healthcare stays; consider adding "Institutions" or "Resilience" — closest to Harry's actual through-line).
- **/topics/[topic]/ (Thinking tables)** — the signature page type. A curated, hand-arranged surface per topic mixing: short notes, explainers, essays, poems, projects, open questions, reading. Not a reverse-chron list. Each entry card shows type (note/essay/project/poem/question) and an optional epistemic status ("still forming," "confident," "revised June 2026"). This is where "one place to break the grid" lives: allow offset/varied card sizes here, nowhere else.
- **/work/** — the hybrid projects answer. One quiet page: selected projects, 1–3 sentences each, outcome-focused, linking to repo/demo/writeup AND to the topic page it belongs to. Projects also appear inside their topic's thinking table. No case-study theater; understatement reads as confidence.
- **/about/** — real bio (§6). One job: make the right reader think "this person is who I want to think alongside."
- **/now/** — what Harry is currently studying/building/asking. Updated quarterly-ish; cheap way for the site to feel alive. Date it honestly.
- **/writing/** — plain chronological index of everything. For returning readers; deliberately unglamorous.
- **/colophon/** — how the site is built, fonts, why no comments/analytics choices. Imperfection-and-realness signal; loyal-reader catnip.

**Content model note (implementer):** extend the content collection schema in `src/content.config.ts` with: `type` (essay | note | explainer | poem | project | surge), `topics` (array), `status` (optional: forming | confident | revised), `updatedDate` (already exists). Thinking tables render from these fields plus a per-topic curation file (ordering/pinning) — curation must be manual-first, not auto-generated.

---

## 5. Design system spec

Replace both existing token sets with this single set in `global.css`. Delete the inline system in `index.astro`.

### 5.1 Color — "paper and barn red"
Low dopamine = warm, matte, print-like. Current cool blue-grays + cobalt read as tech-corporate. Move to warm paper. Accent: **Falu red** — the traditional Swedish barn paint that is *also* the color of New England barns. Quiet, earthy, distinctive, and literally Harry's transatlantic story in a pigment. It cannot be mistaken for a startup.

```css
:root {
  --paper: #faf7f2;        /* warm off-white background */
  --paper-deep: #f2ede4;   /* secondary surfaces, code blocks */
  --ink: #26231f;          /* body text — warm near-black, not pure black */
  --ink-muted: #6b6459;    /* secondary text */
  --accent: #8a2d1f;       /* Falu red — links, markers, underlines */
  --accent-deep: #6e2318;  /* hover */
  --surge: #b4451f;        /* Surges only: hotter ember tone */
  --line: #ddd5c8;         /* hairline borders, rules */
}
```

Rules: no drop shadows anywhere. No gradients. Borders are 1px `--line` hairlines or nothing. Accent never fills large areas (per styleguide). `--surge` appears ONLY on Surge-type posts (marker + top rule), making mania visually literate.

### 5.2 Typography
- **Body: keep Atkinson Hyperlegible** (already in `/public/fonts/`). It's warm, humane, designed for accessibility — on-brand ("safe asking questions") and mildly imperfect in exactly the right way. 18–20px, line-height 1.7, measure ~65ch.
- **Headlines: Atkinson Bold, large and architectural.** Fewer words, more weight (per styleguide). No letter-spacing tricks, no all-caps.
- **Italics** carry asides and enthusiasm, per styleguide. Poems render in italic body face, generously spaced — no special font.
- Drop Inter entirely.

### 5.3 Layout & texture
- Content column ~68–72ch centered; generous margins. The grid is strict everywhere EXCEPT each topic page's thinking table.
- "Real, pulsating, imperfect" is achieved through **editorial texture, not visual noise**: visible revision dates ("planted March 2026 · tended July 2026"), epistemic status lines, open questions listed as content, margin notes on wide viewports, a hand-drawn underline SVG on at most one element per page.
- Interactions: underline-on-hover only. No transform/translateY hovers, no transition theatrics. Motion budget ≈ zero.
- Dark mode: not now. Ship one excellent light theme (paper doesn't translate cheaply to dark).

---

## 6. Content & copy direction

### 6.1 Homepage hero — three candidate directions (Harry picks/edits; do not ship the old line)
1. **"Optimism is a discipline."** + subhead: "I write about energy, compute, and the institutions we'll have to rebuild — for leaders who suspect what got them here won't get them through what's coming."
2. **"The people who'll build the next era are the ones still willing to be beginners."** + subhead naming energy/compute/institutions.
3. **"New technology could make this a much better world. That's a claim, not a mood."** + subhead: "Clear-eyed about the dangers, specific about the path. No jargon, no judgment, no doom without a door."

All three make a claim someone could dispute. That's the test.

### 6.2 About page (rewrite from scratch)
Structure: (1) who I write for — the credentialed beginner, named plainly and warmly; (2) what I actually do — the translator identity: taking what's being invented (quantum, AI, energy systems) and making it usable by institutions and the people who run them; (3) texture — New England roots, Nordic thread, learner-collector temperament; honest about strengths *and* the shadow side (perpetual preparation) — this honesty IS the trust-builder for imposter-feeling readers; (4) how to reach me + newsletter.

**Publication boundaries (important):**
- Do NOT publish the 20-year plan, the Sweden relocation timeline, family details, or named IBM contacts/targets. Publish the *identity* (transatlantic translator), never the *itinerary*.
- Standard disclaimer once NDU begins: "Views are my own and do not represent IBM, NDU, or the U.S. government."
- Check IBM Social Computing Guidelines before launch; keep client work anonymized on /work.

### 6.3 Content cadence (honest engineering around no-Executing-themes)
- The site design already tolerates silence (timeless homepage). Additionally: prefer **gardening over publishing** — updating an existing note counts as tending and shows via `updatedDate`. Lower activation energy than "write a new essay."
- Per the coaching framework: the schedule must be external. Announce a modest cadence (e.g., one tended note or essay per month) to a person who will notice a miss. The newsletter (below) is that external commitment device.
- NDU-year seeding: thesis research throws off notes constantly. The thinking tables are purpose-built to catch them as small entries — capture, don't compose.

---

## 7. Features, integrations, plumbing

| Item | Recommendation | Notes |
|---|---|---|
| Newsletter | **Buttondown** | Indie, cheap, markdown-native, no growth-hack UI. Quiet inline form on home + post footers. Never a popup. Substack rejected: it makes the site a satellite of someone else's platform. |
| Comments | **None.** "Write me back" mailto link at each post's end | Correspondence builds loyal readers better than a comment box; zero moderation load; on-brand. |
| Analytics | **GoatCounter** (free) or Plausible (~$9/mo) | Privacy-first, no cookie banner, no Google. Or none at all — also defensible. |
| Search | **Pagefind** | Add only after ~20+ pieces exist. Static, free, excellent with Astro. |
| OG images | `astro-og-canvas` or satori-based generation | Paper background, Atkinson type, Falu red rule. Matters for LinkedIn sharing to exactly Harry's audience. |
| RSS | Keep; fix title/description via `consts.ts` | |
| Sitemap/MDX | Already installed; set real `site` URL | |
| Domain | Set `site: 'https://harrymunroe.com'`, add `public/CNAME` with `harrymunroe.com`, configure GH Pages custom domain | RSS + sitemap + OG are silently broken until this is done. |
| Webmentions, dark mode, i18n (Swedish) | **Defer.** | Swedish-language section is a real future consideration (2028+), not now. |

---

## 8. Styleguide amendments

Apply these edits to `styleguide.md` (keep everything else):

1. **§1 Purpose — replace the audience.** The reader is the decision-maker who still feels like a beginner. Keep the three feelings (hopeful, curious, safe asking questions) — they apply to *this* reader even more.
2. **Add §7.4 — Conviction:** "Every essay contains at least one claim a reasonable, informed person would dispute. Permission-giving tone applies to the reader's uncertainty, never to the ideas. We are welcoming about people and demanding about thinking. It is acceptable — desirable — that some readers leave."
3. **Add §7.5 — Danger writing:** "Pieces about real dangers must end with a credible path forward. Never doom without a door."
4. **Add §3.4 — Surges:** "High-intensity enthusiasm lives in a marked container (Surge posts, `--surge` color). Outside the container, the calm rules apply absolutely."
5. **§6.2 — amend:** Topics remain primary, but a single quiet /work page is permitted as a cross-topic index of projects. Projects also live inside topic thinking tables.
6. **§4.1 — update palette** to §5.1 of this brief (warm paper + Falu red).

---

## 9. Implementation punch list (ordered; a cheaper model can execute top-to-bottom)

**Phase 1 — Stop the bleeding (small, do first)**
1. `src/consts.ts`: SITE_TITLE "Harry Munroe", SITE_DESCRIPTION = chosen hero subhead.
2. `astro.config.mjs`: `site: 'https://harrymunroe.com'`. Add `public/CNAME` containing `harrymunroe.com`.
3. Delete the 5 placeholder blog posts and placeholder images (keep folder structure).
4. Replace About page lorem ipsum with real bio per §6.2 (get draft from Harry; do not invent facts).
5. Remove links to pages that don't exist yet, or ship Phase 3 first.

**Phase 2 — One design system**
6. Rewrite `global.css` with §5 tokens/rules; delete Inter and the inline token set in `index.astro`; restyle homepage flat (no shadows/pills/hover-lifts).
7. Restyle `BlogPost.astro` layout: paper background, measure, revision-date line, "write me back" footer link.

**Phase 3 — Architecture**
8. Extend `content.config.ts` schema per §4 note.
9. Build `/topics/index.astro` and topic thinking-table template + per-topic curation data files.
10. Build `/work`, `/now`, `/writing`, `/colophon`.
11. Update Header nav to Topics · Work · About · Now; move the rest to Footer.

**Phase 4 — Growth plumbing**
12. Buttondown account + inline form component (home + post footer).
13. OG image generation; GoatCounter snippet (if chosen).
14. QA: run link checker, Lighthouse (target 95+ across the board), test at 360px width, verify RSS validates.

**Definition of done, per the litmus test:** every page answers one question; nothing on the site could be mistaken for a SaaS landing page; a stranger with a big title and a private doubt would bookmark it.

---

## 10. Distribution: the site and other platforms

**Model: hub and spokes.** The site + email list is the only audience asset Harry owns; every platform is rented reach that feeds it. Never build the primary archive anywhere else.

- **The site** is the canonical home of every piece. The email list (Buttondown) is the conversion goal of all other channels — a subscriber is worth more than any number of impressions.
- **LinkedIn is the primary spoke.** Harry's exact readers (policy, energy, enterprise tech, government) live there professionally. Practice: rewrite each piece as a *native* LinkedIn post (LinkedIn suppresses external links) with the site link in a comment or at the end. The native version is the ad; the site version is the record.
- **Established outlets over platform growth.** Per the strategic plan, bylines in policy outlets (War on the Rocks, domain publications, Swedish outlets later) build authority faster than any owned channel. Each byline's bio line points to the site. Outlets lend credibility; the site collects the readers they send.
- **Substack: skip.** It duplicates Buttondown while owning the reader relationship, and its discovery network doesn't serve this niche. Revisit only if a genuine essay-subscription business becomes a goal.
- **Medium: skip.** No durable audience accrues.
- **Video/audio: guest, don't host.** Harry presents well, but running a YouTube channel is a production treadmill misaligned with a no-Executing-themes profile. Podcast guesting and recorded talks cost near zero and reach curated audiences; embed or link them on topic pages afterward.
- **Rule of thumb:** anything published elsewhere gets a home on the site within a week, and every channel's bio links to one place: harrymunroe.com.
