<script setup lang="ts">
	import IconLightBulb from '$lib/icons/streams/LightBulb.svelte';
	import IconVideoCam from '$lib/icons/streams/VideoCam.svelte';
	import IconSound from '$lib/icons/streams/Sound.svelte';
	import IconScent from '$lib/icons/streams/Scent.svelte';
	import IconControl from '$lib/icons/streams/Control.svelte';
	import IconContent from '$lib/icons/streams/Content.svelte';
	// import StreamCard from '../Stream.svelte';

	// let data = {
	// 	icon: 'IconLightBulb',
	// 	name: 'lighting',
	// 	text: 'beyond simple illumination, we provide specialist lighting designs that combine creative	and technical elements.'
	// };
</script>

<section class="screen content" id="streams" data-label="Streams">
	<div class="container">
		<div class="split v-padding-2">
			<div class="f col top center card">
				<IconLightBulb />
				<span class="headline">lighting</span>
				<p>
					beyond simple illumination, we provide specialist lighting designs that combine creative
					and technical elements.
				</p>
			</div>
			<!-- <StreamCard {data} /> -->
			<div class="f col top center card">
				<IconVideoCam />
				<span class="headline">video</span>
				<p>
					modern video systems are being integrated into the built environment in ever changing
					ways.
				</p>
			</div>
			<div class="f col top center card">
				<IconSound />
				<span class="headline">sound</span>
				<p>
					using networked audio systems allows us to create more immersive environments with greater
					flexibility for spaces.
				</p>
			</div>
		</div>
		<div class="split v-padding-2">
			<div class="f col top center card">
				<IconScent />
				<span class="headline">scent</span>
				<p>
					hugely under utilised, scent systems help define spaces, calling up memories and
					associations that cement impressions.
				</p>
			</div>
			<div class="f col top center card">
				<IconControl />
				<span class="headline">control</span>
				<p>
					centralised control systems allow different systems to operate in unison creating coherent
					scenes and transitions.
				</p>
			</div>
			<div class="f col top center card">
				<IconContent />
				<span class="headline">content</span>
				<p>
					we maintain a network of content creators so our systems can be updated regularly, keeping
					our spaces current.
				</p>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
</style>
