<script lang="ts">
	import CaseStudyHead from '$lib/components/projects/CaseStudyHead.svelte';
	import CaseStudyHero from '$lib/components/projects/CaseStudyHero.svelte';
	import TextSection from '$lib/components/projects/TextSection.svelte';
	import SplitImageSection from '$lib/components/projects/SplitImageSection.svelte';
	import ProjectDetails from '$lib/components/projects/ProjectDetails.svelte';
</script>

<CaseStudyHead
	title="The Wave | Iconic Building Facade Lighting | emittiv"
	description="Dynamic facade lighting design for an iconic beachfront hotel in Dubai, UAE. One of the region's first large-scale dynamic LED facade installations."
	slug="the-wave"
	ogImage="/img/projects/jumeirah-beach-hotel/hero.jpg"
	keywords="facade lighting, dynamic LED, iconic building, hospitality, control, Dubai"
	jsonLdName="The Wave - Facade Lighting"
	jsonLdDescription="Dynamic facade lighting design for an iconic beachfront hotel in Dubai, UAE"
	locationName="Dubai, UAE"
/>

<main>
	<CaseStudyHero
		name="The Wave"
		headline="iconic building. dynamic facade."
		disciplines="lighting / control"
		heroPath="/img/projects/jumeirah-beach-hotel/hero"
		heroAlt="iconic beachfront hotel dynamic facade lighting"
		heroSizes={[400, 800, 1600]}
	/>

	<TextSection title="the brief" dataLabel="Context">
		<span
			>after many years of fighting the coastal conditions, the engineering team decided
			it was time to replace their ailing fixtures. this was <span class="splash"
				>the first large-scale dynamic facade lighting project</span
			> in the region to use LED fixtures, setting a new benchmark for hospitality lighting in the
			UAE.</span
		>
		<div class="spacer-med"></div>
		<span
			>a project of this significance needed to work reliably night after night without
			fail, while still providing the flexibility to allow the client to join in special
			events by lighting the facade in various colours. the control architecture was
			designed to be straightforward enough for in-house operators to manage without specialist
			support.</span
		>
	</TextSection>

	<SplitImageSection
		imagePath="/img/projects/jumeirah-beach-hotel/facade"
		imageAlt="iconic hotel facade lit in dynamic colour at night"
		imageSizes={[400, 800, 1200]}
		imageWidth={1200}
		imageHeight={800}
	>
		<h2>our role</h2>
		<div class="spacer-med"></div>
		<span
			>we designed and implemented the facade lighting system. after several years, we
			were asked to extend the original design to include the
			<span class="splash">road side of the building</span> as well.</span
		>
	</SplitImageSection>

	<ProjectDetails
		fields={[
			{ label: 'location', value: 'Dubai, UAE' },
			{ label: 'type', value: 'iconic building, hospitality' },
			{ label: 'disciplines', value: 'lighting, control' }
		]}
	/>
</main>
