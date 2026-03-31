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
	<title>The Fish Tank | Specialist Animal Lighting | emittiv</title>
	<meta
		name="description"
		content="Specialist lighting consultancy for a major indoor marine life theme park in Abu Dhabi. Equipment rationalisation, fixture approvals and advanced animal lighting systems."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/the-fish-tank" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="The Fish Tank | Specialist Animal Lighting | emittiv" />
	<meta
		property="og:description"
		content="Specialist lighting consultancy for a major indoor marine life theme park in Abu Dhabi."
	/>
	<meta property="og:url" content="https://www.emittiv.com/projects/the-fish-tank" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The Fish Tank | Specialist Animal Lighting | emittiv" />
	<meta
		name="twitter:description"
		content="Specialist lighting consultancy for a major indoor marine life theme park in Abu Dhabi."
	/>

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/the-fish-tank","name":"The Fish Tank - Specialist Animal Lighting","description":"Specialist lighting consultancy for a major indoor marine life theme park in Abu Dhabi. Equipment rationalisation and advanced animal lighting systems.","creator":{"@id":"https://www.emittiv.com/#organization"},"locationCreated":{"@type":"Place","name":"Abu Dhabi, UAE"},"keywords":"marine theme park, animal lighting, specialist consultancy, lighting, Abu Dhabi"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"The Fish Tank","item":"https://www.emittiv.com/projects/the-fish-tank"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<picture>
			<source
				srcset="/img/projects/seaworld-abu-dhabi/hero-400w.webp 400w, /img/projects/seaworld-abu-dhabi/hero.webp 1024w"
				sizes="100vw"
				type="image/webp"
			/>
			<img
				class="hero-image"
				src="/img/projects/seaworld-abu-dhabi/hero.jpg"
				srcset="/img/projects/seaworld-abu-dhabi/hero-400w.jpg 400w, /img/projects/seaworld-abu-dhabi/hero.jpg 1024w"
				sizes="100vw"
				alt="Visitors silhouetted against the massive circular aquarium viewing portal"
				style="transform: translateY({scrollY * 0.15}px)"
				loading="eager"
			/>
		</picture>
		<div class="hero-overlay">
			<h1 class="tagline">The Fish Tank</h1>
			<div class="spacer-reg"></div>
			<span class="headline">themed attraction. specialist lighting.</span>
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
						>one of the region's largest indoor marine life theme parks was under
						construction on Yas Island, Abu Dhabi - a next-generation facility
						housing over <span class="splash">68,000 marine animals</span> across
						immersive themed realms. the appointed contractor was struggling with
						the complexity of the lighting systems, and the international design
						team's specifications didn't always translate to the realities of
						procurement and operations in the UAE.</span
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
							srcset="/img/projects/seaworld-abu-dhabi/detail-400w.webp 400w, /img/projects/seaworld-abu-dhabi/detail-800w.webp 800w, /img/projects/seaworld-abu-dhabi/detail.webp 1200w"
							sizes="(min-width: 768px) 50vw, 100vw"
							type="image/webp"
						/>
						<img
							src="/img/projects/seaworld-abu-dhabi/detail.jpg"
							srcset="/img/projects/seaworld-abu-dhabi/detail-400w.jpg 400w, /img/projects/seaworld-abu-dhabi/detail-800w.jpg 800w, /img/projects/seaworld-abu-dhabi/detail.jpg 1200w"
							sizes="(min-width: 768px) 50vw, 100vw"
							alt="Grand opening celebration showing the vast indoor marine park with LED ceiling and aquarium projections"
							loading="lazy"
							width="1200"
							height="900"
						/>
					</picture>
				</div>
				<div class="split-text">
					<h2>our role</h2>
					<div class="spacer-med"></div>
					<span
						>we were brought in as a specialist consultant to help get the project
						back on track. our main focus was rationalising the equipment lists -
						trimming the vast number of manufacturers and models down to something
						the local operations team could actually maintain and source spare
						parts for.</span
					>
					<div class="spacer-med"></div>
					<span
						>we also worked on getting fixture selections approved, producing the
						dialux calculations, and contributing to the advanced animal lighting
						systems. specialist animal habitats - including penguin enclosures in
						the Antarctica realm - required careful attention to spectrum, intensity
						and timing to simulate circadian rhythms and seasonal light cycles for
						animal welfare. this was one of the few projects in the region
						requiring that level of detail in animal lighting design.</span
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
					<span><strong>location:</strong> Abu Dhabi, UAE</span>
					<span><strong>type:</strong> themed attraction, entertainment</span>
					<span><strong>disciplines:</strong> lighting, control</span>
					<div class="spacer-med"></div>
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

	.hero-bleed {
		position: relative;
		height: 85vh;
		overflow: hidden;
	}

	.hero-image {
		position: absolute;
		inset: -15% 0;
		width: 100%;
		height: 130%;
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
