<script lang="ts">
	import CaseStudyHead from '$lib/components/projects/CaseStudyHead.svelte';
	import CaseStudyHero from '$lib/components/projects/CaseStudyHero.svelte';
	import TextSection from '$lib/components/projects/TextSection.svelte';
	import SplitImageSection from '$lib/components/projects/SplitImageSection.svelte';
	import ProjectDetails from '$lib/components/projects/ProjectDetails.svelte';
</script>

<CaseStudyHead
	title="The Penguins | Animal Habitat Attraction Lighting | emittiv"
	description="Lighting and control for a penguin habitat attraction in the UAE. Immersive design balancing guest experience with animal welfare lighting requirements."
	slug="the-penguins"
	ogImage="/img/projects/dubai-mall-penguinarium/hero.jpg"
	keywords="attraction lighting, control, animal welfare, family entertainment, UAE"
	jsonLdName="The Penguins - Animal Habitat Attraction"
	jsonLdDescription="Lighting and control for a penguin habitat attraction in the UAE, balancing guest experience with animal welfare"
	locationName="UAE"
/>

<main>
	<CaseStudyHero
		name="The Penguins"
		headline="attraction lighting. animal welfare."
		disciplines="lighting / control"
		heroPath="/img/projects/dubai-mall-penguinarium/hero"
		heroAlt="Penguin habitat attraction with immersive lighting design"
		heroSizes={[400, 800, 830]}
	/>

	<TextSection title="the brief" dataLabel="Context">
		<span
			>creating a convincing ice cave in the middle of the desert? sure! why not! linking
			different lighting control systems to
			<span class="splash">support the animal welfare</span> as well? sounds like fun!</span
		>
		<div class="spacer-med"></div>
		<span
			>the challenge was establishing a distinctive, believable frozen environment for guests while
			prioritising animal comfort and natural lighting cycles. the habitat lighting had to serve
			two very different audiences - the animals living there and the visitors experiencing it.
			a further layer of complexity came from integrating with show control systems to produce
			an immersive animated experience synchronised with educational video content.</span
		>
	</TextSection>

	<SplitImageSection
		imagePath="/img/projects/dubai-mall-penguinarium/tank"
		imageAlt="Penguin habitat tank with carefully considered animal welfare lighting"
		imageSizes={[400, 800, 1000]}
		imageWidth={1000}
		imageHeight={670}
	>
		<h2>our role</h2>
		<div class="spacer-med"></div>
		<span
			>we worked collaboratively across multiple stakeholders - including zoological
			consultants and attraction designers - conducting thorough research to establish
			the right conditions for the animals alongside the guest experience.</span
		>
		<div class="spacer-med"></div>
		<span
			>photosensors automatically adjust overall attraction lighting levels to align
			with <span class="splash">animal-specific lighting requirements</span>, supporting natural
			behavioural patterns and enhancing their overall welfare. the lighting infrastructure integrates
			with show control to produce the immersive animated experience synchronised with video content,
			all without compromising the habitat environment.</span
		>
	</SplitImageSection>

	<ProjectDetails
		fields={[
			{ label: 'location', value: 'UAE' },
			{ label: 'type', value: 'family entertainment, attraction' },
			{ label: 'disciplines', value: 'lighting, control' }
		]}
	/>
</main>
