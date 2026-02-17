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
	<title>Dubai Mall Penguinarium | Attraction Lighting | emittiv</title>
	<meta
		name="description"
		content="Lighting and control for the Dubai Mall Penguinarium. Immersive attraction design balancing guest experience with animal welfare lighting requirements."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/dubai-mall-penguinarium" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Dubai Mall Penguinarium | Attraction Lighting | emittiv" />
	<meta
		property="og:description"
		content="Lighting and control for the Dubai Mall Penguinarium. Immersive design balancing guest experience with animal welfare."
	/>
	<meta
		property="og:image"
		content="https://www.emittiv.com/img/projects/dubai-mall-penguinarium/hero.jpg"
	/>
	<meta property="og:url" content="https://www.emittiv.com/projects/dubai-mall-penguinarium" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Dubai Mall Penguinarium | Attraction Lighting | emittiv" />
	<meta
		name="twitter:description"
		content=""
	/>
	<meta name="twitter:image" content="" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/dubai-mall-penguinarium","name":"Dubai Mall Penguinarium","description":"Lighting and control for the Dubai Mall Penguinarium attraction","creator":{"@id":"https://www.emittiv.com/#organization"},"image":"https://www.emittiv.com/img/projects/dubai-mall-penguinarium/hero.jpg","locationCreated":{"@type":"Place","name":"Dubai, UAE"},"keywords":"attraction lighting, control, animal welfare, family entertainment, Dubai"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"Dubai Mall Penguinarium","item":"https://www.emittiv.com/projects/dubai-mall-penguinarium"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<div
			class="hero-image"
			style="background-image: url(/img/projects/dubai-mall-penguinarium/hero.jpg); transform: translateY({scrollY * 0.15}px)"
		></div>
		<div class="hero-overlay">
			<span class="tagline">Dubai Mall Penguinarium</span>
			<div class="spacer-reg" />
			<span class="headline">attraction lighting. animal welfare.</span>
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
						>creating an ice cave in the Dubai desert? sure! why not! linking different
						lighting control systems to
						<span class="splash">support the animal welfare</span> as well? sounds like
						fun!</span
					>
					<div class="spacer-med" />
					<span
						>the challenge was establishing a distinctive environment for guests while
						prioritising animal comfort and natural cycles — then integrating with show
						control systems to produce an immersive animated experience synchronised with
						educational video content.</span
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
						>we worked collaboratively across multiple stakeholders, conducting thorough
						research to establish the right conditions for the animals alongside the guest
						experience.</span
					>
					<div class="spacer-med" />
					<span
						>photosensors automatically adjust overall attraction lighting levels to align
						with <span class="splash">animal-specific lighting requirements</span>,
						enhancing their overall welfare. the lighting infrastructure integrates with show
						control to produce the immersive animated experience synchronised with video
						content.</span
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
					<span><strong>client:</strong> Emaar Entertainment</span>
					<span><strong>type:</strong> family entertainment, attraction</span>
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
