<script lang="ts">
	let { side = '' } = $props();
</script>

<section class="screen content" id="sd" data-label="Sensory Design">
	<div class="container">
		<div class="split">
			<div class="section-title {side}">
				<h2>Sensory Design for the <span class="splash">Built Environment</span></h2>
			</div>
			<div class="v-padding-1 f col middle order-2">
				<span class="headline">lighting, video, sound and scent.</span>
				<div class="spacer-reg"></div>
				<span
					>we work with <span class="splash">technologies</span> that work with our
					<span class="splash">senses</span>.</span
				>
				<div class="spacer-reg"></div>
				<div class="cta-stack">
					<a class="btn btn-primary cta-main" href="/projects">See our work</a>
					<div class="cta-trio">
						<a class="btn" href="/contact">Discuss a project</a>
						<a class="btn" href="/services">Our services</a>
						<a class="btn" href="https://sensory.design" target="_blank" rel="noopener"
							>The&nbsp;discipline&nbsp;<span class="cta-arrow" aria-hidden="true">&#8599;</span>
							<span class="sr-only">(opens in a new tab)</span></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.cta-stack {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		width: 100%;
		max-width: 36rem;
	}
	.cta-main {
		text-align: center;
	}
	.cta-trio {
		display: flex;
		gap: 0.6rem;
	}
	.cta-trio .btn {
		flex: 1 1 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		white-space: nowrap;
		letter-spacing: 0.04rem;
		padding-inline: 1rem;
	}
	.cta-arrow {
		font-size: 0.65em;
	}
	.cta-main:focus-visible,
	.cta-trio .btn:focus-visible {
		outline: 2px solid var(--white);
		outline-offset: 3px;
	}
	@media (max-width: 1100px) {
		.cta-trio {
			flex-direction: column;
		}
		.cta-trio .btn {
			white-space: normal;
		}
	}
</style>
