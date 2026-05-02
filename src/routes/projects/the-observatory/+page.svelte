<script lang="ts">
	import CaseStudyHead from '$lib/components/projects/CaseStudyHead.svelte';
	import CaseStudyHero from '$lib/components/projects/CaseStudyHero.svelte';
	import TextSection from '$lib/components/projects/TextSection.svelte';
	import ProjectDetails from '$lib/components/projects/ProjectDetails.svelte';
</script>

<CaseStudyHead
	title="The Observatory | Projection Feasibility Study | emittiv"
	description="Projection feasibility study for a remote mountaintop visitor centre. Six weeks of research delivered an honest, well-evidenced answer that saved the client from a costly mistake."
	slug="the-observatory"
	keywords="projection feasibility, visitor centre, video, content, consultancy"
	jsonLdName="The Observatory - Projection Feasibility Study"
	jsonLdDescription="Projection feasibility study for a remote mountaintop visitor centre and stargazing experience. Research-led consultancy delivering an honest, well-evidenced answer."
/>

<main>
	<CaseStudyHero
		variant="text"
		name="The Observatory"
		headline="visitor centre. projection feasibility."
		disciplines="video / content"
	/>

	<TextSection title="the idea" dataLabel="Context">
		<span
			>a remote desert mountaintop was to become a visitor centre, viewing
			platform and stargazing experience. the architect had designed a
			gallery space with a <span class="splash">shallow oval ceiling</span>
			- and the vision was to bring it to life with projected content.
			a friendly competitor, already appointed for the lighting design,
			brought us in specifically for the projection feasibility work.</span
		>
	</TextSection>

	<TextSection title="the approach" dataLabel="Approach">
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
	</TextSection>

	<TextSection title="the outcome" dataLabel="Outcome">
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
	</TextSection>

	<ProjectDetails
		fields={[
			{ label: 'type', value: 'visitor centre, entertainment' },
			{ label: 'disciplines', value: 'video, content' }
		]}
		status="cancelled"
	/>
</main>
