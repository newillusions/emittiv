<script lang="ts">
	import { onMount } from 'svelte';
	import '$lib/styles/case-study.scss';

	interface Props {
		name: string;
		headline: string;
		disciplines: string;
		variant?: 'image' | 'text';
		heroPath?: string;
		heroAlt?: string;
		heroSizes?: number[];
		heroHeight?: '100%' | '130%';
	}

	let {
		name,
		headline,
		disciplines,
		variant = 'image',
		heroPath,
		heroAlt = '',
		heroSizes = [400, 800],
		heroHeight = '100%'
	}: Props = $props();

	let scrollY = $state(0);

	function handleScroll() {
		scrollY = window.scrollY;
	}

	onMount(() => {
		if (variant !== 'image') return;
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const sortedSizes = $derived([...heroSizes].sort((a, b) => a - b));
	const largestSize = $derived(sortedSizes[sortedSizes.length - 1]);

	function buildSrcset(path: string, ext: 'webp' | 'jpg', sizes: number[], largest: number): string {
		return sizes
			.map((w) => {
				const file = w === largest ? `${path}.${ext}` : `${path}-${w}w.${ext}`;
				return `${file} ${w}w`;
			})
			.join(', ');
	}

	const webpSrcset = $derived(heroPath ? buildSrcset(heroPath, 'webp', sortedSizes, largestSize) : '');
	const jpgSrcset = $derived(heroPath ? buildSrcset(heroPath, 'jpg', sortedSizes, largestSize) : '');
</script>

{#if variant === 'image' && heroPath}
	<section class="hero-bleed">
		<picture>
			<source srcset={webpSrcset} sizes="100vw" type="image/webp" />
			<img
				class="hero-image {heroHeight === '130%' ? 'hero-image-tall' : ''}"
				src="{heroPath}.jpg"
				srcset={jpgSrcset}
				sizes="100vw"
				alt={heroAlt}
				style="transform: translateY({scrollY * 0.15}px)"
				loading="eager"
			/>
		</picture>
		<div class="hero-overlay">
			<h1 class="tagline">{name}</h1>
			<div class="spacer-reg"></div>
			<span class="headline">{headline}</span>
			<div class="spacer-reg"></div>
			<span class="disciplines">{disciplines}</span>
		</div>
	</section>
{:else}
	<section class="hero-text">
		<div class="hero-overlay">
			<h1 class="tagline">{name}</h1>
			<div class="spacer-reg"></div>
			<span class="headline">{headline}</span>
			<div class="spacer-reg"></div>
			<span class="disciplines">{disciplines}</span>
		</div>
	</section>
{/if}
