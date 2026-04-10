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
	<title>The Sail | Iconic Hotel Facade Lighting | emittiv</title>
	<meta
		name="description"
		content="Facade lighting design for an iconic sail-shaped hotel in Dubai. LED replacement programme with extreme throw distances, colour-changing event lighting and full control system design."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/the-sail" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="The Sail | Iconic Hotel Facade Lighting | emittiv" />
	<meta
		property="og:description"
		content="Facade lighting design for an iconic sail-shaped hotel in Dubai. LED replacement with extreme throw distances and colour-changing event lighting."
	/>
	<meta property="og:image" content="https://www.emittiv.com/img/projects/burj-al-arab/hero.jpg" />
	<meta property="og:url" content="https://www.emittiv.com/projects/the-sail" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The Sail | Iconic Hotel Facade Lighting | emittiv" />
	<meta
		name="twitter:description"
		content="Facade lighting design for an iconic sail-shaped hotel in Dubai. LED replacement with extreme throw distances and colour-changing event lighting."
	/>
	<meta name="twitter:image" content="https://www.emittiv.com/img/projects/burj-al-arab/hero.jpg" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/the-sail","name":"The Sail - Iconic Hotel Facade Lighting","description":"Facade lighting design for an iconic sail-shaped hotel in Dubai. LED replacement with extreme throw distances.","creator":{"@id":"https://www.emittiv.com/#organization"},"image":"https://www.emittiv.com/img/projects/burj-al-arab/hero.jpg","locationCreated":{"@type":"Place","name":"Dubai, UAE"},"keywords":"facade lighting, iconic building, hospitality, LED, Dubai"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"The Sail","item":"https://www.emittiv.com/projects/the-sail"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<picture>
			<source
				srcset="/img/projects/burj-al-arab/hero-400w.webp 400w, /img/projects/burj-al-arab/hero.webp 703w"
				sizes="100vw"
				type="image/webp"
			/>
			<img
				class="hero-image"
				src="/img/projects/burj-al-arab/hero.jpg"
				srcset="/img/projects/burj-al-arab/hero-400w.jpg 400w, /img/projects/burj-al-arab/hero.jpg 703w"
				sizes="100vw"
				alt="Iconic sail-shaped hotel facade illuminated at night"
				style="transform: translateY({scrollY * 0.15}px)"
				loading="eager"
			/>
		</picture>
		<div class="hero-overlay">
			<h1 class="tagline">The Sail</h1>
			<div class="spacer-reg"></div>
			<span class="headline">iconic building. facade lighting.</span>
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
						>after many years of diligently fighting the conditions, the engineering team
						decided it was time to replace the hotel's ailing facade lighting fixtures.
						finding LED fixtures with sufficient output and narrow enough beams to
						throw the <span class="splash">300 metres</span> required on this project was
						quite a challenge - particularly given the marine environment and the extreme
						height at which the fixtures operate.</span
					>
					<div class="spacer-med"></div>
					<span
						>a project of this significance needed to work reliably night after night without
						fail, while still providing the flexibility to allow the client to join in special
						events by lighting the facade in various colours.</span
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
							srcset="/img/projects/burj-al-arab/facade-400w.webp 400w, /img/projects/burj-al-arab/facade-800w.webp 800w, /img/projects/burj-al-arab/facade.webp 1200w"
							sizes="(min-width: 768px) 50vw, 100vw"
							type="image/webp"
						/>
						<img
							src="/img/projects/burj-al-arab/facade.jpg"
							srcset="/img/projects/burj-al-arab/facade-400w.jpg 400w, /img/projects/burj-al-arab/facade-800w.jpg 800w, /img/projects/burj-al-arab/facade.jpg 1200w"
							sizes="(min-width: 768px) 50vw, 100vw"
							alt="Hotel facade lit with combination colour scheme at night"
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
						>we provided independent specification and design services for the facade lighting
						replacement - evaluating products on performance and longevity rather than
						manufacturer relationships.</span
					>
					<div class="spacer-med"></div>
					<span
						>the control system was designed to give the hotel's team straightforward
						day-to-day operation while retaining the flexibility to create bespoke colour
						schemes for events and national celebrations.</span
					>
					<div class="spacer-med"></div>
					<span
						>operating in Dubai's harsh marine environment, every fixture needed to
						withstand salt air, extreme heat and wind loading at height - while
						maintaining consistent colour and output across the full
						<span class="splash">300-metre facade</span>. independent specification meant
						product selection was driven entirely by performance and durability, not
						manufacturer preference. the result is a landmark lighting scheme that performs
						reliably every night and transforms for special occasions.</span
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
					<span><strong>type:</strong> iconic building, hospitality</span>
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
