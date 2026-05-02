<script lang="ts">
	import CaseStudyHead from '$lib/components/projects/CaseStudyHead.svelte';
	import CaseStudyHero from '$lib/components/projects/CaseStudyHero.svelte';
	import TextSection from '$lib/components/projects/TextSection.svelte';
	import SplitImageSection from '$lib/components/projects/SplitImageSection.svelte';
	import ProjectDetails from '$lib/components/projects/ProjectDetails.svelte';
</script>

<CaseStudyHead
	title="The Research Centre | Multipurpose Hall | emittiv"
	description="Lighting and control systems for a landmark research centre multipurpose hall in the Middle East. Architecturally distinctive venue with motorised rigging and flexible control architecture."
	slug="the-research-centre"
	ogImage="/img/projects/kapsarc/hero.jpg"
	keywords="lighting, multipurpose hall, control systems, rigging, research centre, Middle East"
	jsonLdName="The Research Centre Multipurpose Hall"
	jsonLdDescription="Lighting and control systems for a landmark research centre multipurpose hall in the Middle East"
	locationName="Middle East"
/>

<main>
	<CaseStudyHero
		name="The Research Centre"
		headline="multipurpose hall. architectural interior."
		disciplines="project management / lighting / control"
		heroPath="/img/projects/kapsarc/hero"
		heroAlt="research centre multipurpose hall interior"
		heroSizes={[400, 700]}
	/>

	<TextSection title="the brief" dataLabel="Context">
		<span
			>lighting a boldly sculpted architectural interior presents a specific challenge - hundreds
			of small panels, each with unique dimensions and custom shapes. the lighting systems needed
			to be <span class="splash">invisible when not in use</span>, allowing the interior design
			to remain the focal point. careful coordination between luminaire positions and the architectural
			geometry was essential from the outset.</span
		>
		<div class="spacer-med"></div>
		<span
			>the main hall subdivides into 5 separate rooms or combines in various
			configurations. a 328-seat auditorium on the same site serves high-profile
			clients and press conferences.</span
		>
	</TextSection>

	<SplitImageSection
		imagePath="/img/projects/kapsarc/auditorium"
		imageAlt="research centre auditorium performance lighting"
		imageSizes={[400, 800, 1600]}
		imageWidth={1600}
		imageHeight={1072}
	>
		<h2>our role</h2>
		<div class="spacer-med"></div>
		<span
			>we <span class="splash">project managed the entertainment spaces installation</span>
			- coordinating over 40 motorised line-sets, several hundred luminaires, and portable lighting
			desks that can connect to any room, allowing operators to control all or part of the system
			with ease.</span
		>
		<div class="spacer-med"></div>
		<span
			>the auditorium features fully integrated architectural and stage lighting using
			DMX and DALI protocols - balanced for event operation and daily use. midway
			through the project, the client revised electrical supply requirements from dual
			110v/230v to single supply, requiring system redesign - we met the original
			deadlines despite the changes.</span
		>
	</SplitImageSection>

	<ProjectDetails
		fields={[
			{ label: 'location', value: 'Middle East' },
			{ label: 'type', value: 'multipurpose hall, conference venue' },
			{ label: 'size', value: '2,256 m²' },
			{ label: 'disciplines', value: 'lighting, control' }
		]}
	/>
</main>
