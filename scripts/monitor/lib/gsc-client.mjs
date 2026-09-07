// Minimal Google Search Console (Search Analytics) client.
//
// Uses google-auth-library directly against the REST endpoint rather than the
// full `googleapis` package (lighter dependency footprint for a script this
// small). Credential: GOOGLE_APPLICATION_CREDENTIALS, a path to a service
// account key JSON file - NOT a secret value itself (verified this session:
// /Volumes/base/dev/credentials/emittiv-website-07a4cbcb8991.json,
// client_email on the emittiv-website.iam.gserviceaccount.com project). The
// same credential already backs the .claude/mcp-local/mcp-server-gsc MCP
// server used by the seo-auditor agent.
//
// Site verified in GSC as sc-domain:emittiv.com (per .claude/HANDOVER.md and
// .claude/agents/seo-auditor.md "Site Context").

import { GoogleAuth } from 'google-auth-library';

export const SITE_URL = 'sc-domain:emittiv.com';
const SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly'];
const REQUEST_TIMEOUT_MS = 20_000;

export class MissingCredentialError extends Error {
	constructor(varName, detail) {
		super(`Missing credential: ${varName}${detail ? ` (${detail})` : ''}`);
		this.name = 'MissingCredentialError';
		this.varName = varName;
	}
}

let cachedAuth = null;

function getAuth() {
	const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;
	if (!keyFile) {
		throw new MissingCredentialError(
			'GOOGLE_APPLICATION_CREDENTIALS',
			'path to the Search Console service-account key JSON; create via Google Cloud Console > IAM > Service Accounts, grant it Restricted (read-only) access on the sc-domain:emittiv.com property in Search Console > Settings > Users and permissions'
		);
	}
	if (!cachedAuth) {
		cachedAuth = new GoogleAuth({ keyFile, scopes: SCOPES });
	}
	return cachedAuth;
}

async function getAccessToken() {
	const auth = getAuth();
	const client = await auth.getClient();
	const { token } = await client.getAccessToken();
	if (!token) throw new Error('GSC auth succeeded but returned no access token');
	return token;
}

/**
 * Query the Search Analytics API.
 * @param {{startDate: string, endDate: string, dimensions: string[], rowLimit?: number}} opts
 */
export async function querySearchAnalytics({ startDate, endDate, dimensions, rowLimit = 1000 }) {
	const token = await getAccessToken();
	const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
		SITE_URL
	)}/searchAnalytics/query`;
	const res = await fetch(url, {
		method: 'POST',
		headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({ startDate, endDate, dimensions, rowLimit }),
		signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
	});
	if (!res.ok) {
		const text = await res.text().catch(() => '');
		throw new Error(`GSC searchAnalytics.query HTTP ${res.status}: ${text.slice(0, 300)}`);
	}
	return res.json();
}

/**
 * Trailing N-day date range ending 3 days before today (GSC data typically
 * lags 2-3 days; using a 3-day buffer avoids a partial, artificially-low
 * final day skewing the window).
 */
export function trailingDateRange(days, now = new Date()) {
	const end = new Date(now);
	end.setUTCDate(end.getUTCDate() - 3);
	const start = new Date(end);
	start.setUTCDate(start.getUTCDate() - (days - 1));
	const fmt = (d) => d.toISOString().slice(0, 10);
	return { startDate: fmt(start), endDate: fmt(end) };
}
