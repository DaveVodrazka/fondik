import StickySky from './StickySky/index';
import SeznamAds from './ads/SeznamAds';
import { utmToLinks } from './utils/persistentUtm';
import { ZoneNames } from './types/ads';

const fondik = {
	StickySky,
	SeznamAds,
	ZoneNames,
};

declare global {
	interface Window {
		fondik?: Record<string, unknown>;
	}
}

// expose
window.fondik = fondik;

// add utm to links
utmToLinks();
