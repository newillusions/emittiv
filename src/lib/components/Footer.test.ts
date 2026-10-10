import { render, screen, cleanup } from '@testing-library/svelte';
import { afterEach, describe, expect, test, vi } from 'vitest';

vi.mock('$app/stores', () => ({
	page: { subscribe: (fn: (v: unknown) => void) => (fn({ url: { pathname: '/' } }), () => {}) }
}));

import Footer from './Footer.svelte';

describe('Footer contact column', () => {
	afterEach(() => cleanup());

	test('mailto link and address share one wrapper (link is its own block element), so .footer-body flex does not run them together', () => {
		render(Footer);
		const link = screen.getByRole('link', { name: 'hello@emittiv.com' });
		expect(link).toHaveAttribute('href', 'mailto:hello@emittiv.com');

		const wrapper = link.parentElement as HTMLElement;
		expect(wrapper.tagName).toBe('DIV');
		expect(wrapper.textContent).toContain('dubai south, dubai, uae');
		expect(link.textContent).not.toContain('dubai south');
		// the wrapper, not the address text and link, is the direct child of .footer-body
		expect(wrapper.parentElement).toHaveClass('footer-body');
		expect(wrapper.parentElement?.querySelectorAll(':scope > a').length).toBe(0);
	});
});
