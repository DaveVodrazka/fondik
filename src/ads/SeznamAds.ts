import { zoneMap } from './zones/sznZones';
import { SznZone, SznZoneList, ZoneNames } from '../types/ads';
import AdsManager from './AdsManager';
import { fixLeaderboard, prepareBranding } from './utils/seznam';

type SSSP = {
	getAds: (z: SznZoneList) => void;
	writeAd: (ad: SznZone, data: unknown) => void;
};

declare global {
	interface Window {
		sssp?: SSSP;
	}
}

export default class SeznamAds extends AdsManager {
	private zoneList: SznZoneList = [];

	constructor() {
		super();
		this.scriptSrc = 'https://ssp.seznam.cz/static/js/ssp.js';
		this.appendRootScript();
	}

	addZone(zone: ZoneNames): SeznamAds {
		if (zone == ZoneNames.LEADERBOARD) {
			fixLeaderboard();
			if (window.innerWidth >= 1366) {
				this.zoneList.push(prepareBranding());
				return this;
			}
			this.zoneList.push(zoneMap.get(zone));
			return this;
		}
		this.zoneList.push(zoneMap.get(zone));
		return this;
	}

	executeQueue() {
		window.sssp.getAds(this.zoneList);
	}
}
