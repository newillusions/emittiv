<script lang="ts">
	import CaseStudyHead from '$lib/components/projects/CaseStudyHead.svelte';
	import CaseStudyHero from '$lib/components/projects/CaseStudyHero.svelte';
	import TextSection from '$lib/components/projects/TextSection.svelte';
	import SplitImageSection from '$lib/components/projects/SplitImageSection.svelte';
	import CaseStudyGallery from '$lib/components/projects/CaseStudyGallery.svelte';
	import ProjectDetails from '$lib/components/projects/ProjectDetails.svelte';
</script>

<CaseStudyHead
	title="The Backdrop | Immersive Entertainment Lighting | emittiv"
	description="Lighting design for a 100,000 sq ft immersive entertainment venue in Dubai with 25+ unique themed worlds. Sole lighting consultant across a 2.5-year engagement."
	slug="the-backdrop"
	ogImage="/img/projects/the-backdrop/hero.jpg"
	keywords="immersive entertainment, themed attraction, lighting design, control systems, DALI, DMX, Dubai"
	jsonLdName="The Backdrop - Immersive Entertainment Lighting"
	jsonLdDescription="Lighting design for a 100,000 sq ft immersive entertainment venue in Dubai with 25+ unique themed worlds. Sole lighting consultant across a 2.5-year engagement."
	locationName="Dubai, UAE"
/>

<main>
	<CaseStudyHero
		name="The Backdrop"
		headline="immersive entertainment. 25+ worlds."
		disciplines="lighting / control"
		heroPath="/img/projects/the-backdrop/hero"
		heroAlt="Immersive laundromat room with thousands of pixel-mapped LED dots covering walls and ceiling"
		heroSizes={[400, 800, 1920]}
	/>

	<TextSection title="the brief" dataLabel="Context">
		<span
			>a <span class="splash">100,000 square foot</span> immersive entertainment
			venue in one of Dubai's largest malls - 25+ individually themed worlds,
			each one a completely different environment. content-creation focused,
			heavy on interactive lighting, neon, mirror rooms and sound-reactive
			installations. lighting wasn't just part of the experience - it was
			the experience.</span
		>
		<div class="spacer-med"></div>
		<span
			>we were brought in by a member of the project management team who
			had worked with us on a previous major international event. the
			concept went through several evolutions, including a version in another
			country, before landing on the final Dubai venue - each iteration
			bringing lessons that fed into the design.</span
		>
	</TextSection>

	<SplitImageSection
		imagePath="/img/projects/the-backdrop/detail"
		imageAlt="Neon-lit hallway with multi-colour LED strips creating an infinite perspective grid"
		imageSizes={[400, 960]}
		imageWidth={960}
		imageHeight={1280}
	>
		<h2>our role</h2>
		<div class="spacer-med"></div>
		<span
			>we were the sole lighting consultant and designer across the entire
			site for <span class="splash">over two and a half years</span> - and
			we're still involved today. every room was a unique design challenge.
			fluorescent tubes doing a dodgy flicker to emulate a sketchy old
			laundromat. traffic lights using morse code signals. signage that
			breathes with the room on DALI and DMX rather than sitting on an
			isolated circuit. an ocean of chinese lanterns in the ceiling with
			wave and chase effects rippling through them.</span
		>
		<div class="spacer-med"></div>
		<span
			>the variety is what makes it special. every single space is different
			to the last, and every one of them had to feel completely authentic
			to its own world.</span
		>
	</SplitImageSection>

	<TextSection title="one system" dataLabel="Control">
		<span
			>the control architecture was a challenge in itself. the client had
			split the lighting package between two contractors - one doing DALI,
			one doing DMX and pixel-based work. every room had both types of
			fixture in it, and the contractors were pushing for separate controllers.
			we insisted on <span class="splash">a single headend</span> - one
			brain running the whole venue.</span
		>
		<div class="spacer-med"></div>
		<span
			>we specified nodes with both DALI and DMX outputs, one or more per
			room, all feeding back to a single controller talking out to media
			servers and show control playback. construction threw its own problems
			at us - overseas contractors, delays, budget cuts that killed the
			pre-visualisation workflow. we ended up rethinking and redesigning
			sections on the fly during commissioning, working closely with a
			trusted programmer to get it right under pressure.</span
		>
	</TextSection>

	<CaseStudyGallery
		images={[
			{
				src: '/img/projects/the-backdrop/gallery-1',
				alt: 'Rainbow pixel tunnel with thousands of colour-changing LED dots',
				width: 960,
				height: 1280
			},
			{
				src: '/img/projects/the-backdrop/gallery-2',
				alt: 'Glass orb room with LED light traces in deep blue',
				width: 960,
				height: 1280
			},
			{
				src: '/img/projects/the-backdrop/gallery-3',
				alt: 'Purple pyramid of illuminated glass cubes with palm trees and faux sky',
				width: 960,
				height: 1280
			},
			{
				src: '/img/projects/the-backdrop/gallery-4',
				alt: 'Neon hallway with multi-colour LED grid creating infinite depth',
				width: 960,
				height: 1280
			}
		]}
	/>

	<ProjectDetails
		fields={[
			{ label: 'location', value: 'Dubai, UAE' },
			{ label: 'type', value: 'immersive entertainment, attraction' },
			{ label: 'size', value: '~100,000 ft²' },
			{ label: 'disciplines', value: 'lighting, control' }
		]}
	/>
</main>
