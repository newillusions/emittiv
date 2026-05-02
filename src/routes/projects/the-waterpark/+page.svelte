<script lang="ts">
	import CaseStudyHead from '$lib/components/projects/CaseStudyHead.svelte';
	import CaseStudyHero from '$lib/components/projects/CaseStudyHero.svelte';
	import TextSection from '$lib/components/projects/TextSection.svelte';
	import SplitImageSection from '$lib/components/projects/SplitImageSection.svelte';
	import ProjectDetails from '$lib/components/projects/ProjectDetails.svelte';
</script>

<CaseStudyHead
	title="The Waterpark | Themed Attraction Lighting Upgrade | emittiv"
	description="LED lighting upgrade and control system rebuild for one of Dubai's most popular themed waterparks. Subtractive to additive colour mixing transformation."
	slug="the-waterpark"
	keywords="waterpark, themed attraction, LED upgrade, lighting, control systems, Dubai"
	jsonLdName="The Waterpark - Themed Attraction Lighting Upgrade"
	jsonLdDescription="LED lighting upgrade and control system rebuild for a popular themed waterpark in Dubai."
	locationName="Dubai, UAE"
/>

<main>
	<CaseStudyHero
		name="The Waterpark"
		headline="themed attraction. lighting upgrade."
		disciplines="lighting / control"
		heroPath="/img/projects/wild-wadi/hero"
		heroAlt="Colourful waterpark slides and play structures at Juha's Dhow"
		heroSizes={[400, 1920]}
		heroHeight="130%"
	/>

	<TextSection title="the brief" dataLabel="Context">
		<span
			>one of Dubai's most popular waterparks needed a complete lighting
			overhaul. after years of battling the elements, the existing metal
			halide floodlights with their subtractive colour mixing were ready to
			be replaced with modern LED technology. the owner - the same group
			behind two of our other projects - wanted to transform the park's
			night-time experience while rebuilding the control systems from the
			ground up.</span
		>
	</TextSection>

	<SplitImageSection
		imagePath="/img/projects/wild-wadi/detail"
		imageAlt="Visitors on lazy river with vivid LED lighting on water curtain at night"
		imageSizes={[400, 728]}
		imageWidth={728}
		imageHeight={406}
		hoverEffect={false}
	>
		<h2>our role</h2>
		<div class="spacer-med"></div>
		<span
			>we designed the complete lighting upgrade and rebuilt the control
			systems from scratch. the move from subtractive colour mixing on metal
			halide fixtures to additive RGB LED floodlights was a significant step
			up - delivering much stronger saturated colours, instant colour changes
			and dramatically reduced maintenance.</span
		>
		<div class="spacer-med"></div>
		<span
			>working around water presented its own challenges - and reusing
			existing cable infrastructure meant adapting to custom, non-standard
			cabling rather than conventional DMX runs. the result was a modern,
			flexible lighting system that completely transformed the park after
			dark.</span
		>
	</SplitImageSection>

	<ProjectDetails
		fields={[
			{ label: 'location', value: 'Dubai, UAE' },
			{ label: 'type', value: 'themed attraction, hospitality' },
			{ label: 'disciplines', value: 'lighting, control' }
		]}
	/>
</main>
