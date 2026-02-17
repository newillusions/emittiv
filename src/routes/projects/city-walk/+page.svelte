<script lang="ts">
	import { onMount } from 'svelte';
	let scrollY = $state(0);
	function handleScroll() {
		scrollY = window.scrollY;
	}
	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
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
		content=""
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
			style="background-image: url(/img/projects/city-walk/hero.jpg); transform: translateY({scrollY * 0.15}px)"
		></div>
		<div class="hero-overlay">
			<span class="tagline">City Walk</span>
			<div class="spacer-reg" />
			<span class="headline">multimedia attraction. show lighting.</span>
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
						>malls need more than just retail outlets these days. they need to be
						<span class="splash">destinations in their own right</span> — providing
						attractions, family entertainment centres and other entertainment.</span
					>
					<div class="spacer-med" />
					<span
						>the operators wanted to introduce new multimedia shows to the central attraction
						— both permanent shows and temporary events across several months.</span
					>
				</div>
			</div>
		</div>
	</section>

	<section class="screen-flow content" data-label="Role">
		<div class="container">
			<div class="split">
				<div class="section-title order-3">
					<h2>our role</h2>
				</div>
				<div class="v-padding-1 f col middle order-2">
					<span
						>we designed and programmed the lighting, working with the creative team and
						<span class="splash">working nights</span> to minimise disruption to daily
						operations.</span
					>
					<div class="spacer-med" />
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

	@media (max-width: 768px) {
		.hero-bleed {
			height: 60vh;
		}
	}
</style>
