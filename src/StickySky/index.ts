import { Sides, StickySkyOptions } from '../types/stickySky';
import { debug } from '../utils/debug';

const HOLDER_ID = 'sticky-sky-holder';
const DEFAULT_OPTIONS: StickySkyOptions = {
	top: 325,
	bot: 600,
	side: Sides.RIGHT,
	width: 300,
	height: 600,
	stickyTopSponsor: false,
};

const stick = (
	holder: HTMLElement,
	sky: HTMLElement,
	options: StickySkyOptions
) => {
	debug({ message: 'Stick function called', holder, sky });

	const rect = holder.getBoundingClientRect();
	if (rect.bottom > options.height && rect.top < 0) {
		sky.style.position = 'fixed';
		sky.style.top = '25px';
		sky.style.bottom = '';
	} else if (rect.bottom <= 600) {
		sky.style.position = 'absolute';
		sky.style.top = '';
		sky.style.bottom = '0';
	} else if (rect.top >= 0) {
		sky.style.position = 'absolute';
		sky.style.top = '25px';
		sky.style.bottom = '';
	}
};

const preparePage = (holder: HTMLElement, options: StickySkyOptions) => {
	const page = document.querySelector('.post-content-text') as HTMLElement;
	if (!page) return;
	if (options.side == Sides.RIGHT) {
		page.style.padding = '20px 325px 0 25px';
	} else {
		page.style.padding = '20px 0 0 365px';
	}
	page.appendChild(holder);
};

const createSky = (
	holder: HTMLElement,
	sky: HTMLElement,
	options: StickySkyOptions
) => {
	holder.appendChild(sky);

	// holder style
	holder.style.position = 'absolute';
	holder.style.top = options.top + 'px';
	holder.style.width = `${options.width}px`;
	holder.style.bottom = '0';
	if (options.side == Sides.LEFT) {
		holder.style.left = '0';
	} else {
		holder.style.right = '0';
	}

	// sky style
	sky.style.position = 'absolue';
	sky.style.width = `${options.width}px`;
	sky.style.height = `${options.height}px`;

	// sky content
	const skyContent = document.createElement('div');
	skyContent.id = 'ssp-zone-118569';
	skyContent.style.height = '600px';
	sky.appendChild(skyContent);

	if (options.stickyTopSponsor) {
		const topSponsor = document.getElementById('ssp-zone-118564');
		topSponsor.style.marginBottom = '25px';
		topSponsor.style.height = '300px';
		sky.prepend(topSponsor);
	}
};

export const setupStickySky = (options?: Partial<StickySkyOptions>) => {
	const previousHolder = document.getElementById(HOLDER_ID);

	if (previousHolder) {
		debug('Sticky sky already present, exiting');
		return;
	}

	const composedOptions: StickySkyOptions = { ...DEFAULT_OPTIONS, ...options };
	const holder = document.createElement('div');
	const sky = document.createElement('div');
	holder.id = HOLDER_ID;

	preparePage(holder, composedOptions);
	createSky(holder, sky, composedOptions);
	window.addEventListener('scroll', () => stick(holder, sky, composedOptions));
	debug('Set scroll event listener');
};
