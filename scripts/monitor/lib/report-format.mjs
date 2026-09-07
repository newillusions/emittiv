// Builds the Smart Brevity markdown report body sent by run-weekly.mjs.
// Format per dispatch: headline, why-it-matters, max 5 bullets, a
// week-over-week positions table, an LLM-mentions table.

function fmtPos(n) {
	return n === null || n === undefined ? '-' : n.toFixed(1);
}

function delta(current, previous) {
	if (previous === null || previous === undefined) return '';
	const d = current - previous;
	if (Math.abs(d) < 0.05) return ' (flat)';
	return d < 0 ? ` (▲ ${Math.abs(d).toFixed(1)})` : ` (▼ ${d.toFixed(1)})`; // lower position = better = ▲
}

function findPrevTerm(prevGsc, term) {
	const rows = prevGsc?.windows?.['7d']?.target_terms ?? [];
	return rows.find((r) => r.term === term) ?? null;
}

function gscSection(gsc, prevGsc) {
	if (!gsc || gsc.error) {
		const reason = gsc?.error?.message ?? 'not run';
		return {
			bullets: [
				`**Search Console data unavailable** - ${reason}. Positions table below shows no data this week.`
			],
			table:
				'| Target term | Position | Clicks (7d) | Impressions (7d) |\n|---|---|---|---|\n| _no data - ${reason}_ | - | - | - |'.replace(
					'${reason}',
					reason
				)
		};
	}
	const w7 = gsc.windows['7d'];
	const w28 = gsc.windows['28d'];
	const bullets = [];
	bullets.push(
		`**Traffic:** ${w7.totals.clicks} clicks / ${w7.totals.impressions} impressions in the trailing 7 days (${w28.totals.clicks} / ${w28.totals.impressions} over 28 days).`
	);
	const tracked = w7.target_terms.filter((t) => t.found);
	const untracked = w7.target_terms.filter((t) => !t.found);
	if (tracked.length) {
		const best = [...tracked].sort((a, b) => (a.position ?? 999) - (b.position ?? 999))[0];
		bullets.push(
			`**Best-ranking target term:** "${best.term}" at position ${fmtPos(best.position)}, ${best.clicks} clicks.`
		);
	}
	if (untracked.length) {
		bullets.push(
			`**No impressions yet for:** ${untracked.map((t) => `"${t.term}"`).join(', ')} (${untracked.length} of ${w7.target_terms.length} tracked terms).`
		);
	}
	const rows = w7.target_terms
		.map((t) => {
			const prev = findPrevTerm(prevGsc, t.term);
			const d = prev ? delta(t.position ?? 999, prev.position ?? 999) : '';
			return `| ${t.term} | ${fmtPos(t.position)}${d} | ${t.clicks} | ${t.impressions} |`;
		})
		.join('\n');
	const table = `| Target term | Position (7d) | Clicks (7d) | Impressions (7d) |\n|---|---|---|---|\n${rows}`;
	return { bullets, table };
}

function llmSection(llm) {
	if (!llm) {
		return { bullets: ['**LLM appearance check did not run.**'], table: '_no data_' };
	}
	const bullets = [];
	const providerIds = Object.keys(llm.providers);
	if (providerIds.length) {
		const totalMentions = providerIds.reduce((s, id) => s + llm.providers[id].mentioned_count, 0);
		const totalAsked = providerIds.reduce((s, id) => s + llm.providers[id].total_questions, 0);
		bullets.push(
			`**LLM mentions:** emittiv/newillusions named in ${totalMentions} of ${totalAsked} provider-question pairs across ${providerIds.length} provider(s).`
		);
	}
	if (llm.skipped.length) {
		bullets.push(
			`**Providers skipped (no credential):** ${llm.skipped.map((s) => s.label).join(', ')}.`
		);
	}
	const rows = [];
	for (const id of providerIds) {
		const p = llm.providers[id];
		for (const r of p.results) {
			const status = r.error
				? `error: ${r.error}`
				: r.mentioned
					? `named (${r.brand}${r.position ? `, item #${r.position}` : ''})`
					: 'not named';
			const snippet = r.mentioned ? r.sentence.slice(0, 140) : '';
			rows.push(`| ${p.label} | ${r.question} | ${status} | ${snippet} |`);
		}
	}
	const table = rows.length
		? `| Provider | Question | Result | Sentence |\n|---|---|---|---|\n${rows.join('\n')}`
		: '_no provider results (all skipped)_';
	return { bullets, table };
}

/**
 * @param {{gsc: object, prevGsc: object|null, llm: object, targetTermsSource: string, buyerQuestionsSource: string}} data
 * @returns {string} Smart Brevity markdown report body
 */
export function buildMarkdownReport({ gsc, prevGsc, llm }) {
	const g = gscSection(gsc, prevGsc);
	const l = llmSection(llm);
	const bullets = [...g.bullets, ...l.bullets].slice(0, 5);

	return `# emittiv.com weekly: rank + LLM appearances

**Headline:** ${
		g.bullets[0] ? g.bullets[0].replace(/\*\*/g, '') : 'Search + LLM visibility check for the week.'
	}

**Why it matters:** the AEO work (FAQPage schema + llms.txt, shipped 2026-08-22, PR #7) is meant to move both organic rank and how often emittiv gets named by AI assistants answering buyer questions - this is the first recurring measurement of either outcome.

${bullets.map((b) => `- ${b}`).join('\n')}

## Search positions (Google Search Console)

${g.table}

## LLM appearance panel

${l.table}

---
_Generated ${new Date().toISOString()}. Target terms: claude/e-marketing/strategy/positioning.md §4/§6. Buyer questions: recast from the FAQPage JSON-LD shipped in PR #7. Raw data: data/monitor/ (gitignored, not committed)._
`;
}
