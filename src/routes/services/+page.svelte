<script lang="ts">
	import TheHead from './HeadServices.svelte';
	import TheFirst from './SectionMultipleStreams.svelte';
	import TheSecond from './SectionIndividualStreams.svelte';
	import TheThird from './SectionStreams.svelte';
	import TheFourth from './SectionProjectLifecycle.svelte';
	import TheFifth from './SectionCompleteServices.svelte';
</script>

<svelte:head>
	<!-- title max length:  -->
	<title>emittiv - our services - technologies, pathways, and options</title>
	<!-- description max length:  -->
	<meta
		name="description"
		content="lighting, video, sound and scent design making spaces more appealing, luxurious, and enticing. We bring the magic of theatre into people's every day lives."
	/>
	<!--  cannonical:  -->
	<link rel="canonical" href="https://www.emittiv.com/services" />
	<!--  robots: ”index,follow” or ”noindex,follow” -->
	<meta name="”robots”" content="”index,follow”" />
	<!-- og:type: article or website -->
	<meta property="og:type" content="website" />
	<!-- og:title length: 40-60 chs -->
	<meta
		property="og:title"
		content="emittiv - our services - technologies, pathways, and options"
	/>
	<!-- og:description max length:  2-4 sentences-->
	<meta
		property="og:description"
		content="lighting, video, sound and scent design making spaces more appealing, luxurious, and enticing. We bring the magic of theatre into people's every day lives."
	/>
	<!-- og:image: hero image of page -->
	<meta property="og:image" content="https://www.emittiv.com/img/logo_strap.svg" />
	<!-- og:url: original URL of page / story -->
	<meta property="og:url" content="https://www.emittiv.com/services" />
	<!-- og:site_name:  -->
	<meta property="og:site_name" content="emittiv sensory design" />
</svelte:head>

<main>
	<TheHead side={'order-1'} />
	<TheFirst side={'order-3'} />
	<TheSecond side={'order-1'} />
	<TheThird />
	<TheFourth side={'order-3'} />
	<TheFifth side={'order-1'} />
</main>
