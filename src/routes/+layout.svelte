<script lang="ts">
	import '$lib/css/reset.scss';
	import '$lib/css/main.scss';
	import '$lib/css/animate.scss';
	import TheMenu from '$lib/components/Menu.svelte';
	import TheFooter from '$lib/components/Footer.svelte';
	import Transitions from '$lib/components/transitions.svelte';

	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<TheMenu />
<Transitions pathname={data.pathname}>
	<slot />
	<TheFooter />
</Transitions>

<style>
</style>
