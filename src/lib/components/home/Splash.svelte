<script lang="ts">
	import HeroCanvas from './HeroCanvas.svelte';
</script>

<section class="screen content hero-section" id="home" data-label="Home">
	<HeroCanvas />
	<div class="container hero-content">
		<div class="split">
			<div>
				<img
					src="./img/logo.svg"
					class="animate fadeIn one half"
					alt="emittiv logo"
					height="475px"
					width="960px"
				/>
			</div>
			<div class="v-padding-1 f center middle">
				<h1 class="sr-only">Sensory Design for the Built Environment</h1>
				<span class="tagline animate fadeIn three"
					>make<span class="animate toSplash six">:</span></span
				>
				<span class="tagline animate fadeIn five">sense</span>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-section {
		position: relative;
	}

	.hero-content {
		position: relative;
		z-index: 1;
	}
</style>
