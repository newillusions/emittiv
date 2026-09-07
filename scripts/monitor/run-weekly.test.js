// @vitest-environment node
import { describe, it, expect, afterEach } from 'vitest';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { findPreviousGscReport } from './run-weekly.mjs';

let dir;

afterEach(() => {
	if (dir) rmSync(dir, { recursive: true, force: true });
	dir = undefined;
});

describe('findPreviousGscReport', () => {
	it('returns null when the data dir does not exist', () => {
		expect(findPreviousGscReport('/nonexistent/path/xyz', '2026-09-07')).toBeNull();
	});

	it('returns null when no prior report exists', () => {
		dir = mkdtempSync(path.join(tmpdir(), 'monitor-test-'));
		writeFileSync(path.join(dir, 'gsc-2026-09-07.json'), JSON.stringify({ today: true }));
		expect(findPreviousGscReport(dir, '2026-09-07')).toBeNull();
	});

	it('picks the most recent prior report by filename date, excluding today', () => {
		dir = mkdtempSync(path.join(tmpdir(), 'monitor-test-'));
		writeFileSync(path.join(dir, 'gsc-2026-08-24.json'), JSON.stringify({ week: 'older' }));
		writeFileSync(path.join(dir, 'gsc-2026-08-31.json'), JSON.stringify({ week: 'latest-prior' }));
		writeFileSync(path.join(dir, 'gsc-2026-09-07.json'), JSON.stringify({ week: 'today' }));
		const result = findPreviousGscReport(dir, '2026-09-07');
		expect(result).toEqual({ week: 'latest-prior' });
	});

	it('ignores malformed JSON rather than throwing', () => {
		dir = mkdtempSync(path.join(tmpdir(), 'monitor-test-'));
		writeFileSync(path.join(dir, 'gsc-2026-08-31.json'), '{not valid json');
		expect(findPreviousGscReport(dir, '2026-09-07')).toBeNull();
	});
});
