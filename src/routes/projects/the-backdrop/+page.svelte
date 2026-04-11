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
	<title>The Backdrop | Immersive Entertainment Lighting | emittiv</title>
	<meta
		name="description"
		content="Lighting design for a 100,000 sq ft immersive entertainment venue in Dubai with 25+ unique themed worlds. Sole lighting consultant across a 2.5-year engagement."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/the-backdrop" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="The Backdrop | Immersive Entertainment Lighting | emittiv" />
	<meta
		property="og:description"
		content="Lighting design for a 100,000 sq ft immersive entertainment venue in Dubai with 25+ unique themed worlds."
	/>
	<meta property="og:image" content="https://www.emittiv.com/img/projects/the-backdrop/hero.jpg" />
	<meta property="og:url" content="https://www.emittiv.com/projects/the-backdrop" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The Backdrop | Immersive Entertainment Lighting | emittiv" />
	<meta
		name="twitter:description"
		content="Lighting design for a 100,000 sq ft immersive entertainment venue in Dubai with 25+ unique themed worlds."
	/>
	<meta name="twitter:image" content="https://www.emittiv.com/img/projects/the-backdrop/hero.jpg" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/the-backdrop","name":"The Backdrop - Immersive Entertainment Lighting","description":"Lighting design for a 100,000 sq ft immersive entertainment venue in Dubai with 25+ unique themed worlds. Sole lighting consultant across a 2.5-year engagement.","creator":{"@id":"https://www.emittiv.com/#organization"},"image":"https://www.emittiv.com/img/projects/the-backdrop/hero.jpg","locationCreated":{"@type":"Place","name":"Dubai, UAE"},"keywords":"immersive entertainment, themed attraction, lighting design, control systems, DALI, DMX, Dubai"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"The Backdrop","item":"https://www.emittiv.com/projects/the-backdrop"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<picture>
			<source
				srcset="/img/projects/the-backdrop/hero-400w.webp 400w, /img/projects/the-backdrop/hero-800w.webp 800w, /img/projects/the-backdrop/hero.webp 1920w"
				sizes="100vw"
				type="image/webp"
			/>
			<img
				class="hero-image"
				src="/img/projects/the-backdrop/hero.jpg"
				srcset="/img/projects/the-backdrop/hero-400w.jpg 400w, /img/projects/the-backdrop/hero-800w.jpg 800w, /img/projects/the-backdrop/hero.jpg 1920w"
				sizes="100vw"
				alt="Immersive laundromat room with thousands of pixel-mapped LED dots covering walls and ceiling"
				style="transform: translateY({scrollY * 0.15}px)"
				loading="eager"
			/>
		</picture>
		<div class="hero-overlay">
			<h1 class="tagline">The Backdrop</h1>
			<div class="spacer-reg"></div>
			<span class="headline">immersive entertainment. 25+ worlds.</span>
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
						>a <span class="splash">100,000 square foot</span> immersive entertainment
						venue in one of Dubai's largest malls - 25+ individually themed worlds,
						each one a completely different environment. content-creation focused,
						heavy on interactive lighting, neon, mirror rooms and sound-reactive
						installations. lighting wasn't just part of the experience - it was
						the experience.</span
					>
					<div class="spacer-med"></div>
					<span
						>we were brought in by a member of the project management team who
						had worked with us on a previous major international event. the
						concept went through several evolutions, including a version in another
						country, before landing on the final Dubai venue - each iteration
						bringing lessons that fed into the design.</span
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
							srcset="/img/projects/the-backdrop/detail-400w.webp 400w, /img/projects/the-backdrop/detail.webp 960w"
							sizes="(min-width: 768px) 50vw, 100vw"
							type="image/webp"
						/>
						<img
							src="/img/projects/the-backdrop/detail.jpg"
							srcset="/img/projects/the-backdrop/detail-400w.jpg 400w, /img/projects/the-backdrop/detail.jpg 960w"
							sizes="(min-width: 768px) 50vw, 100vw"
							alt="Neon-lit hallway with multi-colour LED strips creating an infinite perspective grid"
							loading="lazy"
							width="960"
							height="1280"
						/>
					</picture>
				</div>
				<div class="split-text">
					<h2>our role</h2>
					<div class="spacer-med"></div>
					<span
						>we were the sole lighting consultant and designer across the entire
						site for <span class="splash">over two and a half years</span> - and
						we're still involved today. every room was a unique design challenge.
						fluorescent tubes doing a dodgy flicker to emulate a sketchy old
						laundromat. traffic lights using morse code signals. signage that
						breathes with the room on DALI and DMX rather than sitting on an
						isolated circuit. an ocean of chinese lanterns in the ceiling with
						wave and chase effects rippling through them.</span
					>
					<div class="spacer-med"></div>
					<span
						>the variety is what makes it special. every single space is different
						to the last, and every one of them had to feel completely authentic
						to its own world.</span
					>
				</div>
			</div>
		</div>
	</section>

	<section class="screen-flow content" data-label="Control">
		<div class="container">
			<div class="split">
				<div class="section-title order-1">
					<h2>one system</h2>
				</div>
				<div class="v-padding-1 f col middle order-2">
					<span
						>the control architecture was a challenge in itself. the client had
						split the lighting package between two contractors - one doing DALI,
						one doing DMX and pixel-based work. every room had both types of
						fixture in it, and the contractors were pushing for separate controllers.
						we insisted on <span class="splash">a single headend</span> - one
						brain running the whole venue.</span
					>
					<div class="spacer-med"></div>
					<span
						>we specified nodes with both DALI and DMX outputs, one or more per
						room, all feeding back to a single controller talking out to media
						servers and show control playback. construction threw its own problems
						at us - overseas contractors, delays, budget cuts that killed the
						pre-visualisation workflow. we ended up rethinking and redesigning
						sections on the fly during commissioning, working closely with a
						trusted programmer to get it right under pressure.</span
					>
				</div>
			</div>
		</div>
	</section>

	<section class="gallery-strip" data-label="Gallery">
		<div class="gallery-scroll">
			<picture>
				<source
					srcset="/img/projects/the-backdrop/gallery-1-600w.webp 600w, /img/projects/the-backdrop/gallery-1.webp 960w"
					sizes="(min-width: 768px) 40vw, 70vw"
					type="image/webp"
				/>
				<img
					src="/img/projects/the-backdrop/gallery-1.jpg"
					srcset="/img/projects/the-backdrop/gallery-1-600w.jpg 600w, /img/projects/the-backdrop/gallery-1.jpg 960w"
					sizes="(min-width: 768px) 40vw, 70vw"
					alt="Rainbow pixel tunnel with thousands of colour-changing LED dots"
					loading="lazy"
					width="960"
					height="1280"
				/>
			</picture>
			<picture>
				<source
					srcset="/img/projects/the-backdrop/gallery-2-600w.webp 600w, /img/projects/the-backdrop/gallery-2.webp 960w"
					sizes="(min-width: 768px) 40vw, 70vw"
					type="image/webp"
				/>
				<img
					src="/img/projects/the-backdrop/gallery-2.jpg"
					srcset="/img/projects/the-backdrop/gallery-2-600w.jpg 600w, /img/projects/the-backdrop/gallery-2.jpg 960w"
					sizes="(min-width: 768px) 40vw, 70vw"
					alt="Glass orb room with LED light traces in deep blue"
					loading="lazy"
					width="960"
					height="1280"
				/>
			</picture>
			<picture>
				<source
					srcset="/img/projects/the-backdrop/gallery-3-600w.webp 600w, /img/projects/the-backdrop/gallery-3.webp 960w"
					sizes="(min-width: 768px) 40vw, 70vw"
					type="image/webp"
				/>
				<img
					src="/img/projects/the-backdrop/gallery-3.jpg"
					srcset="/img/projects/the-backdrop/gallery-3-600w.jpg 600w, /img/projects/the-backdrop/gallery-3.jpg 960w"
					sizes="(min-width: 768px) 40vw, 70vw"
					alt="Purple pyramid of illuminated glass cubes with palm trees and faux sky"
					loading="lazy"
					width="960"
					height="1280"
				/>
			</picture>
			<picture>
				<source
					srcset="/img/projects/the-backdrop/gallery-4-600w.webp 600w, /img/projects/the-backdrop/gallery-4.webp 960w"
					sizes="(min-width: 768px) 40vw, 70vw"
					type="image/webp"
				/>
				<img
					src="/img/projects/the-backdrop/gallery-4.jpg"
					srcset="/img/projects/the-backdrop/gallery-4-600w.jpg 600w, /img/projects/the-backdrop/gallery-4.jpg 960w"
					sizes="(min-width: 768px) 40vw, 70vw"
					alt="Neon hallway with multi-colour LED grid creating infinite depth"
					loading="lazy"
					width="960"
					height="1280"
				/>
			</picture>
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
					<span><strong>type:</strong> immersive entertainment, attraction</span>
					<span><strong>size:</strong> ~100,000 ft&sup2;</span>
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

		img {
			display: block;
			width: 100%;
			transition: transform 0.6s ease;
		}

		&:hover img {
			transform: scale(1.03);
		}
	}

	/* -- Horizontal scroll gallery -- */
	.gallery-strip {
		padding: 4rem 0;
		overflow: hidden;
	}

	.gallery-scroll {
		display: flex;
		gap: 1.5rem;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
		padding: 0 2rem;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}

		picture {
			flex: 0 0 auto;
			scroll-snap-align: start;
		}

		img {
			display: block;
			height: 70vh;
			width: auto;
			border-radius: 2px;
			object-fit: cover;
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

		.gallery-scroll {
			gap: 1rem;
			padding: 0 1rem;

			img {
				height: 50vh;
			}
		}
	}
</style>
