<script lang="ts">
	import TheSplash from '$lib/components/home/Splash.svelte';
	// import data from '$data/sections.json';
	import TheSensoryDesign from '$lib/components/home/SectionSensoryDesign.svelte';
	import TheWhy from '$lib/components/home/SectionWhy.svelte';
	import TheHow from '$lib/components/home/SectionHow.svelte';
</script>

<svelte:head>
	<!-- title max length:  -->
	<title>emittiv sensory design - home</title>
	<!-- description max length:  -->
	<meta name="description" content="emittiv sensory design" />
	<!--  cannonical:  -->
	<link rel="canonical" href="https://www.emittiv.com/" />
	<!--  robots: ”index,follow” or ”noindex,follow” -->
	<meta name="”robots”" content="”index,follow”" />
	<!-- og:type: article or website -->
	<meta property="og:type" content="website" />
	<!-- og:title length: 40-60 chs -->
	<meta property="og:title" content="TITLE OF YOUR POST OR PAGE" />
	<!-- og:description max length:  2-4 sentences-->
	<meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" />
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
