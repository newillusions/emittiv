#!/usr/bin/env node
// Weekly Search Console rank report: trailing 7d and 28d windows, by query and
// by page, plus explicit target-term coverage. Writes JSON to data/monitor/
// (gitignored - see .gitignore) so week-over-week deltas can be computed
// without committing search-query data to the (publicly mirrored) repo.
//
// Usage: node scripts/monitor/gsc-report.mjs [--out-dir DIR]

import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
	querySearchAnalytics,
	trailingDateRange,
	SITE_URL,
	MissingCredentialError
} from './lib/gsc-client.mjs';
import { TARGET_QUERIES } from './lib/target-terms.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(__dirname, '..', '..');
export const DEFAULT_DATA_DIR = path.join(REPO_ROOT, 'data', 'monitor');

function sumTotals(rows) {
	return rows.reduce(
		(acc, r) => {
			acc.clicks += r.clicks ?? 0;
			acc.impressions += r.impressions ?? 0;
			return acc;
		},
		{ clicks: 0, impressions: 0 }
	);
}

function mapRow(dimensionLabel) {
	return (row) => ({
		[dimensionLabel]: row.keys?.[0] ?? null,
		clicks: row.clicks ?? 0,
		impressions: row.impressions ?? 0,
		ctr: row.ctr ?? 0,
		position: row.position ?? null
	});
}

/** Match GSC query rows against our tracked target-term list (case-insensitive substring). */
export function matchTargetTerms(queryRows, targetQueries = TARGET_QUERIES) {
	const lowerRows = queryRows.map((r) => ({ raw: r, query: (r.keys?.[0] ?? '').toLowerCase() }));
	return targetQueries.map((term) => {
		const hit = lowerRows.find((r) => r.query === term.toLowerCase());
		if (!hit) return { term, found: false, clicks: 0, impressions: 0, ctr: 0, position: null };
		return {
			term,
			found: true,
			clicks: hit.raw.clicks ?? 0,
			impressions: hit.raw.impressions ?? 0,
			ctr: hit.raw.ctr ?? 0,
			position: hit.raw.position ?? null
		};
	});
}

async function fetchWindow(days) {
	const { startDate, endDate } = trailingDateRange(days);
	const [byQuery, byPage] = await Promise.all([
		querySearchAnalytics({ startDate, endDate, dimensions: ['query'], rowLimit: 1000 }),
		querySearchAnalytics({ startDate, endDate, dimensions: ['page'], rowLimit: 1000 })
	]);
	const queryRows = byQuery.rows ?? [];
	const pageRows = byPage.rows ?? [];
	return {
		startDate,
		endDate,
		totals: sumTotals(queryRows),
		by_query: queryRows.map(mapRow('query')),
		by_page: pageRows.map(mapRow('page')),
		target_terms: matchTargetTerms(queryRows)
	};
}

/** Run the full report. Never throws on a missing/failed credential - returns an `error` field instead so the weekly run can still send the LLM half of the report. */
export async function runGscReport() {
	const result = {
		generated_at: new Date().toISOString(),
		site: SITE_URL,
		source: 'verified: Google Search Console Search Analytics API, googleapis.com/webmasters/v3'
	};
	try {
		const [w7, w28] = await Promise.all([fetchWindow(7), fetchWindow(28)]);
		result.windows = { '7d': w7, '28d': w28 };
	} catch (err) {
		result.error = {
			type: err instanceof MissingCredentialError ? 'missing_credential' : 'fetch_failed',
			message: err.message
		};
	}
	return result;
}

async function main() {
	const outDirIdx = process.argv.indexOf('--out-dir');
	const outDir = outDirIdx !== -1 ? process.argv[outDirIdx + 1] : DEFAULT_DATA_DIR;
	mkdirSync(outDir, { recursive: true });
	const result = await runGscReport();
	const today = new Date().toISOString().slice(0, 10);
	const outFile = path.join(outDir, `gsc-${today}.json`);
	writeFileSync(outFile, JSON.stringify(result, null, 2));
	if (result.error) {
		console.error(
			`GSC report written with an error: ${result.error.type}: ${result.error.message}`
		);
		console.error(`-> ${outFile}`);
	} else {
		console.log(`GSC report written: ${outFile}`);
	}
	return result;
}

const isMain = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
	main().catch((err) => {
		console.error('gsc-report.mjs failed:', err);
		process.exitCode = 1;
	});
}
