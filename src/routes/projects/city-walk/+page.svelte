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
	<title>City Walk Multimedia Attraction | Show Lighting | emittiv</title>
	<meta
		name="description"
		content="Theatrical lighting and show control for the City Walk multimedia attraction, Dubai. Permanent and temporary shows integrating lighting, fountains and architectural systems."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/city-walk" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="City Walk Multimedia Attraction | emittiv" />
	<meta
		property="og:description"
		content="Theatrical lighting and show control for the City Walk multimedia attraction. Permanent shows integrating lighting, fountains and architectural systems."
	/>
	<meta property="og:image" content="https://www.emittiv.com/img/projects/city-walk/hero.jpg" />
	<meta property="og:url" content="https://www.emittiv.com/projects/city-walk" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="City Walk Multimedia Attraction | emittiv" />
	<meta
		name="twitter:description"
		content="Theatrical lighting and show control for the City Walk multimedia attraction in Dubai."
	/>
	<meta name="twitter:image" content="https://www.emittiv.com/img/projects/city-walk/hero.jpg" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/city-walk","name":"City Walk Multimedia Attraction","description":"Theatrical lighting and show control for the City Walk multimedia attraction, Dubai","creator":{"@id":"https://www.emittiv.com/#organization"},"image":"https://www.emittiv.com/img/projects/city-walk/hero.jpg","locationCreated":{"@type":"Place","name":"Dubai, UAE"},"keywords":"show lighting, multimedia, fountain lighting, theatrical, control systems, Dubai"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"City Walk","item":"https://www.emittiv.com/projects/city-walk"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<div
			class="hero-image"
			style="background-image: url(/img/projects/city-walk/hero.webp); transform: translateY({scrollY * 0.15}px)"
		></div>
		<div class="hero-overlay">
			<h1 class="tagline">City Walk</h1>
			<div class="spacer-reg"></div>
			<span class="headline">multimedia attraction. show lighting.</span>
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
						>malls need more than just retail outlets these days. they need to be
						<span class="splash">destinations in their own right</span> — providing
						attractions, family entertainment centres and other entertainment.</span
					>
					<div class="spacer-med"></div>
					<span
						>the operators wanted to introduce new multimedia shows to the central attraction
						— both permanent shows and temporary events across several months.</span
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
							srcset="/img/projects/city-walk/attraction-400w.webp 400w, /img/projects/city-walk/attraction.webp 800w"
							sizes="(min-width: 768px) 50vw, 100vw"
							type="image/webp"
						/>
						<img
							src="/img/projects/city-walk/attraction.jpg"
							srcset="/img/projects/city-walk/attraction-400w.jpg 400w, /img/projects/city-walk/attraction.jpg 800w"
							sizes="(min-width: 768px) 50vw, 100vw"
							alt="City Walk multimedia attraction illuminated at night"
							loading="lazy"
							width="800"
							height="536"
						/>
					</picture>
				</div>
				<div class="split-text">
					<h2>our role</h2>
					<div class="spacer-med"></div>
					<span
						>we designed and programmed the lighting, working with the creative team and
						<span class="splash">working nights</span> to minimise disruption to daily
						operations.</span
					>
					<div class="spacer-med"></div>
					<span
						>our experience in show lighting allowed us to seamlessly integrate with the
						wider systems installed — incorporating the fountain lighting and architectural
						control systems with the theatrical lighting controls into a unified system
						across the attraction and mall. the shows are still running today.</span
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
					<span><strong>client:</strong> Meeras</span>
					<span><strong>type:</strong> destination, multimedia attraction</span>
					<span><strong>size:</strong> 13,000 m&sup2;</span>
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
