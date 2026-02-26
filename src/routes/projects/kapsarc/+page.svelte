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
	<title>KAPSARC Multipurpose Hall | Performance Venue | emittiv</title>
	<meta
		name="description"
		content="Lighting and control systems for the KAPSARC Multipurpose Hall, Riyadh. Zaha Hadid-designed venue with motorised rigging and flexible control architecture."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/kapsarc" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="KAPSARC Multipurpose Hall | Performance Venue | emittiv" />
	<meta
		property="og:description"
		content="Lighting and control for the KAPSARC Multipurpose Hall. Zaha Hadid-designed venue with motorised rigging and flexible control."
	/>
	<meta property="og:image" content="https://www.emittiv.com/img/projects/kapsarc/hero.jpg" />
	<meta property="og:url" content="https://www.emittiv.com/projects/kapsarc" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="KAPSARC Multipurpose Hall | Performance Venue | emittiv" />
	<meta
		name="twitter:description"
		content="Lighting and control systems for the KAPSARC Multipurpose Hall. Zaha Hadid-designed venue with motorised rigging and flexible control."
	/>
	<meta name="twitter:image" content="https://www.emittiv.com/img/projects/kapsarc/hero.jpg" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/kapsarc","name":"KAPSARC Multipurpose Hall","description":"Lighting and control systems for the KAPSARC Multipurpose Hall, Riyadh","creator":{"@id":"https://www.emittiv.com/#organization"},"image":"https://www.emittiv.com/img/projects/kapsarc/hero.jpg","locationCreated":{"@type":"Place","name":"Riyadh, KSA"},"keywords":"lighting, multipurpose hall, Zaha Hadid, control systems, rigging, Riyadh"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"KAPSARC","item":"https://www.emittiv.com/projects/kapsarc"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<picture>
			<source
				srcset="/img/projects/kapsarc/hero-400w.webp 400w, /img/projects/kapsarc/hero.webp 700w"
				sizes="100vw"
				type="image/webp"
			/>
			<img
				class="hero-image"
				src="/img/projects/kapsarc/hero.jpg"
				srcset="/img/projects/kapsarc/hero-400w.jpg 400w, /img/projects/kapsarc/hero.jpg 700w"
				sizes="100vw"
				alt="KAPSARC multipurpose hall designed by Zaha Hadid"
				style="transform: translateY({scrollY * 0.15}px)"
				loading="eager"
			/>
		</picture>
		<div class="hero-overlay">
			<h1 class="tagline">KAPSARC</h1>
			<div class="spacer-reg"></div>
			<span class="headline">multipurpose hall. Zaha Hadid.</span>
			<div class="spacer-reg"></div>
			<span class="disciplines">project management / lighting / control</span>
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
						>lighting a Zaha Hadid interior presents a specific challenge — hundreds of
						small panels, each with unique dimensions and shapes. the lighting systems needed
						to be <span class="splash">invisible when not in use</span>, allowing the
						interior design to remain the focal point.</span
					>
					<div class="spacer-med"></div>
					<span
						>the main hall subdivides into 5 separate rooms or combines in various
						configurations. a 328-seat auditorium on the same site serves high-profile
						clients and press conferences.</span
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
							srcset="/img/projects/kapsarc/auditorium-400w.webp 400w, /img/projects/kapsarc/auditorium-800w.webp 800w, /img/projects/kapsarc/auditorium.webp 1600w"
							sizes="(min-width: 768px) 50vw, 100vw"
							type="image/webp"
						/>
						<img
							src="/img/projects/kapsarc/auditorium.jpg"
							srcset="/img/projects/kapsarc/auditorium-400w.jpg 400w, /img/projects/kapsarc/auditorium-800w.jpg 800w, /img/projects/kapsarc/auditorium.jpg 1600w"
							sizes="(min-width: 768px) 50vw, 100vw"
							alt="KAPSARC auditorium performance lighting"
							loading="lazy"
							width="1600"
							height="1072"
						/>
					</picture>
				</div>
				<div class="split-text">
					<h2>our role</h2>
					<div class="spacer-med"></div>
					<span
						>we <span class="splash">project managed the entertainment spaces installation</span>
						— coordinating over 40 motorised line-sets, several hundred luminaires, and
						portable lighting desks that can connect to any room, allowing operators to
						control all or part of the system with ease.</span
					>
					<div class="spacer-med"></div>
					<span
						>the auditorium features fully integrated architectural and stage lighting using
						DMX and DALI protocols — balanced for event operation and daily use. midway
						through the project, the client revised electrical supply requirements from dual
						110v/230v to single supply, requiring system redesign — we met the original
						deadlines despite the changes.</span
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
					<span><strong>location:</strong> Riyadh, KSA</span>
					<span><strong>client:</strong> Saudi Aramco</span>
					<span><strong>architect:</strong> Zaha Hadid</span>
					<span><strong>type:</strong> multipurpose hall, conference venue</span>
					<span><strong>size:</strong> 2,256 m&sup2;</span>
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
