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
	<title>Expo 2020 Public Realm Lighting | Destination Design | emittiv</title>
	<meta
		name="description"
		content="Public realm lighting coordination for Expo 2020 Dubai. Peer review and harmonisation of site-wide lighting across 4.38 million square metres of landscapes, plazas and public spaces."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/expo-2020" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Expo 2020 Public Realm Lighting | emittiv" />
	<meta
		property="og:description"
		content="Public realm lighting coordination for Expo 2020 Dubai. Harmonisation of site-wide lighting across 4.38 million square metres."
	/>
	<meta property="og:image" content="https://www.emittiv.com/img/projects/expo-2020/hero.jpg" />
	<meta property="og:url" content="https://www.emittiv.com/projects/expo-2020" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/expo-2020","name":"Expo 2020 Public Realm Lighting","description":"Public realm lighting coordination for Expo 2020 Dubai","creator":{"@id":"https://www.emittiv.com/#organization"},"image":"https://www.emittiv.com/img/projects/expo-2020/hero.jpg","locationCreated":{"@type":"Place","name":"Dubai, UAE"},"keywords":"public realm, lighting design, expo, destination, Dubai"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"Expo 2020","item":"https://www.emittiv.com/projects/expo-2020"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<div
			class="hero-image"
			style="background-image: url(/img/projects/expo-2020/hero.jpg); transform: translateY({scrollY * 0.15}px)"
		></div>
		<div class="hero-overlay">
			<span class="tagline">Expo 2020</span>
			<div class="spacer-reg" />
			<span class="headline">public realm. 4.38 million square metres.</span>
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
						>the engagement began with unifying multiple public realm lighting designs across
						the site. the public realm lighting had been delivered by various teams and
						contractors — each working to their own brief.</span
					>
					<div class="spacer-med" />
					<span
						>the goal was <span class="splash"
							>a unified guest experience</span
						> across the landscapes, plazas and parks — bringing coherence to the whole
						while respecting the design intent of each area.</span
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
						>we conducted a peer review of existing work and coordinated with the original
						project lighting designers to maintain design intent while making the adjustments
						the event required.</span
					>
					<div class="spacer-med" />
					<span
						>the result was visual consistency without uniformity — <span class="splash"
							>each zone retaining its character</span
						> while feeling part of the same place.</span
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
					<span><strong>client:</strong> Expo 2020</span>
					<span><strong>type:</strong> destination, public realm</span>
					<span><strong>size:</strong> 4,380,000 m&sup2;</span>
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
