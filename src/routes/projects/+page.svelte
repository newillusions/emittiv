<script lang="ts">
	import TheHead from './HeadProjects.svelte';
	import TheFirst from './SectionProjectList.svelte';
</script>

<svelte:head>
	<title>Sensory Design Projects | Hospitality, Retail & Commercial | emittiv</title>
	<meta
		name="description"
		content="Explore emittiv's portfolio of sensory design projects across hospitality, retail and commercial sectors. Lighting, video, sound and scent design case studies from Dubai and beyond."
	/>
	<link rel="canonical" href="https://www.emittiv.com/projects" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Sensory Design Projects | emittiv Portfolio" />
	<meta
		property="og:description"
		content="Explore emittiv's portfolio of sensory design projects across hospitality, retail and commercial sectors."
	/>
	<meta property="og:image" content="https://www.emittiv.com/img/og-default.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:url" content="https://www.emittiv.com/projects" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Sensory Design Projects | emittiv Dubai" />
	<meta
		name="twitter:description"
		content="Portfolio of sensory design projects: lighting, video, sound and scent for hospitality, retail and commercial environments."
	/>
	<meta name="twitter:image" content="https://www.emittiv.com/img/og-default.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"CollectionPage","@id":"https://www.emittiv.com/projects","name":"Sensory Design Projects","description":"Portfolio of sensory design projects across hospitality, retail and commercial sectors","mainEntity":{"@type":"ItemList","itemListElement":[{"@type":"ListItem","position":1,"name":"Sheikh Zayed Grand Mosque","url":"https://www.emittiv.com/projects/sheikh-zayed-grand-mosque"},{"@type":"ListItem","position":2,"name":"Burj Al Arab","url":"https://www.emittiv.com/projects/burj-al-arab"},{"@type":"ListItem","position":3,"name":"Expo 2020","url":"https://www.emittiv.com/projects/expo-2020"},{"@type":"ListItem","position":4,"name":"KAPSARC","url":"https://www.emittiv.com/projects/kapsarc"},{"@type":"ListItem","position":5,"name":"Dubai Parks and Resorts","url":"https://www.emittiv.com/projects/dubai-parks-and-resorts"},{"@type":"ListItem","position":6,"name":"Jumeirah Beach Hotel","url":"https://www.emittiv.com/projects/jumeirah-beach-hotel"},{"@type":"ListItem","position":7,"name":"City Walk","url":"https://www.emittiv.com/projects/city-walk"},{"@type":"ListItem","position":8,"name":"Dubai Mall Penguinarium","url":"https://www.emittiv.com/projects/dubai-mall-penguinarium"},{"@type":"ListItem","position":9,"name":"Al Imam University","url":"https://www.emittiv.com/projects/al-imam-university"}]}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.emittiv.com/projects"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<TheHead side="order-1" />
	<TheFirst />
</main>
