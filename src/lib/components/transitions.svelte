<script>
	import { fade } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
		<slot />
	</div>
{/key}
