import { debug } from './utils/debug';
import { utmToLinks, getUtm } from './utils/persistentUtm';
import SeznamAds from './ads/SeznamAds';
import { ZoneNames } from './types/ads';
import GoogleAds from './ads/GoogleAds';
import { VIEWPORT_BREAKPOINT } from './constants';
import StickySky from './StickySky/index';
import AdSenseAds from './ads/AdSense';
import { zoneMap } from './ads/zones/sznZones';

const setupAdvertisment = () => {
	utmToLinks();
	const pathname = window.location.pathname;
	const countPaths = (pathname.match(/\//g) || []).length;

	if (countPaths === 1) {
		debug('Homepage - not calling any ads');
		return;
	}

	const utm = getUtm();

	if (utm && utm.indexOf('utm_source=www.seznam.cz') !== -1) {
		const sznAdManager = new SeznamAds();

		// SECTION
		if (pathname.startsWith('/kategorie/')) {
			if (window.innerWidth >= VIEWPORT_BREAKPOINT) {
				debug('seznam desktop ads');

				new StickySky({ top: 0 });

				// rename RECTANGLE2 to RECTANGLE
				const r2 = zoneMap.get(ZoneNames.RECTANGLE2);
				const r = zoneMap.get(ZoneNames.RECTANGLE);
				const rectangleElement = document.getElementById(r2.id);
				if (rectangleElement) {
					rectangleElement.id = r.id;
					rectangleElement.style.width = r.width + 'px';
					rectangleElement.style.height = r.height + 'px';
				}

				sznAdManager
					.addZone(ZoneNames.LEADERBOARD)
					.addZone(ZoneNames.RECTANGLE)
					.addZone(ZoneNames.SKY_SCRAPER)
					.callAds();
			}
			return;
		}

		if (window.innerWidth >= VIEWPORT_BREAKPOINT) {
			debug('seznam desktop ads');
			new StickySky();
			sznAdManager
				.addZone(ZoneNames.LEADERBOARD)
				.addZone(ZoneNames.TOP_SPONZOR)
				.addZone(ZoneNames.SKY_SCRAPER)
				.addZone(ZoneNames.RECTANGLE)
				.addZone(ZoneNames.RECTANGLE2)
				.callAds();
		} else {
			debug('seznam mobile ads');
			sznAdManager
				.addZone(ZoneNames.MOBILE_TOP)
				.addZone(ZoneNames.MOBILE_MID)
				.addZone(ZoneNames.MOBILE_BOT)
				.callAds();
		}
	} else {
		if (window.innerWidth >= VIEWPORT_BREAKPOINT) {
			debug('google desktop ads');
			new StickySky({ top: 0, stickyTopSponsor: true });
			new GoogleAds()
				.addZone(ZoneNames.TOP_SPONZOR)
				.addZone(ZoneNames.SKY_SCRAPER)
				.addZone(ZoneNames.RECTANGLE)
				.addZone(ZoneNames.RECTANGLE2)
				.callAds();
		} else {
			debug('google mobile ads');
			new AdSenseAds()
				.addZone(ZoneNames.MOBILE_TOP)
				.addZone(ZoneNames.MOBILE_MID)
				.addZone(ZoneNames.MOBILE_BOT)
				.callAds();
		}
	}
};

setupAdvertisment();
