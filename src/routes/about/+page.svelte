<script lang="ts">
	import TheHead from './HeadAbout.svelte';
	import TheFirst from './SectionBackTogether.svelte';
	import TheSecond from './SectionTeam.svelte';
</script>

<svelte:head>
	<title>About emittiv | Sensory Design Consultancy Dubai | Our Team</title>
	<meta
		name="description"
		content="emittiv brings 25+ years of theatrical and entertainment expertise to sensory design for the built environment. Meet our Dubai-based team of lighting, audio and experience design specialists."
	/>
	<link rel="canonical" href="https://www.emittiv.com/about" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="About emittiv | Sensory Design Consultancy Dubai" />
	<meta
		property="og:description"
		content="emittiv brings 25+ years of theatrical and entertainment expertise to sensory design for the built environment. Meet our Dubai-based specialist team."
	/>
	<meta property="og:image" content="https://www.emittiv.com/img/og-default.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:url" content="https://www.emittiv.com/about" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="About emittiv | Sensory Design Consultancy Dubai" />
	<meta
		name="twitter:description"
		content="25+ years of theatrical expertise applied to sensory design for hospitality, retail and commercial environments."
	/>
	<meta name="twitter:image" content="https://www.emittiv.com/img/og-default.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"AboutPage","@id":"https://www.emittiv.com/about","name":"About emittiv","description":"Learn about emittiv, our team and our approach to sensory design","mainEntity":{"@id":"https://www.emittiv.com/#organization"}},{"@type":"Person","@id":"https://www.emittiv.com/about#andrew-hawkes","name":"Andrew Hawkes","jobTitle":"Audio & Technical Director","description":"25+ years experience in professional audio, live events, operations and workflows. Projects include UAE Pavilion, Dubai Opera and English National Opera.","worksFor":{"@id":"https://www.emittiv.com/#organization"}},{"@type":"Person","@id":"https://www.emittiv.com/about#martin-robert","name":"Martin Robert","jobTitle":"Lighting, Video & Control Systems Director","description":"Background in touring with prominent artists, permanent installations on iconic structures, and large-scale events. Projects include Expo 2020, Seaworld Abu Dhabi, Sheikh Zayed Grand Mosque and Cirque du Soleil.","worksFor":{"@id":"https://www.emittiv.com/#organization"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"About","item":"https://www.emittiv.com/about"}]}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<TheHead side="order-3" />
	<TheFirst side="order-1" />
	<TheSecond />
</main>
