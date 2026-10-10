<script lang="ts">
	import { dev } from '$app/environment';

	let { side = '' } = $props();

	import emailjs from '@emailjs/browser';

	let send = $state('');

	function sendEmail() {
		let message = document.getElementById('contactForm') as HTMLFormElement;
		send = 'sending';
		emailjs.sendForm('service_d35xsjl', 'template_xr3oinc', message, 'EqsaqQIEqZ4PMOHcM').then(
			() => {
				resetForm();
				send = 'success';
			},
			(error) => {
				// Keep the prospect's typed message on screen - clearing it here would force
				// them to retype everything to retry, and a failed send with no operator
				// signal is how an inquiry vanishes without anyone noticing.
				reportSendFailure(error);
				send = 'failed';
			}
		);
	}

	function reportSendFailure(error: unknown) {
		console.error('[EmailForm] contact form send failed', error);
		if (!dev && typeof window !== 'undefined' && window._paq) {
			window._paq.push(['trackEvent', 'Contact Form', 'Send Failed']);
		}
	}

	// $state so that resetForm()'s assignments below actually propagate back to the
	// bound inputs - a plain object here does not re-render bind:value on Svelte 5.
	let formData = $state({
		from_name: '',
		from_email: '',
		from_phone: '',
		message: ''
	});

	function resetForm() {
		formData.from_name = '';
		formData.from_email = '';
		formData.from_phone = '';
		formData.message = '';
	}
</script>

<section class="screen content" id="contact" data-label="Contact">
	<div class="container">
		<div class="split">
			<div class="section-title {side}">
				<span
					>This form goes to a live email address that we monitor, <br />so we promise to get back
					in touch asap!</span
				>
				<div class="spacer-lge"></div>
			</div>
			<div class="f col middle order-2">
				<form
					class="f col"
					onsubmit={(e) => {
						e.preventDefault();
						sendEmail();
					}}
					id="contactForm"
				>
					<label for="form_name">Name:*</label>
					<input
						type="text"
						class="input-box"
						id="form_name"
						name="from_name"
						required
						bind:value={formData.from_name}
					/>
					<label for="form_email">Email:*</label>
					<input
						type="email"
						class="input-box"
						id="form_email"
						name="from_email"
						required
						bind:value={formData.from_email}
					/>
					<label for="from_phone">Phone:</label>
					<input
						type="tel"
						class="input-box"
						id="from_phone"
						name="from_phone"
						bind:value={formData.from_phone}
					/>
					<label for="message">Message:*</label>
					<textarea
						id="message"
						name="message"
						class="input-box"
						wrap="hard"
						required
						bind:value={formData.message}
					></textarea>
					<input type="submit" class="submit" value="Send" disabled={send === 'sending'} />
				</form>
				<div class="spacer-reg"></div>
				{#if send === 'sending'}
					<div class="spacer-med">
						<span class="splash">Sending...</span>
					</div>
				{:else if send === 'success'}
					<div class="spacer-med">
						<span class="splash">Email Sent - Thank You!</span>
					</div>
				{:else if send === 'failed'}
					<div class="spacer-med">
						<span class="splash"> We seem to have had a problem sending your email. </span><br
						/>Your message is still in the form, so press Send to try again, or email us at
						<a class="contact-link" href="mailto:hello@emittiv.com">hello@emittiv.com</a>.
					</div>
				{:else}
					<div class="spacer-med"></div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	input,
	textarea {
		border: none;
		border-radius: 3px;
		outline: none;
		line-height: 1.5rem;
		padding: 0 10px;
		background-color: var(--dark);
		-webkit-font-smoothing: antialiased;
	}

	input {
		height: 1.5rem;
	}

	input:focus,
	textarea:focus {
		border: 1px solid var(--splash);
	}

	textarea {
		height: 6rem;
	}

	label {
		font-size: 0.8rem;
	}

	.contact-link {
		color: var(--white);
		border-bottom: 1px solid var(--splash);
		text-decoration: none;
	}

	.submit:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.submit {
		margin-top: 1rem;
		max-width: 8rem;
	}
	.submit:hover {
		background-color: var(--splash);
		color: var(--black);
	}
</style>
