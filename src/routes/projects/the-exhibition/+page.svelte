<script lang="ts">
	import CaseStudyHead from '$lib/components/projects/CaseStudyHead.svelte';
	import CaseStudyHero from '$lib/components/projects/CaseStudyHero.svelte';
	import TextSection from '$lib/components/projects/TextSection.svelte';
	import SplitImageSection from '$lib/components/projects/SplitImageSection.svelte';
	import ProjectDetails from '$lib/components/projects/ProjectDetails.svelte';
</script>

<CaseStudyHead
	title="The Exhibition | Public Realm Lighting | Destination Design | emittiv"
	description="Public realm lighting coordination for a major international exhibition in the UAE. Peer review and harmonisation of site-wide lighting across a vast public realm of landscapes, plazas and public spaces."
	slug="the-exhibition"
	ogImage="/img/projects/expo-2020/hero.jpg"
	keywords="public realm, lighting design, exhibition, destination, UAE"
	jsonLdName="The Exhibition - Public Realm Lighting"
	jsonLdDescription="Public realm lighting coordination for a major international exhibition in the UAE"
	locationName="UAE"
/>

<main>
	<CaseStudyHero
		name="The Exhibition"
		headline="public realm. vast destination."
		disciplines="lighting / control"
		heroPath="/img/projects/expo-2020/hero"
		heroAlt="International exhibition public realm lighting at dusk"
		heroSizes={[400, 800, 1920]}
	/>

	<TextSection title="the brief" dataLabel="Context">
		<span
			>the engagement began with unifying multiple public realm lighting designs across
			the site. the lighting had been delivered by various teams and
			contractors - each working to their own brief, resulting in a patchwork of approaches
			across one of the region's most ambitious destination projects.</span
		>
		<div class="spacer-med"></div>
		<span
			>the goal was <span class="splash">a unified guest experience</span> across the landscapes,
			plazas and parks - bringing coherence to the whole while respecting the design intent
			of each area.</span
		>
	</TextSection>

	<SplitImageSection
		imagePath="/img/projects/expo-2020/district"
		imageAlt="Exhibition district illuminated structures at sunset"
		imageSizes={[400, 800, 1200]}
		imageWidth={1200}
		imageHeight={800}
	>
		<h2>our role</h2>
		<div class="spacer-med"></div>
		<span
			>we conducted a peer review of existing work and coordinated with the original
			project lighting designers to maintain design intent while making the adjustments
			the event required. each zone had its own narrative - our role was to find the
			thread that connected them without flattening the individuality of each space.</span
		>
		<div class="spacer-med"></div>
		<span
			>the result was visual consistency without uniformity - <span class="splash"
				>each zone retaining its character</span
			> while feeling part of the same place.</span
		>
	</SplitImageSection>

	<ProjectDetails
		fields={[
			{ label: 'location', value: 'UAE' },
			{ label: 'type', value: 'destination, public realm' },
			{ label: 'disciplines', value: 'lighting, control' }
		]}
	/>
</main>
