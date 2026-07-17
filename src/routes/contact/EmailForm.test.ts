import { render, screen, cleanup } from '@testing-library/svelte';
import { userEvent } from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

// emailjs is mocked so no real network call ever happens from a test.
vi.mock('@emailjs/browser', () => ({
	default: {
		sendForm: vi.fn()
	}
}));

import emailjs from '@emailjs/browser';
import EmailForm from './EmailForm.svelte';

const sendForm = emailjs.sendForm as unknown as ReturnType<typeof vi.fn>;

// The form's <label for="..."> targets don't match any input id (a pre-existing,
// out-of-scope markup issue), so labels can't be used to locate fields - query by
// the `name` attribute instead, which is what the submit path actually depends on.
function fieldByName(container: HTMLElement, name: string): HTMLInputElement | HTMLTextAreaElement {
	const el = container.querySelector(`[name="${name}"]`);
	if (!el) throw new Error(`field not found: ${name}`);
	return el as HTMLInputElement | HTMLTextAreaElement;
}

async function fillAndSubmit(container: HTMLElement, user: ReturnType<typeof userEvent.setup>) {
	await user.type(fieldByName(container, 'from_name'), 'Jane Prospect');
	await user.type(fieldByName(container, 'from_email'), 'jane@example.com');
	await user.type(fieldByName(container, 'message'), 'Please call me back about a lighting job.');
	await user.click(screen.getByRole('button', { name: 'Send' }));
}

describe('EmailForm', () => {
	beforeEach(() => {
		sendForm.mockReset();
	});

	afterEach(() => {
		cleanup();
	});

	test('a failed submit surfaces a visible error and does not clear the form', async () => {
		sendForm.mockRejectedValueOnce(new Error('network error'));
		const user = userEvent.setup();
		const { container } = render(EmailForm);

		await fillAndSubmit(container, user);

		expect(await screen.findByText(/we seem to have had a problem/i)).toBeInTheDocument();
		// the prospect's message must survive a failed send so they can retry without retyping
		expect(fieldByName(container, 'from_name')).toHaveValue('Jane Prospect');
		expect(fieldByName(container, 'from_email')).toHaveValue('jane@example.com');
		expect(fieldByName(container, 'message')).toHaveValue(
			'Please call me back about a lighting job.'
		);
	});

	test('a successful submit shows the success state and clears the form', async () => {
		sendForm.mockResolvedValueOnce({ status: 200, text: 'OK' });
		const user = userEvent.setup();
		const { container } = render(EmailForm);

		await fillAndSubmit(container, user);

		expect(await screen.findByText(/email sent/i)).toBeInTheDocument();
		expect(fieldByName(container, 'from_name')).toHaveValue('');
	});

	test('a rejected promise (network throw) takes the error path, not the success path', async () => {
		sendForm.mockRejectedValueOnce({ status: 0, text: 'Failed to fetch' });
		const user = userEvent.setup();
		const { container } = render(EmailForm);

		await fillAndSubmit(container, user);

		expect(await screen.findByText(/we seem to have had a problem/i)).toBeInTheDocument();
		expect(screen.queryByText(/email sent/i)).not.toBeInTheDocument();
	});

	test('a failed submit logs an operator-visible signal', async () => {
		const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
		sendForm.mockRejectedValueOnce(new Error('service_d35xsjl unreachable'));
		const user = userEvent.setup();
		const { container } = render(EmailForm);

		await fillAndSubmit(container, user);
		await screen.findByText(/we seem to have had a problem/i);

		expect(consoleError).toHaveBeenCalled();
		consoleError.mockRestore();
	});
});
