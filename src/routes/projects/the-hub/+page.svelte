<script lang="ts">
	import CaseStudyHead from '$lib/components/projects/CaseStudyHead.svelte';
	import CaseStudyHero from '$lib/components/projects/CaseStudyHero.svelte';
	import TextSection from '$lib/components/projects/TextSection.svelte';
	import SplitImageSection from '$lib/components/projects/SplitImageSection.svelte';
	import ProjectDetails from '$lib/components/projects/ProjectDetails.svelte';
</script>

<CaseStudyHead
	title="The Hub | Urban Multimedia Attraction | Show Lighting | emittiv"
	description="Theatrical lighting and show control for an urban mixed-use multimedia attraction in the UAE. Permanent and temporary shows integrating lighting, fountains and architectural systems."
	slug="the-hub"
	ogImage="/img/projects/city-walk/hero.jpg"
	keywords="show lighting, multimedia, fountain lighting, theatrical, control systems, UAE"
	jsonLdName="The Hub - Urban Multimedia Attraction"
	jsonLdDescription="Theatrical lighting and show control for an urban mixed-use multimedia attraction in the UAE"
	locationName="UAE"
/>

<main>
	<CaseStudyHero
		name="The Hub"
		headline="multimedia attraction. show lighting."
		disciplines="lighting / control"
		heroPath="/img/projects/city-walk/hero"
		heroAlt="Urban mixed-use attraction illuminated at night"
		heroSizes={[400, 800, 1280]}
	/>

	<TextSection title="the brief" dataLabel="Context">
		<span
			>retail destinations need more than just shops these days. they need to be
			<span class="splash">destinations in their own right</span> - providing attractions, family
			entertainment and experiences that draw people back.</span
		>
		<div class="spacer-med"></div>
		<span
			>the operators wanted to introduce new multimedia shows to the central attraction
			- both permanent shows and temporary seasonal events running across several months
			of the year. the challenge was creating a lighting language that could flex
			between an everyday ambient state and a fully choreographed performance mode.</span
		>
	</TextSection>

	<SplitImageSection
		imagePath="/img/projects/city-walk/attraction"
		imageAlt="Multimedia attraction show lighting with fountain and architectural integration"
		imageSizes={[400, 800]}
		imageWidth={800}
		imageHeight={536}
	>
		<h2>our role</h2>
		<div class="spacer-med"></div>
		<span
			>we designed and programmed the lighting, working closely with the creative team and
			<span class="splash">working nights</span> to minimise disruption to daily operations and
			the thousands of visitors passing through each day.</span
		>
		<div class="spacer-med"></div>
		<span
			>our experience in show lighting allowed us to integrate cleanly with the
			wider systems installed - incorporating the fountain lighting and architectural
			control systems with the theatrical lighting controls into a unified system
			across the attraction. careful programming ensured smooth transitions between
			show states and reliable unattended operation. the shows are still running today.</span
		>
	</SplitImageSection>

	<ProjectDetails
		fields={[
			{ label: 'location', value: 'UAE' },
			{ label: 'type', value: 'destination, multimedia attraction' },
			{ label: 'size', value: '13,000 m²' },
			{ label: 'disciplines', value: 'lighting, control' }
		]}
	/>
</main>
