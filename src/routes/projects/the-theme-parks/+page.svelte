<script lang="ts">
	import { onMount } from 'svelte';

	let scrollY = $state(0);
	let innerHeight = $state(0);
	let splitEl: HTMLElement | null = $state(null);
	let splitRevealed = $state(false);

	function handleScroll() {
		scrollY = window.scrollY;
		if (splitEl && !splitRevealed) {
			const rect = splitEl.getBoundingClientRect();
			if (rect.top < innerHeight * 0.85) {
				splitRevealed = true;
			}
		}
	}

	onMount(() => {
		innerHeight = window.innerHeight;
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>The Theme Parks | Themed Entertainment Lighting | emittiv</title>
	<meta
		name="description"
		content="Themed entertainment lighting design for a large-scale destination theme park complex in the UAE. Attractions, rides and public areas across multiple parks."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/the-theme-parks" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="The Theme Parks | Themed Entertainment | emittiv" />
	<meta
		property="og:description"
		content="Themed entertainment lighting design for a large-scale destination theme park complex in the UAE."
	/>
	<meta
		property="og:image"
		content="https://www.emittiv.com/img/projects/dubai-parks-and-resorts/hero.jpg"
	/>
	<meta property="og:url" content="https://www.emittiv.com/projects/the-theme-parks" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The Theme Parks | Themed Entertainment | emittiv" />
	<meta
		name="twitter:description"
		content="Themed entertainment lighting design for a large-scale destination theme park complex in the UAE. Attractions, rides and public areas across multiple parks."
	/>
	<meta name="twitter:image" content="https://www.emittiv.com/img/projects/dubai-parks-and-resorts/hero.jpg" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/the-theme-parks","name":"The Theme Parks","description":"Sensory design for a large-scale themed entertainment destination in the UAE","creator":{"@id":"https://www.emittiv.com/#organization"},"image":"https://www.emittiv.com/img/projects/dubai-parks-and-resorts/hero.jpg","locationCreated":{"@type":"Place","name":"UAE"},"keywords":"themed entertainment, theme park, lighting designer, control, UAE"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"The Theme Parks","item":"https://www.emittiv.com/projects/the-theme-parks"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<picture>
			<source
				srcset="/img/projects/dubai-parks-and-resorts/hero-400w.webp 400w, /img/projects/dubai-parks-and-resorts/hero-800w.webp 800w, /img/projects/dubai-parks-and-resorts/hero.webp 1280w"
				sizes="100vw"
				type="image/webp"
			/>
			<img
				class="hero-image"
				src="/img/projects/dubai-parks-and-resorts/hero.jpg"
				srcset="/img/projects/dubai-parks-and-resorts/hero-400w.jpg 400w, /img/projects/dubai-parks-and-resorts/hero-800w.jpg 800w, /img/projects/dubai-parks-and-resorts/hero.jpg 1280w"
				sizes="100vw"
				alt="themed entertainment park lighting at night"
				style="transform: translateY({scrollY * 0.15}px)"
				loading="eager"
			/>
		</picture>
		<div class="hero-overlay">
			<h1 class="tagline">The Theme Parks</h1>
			<div class="spacer-reg"></div>
			<span class="headline">themed entertainment. multiple disciplines.</span>
			<div class="spacer-reg"></div>
			<span class="disciplines">lighting / control</span>
		</div>
	</section>

	<section class="screen-flow content" data-label="Context">
		<div class="container">
			<div class="split">
				<div class="section-title order-1">
					<h2>the brief</h2>
				</div>
				<div class="v-padding-1 f col middle order-2">
					<span
						>working simultaneously across multiple parks, from area development to rides and
						fully themed <span class="splash">IP-based attractions</span> - each environment
						with its own character, narrative and technical demands. the scale of the destination
						meant that consistency and integration were as important as individual creative expression.</span
					>
					<div class="spacer-med"></div>
					<span
						>the lighting concepts needed to be in line with the IP holder's vision and
						requirements, while ensuring the various systems and projects would all link in
						to the park-wide controls.</span
					>
				</div>
			</div>
		</div>
	</section>

	<section class="split-section content" bind:this={splitEl}>
		<div class="container">
			<div class="split-image-layout">
				<div class="split-img {splitRevealed ? 'revealed' : ''}">
					<picture>
						<source
							srcset="/img/projects/dubai-parks-and-resorts/area-400w.webp 400w, /img/projects/dubai-parks-and-resorts/area-800w.webp 800w, /img/projects/dubai-parks-and-resorts/area.webp 1280w"
							sizes="(min-width: 768px) 50vw, 100vw"
							type="image/webp"
						/>
						<img
							src="/img/projects/dubai-parks-and-resorts/area.jpg"
							srcset="/img/projects/dubai-parks-and-resorts/area-400w.jpg 400w, /img/projects/dubai-parks-and-resorts/area-800w.jpg 800w, /img/projects/dubai-parks-and-resorts/area.jpg 1280w"
							sizes="(min-width: 768px) 50vw, 100vw"
							alt="themed entertainment park area lighting"
							loading="lazy"
							width="1280"
							height="858"
						/>
					</picture>
				</div>
				<div class="split-text">
					<h2>our role</h2>
					<div class="spacer-med"></div>
					<span
						>as the themed entertainment lighting designer, we provided the original lighting
						concepts for renovations of existing areas as well as new themed attractions
						under development.</span
					>
					<div class="spacer-med"></div>
					<span
						>we then <span class="splash">managed external teams</span> through the schematic
						and detailed design phases to ensure the various systems and projects would all
						link in to the park-wide controls.</span
					>
				</div>
			</div>
		</div>
	</section>

	<section class="screen-flow content" data-label="Details">
		<div class="container">
			<div class="split">
				<div class="section-title order-1">
					<h2>project details</h2>
				</div>
				<div class="v-padding-1 f col middle order-2">
					<span><strong>location:</strong> UAE</span>
					<span><strong>type:</strong> themed entertainment, destination</span>
					<span><strong>disciplines:</strong> lighting, control</span>
					<div class="spacer-lge"></div>
					<span class="underline">
						<a class="navItem" href="/projects">back to projects</a>
					</span>
				</div>
			</div>
		</div>
	</section>
</main>

<style lang="scss">
	.disciplines {
		font-size: 0.8rem;
		letter-spacing: 0.15em;
		opacity: 0.6;
	}

	/* -- Full-bleed hero -- */
	.hero-bleed {
		position: relative;
		height: 85vh;
		overflow: hidden;
	}

	.hero-image {
		position: absolute;
		inset: -15% 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		will-change: transform;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		padding-bottom: 8vh;
		background: linear-gradient(
			to bottom,
			transparent 30%,
			rgba(0, 0, 0, 0.4) 60%,
			rgba(0, 0, 0, 0.85) 100%
		);
	}

	/* -- Split image + text -- */
	.split-section {
		padding: 4rem 0;
	}

	.split-image-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
		min-height: 40vh;

		h2 {
			font-family: 'Ubuntu', sans-serif;
			font-size: clamp(1.5rem, 3vw, 2.5rem);
			font-weight: 300;
			color: var(--white);
		}
	}

	.split-img {
		overflow: hidden;
		border-radius: 2px;
		clip-path: inset(0 100% 0 0);
		transition: clip-path 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

		&.revealed {
			clip-path: inset(0 0 0 0);
		}

		img {
			display: block;
			width: 100%;
			transition: transform 0.6s ease;
		}

		&:hover img {
			transform: scale(1.03);
		}
	}

	@media (max-width: 768px) {
		.hero-bleed {
			height: 60vh;
		}

		.split-image-layout {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
