import { zoneMap } from './zones/sznZones';
import { SznZone, SznZoneList, ZoneNames } from '../types/ads';
import AdsManager from './AdsManager';
import { fixLeaderboard, prepareBranding } from './utils/seznam';
import { getZoneElementMap } from './zones/commonZones';

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
		const zoneData = zoneMap.get(zone);

		if (zone == ZoneNames.LEADERBOARD) {
			fixLeaderboard();
			if (window.innerWidth >= 1366) {
				this.zoneList.push(prepareBranding());
				return this;
			}
			this.zoneList.push(zoneData);
			return this;
		}
		if (zone == ZoneNames.RECTANGLE) {
			const elem = getZoneElementMap().get(zone);
			elem.className = 'bottomrectangle';
			elem.style.display = 'block';
			elem.style.height = 'auto';
		}
		if (zone == ZoneNames.RECTANGLE2) {
			const elem = getZoneElementMap().get(zone);
			elem.className = 'textadblock';
			elem.style.display = 'block';
			elem.style.height = 'auto';
		}
		this.zoneList.push(zoneData);
		return this;
	}

	executeQueue() {
		window.sssp.getAds(this.zoneList);
	}
}
