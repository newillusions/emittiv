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
	<title>Sheikh Zayed Grand Mosque Lighting | Iconic Building | emittiv</title>
	<meta
		name="description"
		content="Facade lighting renewal for the Sheikh Zayed Grand Mosque, Abu Dhabi. Modernisation of over 1,000 fixtures and full control infrastructure while preserving the original design intent."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/sheikh-zayed-grand-mosque" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Sheikh Zayed Grand Mosque Lighting | emittiv" />
	<meta
		property="og:description"
		content="Facade lighting renewal for the Sheikh Zayed Grand Mosque. Modernisation of over 1,000 fixtures while preserving the original design intent."
	/>
	<meta
		property="og:image"
		content="https://www.emittiv.com/img/projects/sheikh-zayed-grand-mosque/hero.jpg"
	/>
	<meta property="og:url" content="https://www.emittiv.com/projects/sheikh-zayed-grand-mosque" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Sheikh Zayed Grand Mosque Lighting | emittiv" />
	<meta
		name="twitter:description"
		content="Facade lighting renewal for the Sheikh Zayed Grand Mosque. Modernisation of over 1,000 fixtures while preserving original design intent."
	/>
	<meta name="twitter:image" content="https://www.emittiv.com/img/projects/sheikh-zayed-grand-mosque/hero.jpg" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/sheikh-zayed-grand-mosque","name":"Sheikh Zayed Grand Mosque Lighting","description":"Facade lighting renewal for the Sheikh Zayed Grand Mosque, Abu Dhabi","creator":{"@id":"https://www.emittiv.com/#organization"},"image":"https://www.emittiv.com/img/projects/sheikh-zayed-grand-mosque/hero.jpg","locationCreated":{"@type":"Place","name":"Abu Dhabi, UAE"},"keywords":"facade lighting, mosque, iconic building, LED, control systems, Abu Dhabi"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"Sheikh Zayed Grand Mosque","item":"https://www.emittiv.com/projects/sheikh-zayed-grand-mosque"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<div
			class="hero-image"
			style="background-image: url(/img/projects/sheikh-zayed-grand-mosque/hero.webp); transform: translateY({scrollY * 0.15}px)"
		></div>
		<div class="hero-overlay">
			<h1 class="tagline">Sheikh Zayed Grand Mosque</h1>
			<div class="spacer-reg"></div>
			<span class="headline">iconic building. facade renewal.</span>
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
						>after years of operation, the original facade lighting system designed by Speirs
						and Major Associates had reached the end of its useful life. the scope included
						replacement of over 1,000 fixtures and a complete lighting control system
						overhaul comprising
						<span class="splash">40+ switches and 100 nodes</span>.</span
					>
					<div class="spacer-med"></div>
					<span
						>the new control platform needed to integrate with the existing network
						infrastructure — and the result had to be indistinguishable from the original
						to anyone looking at the building.</span
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
						<source srcset="/img/projects/sheikh-zayed-grand-mosque/domes.webp" type="image/webp" />
						<img
							src="/img/projects/sheikh-zayed-grand-mosque/domes.jpg"
							alt="Sheikh Zayed Grand Mosque domes illuminated at night"
							loading="lazy"
						/>
					</picture>
				</div>
				<div class="split-text">
					<h2>our role</h2>
					<div class="spacer-med"></div>
					<span
						>we developed a strategy to transfer data from the original control system and
						conducted colour-matching tests to ensure the new LED fixtures replicated the
						original design as closely as possible.</span
					>
					<div class="spacer-med"></div>
					<span
						>the system includes <span class="splash">custom software</span> that simulates
						lunar phases, changing the mosque's colour nightly with the moon cycles — a
						feature of the original design that needed to carry forward seamlessly.</span
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
					<span><strong>client:</strong> SZGMC</span>
					<span><strong>type:</strong> iconic building, house of worship</span>
					<span><strong>size:</strong> 121,800 m&sup2;</span>
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

	/* ── Full-bleed hero ── */
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
