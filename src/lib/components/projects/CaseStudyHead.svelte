<script lang="ts">
	interface Props {
		title: string;
		description: string;
		slug: string;
		ogImage?: string;
		keywords: string;
		jsonLdName?: string;
		jsonLdDescription?: string;
		locationName?: string;
	}

	let {
		title,
		description,
		slug,
		ogImage,
		keywords,
		jsonLdName,
		jsonLdDescription,
		locationName
	}: Props = $props();

	const canonical = $derived(`https://www.emittiv.com/projects/${slug}`);
	const ogImageUrl = $derived(ogImage ? `https://www.emittiv.com${ogImage}` : undefined);
	const ldName = $derived(jsonLdName ?? title.replace(' | emittiv', '').replace(' | ', ' - '));
	const ldDescription = $derived(jsonLdDescription ?? description);
	const breadcrumbName = $derived(title.split(' | ')[0]);

	const jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@graph': [
				{
					'@type': 'CreativeWork',
					'@id': canonical,
					name: ldName,
					description: ldDescription,
					creator: { '@id': 'https://www.emittiv.com/#organization' },
					...(ogImageUrl ? { image: ogImageUrl } : {}),
					...(locationName
						? { locationCreated: { '@type': 'Place', name: locationName } }
						: {}),
					keywords
				},
				{
					'@type': 'BreadcrumbList',
					itemListElement: [
						{
							'@type': 'ListItem',
							position: 1,
							name: 'Home',
							item: 'https://www.emittiv.com/'
						},
						{
							'@type': 'ListItem',
							position: 2,
							name: 'Projects',
							item: 'https://www.emittiv.com/projects'
						},
						{ '@type': 'ListItem', position: 3, name: breadcrumbName, item: canonical }
					]
				}
			]
		})
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#if ogImageUrl}
		<meta property="og:image" content={ogImageUrl} />
	{/if}
	<meta property="og:url" content={canonical} />
	<meta property="og:site_name" content="emittiv" />
	<meta property="og:locale" content="en_AE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	{#if ogImageUrl}
		<meta name="twitter:image" content={ogImageUrl} />
	{/if}

	<!-- Schema.org JSON-LD -->
	{@html '<scr' + 'ipt type="application/ld+json">' + jsonLd + '</scr' + 'ipt>'}
</svelte:head>
