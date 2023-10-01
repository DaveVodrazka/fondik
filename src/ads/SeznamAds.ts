import { zoneMap } from './zones/sznZones';
import { SznZone, SznZoneList, ZoneNames } from '../types/ads';
import AdsManager from './AdsManager';
import { fixLeaderboard, prepareBranding } from './utils/seznam';
import { getZoneElementMap } from './zones/commonZones';
import { sleep } from '../utils/utils';

type SSSP = {
	getAds: (z: SznZoneList) => void;
	writeAd: (ad: SznZone, data: unknown) => void;
};

declare global {
	interface Window {
		sssp?: SSSP;
	}
}

const moveMobileToMiddle = async (adElem: HTMLElement) => {
	const INSERT_AFTER_PARAGRAPH = 4;

	// wait one second for everything to be ready
	await sleep(1000);
	const richElements = document.getElementsByClassName('rich-text-block');

	if (!richElements || richElements.length === 0) {
		return;
	}

	const parent = richElements[0];

	const paragraphs = Array.from(parent.children).filter(
		(el) => el.tagName === 'P'
	);

	if (!paragraphs || paragraphs.length < INSERT_AFTER_PARAGRAPH + 1) {
		return;
	}

	if (!adElem) {
		return;
	}

	const target = paragraphs[INSERT_AFTER_PARAGRAPH - 1];

	target.parentNode.insertBefore(adElem, target.nextSibling);
};

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
		if (zone == ZoneNames.MOBILE_MID) {
			const elem = getZoneElementMap().get(zone);
			moveMobileToMiddle(elem);
		}
		this.zoneList.push(zoneData);
		return this;
	}

	executeQueue() {
		window.sssp.getAds(this.zoneList);
	}
}
