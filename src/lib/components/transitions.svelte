<script>
	import { fade } from 'svelte/transition';
	import { beforeNavigate, afterNavigate, disableScrollHandling } from '$app/navigation';

	export let pathname = '';

	let targetHash = '';
	let isTransitioning = false;

	beforeNavigate((navigation) => {
		targetHash = navigation.to?.url?.hash || '';
		isTransitioning = true;
	});

	afterNavigate(() => {
		disableScrollHandling();

		// Scroll to position after fade-out completes (500ms)
		setTimeout(() => {
			if (targetHash) {
				const element = document.querySelector(targetHash);
				if (element) {
					element.scrollIntoView({ behavior: 'instant' });
				}
			} else {
				window.scrollTo(0, 0);
			}
			targetHash = '';
		}, 500);

		// Release transitioning state after full animation
		setTimeout(() => {
			isTransitioning = false;
		}, 1000);
	});
</script>

<div class="transition-container" class:transitioning={isTransitioning}>
	{#key pathname}
		<div class="transition-page" in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
			<slot />
		</div>
	{/key}
</div>

<style>
	.transition-container {
		position: relative;
		min-height: 100vh;
	}

	.transition-container.transitioning .transition-page {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
</style>
