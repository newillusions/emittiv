<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';
	import '$lib/styles/case-study.scss';

	interface Props {
		imagePath: string;
		imageAlt: string;
		imageSizes?: number[];
		imageWidth?: number;
		imageHeight?: number;
		hoverEffect?: boolean;
		children: Snippet;
	}

	let {
		imagePath,
		imageAlt,
		imageSizes = [400, 800, 1200],
		imageWidth = 1200,
		imageHeight = 800,
		hoverEffect = true,
		children
	}: Props = $props();

	let splitEl: HTMLElement | null = $state(null);
	let revealed = $state(false);

	function check() {
		if (!splitEl || revealed) return;
		const rect = splitEl.getBoundingClientRect();
		if (rect.top < window.innerHeight * 0.85) {
			revealed = true;
		}
	}

	onMount(() => {
		window.addEventListener('scroll', check, { passive: true });
		check();
		return () => window.removeEventListener('scroll', check);
	});

	const sortedSizes = $derived([...imageSizes].sort((a, b) => a - b));
	const largestSize = $derived(sortedSizes[sortedSizes.length - 1]);

	function buildSrcset(path: string, ext: 'webp' | 'jpg', sizes: number[], largest: number): string {
		return sizes
			.map((w) => {
				const file = w === largest ? `${path}.${ext}` : `${path}-${w}w.${ext}`;
				return `${file} ${w}w`;
			})
			.join(', ');
	}

	const webpSrcset = $derived(buildSrcset(imagePath, 'webp', sortedSizes, largestSize));
	const jpgSrcset = $derived(buildSrcset(imagePath, 'jpg', sortedSizes, largestSize));
</script>

<section class="split-section content" bind:this={splitEl}>
	<div class="container">
		<div class="split-image-layout">
			<div
				class="split-img {revealed ? 'revealed' : ''} {hoverEffect ? 'split-img-hover' : ''}"
			>
				<picture>
					<source
						srcset={webpSrcset}
						sizes="(min-width: 768px) 50vw, 100vw"
						type="image/webp"
					/>
					<img
						src="{imagePath}.jpg"
						srcset={jpgSrcset}
						sizes="(min-width: 768px) 50vw, 100vw"
						alt={imageAlt}
						loading="lazy"
						width={imageWidth}
						height={imageHeight}
					/>
				</picture>
			</div>
			<div class="split-text">
				{@render children()}
			</div>
		</div>
	</div>
</section>
