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
	<title>Burj Al Arab Facade Lighting | Iconic Building | emittiv</title>
	<meta
		name="description"
		content="Facade lighting design for the Burj Al Arab, Dubai. LED replacement programme delivering reliable nighttime illumination and flexible event lighting for one of the world's most recognised buildings."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/burj-al-arab" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Burj Al Arab Facade Lighting | emittiv" />
	<meta
		property="og:description"
		content="Facade lighting design for the Burj Al Arab, Dubai. LED replacement programme for one of the world's most recognised buildings."
	/>
	<meta property="og:image" content="https://www.emittiv.com/img/projects/burj-al-arab/hero.jpg" />
	<meta property="og:url" content="https://www.emittiv.com/projects/burj-al-arab" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Burj Al Arab Facade Lighting | emittiv" />
	<meta
		name="twitter:description"
		content=""
	/>
	<meta name="twitter:image" content="https://www.emittiv.com/img/projects/burj-al-arab/hero.jpg" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/burj-al-arab","name":"Burj Al Arab Facade Lighting","description":"Facade lighting design for the Burj Al Arab, Dubai","creator":{"@id":"https://www.emittiv.com/#organization"},"image":"https://www.emittiv.com/img/projects/burj-al-arab/hero.jpg","locationCreated":{"@type":"Place","name":"Dubai, UAE"},"keywords":"facade lighting, iconic building, hospitality, LED, Dubai"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"Burj Al Arab","item":"https://www.emittiv.com/projects/burj-al-arab"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<div
			class="hero-image"
			style="background-image: url(/img/projects/burj-al-arab/hero.webp); transform: translateY({scrollY * 0.15}px)"
		></div>
		<div class="hero-overlay">
			<span class="tagline">Burj Al Arab</span>
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
						>after many years of diligently fighting the conditions, the engineering team at
						the Burj Al Arab decided it was time to replace their ailing facade lighting
						fixtures. finding LED fixtures with sufficient output and narrow enough beams to
						throw the <span class="splash">300 metres</span> required on this project was
						quite a challenge.</span
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
						<source srcset="/img/projects/burj-al-arab/facade.webp" type="image/webp" />
						<img
							src="/img/projects/burj-al-arab/facade.jpg"
							alt="Burj Al Arab facade lit with combination colour scheme at night"
							loading="lazy"
						/>
					</picture>
				</div>
				<div class="split-text">
					<h2>our role</h2>
					<div class="spacer-med"></div>
					<span
						>we provided independent specification and design services for the facade lighting
						replacement — evaluating products on performance and longevity rather than
						manufacturer relationships.</span
					>
					<div class="spacer-med"></div>
					<span
						>the control system was designed to give the hotel's team straightforward
						day-to-day operation while retaining the flexibility to create bespoke colour
						schemes for events and national celebrations.</span
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
					<span><strong>client:</strong> Jumeirah</span>
					<span><strong>type:</strong> iconic building, hospitality</span>
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
