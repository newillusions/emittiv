<script lang="ts">
	export let size = '48';
	export let color = 'currentColor';
	export let ariaLabel = 'scent';
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
		d="M13.2,4.2c0-2.32-1.88-4.2-4.2-4.2-2.44,0-3.9,1.83-3.9,3.6h2.4c0-.5,.47-1.2,1.5-1.2s1.8,.81,1.8,1.8-.81,1.8-1.8,1.8H0v2.4H9c2.32,0,4.2-1.88,4.2-4.2Zm3,11.4H7.2v2.4h9c.99,0,1.8,.81,1.8,1.8s-.81,1.8-1.8,1.8-1.5-.7-1.5-1.2h-2.4c0,1.77,1.46,3.6,3.9,3.6s4.2-1.88,4.2-4.2-1.88-4.2-4.2-4.2Z"
	/>
	<path
		d="M19.2,3.6c-2.65,0-4.8,2.15-4.8,4.8h2.4c0-1.32,1.08-2.4,2.4-2.4s2.4,1.08,2.4,2.4-1.08,2.4-2.4,2.4H0v2.4H19.2c2.65,0,4.8-2.15,4.8-4.8s-2.15-4.8-4.8-4.8ZM0,15.6H4.8v2.4H0v-2.4Z"
	/>
</svg>
