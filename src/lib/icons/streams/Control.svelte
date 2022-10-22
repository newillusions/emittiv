<script lang="ts">
	export let size = '48';
	export let color = 'currentColor';
	export let ariaLabel = 'control';
</script>

<svg
	width={size}
	height={size}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	viewBox="0 0 24 24"
	fill={color}
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M2.4,10.8V0h2.4V10.8H2.4Zm2.4,13.2V15.6h2.4v-2.4H0v2.4H2.4v8.4h2.4Zm12-8.4V0h2.4V15.6h-2.4ZM9.6,3.6V0h2.4V3.6h-2.4Zm4.8,2.4H7.21v2.4h2.39v15.6h2.4V8.4h2.4v-2.4Zm7.2,12h-7.2v2.4h2.4v3.6h2.4v-3.6h2.4v-2.4Z"
	/>
</svg>
