<script lang="ts">
	export let size = '48';
	export let color = 'currentColor';
	export let ariaLabel = 'video';
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
		d="M21.6,4.45h-6.7l2.75-2.75-1.7-1.7-3.95,3.95L8.05,0l-1.7,1.7,2.75,2.75H2.4c-1.32,0-2.4,1.08-2.4,2.4v13.2c0,1.32,1.08,2.4,2.4,2.4H21.6c1.32,0,2.4-1.08,2.4-2.4V6.85c0-1.32-1.08-2.4-2.4-2.4ZM2.4,20.05V6.85H21.6v13.2H2.4Z"
	/>
</svg>
