const DOMAIN = "https://galandtristan.be";

export async function get() {
    const res = await fetch(`${DOMAIN}/api/portfolio`)
    const data = await res.json()
	const portfolio = data.portfolio
	let sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`
	sitemap = sitemap + `<url><loc>${DOMAIN}</loc></url>`
	sitemap = sitemap + `<url><loc>${DOMAIN}/portfolio</loc></url>`
	sitemap = sitemap + `<url><loc>${DOMAIN}/a-propos</loc></url>`
    await portfolio.forEach(project=>{
        sitemap = sitemap + `<url><loc>${DOMAIN}/portfolio/${project.slug}</loc></url>`
    })
	sitemap = sitemap + "</urlset>"
	return {
		headers: {'content-type': "application/xml"},
		body: sitemap
	};
}