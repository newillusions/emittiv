<script lang="ts">
	import CaseStudyHead from '$lib/components/projects/CaseStudyHead.svelte';
	import CaseStudyHero from '$lib/components/projects/CaseStudyHero.svelte';
	import TextSection from '$lib/components/projects/TextSection.svelte';
	import SplitImageSection from '$lib/components/projects/SplitImageSection.svelte';
	import ProjectDetails from '$lib/components/projects/ProjectDetails.svelte';
</script>

<CaseStudyHead
	title="The Theme Parks | Themed Entertainment Lighting | emittiv"
	description="Themed entertainment lighting design for a large-scale destination theme park complex in the UAE. Attractions, rides and public areas across multiple parks."
	slug="the-theme-parks"
	ogImage="/img/projects/dubai-parks-and-resorts/hero.jpg"
	keywords="themed entertainment, theme park, lighting designer, control, UAE"
	jsonLdName="The Theme Parks"
	jsonLdDescription="Sensory design for a large-scale themed entertainment destination in the UAE"
	locationName="UAE"
/>

<main>
	<CaseStudyHero
		name="The Theme Parks"
		headline="themed entertainment. multiple disciplines."
		disciplines="lighting / control"
		heroPath="/img/projects/dubai-parks-and-resorts/hero"
		heroAlt="themed entertainment park lighting at night"
		heroSizes={[400, 800, 1280]}
	/>

	<TextSection title="the brief" dataLabel="Context">
		<span
			>working simultaneously across multiple parks, from area development to rides and
			fully themed <span class="splash">IP-based attractions</span> - each environment with
			its own character, narrative and technical demands. the scale of the destination meant
			that consistency and integration were as important as individual creative expression.</span
		>
		<div class="spacer-med"></div>
		<span
			>the lighting concepts needed to be in line with the IP holder's vision and
			requirements, while ensuring the various systems and projects would all link in
			to the park-wide controls.</span
		>
	</TextSection>

	<SplitImageSection
		imagePath="/img/projects/dubai-parks-and-resorts/area"
		imageAlt="themed entertainment park area lighting"
		imageSizes={[400, 800, 1280]}
		imageWidth={1280}
		imageHeight={858}
	>
		<h2>our role</h2>
		<div class="spacer-med"></div>
		<span
			>as the themed entertainment lighting designer, we provided the original lighting
			concepts for renovations of existing areas as well as new themed attractions
			under development.</span
		>
		<div class="spacer-med"></div>
		<span
			>we then <span class="splash">managed external teams</span> through the schematic
			and detailed design phases to ensure the various systems and projects would all
			link in to the park-wide controls.</span
		>
	</SplitImageSection>

	<ProjectDetails
		fields={[
			{ label: 'location', value: 'UAE' },
			{ label: 'type', value: 'themed entertainment, destination' },
			{ label: 'disciplines', value: 'lighting, control' }
		]}
	/>
</main>
