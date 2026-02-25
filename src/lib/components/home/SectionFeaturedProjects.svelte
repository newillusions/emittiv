<script lang="ts">
	const projects = [
		{
			slug: 'sheikh-zayed-grand-mosque',
			name: 'Sheikh Zayed Grand Mosque',
			description: 'LED re-lighting and control system replacement for the iconic facade',
			heroWidth: 1600
		},
		{
			slug: 'burj-al-arab',
			name: 'Burj Al Arab',
			description: 'Facade LED upgrade and control system for the world\'s most recognizable hotel',
			heroWidth: 703
		},
		{
			slug: 'expo-2020',
			name: 'Expo 2020',
			description: 'Site-wide lighting review — unifying multiple designers\' work across 4.38 million m\u00B2',
			heroWidth: 1920
		},
		{
			slug: 'kapsarc',
			name: 'KAPSARC',
			description: 'Project management of entertainment spaces for Zaha Hadid\'s research centre',
			heroWidth: 700
		}
	];
</script>

<section class="screen content" id="featured-projects" data-label="Projects">
	<div class="container">
		<div class="section-title">
			<h2>Selected <span class="splash">Projects</span></h2>
		</div>
		<div class="spacer-med"></div>
		<div class="project-grid">
			{#each projects as project}
				<a href="/projects/{project.slug}" class="project-card">
					<div class="card-image">
						<picture>
							<source
								srcset="/img/projects/{project.slug}/hero-400w.webp 400w, /img/projects/{project.slug}/hero-800w.webp 800w, /img/projects/{project.slug}/hero.webp {project.heroWidth}w"
								sizes="(min-width: 600px) 50vw, 100vw"
								type="image/webp"
							/>
							<img
								src="/img/projects/{project.slug}/hero.jpg"
								srcset="/img/projects/{project.slug}/hero-400w.jpg 400w, /img/projects/{project.slug}/hero-800w.jpg 800w, /img/projects/{project.slug}/hero.jpg {project.heroWidth}w"
								sizes="(min-width: 600px) 50vw, 100vw"
								alt={project.name}
								loading="lazy"
								width="600"
								height="400"
							/>
						</picture>
					</div>
					<div class="card-info">
						<h3>{project.name}</h3>
						<span>{project.description}</span>
					</div>
				</a>
			{/each}
		</div>
		<div class="spacer-med"></div>
		<div class="cta">
			<a href="/projects" class="view-all">see all projects <span class="splash">&rarr;</span></a>
		</div>
	</div>
</section>

<style lang="scss">
	.section-title {
		text-align: center;
		align-items: center;
	}

	.project-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	.project-card {
		display: block;
		text-decoration: none;
		color: var(--white);
		border: 2px solid var(--darker);
		border-radius: 7px;
		overflow: hidden;
		transition: border-color 0.3s ease;

		&:hover {
			border-color: var(--splash);
		}
	}

	.card-image {
		overflow: hidden;

		picture {
			display: block;
		}

		img {
			display: block;
			width: 100%;
			height: 220px;
			object-fit: cover;
			transition: transform 0.4s ease;
		}
	}

	.project-card:hover .card-image img {
		transform: scale(1.03);
	}

	.card-info {
		padding: 1rem 1.2rem;
		background: var(--darker);

		h3 {
			font-family: 'Ubuntu', sans-serif;
			font-size: 1.1rem;
			line-height: 1.4rem;
			margin-bottom: 0.3rem;
		}

		span {
			font-size: 0.85rem;
			color: var(--light);
			line-height: 1.3rem;
		}
	}

	.cta {
		text-align: center;
	}

	.view-all {
		font-family: 'Ubuntu', sans-serif;
		font-size: 1.1rem;
		letter-spacing: 0.125rem;
		color: var(--white);
		text-decoration: none;
		border-bottom: 1px solid var(--splash);
		padding-bottom: 0.2rem;
		transition: color 0.2s ease;

		&:hover {
			color: var(--splash);
		}
	}

	@media only screen and (min-width: 600px) {
		.project-grid {
			grid-template-columns: 1fr 1fr;
		}

		.card-image img {
			height: 260px;
		}
	}
</style>
