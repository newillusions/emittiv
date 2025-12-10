<script lang="ts">
	import TheHead from './HeadServices.svelte';
	import TheFirst from './SectionMultipleStreams.svelte';
	import TheSecond from './SectionIndividualStreams.svelte';
	import TheThird from './SectionStreams.svelte';
	import TheFourth from './SectionProjectLifecycle.svelte';
	import TheFifth from './SectionCompleteServices.svelte';
</script>

<svelte:head>
	<title>Sensory Design Services | Lighting, Video, Sound, Scent & Control | emittiv</title>
	<meta
		name="description"
		content="Comprehensive sensory design services: architectural lighting, video systems, ambient sound, scent design, and integrated control systems for immersive commercial environments in Dubai."
	/>
	<link rel="canonical" href="https://www.emittiv.com/services" />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Sensory Design Services | Lighting, Video, Sound, Scent & Control | emittiv" />
	<meta
		property="og:description"
		content="Comprehensive sensory design services: architectural lighting, video systems, ambient sound, scent design, and integrated control systems for immersive commercial environments."
	/>
	<meta property="og:image" content="https://www.emittiv.com/img/logo_strap.svg" />
	<meta property="og:url" content="https://www.emittiv.com/services" />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Sensory Design Services | emittiv Dubai" />
	<meta name="twitter:description" content="Architectural lighting, video, sound, scent design and integrated control systems for immersive environments." />
	<meta name="twitter:image" content="https://www.emittiv.com/img/logo_strap.svg" />

	<!-- Schema.org JSON-LD -->
	{@html '<scr' + 'ipt type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"Service","@id":"https://www.emittiv.com/services#lighting","name":"Architectural Lighting Design","provider":{"@id":"https://www.emittiv.com/#organization"},"description":"Professional architectural lighting design combining theatrical techniques with modern technology for dynamic, programmable lighting systems","serviceType":"Lighting Design Consultancy","areaServed":{"@type":"Country","name":"United Arab Emirates"}},{"@type":"Service","@id":"https://www.emittiv.com/services#video","name":"Video & Media Facade Design","provider":{"@id":"https://www.emittiv.com/#organization"},"description":"Integration of video into architecture with media facades, LED video walls and projection mapping","serviceType":"Video System Design","areaServed":{"@type":"Country","name":"United Arab Emirates"}},{"@type":"Service","@id":"https://www.emittiv.com/services#sound","name":"Architectural Sound Design","provider":{"@id":"https://www.emittiv.com/#organization"},"description":"Professional sound design for the built environment with networked audio systems and ambient soundscapes","serviceType":"Audio System Design","areaServed":{"@type":"Country","name":"United Arab Emirates"}},{"@type":"Service","@id":"https://www.emittiv.com/services#scent","name":"Scent Design & Olfactory Branding","provider":{"@id":"https://www.emittiv.com/#organization"},"description":"Professional scent design, olfactory branding and ambient scenting systems for commercial environments","serviceType":"Scent Marketing","areaServed":{"@type":"Country","name":"United Arab Emirates"}},{"@type":"Service","@id":"https://www.emittiv.com/services#control","name":"Control Systems Integration","provider":{"@id":"https://www.emittiv.com/#organization"},"description":"Centralised control systems for coordinated operation of lighting, video, sound and scent","serviceType":"Building Automation","areaServed":{"@type":"Country","name":"United Arab Emirates"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.emittiv.com/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://www.emittiv.com/services"}]}]}</scr' + 'ipt>'}
</svelte:head>

<main>
	<TheHead side={'order-1'} />
	<TheFirst side={'order-3'} />
	<TheSecond side={'order-1'} />
	<TheThird />
	<TheFourth side={'order-3'} />
	<TheFifth side={'order-1'} />
</main>
