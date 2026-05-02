<script lang="ts" module>
	export interface DetailFieldLink {
		text: string;
		href: string;
	}

	export interface DetailField {
		label: string;
		value: string | { text: string; links?: DetailFieldLink[] };
	}
</script>

<script lang="ts">
	interface Props {
		fields: DetailField[];
		status?: string;
	}

	let { fields, status }: Props = $props();

	function isLinkedValue(
		v: DetailField['value']
	): v is { text: string; links?: DetailFieldLink[] } {
		return typeof v === 'object';
	}
</script>

<section class="screen-flow content" data-label="Details">
	<div class="container">
		<div class="split">
			<div class="section-title order-1">
				<h2>project details</h2>
			</div>
			<div class="v-padding-1 f col middle order-2">
				{#each fields as field (field.label)}
					<span>
						<strong>{field.label}:</strong>
						{#if isLinkedValue(field.value)}
							{#if field.value.links && field.value.links.length > 0}
								{#each field.value.links as link, i (link.href)}<a
										href={link.href}>{link.text}</a
									>{i < (field.value.links?.length ?? 0) - 1 ? ', ' : ''}{/each}
							{:else}
								{field.value.text}
							{/if}
						{:else}
							{field.value}
						{/if}
					</span>
				{/each}
				{#if status}
					<span><strong>status:</strong> {status}</span>
				{/if}
				<div class="spacer-med"></div>
				<div class="spacer-lge"></div>
				<span class="underline">
					<a class="navItem" href="/projects">back to projects</a>
				</span>
			</div>
		</div>
	</div>
</section>
