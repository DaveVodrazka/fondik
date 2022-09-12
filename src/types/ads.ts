export enum ZoneNames {
	LEADERBOARD,
	BRANDING,
	RECTANGLE,
	RECTANGLE2,
	SKY_SCRAPER,
	TOP_SPONZOR,
	MOBILE_TOP,
	MOBILE_MID,
	MOBILE_BOT,
}

type SznElement = {
	id: string;
	width?: number;
	height?: number;
};

export type ZoneName = keyof typeof ZoneNames;

export type SznZoneList = Array<SznZone>;

export type SznZone = SznElement & {
	zoneId: number;
	elements?: SznElement[];
	callback?: (ad: SznZone, data: unknown) => void;
};

export type AdSenseCode = Array<Array<string>>;

export type GoogleAdCode = {
	code: number;
	name: string;
	sizes: Array<Array<number>>;
};

export type ZoneElementMap = Map<ZoneNames, HTMLElement>;
