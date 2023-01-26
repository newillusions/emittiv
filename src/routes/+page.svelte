<script lang="ts">
	import TheSplash from '$lib/components/home/Splash.svelte';
	// import data from '$data/sections.json';
	import TheSensoryDesign from '$lib/components/home/SectionSensoryDesign.svelte';
	import TheWhy from '$lib/components/home/SectionWhy.svelte';
	import TheHow from '$lib/components/home/SectionHow.svelte';
</script>

<svelte:head>
	<!-- title max length: 40-60chs -->
	<title>emittiv - sensory design to enhance built environments</title>
	<!-- description max length: 2-4 sentences [155 chs] -->
	<meta
		name="description"
		content="lighting, video, sound and scent design making spaces more appealing, luxurious, and enticing. We bring the magic of theatre into people's every day lives."
	/>
	<!--  cannonical:  -->
	<link rel="canonical" href="https://www.emittiv.com/" />
	<!--  robots: ”index,follow” or ”noindex,follow” -->
	<meta name="”robots”" content="”index,follow”" />
	<!-- og:type: article or website -->
	<meta property="og:type" content="website" />
	<!-- og:title length: 40-60 chs -->
	<meta property="og:title" content="emittiv - sensory design to enhance built environments" />
	<!-- og:description max length: 2-4 sentences [155 chs] -->
	<meta
		property="og:description"
		content="lighting, video, sound and scent design making spaces more appealing, luxurious, and enticing. We bring the magic of theatre into people's every day lives."
	/>
	<!-- og:image: hero image of page -->
	<meta property="og:image" content="https://www.emittiv.com/img/logo_strap.svg" />
	<!-- og:url: original URL of page / story -->
	<meta property="og:url" content="https://www.emittiv.com/" />
	<!-- og:site_name:  -->
	<meta property="og:site_name" content="emittiv sensory design" />
</svelte:head>

<main>
	<TheSplash />
	<TheSensoryDesign side={'order-1'} />
	<TheWhy side={'order-3'} />
	<TheHow side={'order-1'} />
</main>
