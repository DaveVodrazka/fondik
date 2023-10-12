import { SznZone, ZoneNames } from '../../types/ads';

export const zoneMap = new Map<ZoneNames, SznZone>([
	[
		ZoneNames.LEADERBOARD,
		{
			zoneId: 320126,
			width: 970,
			height: 210,
			id: 'ssp-zone-118559',
		},
	],
	[
		ZoneNames.TOP_SPONZOR,
		{
			zoneId: 320129,
			id: 'ssp-zone-118564',
			width: 300,
			height: 300,
		},
	],
	[
		ZoneNames.SKY_SCRAPER,
		{
			zoneId: 320132,
			id: 'ssp-zone-118569',
			width: 300,
			height: 600,
		},
	],
	[
		ZoneNames.RECTANGLE,
		{
			zoneId: 320138,
			id: 'ssp-zone-118579',
			width: 970,
			height: 310,
		},
	],
	[
		ZoneNames.RECTANGLE2,
		{
			zoneId: 320135,
			id: 'ssp-zone-118574',
			width: 111,
			height: 111,
		},
	],
	[
		ZoneNames.MOBILE_TOP,
		{
			zoneId: 320141,
			id: 'ssp-zone-118584',
			width: 480,
			height: 480,
		},
	],
	[
		ZoneNames.MOBILE_MID,
		{
			zoneId: 320144,
			id: 'ssp-zone-118589',
			width: 480,
			height: 480,
		},
	],
	[
		ZoneNames.MOBILE_BOT,
		{
			zoneId: 320150,
			id: 'ssp-zone-118594',
			width: 480,
			height: 480,
		},
	],
]);
