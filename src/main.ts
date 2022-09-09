import { debug } from './utils/debug';
import { utmToLinks, getUtm } from './utils/persistentUtm';
import SeznamAds from './ads/SeznamAds';
import { ZoneNames } from './types/ads';
import GoogleAds from './ads/GoogleAds';
import { VIEWPORT_BREAKPOINT } from './constants';
import StickySky from './StickySky';

const setupAdvertisment = () => {
	utmToLinks();
	const pathname = window.location.pathname;
	const countPaths = (pathname.match(/\//g) || []).length;

	if (countPaths < 2) {
		debug('HP or section - not calling any ads');
		return;
	}

	const utm = getUtm();

	if (utm && utm.indexOf('utm_source=www.seznam.cz') !== -1) {
		const sznAdManager = new SeznamAds();
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
		const googleAdManager = new GoogleAds();
		if (window.innerWidth >= VIEWPORT_BREAKPOINT) {
			debug('google desktop ads');
			new StickySky();
			googleAdManager
				.addZone(ZoneNames.TOP_SPONZOR)
				.addZone(ZoneNames.SKY_SCRAPER)
				.addZone(ZoneNames.RECTANGLE)
				.addZone(ZoneNames.RECTANGLE2)
				.callAds();
		} else {
			debug('google mobile ads');
			googleAdManager
				.addZone(ZoneNames.MOBILE_TOP)
				.addZone(ZoneNames.MOBILE_MID)
				.addZone(ZoneNames.MOBILE_BOT)
				.callAds();
		}
	}
};

setupAdvertisment();
