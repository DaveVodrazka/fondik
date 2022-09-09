import { AdSenseCode, ZoneElementMap, ZoneNames } from '../types/ads';
import AdsManager from './AdsManager';
import { getZoneElementMap } from './zones/commonZones';
import { adSenseCodeMap } from './zones/adSenseZones';
import { fixLeaderboard } from './utils/seznam';

declare global {
	interface Window {
		adsbygoogle?: Array<unknown>;
	}
}

export default class AdSenseAds extends AdsManager {
	private zoneElementMap: ZoneElementMap;

	constructor() {
		super();
		this.scriptSrc =
			'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
		this.appendRootScript();
		this.zoneElementMap = getZoneElementMap();
	}

	appendRootScript(): void {
		this.scriptTag = document.createElement('script');
		this.scriptTag.dataset.adClient = 'ca-pub-1062420095711039';
		this.scriptTag.async = true;
		this.scriptTag.src =
			'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
		this.scriptTag.addEventListener('load', () => (this.scriptLoaded = true));
		document.head.appendChild(this.scriptTag);
	}

	appendAd(adAttributes: AdSenseCode, zone: HTMLElement) {
		const ins = document.createElement('ins');
		for (const [k, v] of adAttributes) {
			ins.setAttribute(k, v);
		}
		ins.setAttribute('class', 'adsbygoogle');
		ins.setAttribute('data-ad-client', 'ca-pub-1062420095711039');

		zone.style.display = 'block';
		zone.appendChild(ins);
		(window.adsbygoogle || []).push({});
	}

	addZone(zone: ZoneNames): AdSenseAds {
		const zoneElement = this.zoneElementMap.get(zone);
		if (zone == ZoneNames.LEADERBOARD) {
			fixLeaderboard();
		}
		if (zone == ZoneNames.RECTANGLE2) {
			zoneElement.style.width = window.innerWidth < 1135 ? '600px' : '750px';
		}
		this.appendAd(adSenseCodeMap.get(zone), zoneElement);
		return this;
	}
}
