<script>
	import { fade } from 'svelte/transition';
	import { beforeNavigate, afterNavigate, disableScrollHandling } from '$app/navigation';
	import { dev } from '$app/environment';

	export let pathname = '';

	let targetHash = '';
	let isTransitioning = false;
	let isFirstNavigation = true;

	beforeNavigate((navigation) => {
		targetHash = navigation.to?.url?.hash || '';
		isTransitioning = true;
	});

	afterNavigate(() => {
		disableScrollHandling();

		// Track SPA navigation with Matomo (skip initial page load, production only)
		if (!isFirstNavigation && !dev && typeof window !== 'undefined' && window._paq) {
			window._paq.push(['setCustomUrl', window.location.href]);
			window._paq.push(['setDocumentTitle', document.title]);
			window._paq.push(['trackPageView']);
		}
		isFirstNavigation = false;

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
