import { AdSenseCode, ZoneNames } from '../../types/ads';

const style = 'style';
const adSlot = 'data-ad-slot';
const adFormat = 'data-ad-format';
const responsive = 'data-full-width-responsive';

export const adSenseCodeMap = new Map<ZoneNames, AdSenseCode>([
	[
		ZoneNames.RECTANGLE,
		[
			[style, 'display:block'],
			[adSlot, '5471762845'],
			[adFormat, 'auto'],
			[responsive, 'true'],
		],
	],
	[
		ZoneNames.RECTANGLE2,
		[
			[style, 'display:block'],
			[adSlot, '1511518294'],
			[adFormat, 'auto'],
			[responsive, 'true'],
		],
	],
	[
		ZoneNames.SKY_SCRAPER,
		[
			[style, 'display:block'],
			[adSlot, '2102545239'],
			[adFormat, 'auto'],
			[responsive, 'true'],
		],
	],
	[
		ZoneNames.TOP_SPONZOR,
		[
			[style, 'display:inline-block;width:300px;height:300px'],
			[adSlot, '9201387779'],
		],
	],
	[
		ZoneNames.LEADERBOARD,
		[
			[style, 'display:inline-block;width:970px;height:210px'],
			[adSlot, '5429663725'],
		],
	],
	[
		ZoneNames.MOBILE_TOP,
		[
			[style, 'display:block'],
			[adSlot, '2999181162'],
			[adFormat, 'auto'],
			[responsive, 'true'],
		],
	],
	[
		ZoneNames.MOBILE_MID,
		[
			[style, 'display:block'],
			[adSlot, '5537235662'],
			[adFormat, 'auto'],
			[responsive, 'true'],
		],
	],
	[
		ZoneNames.MOBILE_BOT,
		[
			[style, 'display:block'],
			[adSlot, '1390941241'],
			[adFormat, 'auto'],
			[responsive, 'true'],
		],
	],
]);
