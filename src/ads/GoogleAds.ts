import { GoogleAdCode, ZoneElementMap, ZoneNames } from '../types/ads';
import AdsManager from './AdsManager';
import { getZoneElementMap } from './zones/commonZones';
import { fixLeaderboard } from './utils/seznam';
import { debug } from '../utils/debug';
import { getAdCode, googleAdCodeMap } from './zones/googleAdZones';

declare global {
	interface Window {
		adsbygoogle?: Array<unknown>;
	}
}

export default class GoogleAds extends AdsManager {
	private zoneElementMap: ZoneElementMap;
	private adCodes = googleAdCodeMap;

	constructor() {
		super();
		this.scriptSrc = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
		this.appendRootScript();
		this.zoneElementMap = getZoneElementMap();
	}

	private appendAd(adData: GoogleAdCode, zone: HTMLElement) {
		if (zone.innerHTML) {
			return;
		}
		const { code } = adData;
		const root = document.createElement('div');
		const scriptTag = document.createElement('script');
		const currentAdCode = getAdCode(code);

		root.id = currentAdCode;
		scriptTag.type = 'text/javascript';
		scriptTag.text = `googletag.cmd.push(function(){googletag.display('${currentAdCode}')});`;
		root.appendChild(scriptTag);
		zone.appendChild(root);

		// make sure ad is visible
		zone.style.display = 'block';
	}

	public addZone(zone: ZoneNames): GoogleAds {
		const zoneElement = this.zoneElementMap.get(zone);
		if (!zoneElement) {
			debug(`Could not get zone ${zone}`);
			return this;
		}
		if (zone == ZoneNames.LEADERBOARD) {
			fixLeaderboard();
		}
		if (zone == ZoneNames.RECTANGLE2) {
			zoneElement.style.width = window.innerWidth < 1135 ? '600px' : '750px';
		}
		this.appendAd(this.adCodes.get(zone), zoneElement);
		return this;
	}
}
