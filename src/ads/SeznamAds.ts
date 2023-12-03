import { zoneMap } from './zones/sznZones';
import { SznZone, SznZoneList, ZoneNames } from '../types/ads';
import AdsManager from './AdsManager';
import { fixLeaderboard, prepareBranding } from './utils/seznam';
import { getZoneElementMap } from './zones/commonZones';
import { debug } from '../utils/debug';

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
	if (!adElem) {
		debug('MOVE MID MOBILE - no ad elem');
		return;
	}

	const INSERT_AFTER_PARAGRAPH = 4;

	const richElements = document.getElementsByClassName('rich-text-block');

	if (!richElements || richElements.length === 0) {
		debug('MOVE MID MOBILE - No element');
		return;
	}

	const parent = richElements[0];

	const paragraphs = Array.from(parent.children).filter(
		(el) => el.tagName === 'P'
	);

	if (!paragraphs || paragraphs.length < INSERT_AFTER_PARAGRAPH + 1) {
		debug('MOVE MID MOBILE - not enough paragraphs');
		return;
	}

	const target = paragraphs[INSERT_AFTER_PARAGRAPH - 1];

	debug({ message: 'MOVE MID MOBILE - target', target });

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
		if (zone == ZoneNames.MOBILE_SMR) {
			const target = document.getElementsByClassName('post-content-text');

			if (!target || !target.length) {
				return this;
			}

			const { id, height } = zoneMap.get(ZoneNames.MOBILE_SMR);
			const zoneElem = document.createElement('div');
			zoneElem.id = id;
			zoneElem.style.width = '100%';
			zoneElem.style.height = height + 'px';
			target[0].after(zoneElem);

			debug({
				message: 'Added MOBILE_SMR',
				zoneData,
				target: target[0],
				zoneElem,
			});
		}
		this.zoneList.push(zoneData);
		return this;
	}

	executeQueue() {
		window.sssp.getAds(this.zoneList);
	}

	setupMobileSection(): boolean {
		const section = document.getElementsByClassName('content-section');

		if (!section || !section.length) {
			return false;
		}

		const elems = section[0].getElementsByClassName('flex-wrapper');

		if (!elems || !elems.length) {
			return false;
		}

		const arr = Array.from(elems);

		console.log(arr);

		const TOP = zoneMap.get(ZoneNames.MOBILE_TOP);
		const MID = zoneMap.get(ZoneNames.MOBILE_MID);
		const BOT = zoneMap.get(ZoneNames.MOBILE_BOT);

		if (arr.length <= 3) {
			const el = document.createElement('div');
			el.id = TOP.id;
			el.style.margin = 'auto';
			arr[0].after(el);
		}

		if (arr.length > 3) {
			const el = document.createElement('div');
			el.id = TOP.id;
			el.style.margin = 'auto';
			arr[2].after(el);
		}

		if (arr.length > 5) {
			const el = document.createElement('div');
			el.id = MID.id;
			el.style.margin = 'auto';
			arr[4].after(el);
		}

		if (arr.length > 7) {
			const el = document.createElement('div');
			el.id = BOT.id;
			el.style.margin = 'auto';
			arr[6].after(el);
		}

		return true;
	}

	homepageDesktop() {
		// replace fondik doporucuje with TOP_SPONZOR
		const fondikDoporucujeElem =
			document.getElementsByClassName('fondik-doporucuje');
		if (fondikDoporucujeElem && fondikDoporucujeElem[0]) {
			const zone = zoneMap.get(ZoneNames.TOP_SPONZOR);
			const zoneElem = document.createElement('div');
			zoneElem.id = zone.id;
			fondikDoporucujeElem[0].parentNode.insertBefore(
				zoneElem,
				fondikDoporucujeElem[0]
			);
			this.addZone(ZoneNames.TOP_SPONZOR);
			fondikDoporucujeElem[0].remove();
		}

		// append add before postsBlock
		// const postsBlock = document.getElementsByClassName('posts-block hp-bottom');
		// if (postsBlock && postsBlock[0]) {
		// 	const zone = zoneMap.get(ZoneNames.RECTANGLE2);
		// 	const zoneElem = document.createElement('div');
		// 	zoneElem.id = zone.id;
		// 	postsBlock[0].parentNode.insertBefore(zoneElem, postsBlock[0]);
		// 	this.addZone(ZoneNames.RECTANGLE2);
		// }

		// add sky
		const sideBlocks = document.getElementsByClassName('side-posts-block');
		if (sideBlocks && sideBlocks.length === 2) {
			const zone = zoneMap.get(ZoneNames.SKY_SCRAPER);
			const zoneElem = document.createElement('div');
			zoneElem.id = zone.id;
			sideBlocks[1].parentNode.insertBefore(zoneElem, sideBlocks[1]);
			this.addZone(ZoneNames.SKY_SCRAPER);
		}

		// add rectange
		const contentSection = document.querySelector(
			'body > div.content-section > div:nth-child(2)'
		);
		if (contentSection) {
			const zone = zoneMap.get(ZoneNames.RECTANGLE);
			const zoneElem = document.createElement('div');
			zoneElem.id = zone.id;
			contentSection.insertAdjacentElement('beforebegin', zoneElem);
			this.addZone(ZoneNames.RECTANGLE);
		}

		// add Leaderboard
		this.addZone(ZoneNames.LEADERBOARD);

		this.callAds();
	}

	homepageMobile() {
		// append add before postsBlock
		const postsBlock = document.getElementsByClassName('posts-block hp-bottom');
		if (postsBlock && postsBlock[0]) {
			const zone = zoneMap.get(ZoneNames.MOBILE_TOP);
			const zoneElem = document.createElement('div');
			zoneElem.id = zone.id;
			zoneElem.style.marginBottom = '20px';
			postsBlock[0].parentNode.insertBefore(zoneElem, postsBlock[0]);
			this.addZone(ZoneNames.MOBILE_TOP);
		}

		const listParent = document.getElementsByClassName(
			'collection-list-2 w-dyn-items'
		);
		if (listParent[0] && listParent[0].children) {
			const list = listParent[0].children;
			if (list.length > 3) {
				const zone = zoneMap.get(ZoneNames.MOBILE_MID);
				const zoneElem = document.createElement('div');
				zoneElem.id = zone.id;
				list[2].parentNode.insertBefore(zoneElem, list[2]);
				this.addZone(ZoneNames.MOBILE_MID);
			}
			if (list.length > 6) {
				const zone = zoneMap.get(ZoneNames.MOBILE_BOT);
				const zoneElem = document.createElement('div');
				zoneElem.id = zone.id;
				list[4].parentNode.insertBefore(zoneElem, list[4]);
				this.addZone(ZoneNames.MOBILE_BOT);
			}
		}

		this.callAds();
	}

	// in order for RECTANGLE to have full width 970
	// it must be moved further to the bottom of the page
	moveRectangleToBottom() {
		// move it to the end of this div
		const postContent = document.getElementsByClassName('content-section')[0];
		if (!postContent) {
			return;
		}

		const elem = getZoneElementMap().get(ZoneNames.RECTANGLE);
		postContent.insertAdjacentElement('afterend', elem);
	}
}
