<script lang="ts">
	export let size = '48';
	export let color = 'currentColor';
	export let ariaLabel = 'content';
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
		d="M21.6,0H2.4C1.08,0,0,1.08,0,2.4V19.2c0,1.32,1.08,2.4,2.4,2.4H21.6c1.32,0,2.4-1.08,2.4-2.4V2.4c0-1.32-1.08-2.4-2.4-2.4Zm0,7.2h-.56l-3.2-4.8h3.76V7.2Zm-12.56,0L5.84,2.4h3.12l3.2,4.8h-3.12Zm6,0l-3.2-4.8h3.12l3.2,4.8h-3.12ZM2.4,2.4h.56l3.2,4.8H2.4V2.4Zm0,16.8V9.6H21.6v9.6H2.4Z"
	/>
	<path d="M9.6,18l6.6-3.6-6.6-3.6v7.2Z" />
</svg>
