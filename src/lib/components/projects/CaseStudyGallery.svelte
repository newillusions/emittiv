<script lang="ts" module>
	export interface GalleryImage {
		src: string;
		alt: string;
		width: number;
		height: number;
		sizes?: number[];
	}
</script>

<script lang="ts">
	import '$lib/styles/case-study.scss';

	interface Props {
		images: GalleryImage[];
		dataLabel?: string;
	}

	let { images, dataLabel = 'Gallery' }: Props = $props();

	function buildSrcset(image: GalleryImage, ext: 'webp' | 'jpg'): string {
		const sizes = (image.sizes ?? [600, 960]).slice().sort((a, b) => a - b);
		const largest = sizes[sizes.length - 1];
		return sizes
			.map((w) => {
				const file = w === largest ? `${image.src}.${ext}` : `${image.src}-${w}w.${ext}`;
				return `${file} ${w}w`;
			})
			.join(', ');
	}
</script>

<section class="gallery-strip" data-label={dataLabel}>
	<div class="gallery-scroll">
		{#each images as image (image.src)}
			<picture>
				<source
					srcset={buildSrcset(image, 'webp')}
					sizes="(min-width: 768px) 40vw, 70vw"
					type="image/webp"
				/>
				<img
					src="{image.src}.jpg"
					srcset={buildSrcset(image, 'jpg')}
					sizes="(min-width: 768px) 40vw, 70vw"
					alt={image.alt}
					loading="lazy"
					width={image.width}
					height={image.height}
				/>
			</picture>
		{/each}
	</div>
</section>
