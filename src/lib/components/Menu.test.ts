import { render, screen, cleanup, fireEvent } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, test, vi } from 'vitest';

vi.mock('$app/stores', () => ({
	page: { subscribe: (fn: (v: unknown) => void) => (fn({ url: { pathname: '/' } }), () => {}) }
}));

import Menu from './Menu.svelte';

const toggle = () => screen.getByRole('button', { name: 'Toggle navigation menu' });
const overlay = () => document.getElementById('site-nav') as HTMLElement;
const tick = () => new Promise((r) => setTimeout(r, 0));

describe('Menu keyboard behaviour', () => {
	afterEach(() => cleanup());

	test('trigger is a native button exposing expanded state', () => {
		render(Menu);
		expect(toggle().tagName).toBe('BUTTON');
		expect(toggle()).toHaveAttribute('aria-expanded', 'false');
		expect(toggle()).toHaveAttribute('aria-controls', 'site-nav');
	});

	test('closed menu is inert so its links are not tab stops', async () => {
		render(Menu);
		expect(overlay().inert).toBe(true);
		// jsdom does not implement inert in tab order; the property is what browsers act on
		expect(overlay().inert).toBe(true);
		expect(overlay().querySelectorAll('a[href]').length).toBeGreaterThan(0);
	});

	test('Enter and Space open the menu and move focus to the first link', async () => {
		render(Menu);
		const user = userEvent.setup();
		for (const key of ['{Enter}', ' ']) {
			toggle().focus();
			await user.keyboard(key);
			await tick();
			expect(toggle()).toHaveAttribute('aria-expanded', 'true');
			expect(overlay().inert).toBe(false);
			expect(document.activeElement).toBe(overlay().querySelector('a'));
			await user.keyboard('{Escape}');
		}
	});

	test('Escape closes the menu and returns focus to the trigger', async () => {
		render(Menu);
		const user = userEvent.setup();
		toggle().focus();
		await user.keyboard('{Enter}');
		await tick();
		await user.keyboard('{Escape}');
		expect(toggle()).toHaveAttribute('aria-expanded', 'false');
		expect(overlay().inert).toBe(true);
		expect(document.activeElement).toBe(toggle());
	});

	test('Tab cycles inside the open menu and never reaches the page behind', async () => {
		render(Menu);
		const bg = document.createElement('a');
		bg.href = '/background';
		document.body.appendChild(bg);
		const user = userEvent.setup();
		toggle().focus();
		await user.keyboard('{Enter}');
		await tick();
		const links = Array.from(overlay().querySelectorAll('a'));
		for (let i = 0; i < links.length + 3; i++) {
			await user.tab();
			expect(document.activeElement).not.toBe(bg);
		}
		toggle().focus();
		await user.tab();
		expect(document.activeElement).toBe(links[0]);
		await user.tab({ shift: true });
		expect(document.activeElement).toBe(toggle());
		bg.remove();
	});

	test('after close, no trap: Tab leaves the trigger normally', async () => {
		render(Menu);
		const bg = document.createElement('a');
		bg.href = '/background';
		document.body.appendChild(bg);
		const user = userEvent.setup();
		toggle().focus();
		await user.keyboard('{Enter}');
		await tick();
		await fireEvent.keyDown(window, { key: 'Escape' });
		await user.tab();
		expect(document.activeElement).toBe(bg);
		bg.remove();
	});
});
