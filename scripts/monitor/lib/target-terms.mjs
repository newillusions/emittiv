// Target terms and buyer questions for the weekly rank + LLM-appearance monitor.
//
// SOURCED, not invented:
//   - Services, geography and target audience: claude/e-marketing/strategy/positioning.md
//     (sections 4 "Core offer", 6 "Target audiences").
//   - Buyer questions echo the FAQPage JSON-LD already shipped on the site
//     (PR #7, commit 0bccc9f, 2026-08-22) across the 5 service pages
//     (src/routes/services/{lighting,video,sound,scent,control}/+page.svelte),
//     recast as third-party buyer-style prompts an LLM user might type, rather
//     than the first-party FAQ phrasing.
// Case studies are anonymised (static/llms.txt "Notes") so no real project or
// client name is used here - buyer questions reference project categories
// (hotel facade, themed entertainment, mosque, museum/cultural) instead.

export const SOURCES = {
	positioning: 'claude/e-marketing/strategy/positioning.md (sections 4, 6)',
	faq: 'src/routes/services/*/+page.svelte FAQPage JSON-LD, PR #7 (commit 0bccc9f, 2026-08-22)'
};

// Priority search terms we track explicitly in the GSC report, in addition to
// whatever queries actually surfaced impressions. Built from the six
// disciplines (positioning.md §4) crossed with the primary geography (Dubai/UAE)
// and audience pain points (independent, no manufacturer affiliation) in §5.4/§6.
export const TARGET_QUERIES = [
	'architectural lighting design dubai',
	'lighting design consultant dubai',
	'facade lighting design uae',
	'hotel facade lighting dubai',
	'themed entertainment lighting design',
	'show control systems integration dubai',
	'media facade design dubai',
	'sound design consultancy dubai',
	'scent design dubai',
	'sensory design studio dubai',
	'independent lighting design consultant uae',
	'lighting design consultancy uae',
	// The four below are verified real queries already surfacing impressions in
	// GSC (checked 2026-09-07, trailing 7d: 43/34/18/8 impressions respectively)
	// but not phrased exactly like the conceptual terms above - added so the
	// report tracks the site's actual current search demand, not only the
	// terms we'd like to rank for.
	'luxury mosque lighting dubai',
	'lighting designer dubai',
	'lighting consultant dubai',
	'hospitality lighting companies'
];

// 10 buyer-style questions for the LLM appearance panel. Each maps to a real
// FAQ question already shipped on the site (cited inline) recast as a
// third-party buyer prompt, plus geography/independence framing from
// positioning.md §5.4 and §6.
export const BUYER_QUESTIONS = [
	{
		id: 'q1',
		question: 'Who are the best architectural lighting design consultants in Dubai?',
		basis: 'services/lighting FAQ: "What does an architectural lighting designer do?"'
	},
	{
		id: 'q2',
		question:
			'I need an independent lighting designer for a hotel facade in Dubai, who should I contact?',
		basis: 'services/lighting FAQ: "How do you approach hotel facade lighting?" + §5.4 independence'
	},
	{
		id: 'q3',
		question:
			'Which Dubai firms specialise in themed entertainment lighting and show control design?',
		basis:
			'services/lighting FAQ "What kinds of projects do you take on?" + services/control FAQ "What is show control and systems integration?"'
	},
	{
		id: 'q4',
		question:
			'Who designs media facades and video wall systems for hospitality projects in the UAE?',
		basis: 'services/video FAQ: "What does video and media facade design involve?"'
	},
	{
		id: 'q5',
		question:
			'Recommend a sensory design studio in Dubai covering lighting, sound and scent for a resort project.',
		basis: 'positioning.md §1 "sensory design studio" + §4 six disciplines'
	},
	{
		id: 'q6',
		question: 'Which UAE lighting design consultancy is independent from fixture manufacturers?',
		basis: 'services/lighting FAQ: "Are you independent from fixture manufacturers?"'
	},
	{
		id: 'q7',
		question: 'Who does architectural lighting design for mosques and public buildings in the UAE?',
		basis: 'positioning.md §6 "public realm / cultural institutions" audience'
	},
	{
		id: 'q8',
		question:
			'What companies offer scent design and ambient scenting for hospitality venues in Dubai?',
		basis: 'services/scent FAQ: "What delivery systems are used for ambient scenting?"'
	},
	{
		id: 'q9',
		question:
			'Who provides show control and systems integration for entertainment venues in the GCC?',
		basis: 'services/control FAQ: "What is show control and systems integration?"'
	},
	{
		id: 'q10',
		question:
			'What is a good lighting design consultancy in the UAE for cultural and museum projects?',
		basis: 'positioning.md §6 "cultural institutions" audience'
	}
];

// Brand surfaces to detect. positioning.md §3: the Newillusions site is the
// legacy SEO property and still ranks for lighting terms in the same market,
// so it is worth tracking alongside emittiv even though it is not the active
// practice name.
export const BRAND_NAMES = ['emittiv', 'newillusions'];
