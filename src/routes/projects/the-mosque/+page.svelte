<script lang="ts">
	import CaseStudyHead from '$lib/components/projects/CaseStudyHead.svelte';
	import CaseStudyHero from '$lib/components/projects/CaseStudyHero.svelte';
	import TextSection from '$lib/components/projects/TextSection.svelte';
	import SplitImageSection from '$lib/components/projects/SplitImageSection.svelte';
	import ProjectDetails from '$lib/components/projects/ProjectDetails.svelte';
</script>

<CaseStudyHead
	title="The Mosque | Iconic Building Lighting Renewal | emittiv"
	description="Facade lighting renewal for a landmark house of worship in the UAE. Modernisation of over 1,000 fixtures and full control infrastructure while preserving the original design intent."
	slug="the-mosque"
	ogImage="/img/projects/sheikh-zayed-grand-mosque/hero.jpg"
	keywords="facade lighting, mosque, iconic building, LED, control systems, UAE"
	jsonLdDescription="Facade lighting renewal for a landmark house of worship in the UAE"
	locationName="UAE"
/>

<main>
	<CaseStudyHero
		name="The Mosque"
		headline="iconic building. facade renewal."
		disciplines="lighting / control"
		heroPath="/img/projects/sheikh-zayed-grand-mosque/hero"
		heroAlt="Landmark mosque facade illuminated at night"
		heroSizes={[400, 800, 1600]}
	/>

	<TextSection title="the brief" dataLabel="Context">
		<span
			>after years of operation, the original facade lighting system had reached the end
			of its useful life. the scope included replacement of over 1,000 fixtures and a
			complete lighting control system overhaul comprising
			<span class="splash">40+ switches and 100 nodes</span>.</span
		>
		<div class="spacer-med"></div>
		<span
			>the new control platform needed to integrate with the existing network
			infrastructure - and the result had to be indistinguishable from the original
			to anyone looking at the building. for a structure of this cultural significance,
			fidelity to the original design vision was non-negotiable.</span
		>
	</TextSection>

	<SplitImageSection
		imagePath="/img/projects/sheikh-zayed-grand-mosque/domes"
		imageAlt="Mosque domes illuminated at night"
		imageSizes={[400, 800, 1440]}
		imageWidth={1440}
		imageHeight={965}
	>
		<h2>our role</h2>
		<div class="spacer-med"></div>
		<span
			>we developed a strategy to transfer data from the original control system and
			conducted rigorous colour-matching tests to ensure the new LED fixtures replicated
			the original design as closely as possible. a building of this standing demands
			that the technical upgrade remains invisible - the lighting experience, unchanged.</span
		>
		<div class="spacer-med"></div>
		<span
			>the system includes <span class="splash">custom software</span> that simulates
			lunar phases, changing the building's colour nightly with the moon cycles - a
			feature of the original design that needed to carry forward without interruption.</span
		>
	</SplitImageSection>

	<ProjectDetails
		fields={[
			{ label: 'location', value: 'UAE' },
			{ label: 'type', value: 'iconic building, house of worship' },
			{
				label: 'disciplines',
				value: {
					text: 'lighting, control',
					links: [
						{ text: 'lighting', href: '/services/lighting' },
						{ text: 'control', href: '/services/control' }
					]
				}
			}
		]}
	/>
</main>
