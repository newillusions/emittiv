<script lang="ts">
	import TheHead from './HeadProjects.svelte';
	import TheFirst from './SectionProjectList.svelte';
</script>

<svelte:head>
	<title>Sensory Design Projects | Hospitality, Retail & Commercial | emittiv</title>
	<meta
		name="description"
		content="Explore emittiv's portfolio of sensory design projects across hospitality, retail and commercial sectors. Lighting, video, sound and scent design case studies from Dubai and beyond."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Sensory Design Projects | emittiv Portfolio" />
	<meta
		property="og:description"
		content="Explore emittiv's portfolio of sensory design projects across hospitality, retail and commercial sectors."
	/>
	<meta property="og:image" content="https://www.emittiv.com/img/og-default.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:url" content="https://www.emittiv.com/projects" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Sensory Design Projects | emittiv Dubai" />
	<meta
		name="twitter:description"
		content="Portfolio of sensory design projects: lighting, video, sound and scent for hospitality, retail and commercial environments."
	/>
	<meta name="twitter:image" content="https://www.emittiv.com/img/og-default.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<main>
	<TheHead side="order-1" />
	<TheFirst />
</main>
