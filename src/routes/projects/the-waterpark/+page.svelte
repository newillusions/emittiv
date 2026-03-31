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
	<title>The Waterpark | Themed Attraction Lighting Upgrade | emittiv</title>
	<meta
		name="description"
		content="LED lighting upgrade and control system rebuild for one of Dubai's most popular themed waterparks. Subtractive to additive colour mixing transformation."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/the-waterpark" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="The Waterpark | Themed Attraction Lighting Upgrade | emittiv" />
	<meta
		property="og:description"
		content="LED lighting upgrade and control system rebuild for one of Dubai's most popular themed waterparks."
	/>
	<meta property="og:url" content="https://www.emittiv.com/projects/the-waterpark" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The Waterpark | Themed Attraction Lighting Upgrade | emittiv" />
	<meta
		name="twitter:description"
		content="LED lighting upgrade and control system rebuild for one of Dubai's most popular themed waterparks."
	/>

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/the-waterpark","name":"The Waterpark - Themed Attraction Lighting Upgrade","description":"LED lighting upgrade and control system rebuild for a popular themed waterpark in Dubai.","creator":{"@id":"https://www.emittiv.com/#organization"},"locationCreated":{"@type":"Place","name":"Dubai, UAE"},"keywords":"waterpark, themed attraction, LED upgrade, lighting, control systems, Dubai"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"The Waterpark","item":"https://www.emittiv.com/projects/the-waterpark"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<picture>
			<source
				srcset="/img/projects/wild-wadi/hero-400w.webp 400w, /img/projects/wild-wadi/hero.webp 1920w"
				sizes="100vw"
				type="image/webp"
			/>
			<img
				class="hero-image"
				src="/img/projects/wild-wadi/hero.jpg"
				srcset="/img/projects/wild-wadi/hero-400w.jpg 400w, /img/projects/wild-wadi/hero.jpg 1920w"
				sizes="100vw"
				alt="Colourful waterpark slides and play structures at Juha's Dhow"
				style="transform: translateY({scrollY * 0.15}px)"
				loading="eager"
			/>
		</picture>
		<div class="hero-overlay">
			<h1 class="tagline">The Waterpark</h1>
			<div class="spacer-reg"></div>
			<span class="headline">themed attraction. lighting upgrade.</span>
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
						>one of Dubai's most popular waterparks needed a complete lighting
						overhaul. after years of battling the elements, the existing metal
						halide floodlights with their subtractive colour mixing were ready to
						be replaced with modern LED technology. the owner - the same group
						behind two of our other projects - wanted to transform the park's
						night-time experience while rebuilding the control systems from the
						ground up.</span
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
							srcset="/img/projects/wild-wadi/detail-400w.webp 400w, /img/projects/wild-wadi/detail.webp 728w"
							sizes="(min-width: 768px) 50vw, 100vw"
							type="image/webp"
						/>
						<img
							src="/img/projects/wild-wadi/detail.jpg"
							srcset="/img/projects/wild-wadi/detail-400w.jpg 400w, /img/projects/wild-wadi/detail.jpg 728w"
							sizes="(min-width: 768px) 50vw, 100vw"
							alt="Visitors on lazy river with vivid LED lighting on water curtain at night"
							loading="lazy"
							width="728"
							height="406"
						/>
					</picture>
				</div>
				<div class="split-text">
					<h2>our role</h2>
					<div class="spacer-med"></div>
					<span
						>we designed the complete lighting upgrade and rebuilt the control
						systems from scratch. the move from subtractive colour mixing on metal
						halide fixtures to additive RGB LED floodlights was a significant step
						up - delivering much stronger saturated colours, instant colour changes
						and dramatically reduced maintenance.</span
					>
					<div class="spacer-med"></div>
					<span
						>working around water presented its own challenges - and reusing
						existing cable infrastructure meant adapting to custom, non-standard
						cabling rather than conventional DMX runs. the result was a modern,
						flexible lighting system that completely transformed the park after
						dark.</span
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
					<span><strong>type:</strong> themed attraction, hospitality</span>
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
