import { GoogleAdCode, ZoneNames } from '../../types/ads';

export const getAdCode = (n) => `div-gpt-ad-7337230-${n}`;

export const getSlotDefinition = (n) => `/22754793592/${n}`;

export const googleAdCodeMap = new Map<ZoneNames, GoogleAdCode>([
	[
		ZoneNames.RECTANGLE,
		{
			code: 2,
			name: 'desktop_article_1bottom_300x250',
			sizes: [
				[250, 250],
				[300, 250],
				[336, 280],
				[750, 100],
				[750, 200],
				[750, 300],
			],
		},
	],

	[
		ZoneNames.RECTANGLE2,
		{
			code: 4,
			name: 'desktop_article_2bottom_300x250',
			sizes: [
				[250, 250],
				[300, 250],
				[336, 280],
				[750, 100],
				[750, 200],
				[750, 300],
			],
		},
	],
	[
		ZoneNames.SKY_SCRAPER,
		{
			code: 5,
			name: 'desktop_article_2sidebar_300x250',
			sizes: [
				[250, 250],
				[300, 250],
			],
		},
	],
	[
		ZoneNames.TOP_SPONZOR,
		{
			code: 3,
			name: 'desktop_article_1sidebar_300x250',
			sizes: [
				[250, 250],
				[300, 250],
			],
		},
	],
]);
