import { deployDesktopAds, deployMobileAds } from './googleDeployAds';
import { setupSky } from '../stickySky/stickySky.js';

export const callGoogleAds = () => {
	let count = 0;
	const timer = window.setInterval(() => {
		if (window.adsbygoogle) {
			if (window.innerWidth >= 990) {
        setupSky({ side: 'right', top: 0 });
				deployDesktopAds();
			} else {
				deployMobileAds();
			}
      clearInterval(timer);
		}
		if (count > 10) {
			clearInterval(timer);
		}
		count++;
	}, 100);
};
