<script lang="ts">
	import TheSplash from '$lib/components/home/Splash.svelte';
	// import data from '$data/sections.json';
	import TheSensoryDesign from '$lib/components/home/SectionSensoryDesign.svelte';
	import TheWhy from '$lib/components/home/SectionWhy.svelte';
	import TheHow from '$lib/components/home/SectionHow.svelte';
</script>

<svelte:head>
	<title>Sensory Design Dubai | Lighting, Video, Sound & Scent | emittiv</title>
	<meta
		name="description"
		content="Transform spaces with multisensory design. emittiv brings theatrical expertise to lighting, video, sound and scent design for hospitality, retail and commercial environments in Dubai & GCC."
	/>
	<link rel="canonical" href="https://www.emittiv.com/" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content="Sensory Design Dubai | Lighting, Video, Sound & Scent | emittiv"
	/>
	<meta
		property="og:description"
		content="Transform spaces with multisensory design. emittiv brings theatrical expertise to lighting, video, sound and scent design for hospitality, retail and commercial environments in Dubai & GCC."
	/>
	<meta property="og:image" content="https://www.emittiv.com/img/logo_strap.svg" />
	<meta property="og:url" content="https://www.emittiv.com/" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Sensory Design Dubai | Lighting, Video, Sound & Scent | emittiv"
	/>
	<meta
		name="twitter:description"
		content="Transform spaces with multisensory design. Theatrical expertise for hospitality, retail and commercial environments."
	/>
	<meta name="twitter:image" content="https://www.emittiv.com/img/logo_strap.svg" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' +
		'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://www.emittiv.com/#organization","name":"emittiv","url":"https://www.emittiv.com","logo":{"@type":"ImageObject","url":"https://www.emittiv.com/img/logo_strap.svg"},"description":"Sensory design consultancy specializing in lighting, video, sound and scent for the built environment","address":{"@type":"PostalAddress","addressLocality":"Dubai","addressRegion":"Dubai","addressCountry":"AE"},"contactPoint":{"@type":"ContactPoint","email":"hello@emittiv.com","contactType":"customer service"},"sameAs":["https://www.linkedin.com/company/emittiv","https://www.instagram.com/emittiv"]},{"@type":"LocalBusiness","@id":"https://www.emittiv.com/#localbusiness","name":"emittiv","image":"https://www.emittiv.com/img/logo_strap.svg","url":"https://www.emittiv.com","telephone":"","email":"hello@emittiv.com","address":{"@type":"PostalAddress","streetAddress":"Dubai Marina","addressLocality":"Dubai","addressCountry":"AE"},"geo":{"@type":"GeoCoordinates","latitude":25.0757,"longitude":55.1394},"areaServed":[{"@type":"Country","name":"United Arab Emirates"},{"@type":"Country","name":"Saudi Arabia"},{"@type":"Country","name":"Qatar"}],"priceRange":"$$$"},{"@type":"WebSite","@id":"https://www.emittiv.com/#website","url":"https://www.emittiv.com","name":"emittiv - Sensory Design","publisher":{"@id":"https://www.emittiv.com/#organization"}}]}</scr' +
		'ipt>'}
</svelte:head>

<main>
	<TheSplash />
	<TheSensoryDesign side="order-1" />
	<TheWhy side="order-3" />
	<TheHow side="order-1" />
</main>
