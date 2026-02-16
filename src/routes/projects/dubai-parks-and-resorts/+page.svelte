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
	<title>Dubai Parks and Resorts | Themed Entertainment Lighting | emittiv</title>
	<meta
		name="description"
		content="Lighting and control design for Dubai Parks and Resorts. Themed entertainment environments including attractions, rides and public areas."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/dubai-parks-and-resorts" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Dubai Parks and Resorts | Themed Entertainment | emittiv" />
	<meta
		property="og:description"
		content="Lighting and control design for Dubai Parks and Resorts themed entertainment environments."
	/>
	<meta
		property="og:image"
		content="https://www.emittiv.com/img/projects/dubai-parks-and-resorts/hero.jpg"
	/>
	<meta property="og:url" content="https://www.emittiv.com/projects/dubai-parks-and-resorts" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/dubai-parks-and-resorts","name":"Dubai Parks and Resorts","description":"Sensory design for Dubai Parks and Resorts themed entertainment environments","creator":{"@id":"https://www.emittiv.com/#organization"},"image":"https://www.emittiv.com/img/projects/dubai-parks-and-resorts/hero.jpg","locationCreated":{"@type":"Place","name":"Dubai, UAE"},"keywords":"themed entertainment, theme park, lighting, control, Dubai"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"Dubai Parks and Resorts","item":"https://www.emittiv.com/projects/dubai-parks-and-resorts"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<div
			class="hero-image"
			style="background-image: url(/img/projects/dubai-parks-and-resorts/hero.jpg); transform: translateY({scrollY * 0.15}px)"
		></div>
		<div class="hero-overlay">
			<span class="tagline">Dubai Parks and Resorts</span>
			<div class="spacer-reg" />
			<span class="headline">themed entertainment. multiple disciplines.</span>
			<div class="spacer-reg" />
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
						>themed entertainment is where our theatrical background is most at home. every
						space tells a story, every transition matters, and the technical systems need to
						deliver reliably — day after day, in desert heat, to audiences who don't know
						or care how it works.</span
					>
					<div class="spacer-med" />
					<span
						>Dubai Parks and Resorts brought together multiple themed environments, each with
						its own character, narrative and technical demands. the challenge was
						<span class="splash">consistency across diversity</span> — unified quality
						without uniformity.</span
					>
				</div>
			</div>
		</div>
	</section>

	<section class="split-section content" bind:this={splitEl}>
		<div class="container">
			<div class="split-image-layout">
				<div class="split-img {splitRevealed ? 'revealed' : ''}">
					<img
						src="/img/projects/dubai-parks-and-resorts/area.jpg"
						alt="Dubai Parks and Resorts themed area lighting"
						loading="lazy"
					/>
				</div>
				<div class="split-text">
					<h2>our role</h2>
					<div class="spacer-med" />
					<span
						>we provided lighting and control design services — working within the themed
						entertainment design framework that these projects demand.</span
					>
					<div class="spacer-med" />
					<span
						>this is the kind of project where <span class="splash"
							>consistency matters</span
						>. when lighting and control are designed together from the start across multiple
						zones, the result is more cohesive — and the coordination headaches during
						installation are significantly reduced.</span
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
					<span><strong>location:</strong> Dubai, UAE</span>
					<span><strong>type:</strong> themed entertainment, destination</span>
					<span><strong>disciplines:</strong> lighting, control</span>
					<div class="spacer-lge" />
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
		background-size: cover;
		background-position: center;
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
