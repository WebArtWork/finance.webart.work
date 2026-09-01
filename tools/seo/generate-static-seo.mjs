import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../..');
const outputDirs = [path.join(rootDir, 'dist/app/browser')];

// Unlike a typical authenticated CRM SPA, Finance's discovery pages (home, share, and the four
// /for-* role landing pages) are public and meant to be indexed — see the routing comment in
// src/app/app.routes.ts. Only personal/authenticated routes (profile, settings, admin/*) require a
// session and stay out of search results. CNAME holds the real domain once deployed; it doesn't
// exist in the source workspace itself, hence the fallback.
const siteUrl = `https://${await readDomain()}`;

const PUBLIC_ROUTES = [
	'/',
	'/share',
	'/for-users',
	'/for-advisors',
	'/for-companies',
	'/for-investors',
	'/sign',
];

await Promise.all(
	outputDirs.map(async (outputDir) => {
		await mkdir(outputDir, { recursive: true });
		await writeFile(path.join(outputDir, 'sitemap.xml'), buildSitemap(siteUrl));
		await writeFile(path.join(outputDir, 'robots.txt'), buildRobots(siteUrl));
	}),
);

function buildSitemap(siteUrl) {
	const lastmod = new Date().toISOString().slice(0, 10);

	const urls = PUBLIC_ROUTES.map(
		(route) => `	<url>
		<loc>${escapeXml(siteUrl + route)}</loc>
		<lastmod>${lastmod}</lastmod>
	</url>`,
	).join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobots(siteUrl) {
	const allow = PUBLIC_ROUTES.map((route) => `Allow: ${route === '/' ? '/$' : route + '$'}`).join('\n');

	return `User-agent: *
${allow}
Disallow: /profile
Disallow: /settings
Disallow: /admin

Sitemap: ${siteUrl}/sitemap.xml
`;
}

async function readDomain() {
	try {
		return trimTrailingSlash((await readFile(path.join(rootDir, 'CNAME'), 'utf8')).trim());
	} catch {
		return 'example.com';
	}
}

function trimTrailingSlash(value) {
	return value.endsWith('/') ? value.slice(0, -1) : value;
}

function escapeXml(value) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}
