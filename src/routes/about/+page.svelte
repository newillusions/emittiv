<script lang="ts">
	import TheHead from './HeadAbout.svelte';
	import TheFirst from './SectionBackTogether.svelte';
	import TheSecond from './SectionTeam.svelte';
</script>

<svelte:head>
	<title>emittiv sensory design - about</title>
	<meta name="description" content="emittiv about page" />
	<link rel="canonical" href="http://www.emittiv.com/about" />
</svelte:head>

<main>
	<TheHead side={'order-3'} />
	<TheFirst side={'order-1'} />
	<TheSecond />
</main>
