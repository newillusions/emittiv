<script lang="ts">
	import CaseStudyHead from '$lib/components/projects/CaseStudyHead.svelte';
	import CaseStudyHero from '$lib/components/projects/CaseStudyHero.svelte';
	import TextSection from '$lib/components/projects/TextSection.svelte';
	import SplitImageSection from '$lib/components/projects/SplitImageSection.svelte';
	import ProjectDetails from '$lib/components/projects/ProjectDetails.svelte';
</script>

<CaseStudyHead
	title="The University | Performance Venue Renovation | emittiv"
	description="Lighting and control design for a major university auditorium renovation in the Middle East. Full systems design for a 2,500-seat theatre and campus-wide facilities."
	slug="the-university"
	ogImage="/img/projects/al-imam-university/hero.jpg"
	keywords="auditorium, performance venue, lighting, control, university, Middle East"
	jsonLdName="The University - Performance Venue Renovation"
	jsonLdDescription="Lighting and control design for a major university auditorium renovation in the Middle East, including a 2,500-seat theatre and campus-wide facilities"
	locationName="Middle East"
/>

<main>
	<CaseStudyHero
		name="The University"
		headline="performance venue. full renovation."
		disciplines="lighting / control"
		heroPath="/img/projects/al-imam-university/hero"
		heroAlt="University auditorium interior after full lighting and AV renovation"
		heroSizes={[400, 800, 1600]}
	/>

	<TextSection title="the brief" dataLabel="Context">
		<span
			>originally built in the 1970s, this major campus had fallen behind in terms of
			technical capability. the project began with renovating and reinvigorating the
			2,500-seat theatre and a number of smaller auditoria - designing new lighting,
			audio, video and automated rigging systems to
			<span class="splash">restore the space to its former condition</span> and take it significantly
			further. the scale and ambition of the brief made it one of the most comprehensive performance
			venue projects we have undertaken.</span
		>
	</TextSection>

	<SplitImageSection
		imagePath="/img/projects/al-imam-university/campus"
		imageAlt="University campus site plan showing the full renovation scope"
		imageSizes={[400, 800, 1200]}
		imageWidth={1200}
		imageHeight={800}
	>
		<h2>our role</h2>
		<div class="spacer-med"></div>
		<span
			>this renovation was the first in the region to incorporate
			<span class="splash"
				>colour-changing LED technology for the auditorium seating area</span
			> (FoH) - allowing the lighting designs on stage to be brought out into the house and
			enveloping the audience in the performance.</span
		>
		<div class="spacer-med"></div>
		<span
			>the scope extended well beyond the main theatre, encompassing the Ladies Campus,
			Student Lobby, Library, Water Tower, Sports Stadium, Royal Gate and Boundary
			Fence - a truly campus-wide transformation of the technical and aesthetic
			lighting infrastructure.</span
		>
	</SplitImageSection>

	<ProjectDetails
		fields={[
			{ label: 'location', value: 'Middle East' },
			{ label: 'type', value: 'performance venue, education' },
			{ label: 'disciplines', value: 'lighting, control' }
		]}
	/>
</main>
