<script lang="ts">
	import TheHead from './HeadContact.svelte';
	import TheForm from './EmailForm.svelte';
</script>

<svelte:head>
	<!-- title max length:  -->
	<title>emittiv - sensory design to enhance built environments</title>
	<!-- description max length:  -->
	<meta
		name="description"
		content="lighting, video, sound and scent design making spaces more appealing, luxurious, and enticing. We bring the magic of theatre into people's every day lives."
	/>
	<!--  cannonical:  -->
	<link rel="canonical" href="https://www.emittiv.com/contact" />
	<!--  robots: ”index,follow” or ”noindex,follow” -->
	<meta name="”robots”" content="”index,follow”" />
	<!-- og:type: article or website -->
	<meta property="og:type" content="website" />
	<!-- og:title length: 40-60 chs -->
	<meta property="og:title" content="emittiv - sensory design to enhance built environments" />
	<!-- og:description max length:  2-4 sentences-->
	<meta
		property="og:description"
		content="lighting, video, sound and scent design making spaces more appealing, luxurious, and enticing. We bring the magic of theatre into people's every day lives."
	/>
	<!-- og:image: hero image of page -->
	<meta property="og:image" content="https://www.emittiv.com/img/logo_strap.svg" />
	<!-- og:url: original URL of page / story -->
	<meta property="og:url" content="https://www.emittiv.com/contact" />
	<!-- og:site_name:  -->
	<meta property="og:site_name" content="emittiv sensory design" />
</svelte:head>

<main>
	<TheHead side={'order-1'} />
	<TheForm side={'order-1'} />
</main>
