<script lang="ts">
	import ContactPhone from '$lib/components/ContactPhone.svelte';
	let { side = '' } = $props();
</script>

<section class="screen content" id="contact" data-label="Contact">
	<h1 class="page-header">contact emittiv</h1>
	<div class="container h70">
		<div class="split">
			<div class="section-title {side}">
				<h2>give us a<br /><span class="splash">shout</span>.</h2>
			</div>
			<div class="f col middle order-2">
				<span class="headline">find us</span>
				<span>dubai south, dubai, uae</span>
				<div class="spacer-reg"></div>
				<span class="headline">email us</span>
				<span><a class="contact-link" href="mailto:hello@emittiv.com">hello@emittiv.com</a></span>
				<div class="spacer-reg"></div>
				<span class="headline">operating hours</span>
				<span>Monday - Thursday</span>
				<span>9am-6pm</span>
				<span>Friday</span>
				<span>9am-2pm</span>
				<span>...</span>
				<span>Ha! We wish! 🙂</span>
				<div class="spacer-reg"></div>
				<ContactPhone />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.contact-link {
		color: var(--white);
		text-decoration: none;
		border-bottom: 1px solid var(--splash);

		&:hover,
		&:focus-visible {
			color: var(--splash);
		}
	}
</style>
