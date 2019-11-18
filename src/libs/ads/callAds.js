import callDesktop from './seznamDesktopAds.js';
import callMobile from './seznamMobileAds.js';
import stickySky from '../stickySky/stickySky.js';

const callAds = () => {
  if (window.innerWidth >= 990) {
    stickySky();
    callDesktop();
  } else if (window.innerWidth < 990) {
    callMobile();
  }
};

export default callAds;
