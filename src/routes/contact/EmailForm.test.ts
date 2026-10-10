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

// Fields are located by `name`, which is what the submit path depends on; label
// association is covered separately by the "labels are associated" test below.
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

	test('every label is associated with its input (regression: for/id mismatch)', () => {
		const { container } = render(EmailForm);
		const labels = container.querySelectorAll('label[for]');
		expect(labels.length).toBe(4);
		for (const label of labels) {
			const target = container.querySelector(`#${label.getAttribute('for')}`);
			expect(target, `no element with id ${label.getAttribute('for')}`).not.toBeNull();
		}
		expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
	});

	test('a failed submit offers retry and a mailto fallback, and re-enables Send', async () => {
		sendForm.mockRejectedValueOnce(new Error('network error'));
		const user = userEvent.setup();
		const { container } = render(EmailForm);

		await fillAndSubmit(container, user);
		await screen.findByText(/we seem to have had a problem/i);

		expect(screen.getByRole('link', { name: 'hello@emittiv.com' })).toHaveAttribute(
			'href',
			'mailto:hello@emittiv.com'
		);
		expect(screen.getByRole('button', { name: 'Send' })).toBeEnabled();
		expect(screen.queryByText(/refresh the page/i)).not.toBeInTheDocument();
	});

	test('Send is disabled while a submit is in flight', async () => {
		sendForm.mockReturnValueOnce(new Promise(() => {}));
		const user = userEvent.setup();
		const { container } = render(EmailForm);

		await fillAndSubmit(container, user);

		expect(await screen.findByText(/sending/i)).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Send' })).toBeDisabled();
	});
});
