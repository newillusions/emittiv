<script lang="ts">
	let {
		heading = 'call or message us',
		number = '+971 58 585 5569',
		tel = '+971585855569',
		whatsapp = 'https://wa.me/971585855569'
	} = $props();
</script>

<span class="headline">{heading}</span>
<span>
	<a class="contact-link" href="tel:{tel}">{number}</a> (also on
	<a class="contact-link" href={whatsapp}>WhatsApp</a>)
</span>

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
