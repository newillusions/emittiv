<script lang="ts">
	export let side = '';

	import emailjs from '@emailjs/browser';

	let send = '';
	// let form = {};

	function sendEmail() {
		let message = document.getElementById('contactForm');
		send = 'sending';
		emailjs.sendForm('service_d35xsjl', 'template_xr3oinc', message, 'EqsaqQIEqZ4PMOHcM').then(
			(result) => {
				resetForm();
				send = 'success';
				// console.log('SUCCESS!', result.text);
			},
			(error) => {
				resetForm();
				send = 'failed';
				// console.log('FAILED...', error.text);
			}
		);
	}

	let formData = {
		from_name: '',
		from_email: '',
		from_phone: '',
		message: ''
	};

	function resetForm() {
		(formData.from_name = ''),
			(formData.from_email = ''),
			(formData.from_phone = ''),
			(formData.message = '');
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
				<div class="spacer-lge" />
			</div>
			<div class="f col middle order-2">
				<form class="f col" on:submit|preventDefault={sendEmail} id="contactForm">
					<label for="form_name">Name:*</label>
					<input
						type="text"
						class="input-box"
						name="from_name"
						required
						bind:value={formData.from_name}
					/>
					<label for="form_email">Email:*</label>
					<input
						type="email"
						class="input-box"
						name="from_email"
						required
						bind:value={formData.from_email}
					/>
					<label for="from_phone">Phone:</label>
					<input type="tel" class="input-box" name="from_phone" bind:value={formData.from_phone} />
					<label for="message">Message:*</label>
					<textarea
						name="message"
						class="input-box"
						wrap="hard"
						required
						bind:value={formData.message}
					/>
					<input type="submit" class="submit" value="Send" />
				</form>
				<div class="spacer-reg" />
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
						<span class="splash"> We seem to have had a problems sending your email. </span><br
						/>Please refresh the page and try again.
					</div>
				{:else}
					<div class="spacer-med" />
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
		background-color: #666;
		-webkit-font-smoothing: antialiased;
	}

	input {
		height: 1.5rem;
	}

	input:focus,
	textarea:focus {
		border: 1px solid #f90;
	}

	textarea {
		height: 6rem;
	}

	label {
		font-size: 0.8rem;
	}

	.submit {
		margin-top: 1rem;
		max-width: 8rem;
	}
	.submit:hover {
		background-color: #f90;
		color: #000;
	}
</style>
