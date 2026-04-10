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
	<title>The Observatory | Projection Feasibility Study | emittiv</title>
	<meta
		name="description"
		content="Projection feasibility study for a remote mountaintop visitor centre. Six weeks of research delivered an honest, well-evidenced answer that saved the client from a costly mistake."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects/the-observatory" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="The Observatory | Projection Feasibility Study | emittiv" />
	<meta
		property="og:description"
		content="Projection feasibility study for a remote mountaintop visitor centre. Six weeks of research delivered an honest answer that saved the client from a costly mistake."
	/>
	<meta property="og:url" content="https://www.emittiv.com/projects/the-observatory" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The Observatory | Projection Feasibility Study | emittiv" />
	<meta
		name="twitter:description"
		content="Projection feasibility study for a remote mountaintop visitor centre. Six weeks of research delivered an honest answer that saved the client from a costly mistake."
	/>

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CreativeWork","@id":"https://www.emittiv.com/projects/the-observatory","name":"The Observatory - Projection Feasibility Study","description":"Projection feasibility study for a remote mountaintop visitor centre and stargazing experience. Research-led consultancy delivering an honest, well-evidenced answer.","creator":{"@id":"https://www.emittiv.com/#organization"},"keywords":"projection feasibility, visitor centre, video, content, consultancy"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"},{"@type":"ListItem","position":3,"name":"The Observatory","item":"https://www.emittiv.com/projects/the-observatory"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<section class="hero-text">
		<div class="hero-overlay">
			<h1 class="tagline">The Observatory</h1>
			<div class="spacer-reg"></div>
			<span class="headline">visitor centre. projection feasibility.</span>
			<div class="spacer-reg"></div>
			<span class="disciplines">video / content</span>
		</div>
	</section>

	<section class="screen-flow content" data-label="Context">
		<div class="container">
			<div class="split">
				<div class="section-title order-1">
					<h2>the idea</h2>
				</div>
				<div class="v-padding-1 f col middle order-2">
					<span
						>a remote desert mountaintop was to become a visitor centre, viewing
						platform and stargazing experience. the architect had designed a
						gallery space with a <span class="splash">shallow oval ceiling</span>
						- and the vision was to bring it to life with projected content.
						a friendly competitor, already appointed for the lighting design,
						brought us in specifically for the projection feasibility work.</span
					>
				</div>
			</div>
		</div>
	</section>

	<section class="screen-flow content" bind:this={splitEl} data-label="Approach">
		<div class="container">
			<div class="split">
				<div class="section-title order-1">
					<h2>the approach</h2>
				</div>
				<div class="v-padding-1 f col middle order-2">
					<span
						>we spent <span class="splash">six to eight weeks</span> researching
						whether the concept could work. that meant 3D modelling, projection
						study software, and conversations with projector manufacturers, media
						server companies, AV consultants, competitors and content designers.
						all geometry was anonymised to the bare minimum needed for technical
						discussions.</span
					>
					<div class="spacer-med"></div>
					<span
						>the core problem was optical. the shallow oval ceiling created extreme
						keystoning issues that made conventional projection unworkable. we
						explored every alternative we could find - LED screens, flexible pixel
						strips, different projector positions - looking for anything that could
						deliver the architect's vision within the physical constraints of the
						space.</span
					>
				</div>
			</div>
		</div>
	</section>

	<section class="screen-flow content" data-label="Outcome">
		<div class="container">
			<div class="split">
				<div class="section-title order-1">
					<h2>the outcome</h2>
				</div>
				<div class="v-padding-1 f col middle order-2">
					<span
						>we delivered five or six partial solutions, plus one viable option
						that required a floor-mounted structure in the gallery space. it was
						technically workable but impractical for the intended use. the architect
						suggested another consultant might have a solution - but nothing ever
						materialised. the building was ultimately scrapped entirely.</span
					>
					<div class="spacer-med"></div>
					<span
						>sometimes the most valuable thing a consultant can do is give an
						<span class="splash">honest, well-evidenced "no"</span> early - before
						budget is committed to something that won't deliver. the depth of
						research meant the client could move forward with confidence, knowing
						every reasonable option had been explored. that network access -
						manufacturers, competitors, content designers, AV consultants - is a
						core part of what we bring to the table.</span
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
					<span><strong>type:</strong> visitor centre, entertainment</span>
					<span><strong>status:</strong> cancelled</span>
					<span><strong>disciplines:</strong> video, content</span>
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

	.hero-text {
		position: relative;
		height: 85vh;
		overflow: hidden;
		background: radial-gradient(
			ellipse at 50% 80%,
			rgba(40, 30, 15, 1) 0%,
			rgba(10, 8, 5, 1) 60%,
			var(--black) 100%
		);
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		padding-bottom: 8vh;
	}

	@media (max-width: 768px) {
		.hero-text {
			height: 60vh;
		}
	}
</style>
