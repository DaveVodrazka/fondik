import { SznZone, ZoneNames } from '../../types/ads';

export const zoneMap = new Map<ZoneNames, SznZone>([
	[
		ZoneNames.LEADERBOARD,
		{
			zoneId: 118559,
			width: 970,
			height: 210,
			id: 'ssp-zone-118559',
		},
	],
	[
		ZoneNames.TOP_SPONZOR,
		{
			zoneId: 118564,
			id: 'ssp-zone-118564',
			width: 300,
			height: 300,
		},
	],
	[
		ZoneNames.SKY_SCRAPER,
		{
			zoneId: 118569,
			id: 'ssp-zone-118569',
			width: 300,
			height: 600,
		},
	],
	[
		ZoneNames.RECTANGLE,
		{
			zoneId: 118579,
			id: 'ssp-zone-118579',
			width: 970,
			height: 310,
		},
	],
	[
		ZoneNames.RECTANGLE2,
		{
			zoneId: 118574,
			id: 'ssp-zone-118574',
			width: 480,
			height: 300,
		},
	],
	[
		ZoneNames.MOBILE_TOP,
		{
			zoneId: 118584,
			id: 'ssp-zone-118584',
			width: 480,
			height: 480,
		},
	],
	[
		ZoneNames.MOBILE_MID,
		{
			zoneId: 118589,
			id: 'ssp-zone-118589',
			width: 480,
			height: 480,
		},
	],
	[
		ZoneNames.MOBILE_BOT,
		{
			zoneId: 118594,
			id: 'ssp-zone-118594',
			width: 480,
			height: 480,
		},
	],
]);
