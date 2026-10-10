import { render, screen, cleanup } from '@testing-library/svelte';
import { afterEach, describe, expect, test } from 'vitest';
import ContactPhone from './ContactPhone.svelte';

describe('ContactPhone', () => {
	afterEach(() => cleanup());

	test('renders the heading, a tel: link and a WhatsApp link', () => {
		render(ContactPhone);

		expect(screen.getByText('call or message us')).toBeInTheDocument();
		expect(screen.getByRole('link', { name: '+971 58 585 5569' })).toHaveAttribute(
			'href',
			'tel:+971585855569'
		);
		expect(screen.getByRole('link', { name: 'WhatsApp' })).toHaveAttribute(
			'href',
			'https://wa.me/971585855569'
		);
	});
});
