<script lang="ts">
	import CaseStudyHead from '$lib/components/projects/CaseStudyHead.svelte';
	import CaseStudyHero from '$lib/components/projects/CaseStudyHero.svelte';
	import TextSection from '$lib/components/projects/TextSection.svelte';
	import SplitImageSection from '$lib/components/projects/SplitImageSection.svelte';
	import ProjectDetails from '$lib/components/projects/ProjectDetails.svelte';
</script>

<CaseStudyHead
	title="The Sail | Iconic Hotel Facade Lighting | emittiv"
	description="Facade lighting design for an iconic sail-shaped hotel in Dubai. LED replacement programme with extreme throw distances, colour-changing event lighting and full control system design."
	slug="the-sail"
	ogImage="/img/projects/burj-al-arab/hero.jpg"
	keywords="facade lighting, iconic building, hospitality, LED, Dubai"
	jsonLdDescription="Facade lighting design for an iconic sail-shaped hotel in Dubai. LED replacement with extreme throw distances."
	locationName="Dubai, UAE"
/>

<main>
	<CaseStudyHero
		name="The Sail"
		headline="iconic building. facade lighting."
		disciplines="lighting / control"
		heroPath="/img/projects/burj-al-arab/hero"
		heroAlt="Iconic sail-shaped hotel facade illuminated at night"
		heroSizes={[400, 703]}
	/>

	<TextSection title="the brief" dataLabel="Context">
		<span
			>after many years of diligently fighting the conditions, the engineering team
			decided it was time to replace the hotel's ailing facade lighting fixtures.
			finding LED fixtures with sufficient output and narrow enough beams to
			throw the <span class="splash">300 metres</span> required on this project was
			quite a challenge - particularly given the marine environment and the extreme
			height at which the fixtures operate.</span
		>
		<div class="spacer-med"></div>
		<span
			>a project of this significance needed to work reliably night after night without
			fail, while still providing the flexibility to allow the client to join in special
			events by lighting the facade in various colours.</span
		>
	</TextSection>

	<SplitImageSection
		imagePath="/img/projects/burj-al-arab/facade"
		imageAlt="Hotel facade lit with combination colour scheme at night"
		imageWidth={1200}
		imageHeight={800}
	>
		<h2>our role</h2>
		<div class="spacer-med"></div>
		<span
			>we provided independent specification and design services for the facade lighting
			replacement - evaluating products on performance and longevity rather than
			manufacturer relationships.</span
		>
		<div class="spacer-med"></div>
		<span
			>the control system was designed to give the hotel's team straightforward
			day-to-day operation while retaining the flexibility to create bespoke colour
			schemes for events and national celebrations.</span
		>
		<div class="spacer-med"></div>
		<span
			>operating in Dubai's harsh marine environment, every fixture needed to
			withstand salt air, extreme heat and wind loading at height - while
			maintaining consistent colour and output across the full
			<span class="splash">300-metre facade</span>. independent specification meant
			product selection was driven entirely by performance and durability, not
			manufacturer preference. the result is a landmark lighting scheme that performs
			reliably every night and transforms for special occasions.</span
		>
	</SplitImageSection>

	<ProjectDetails
		fields={[
			{ label: 'location', value: 'Dubai, UAE' },
			{ label: 'type', value: 'iconic building, hospitality' },
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
