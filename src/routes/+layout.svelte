<script>
	import '$lib/css/reset.scss';
	import '$lib/css/main.scss';
	import '$lib/css/animate.scss';
	import TheMenu from '$lib/components/Menu.svelte';
	import TheFooter from '$lib/components/Footer.svelte';
	import Transitions from '$lib/components/transitions.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<TheMenu />
<Transitions pathname={data.pathname}>
	<slot />
</Transitions>
<TheFooter />

<style>
</style>
