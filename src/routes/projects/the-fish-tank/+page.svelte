<script lang="ts">
	import CaseStudyHead from '$lib/components/projects/CaseStudyHead.svelte';
	import CaseStudyHero from '$lib/components/projects/CaseStudyHero.svelte';
	import TextSection from '$lib/components/projects/TextSection.svelte';
	import SplitImageSection from '$lib/components/projects/SplitImageSection.svelte';
	import ProjectDetails from '$lib/components/projects/ProjectDetails.svelte';
</script>

<CaseStudyHead
	title="The Fish Tank | Specialist Animal Lighting | emittiv"
	description="Specialist lighting consultancy for a major indoor marine life theme park in Abu Dhabi. Equipment rationalisation, fixture approvals and advanced animal lighting systems."
	slug="the-fish-tank"
	keywords="marine theme park, animal lighting, specialist consultancy, lighting, Abu Dhabi"
	jsonLdName="The Fish Tank - Specialist Animal Lighting"
	jsonLdDescription="Specialist lighting consultancy for a major indoor marine life theme park in Abu Dhabi. Equipment rationalisation and advanced animal lighting systems."
	locationName="Abu Dhabi, UAE"
/>

<main>
	<CaseStudyHero
		name="The Fish Tank"
		headline="themed attraction. specialist lighting."
		disciplines="lighting / control"
		heroPath="/img/projects/seaworld-abu-dhabi/hero"
		heroAlt="Visitors silhouetted against the massive circular aquarium viewing portal"
		heroSizes={[400, 1024]}
		heroHeight="130%"
	/>

	<TextSection title="the brief" dataLabel="Context">
		<span
			>one of the region's largest indoor marine life theme parks was under
			construction on Yas Island, Abu Dhabi - a next-generation facility
			housing over <span class="splash">68,000 marine animals</span> across
			immersive themed realms. the appointed contractor was struggling with
			the complexity of the lighting systems, and the international design
			team's specifications didn't always translate to the realities of
			procurement and operations in the UAE.</span
		>
	</TextSection>

	<SplitImageSection
		imagePath="/img/projects/seaworld-abu-dhabi/detail"
		imageAlt="Grand opening celebration showing the vast indoor marine park with LED ceiling and aquarium projections"
		imageSizes={[400, 800, 1200]}
		imageWidth={1200}
		imageHeight={900}
		hoverEffect={false}
	>
		<h2>our role</h2>
		<div class="spacer-med"></div>
		<span
			>we were brought in as a specialist consultant to help get the project
			back on track. our main focus was rationalising the equipment lists -
			trimming the vast number of manufacturers and models down to something
			the local operations team could actually maintain and source spare
			parts for.</span
		>
		<div class="spacer-med"></div>
		<span
			>we also worked on getting fixture selections approved, producing the
			dialux calculations, and contributing to the advanced animal lighting
			systems. specialist animal habitats - including penguin enclosures in
			the Antarctica realm - required careful attention to spectrum, intensity
			and timing to simulate circadian rhythms and seasonal light cycles for
			animal welfare. this was one of the few projects in the region
			requiring that level of detail in animal lighting design.</span
		>
	</SplitImageSection>

	<ProjectDetails
		fields={[
			{ label: 'location', value: 'Abu Dhabi, UAE' },
			{ label: 'type', value: 'themed attraction, entertainment' },
			{ label: 'disciplines', value: 'lighting, control' }
		]}
	/>
</main>
