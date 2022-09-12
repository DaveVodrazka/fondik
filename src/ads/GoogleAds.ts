import { GoogleAdCode, ZoneElementMap, ZoneNames } from '../types/ads';
import AdsManager from './AdsManager';
import { getZoneElementMap } from './zones/commonZones';
import { fixLeaderboard } from './utils/seznam';
import { debug } from '../utils/debug';
import {
	getAdCode,
	getSlotDefinition,
	googleAdCodeMap,
} from './zones/googleAdZones';

type GoogleTagAPI = {
	defineSlot: (a: string, s: Array<Array<number>>, b: string) => GoogleTagAPI;
	addService: (a: unknown) => void;
	pubads: () => { enableSingleRequest: () => void };
	enableServices: () => void;
	cmd: Array<unknown>;
};

declare global {
	interface Window {
		googletag?: GoogleTagAPI;
	}
}

export default class GoogleAds extends AdsManager {
	private zoneElementMap: ZoneElementMap;
	private adCodes = googleAdCodeMap;
	private callbackList: Array<() => void> = [];
	private bodyAppendList: Array<() => void> = [];

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

		this.bodyAppendList.push(() => {
			root.appendChild(scriptTag);
			zone.appendChild(root);
			zone.style.display = 'block';
		});

		this.addToQueue(adData);
	}

	private addToQueue(adData: GoogleAdCode) {
		const { code, sizes, name } = adData;
		this.callbackList.push(() => {
			window.googletag
				.defineSlot(getSlotDefinition(name), sizes, getAdCode(code))
				.addService(window.googletag.pubads());
		});
	}

	executeQueue(): void {
		let i = 0;
		const t = window.setTimeout(() => {
			if (window.googletag) {
				this.executeQueueWhenReady();
				window.clearTimeout(t);
			} else {
				i++;
				if (i > 10) {
					window.clearTimeout(t);
				}
			}
		}, 100);
	}

	executeQueueWhenReady() {
		window.googletag.cmd.push(() => {
			this.callbackList.map((c) => c());
			window.googletag.pubads().enableSingleRequest();
			window.googletag.enableServices();
		});

		this.bodyAppendList.map((c) => c());
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
