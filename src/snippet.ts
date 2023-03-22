// everything templated with %%%[variable]%%% must be replaced
// with Webflow dynamic elements with the same name

const getParsedSnippet = (): { [key: string]: string } => {
	try {
		return JSON.parse('%%%snippet%%%'.replaceAll('&quot;', '"'));
	} catch (e) {
		console.log('Failed to parse snippet');
		return {};
	}
};

const headline = '%%%headline%%%';
const image = '%%%image%%%';
const author = '%%%author%%%';
const slug = '%%%slug%%%';
const datePublished = '%%%datePublished%%%';
const dateCreated = '%%%dateCreated%%%';
const dateModified = '%%%dateModified%%%';
const description = '%%%description%%%';

const template = {
	'@context': 'https://schema.org',
	'@type': 'Article',
	headline,
	description,
	image,
	author,
	'publisher': {
		'@type': 'Organization',
		'name': 'Fondik',
		'logo': {
			'@type': 'ImageObject',
			'url':
				'https://uploads-ssl.webflow.com/593538293b82d736ece07630/598c78b9fda8db00018202e0_Author%20picture.png',
		},
	},
	'url': `https://www.fondik.cz/clanky/${slug}`,
	datePublished,
	dateCreated,
	dateModified,
};

const parsedSnippet = getParsedSnippet();

const templateWithSnippet = { ...template, ...parsedSnippet };

const scriptElem = document.createElement('script');
scriptElem.type = 'application/ld+json';
scriptElem.innerText = JSON.stringify(templateWithSnippet);
document.body.appendChild(scriptElem);
