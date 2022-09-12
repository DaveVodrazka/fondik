export enum Sides {
	LEFT = 'left',
	RIGHT = 'right',
}

export type StickySkyCustomOptions = {
	top?: number;
	bot?: number;
	side?: Sides;
	stickyTopSponsor?: boolean;
};

export type StickySkyOptions = {
	top: number;
	bot: number;
	side: Sides;
	height: number;
	width: number;
	stickyTopSponsor: boolean;
};
