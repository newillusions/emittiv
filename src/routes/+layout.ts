/** @type {import('./$types').LayoutLoad} */
export const load = async ({ url: { pathname } }) => {
	return { pathname };
};

// Enable prerendering for all pages - critical for SEO
export const prerender = true;
