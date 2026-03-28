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
	<title>The University | Performance Venue Renovation | emittiv</title>
	<meta
		name="description"
		content="Lighting and control design for a major university auditorium renovation in the Middle East. Full systems design for a 2,500-seat theatre and campus-wide facilities."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/the-university" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="The University | Performance Venue Renovation | emittiv" />
	<meta
		property="og:description"
		content="Lighting and control design for a major university auditorium renovation in the Middle East. Full systems for a 2,500-seat theatre."
	/>
	<meta
		property="og:image"
		content="https://www.emittiv.com/img/projects/al-imam-university/hero.jpg"
	/>
	<meta property="og:url" content="https://www.emittiv.com/projects/the-university" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The University | Performance Venue Renovation | emittiv" />
	<meta
		name="twitter:description"
		content="Lighting and control design for a major university auditorium renovation in the Middle East. Full systems for a 2,500-seat theatre and campus facilities."
	/>
	<meta name="twitter:image" content="https://www.emittiv.com/img/projects/al-imam-university/hero.jpg" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/the-university","name":"The University — Performance Venue Renovation","description":"Lighting and control design for a major university auditorium renovation in the Middle East, including a 2,500-seat theatre and campus-wide facilities","creator":{"@id":"https://www.emittiv.com/#organization"},"image":"https://www.emittiv.com/img/projects/al-imam-university/hero.jpg","locationCreated":{"@type":"Place","name":"Middle East"},"keywords":"auditorium, performance venue, lighting, control, university, Middle East"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"The University","item":"https://www.emittiv.com/projects/the-university"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<picture>
			<source
				srcset="/img/projects/al-imam-university/hero-400w.webp 400w, /img/projects/al-imam-university/hero-800w.webp 800w, /img/projects/al-imam-university/hero.webp 1600w"
				sizes="100vw"
				type="image/webp"
			/>
			<img
				class="hero-image"
				src="/img/projects/al-imam-university/hero.jpg"
				srcset="/img/projects/al-imam-university/hero-400w.jpg 400w, /img/projects/al-imam-university/hero-800w.jpg 800w, /img/projects/al-imam-university/hero.jpg 1600w"
				sizes="100vw"
				alt="University auditorium interior after full lighting and AV renovation"
				style="transform: translateY({scrollY * 0.15}px)"
				loading="eager"
			/>
		</picture>
		<div class="hero-overlay">
			<h1 class="tagline">The University</h1>
			<div class="spacer-reg"></div>
			<span class="headline">performance venue. full renovation.</span>
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
						>originally built in the 1970s, this major campus had fallen behind in terms of
						technical capability. the project began with renovating and reinvigorating the
						2,500-seat theatre and a number of smaller auditoria — designing new lighting,
						audio, video and automated rigging systems to
						<span class="splash">restore the space to its former condition</span> and
						take it significantly further. the scale and ambition of the brief made it one
						of the most comprehensive performance venue projects we have undertaken.</span
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
							srcset="/img/projects/al-imam-university/campus-400w.webp 400w, /img/projects/al-imam-university/campus-800w.webp 800w, /img/projects/al-imam-university/campus.webp 1200w"
							sizes="(min-width: 768px) 50vw, 100vw"
							type="image/webp"
						/>
						<img
							src="/img/projects/al-imam-university/campus.jpg"
							srcset="/img/projects/al-imam-university/campus-400w.jpg 400w, /img/projects/al-imam-university/campus-800w.jpg 800w, /img/projects/al-imam-university/campus.jpg 1200w"
							sizes="(min-width: 768px) 50vw, 100vw"
							alt="University campus site plan showing the full renovation scope"
							loading="lazy"
							width="1200"
							height="800"
						/>
					</picture>
				</div>
				<div class="split-text">
					<h2>our role</h2>
					<div class="spacer-med"></div>
					<span
						>this renovation was the first in the region to incorporate
						<span class="splash">colour-changing LED technology for the auditorium seating
						area</span> (FoH) — allowing the lighting designs on stage to be brought out
						into the house and enveloping the audience in the performance.</span
					>
					<div class="spacer-med"></div>
					<span
						>the scope extended well beyond the main theatre, encompassing the Ladies Campus,
						Student Lobby, Library, Water Tower, Sports Stadium, Royal Gate and Boundary
						Fence — a truly campus-wide transformation of the technical and aesthetic
						lighting infrastructure.</span
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
					<span><strong>location:</strong> Middle East</span>
					<span><strong>type:</strong> performance venue, education</span>
					<span><strong>disciplines:</strong> lighting, control</span>
					<div class="spacer-med"></div>
					<span>learn more about our <a href="/services/lighting">lighting design</a> and <a href="/services/control">control systems</a> services.</span>
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

	/* ── Split image + text ── */
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
