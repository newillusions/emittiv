<script lang="ts">
	import TheHead from './HeadServices.svelte';
	import TheFirst from './SectionMultipleStreams.svelte';
	import TheSecond from './SectionIndividualStreams.svelte';
	import TheThird from './SectionStreams.svelte';
	import TheFourth from './SectionProjectLifecycle.svelte';
	import TheFifth from './SectioncompleteServices.svelte';
</script>

<main>
	<TheHead side={'order-1'} />
	<TheFirst side={'order-3'} />
	<TheSecond side={'order-1'} />
	<TheThird />
	<TheFourth side={'order-3'} />
	<TheFifth side={'order-1'} />
</main>
