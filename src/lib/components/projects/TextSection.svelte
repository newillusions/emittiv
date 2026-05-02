<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		dataLabel?: string;
		children: Snippet;
	}

	let { title, dataLabel, children }: Props = $props();
</script>

<section class="screen-flow content" data-label={dataLabel}>
	<div class="container">
		<div class="split">
			<div class="section-title order-1">
				<h2>{title}</h2>
			</div>
			<div class="v-padding-1 f col middle order-2">
				{@render children()}
			</div>
		</div>
	</div>
</section>
