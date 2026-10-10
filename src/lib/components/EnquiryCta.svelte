<script lang="ts">
	let {
		heading = 'discuss a project',
		text = 'tell us what you are planning and we will come back to you.'
	} = $props();
</script>

<section class="enquiry" data-label="Enquiry">
	<div class="container center">
		<h2 class="headline">{heading}</h2>
		<span>{text}</span>
		<div class="spacer-reg"></div>
		<a class="btn btn-primary" href="/contact">Discuss a project</a>
	</div>
</section>

<style lang="scss">
	.enquiry {
		padding: 4rem 0;
		text-align: center;
		background-color: var(--darker);
	}

	h2 {
		margin-bottom: 0.5rem;
	}
</style>
