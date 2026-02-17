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
	<title>Al Imam University Auditorium | Performance Venue | emittiv</title>
	<meta
		name="description"
		content="Lighting and control design for the Al Imam University auditorium renovation, Riyadh. Systems for a 2,500-seat theatre and campus facilities."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/al-imam-university" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Al Imam University Auditorium | emittiv" />
	<meta
		property="og:description"
		content="Lighting and control design for the Al Imam University auditorium. Systems for a 2,500-seat theatre."
	/>
	<meta
		property="og:image"
		content="https://www.emittiv.com/img/projects/al-imam-university/hero.jpg"
	/>
	<meta property="og:url" content="https://www.emittiv.com/projects/al-imam-university" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Al Imam University Auditorium | emittiv" />
	<meta
		name="twitter:description"
		content=""
	/>
	<meta name="twitter:image" content="" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/al-imam-university","name":"Al Imam University Auditorium","description":"Lighting and control design for the Al Imam University auditorium renovation, Riyadh","creator":{"@id":"https://www.emittiv.com/#organization"},"image":"https://www.emittiv.com/img/projects/al-imam-university/hero.jpg","locationCreated":{"@type":"Place","name":"Riyadh, KSA"},"keywords":"auditorium, performance venue, lighting, control, Riyadh"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"Al Imam University","item":"https://www.emittiv.com/projects/al-imam-university"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-bleed">
		<div
			class="hero-image"
			style="background-image: url(/img/projects/al-imam-university/hero.webp); transform: translateY({scrollY * 0.15}px)"
		></div>
		<div class="hero-overlay">
			<span class="tagline">Al Imam University</span>
			<div class="spacer-reg"></div>
			<span class="headline">performance venue. full renovation.</span>
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
						>originally built in the 1970s, the project began with renovating and
						reinvigorating the 2,500-seat theatre and a number of smaller auditoria —
						designing new lighting, audio, video and automated rigging systems to
						<span class="splash">restore the space to its former condition</span> and
						enhance it further.</span
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
						>this renovation was the first in the region to incorporate
						<span class="splash">colour-changing LED technology for the auditorium seating
						area</span> (FoH) — allowing the designs on stage to be brought out into the
						house.</span
					>
					<div class="spacer-med"></div>
					<span
						>the work extended across the Ladies Campus, Student Lobby, Library, Water Tower,
						Sports Stadium, Royal Gate and Boundary Fence renovations.</span
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
					<span><strong>location:</strong> Riyadh, KSA</span>
					<span><strong>client:</strong> Al Imam University</span>
					<span><strong>architect:</strong> Typsa</span>
					<span><strong>type:</strong> performance venue, education</span>
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

	@media (max-width: 768px) {
		.hero-bleed {
			height: 60vh;
		}
	}
</style>
