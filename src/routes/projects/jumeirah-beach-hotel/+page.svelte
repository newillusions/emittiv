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
	<title>Jumeirah Beach Hotel Facade Lighting | Iconic Building | emittiv</title>
	<meta
		name="description"
		content="Dynamic facade lighting design for the Jumeirah Beach Hotel, Dubai. One of the region's first large-scale dynamic LED facade installations."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/jumeirah-beach-hotel" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Jumeirah Beach Hotel Facade Lighting | emittiv" />
	<meta
		property="og:description"
		content="Dynamic facade lighting for the Jumeirah Beach Hotel. One of the region's first large-scale dynamic LED facade installations."
	/>
	<meta
		property="og:image"
		content="https://www.emittiv.com/img/projects/jumeirah-beach-hotel/hero.jpg"
	/>
	<meta property="og:url" content="https://www.emittiv.com/projects/jumeirah-beach-hotel" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Jumeirah Beach Hotel Facade Lighting | emittiv" />
	<meta
		name="twitter:description"
		content=""
	/>
	<meta name="twitter:image" content="" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/jumeirah-beach-hotel","name":"Jumeirah Beach Hotel Facade Lighting","description":"Dynamic facade lighting design for the Jumeirah Beach Hotel, Dubai","creator":{"@id":"https://www.emittiv.com/#organization"},"image":"https://www.emittiv.com/img/projects/jumeirah-beach-hotel/hero.jpg","locationCreated":{"@type":"Place","name":"Dubai, UAE"},"keywords":"facade lighting, dynamic LED, iconic building, hospitality, control, Dubai"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"Jumeirah Beach Hotel","item":"https://www.emittiv.com/projects/jumeirah-beach-hotel"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<div
			class="hero-image"
			style="background-image: url(/img/projects/jumeirah-beach-hotel/hero.jpg); transform: translateY({scrollY * 0.15}px)"
		></div>
		<div class="hero-overlay">
			<span class="tagline">Jumeirah Beach Hotel</span>
			<div class="spacer-reg" />
			<span class="headline">iconic building. dynamic facade.</span>
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
						>after many years of diligently fighting the conditions, the engineering team at
						the Jumeirah Beach Hotel decided it was time to replace their ailing fixtures.
						this was <span class="splash"
							>the first large-scale dynamic facade lighting project</span
						> in the region to use LED fixtures.</span
					>
					<div class="spacer-med" />
					<span
						>a project of this significance needed to work reliably night after night without
						fail, while still providing the flexibility to allow the client to join in special
						events by lighting the facade in various colours.</span
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
						>we designed and implemented the facade lighting system. after several years, we
						were asked to extend the original design to include the
						<span class="splash">road side of the building</span> as well.</span
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
