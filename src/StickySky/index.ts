import {
	Sides,
	StickySkyCustomOptions,
	StickySkyOptions,
} from '../types/stickySky';
import { debug } from '../utils/debug';

const HOLDER_ID = 'sticky-sky-holder';

export default class StickySky {
	private options: StickySkyOptions = {
		top: 325,
		bot: 600,
		side: Sides.RIGHT,
		width: 300,
		height: 600,
		stickyTopSponsor: false,
	};
	private holder: HTMLElement = document.createElement('div');
	private sky: HTMLElement = document.createElement('div');

	constructor(options?: StickySkyCustomOptions) {
		for (const o in options) {
			this.options[o] = options[o];
		}

		const previousHolder = document.getElementById(HOLDER_ID);

		if (previousHolder) {
			debug('Sticky sky already present, exiting');
			return;
		}

		// no previous holder, set ID to the new one
		this.holder.id = HOLDER_ID;

		this.preparePage();
		this.createSky();

		// sometimes does not work without timeout
		setTimeout(
			() => window.addEventListener('scroll', () => this.stick()),
			500
		);
	}

	private preparePage() {
		const page = document.querySelector('.post-content-text') as HTMLElement;
		if (!page) return;
		if (this.options.side == Sides.RIGHT) {
			page.style.padding = '20px 325px 0 25px';
		} else {
			page.style.padding = '20px 0 0 365px';
		}
		page.appendChild(this.holder);
	}

	private createSky() {
		this.holder.appendChild(this.sky);

		// holder style
		this.holder.style.position = 'absolute';
		this.holder.style.top = this.options.top + 'px';
		this.holder.style.width = `${this.options.width}px`;
		this.holder.style.bottom = '0';
		if (this.options.side == Sides.LEFT) {
			this.holder.style.left = '0';
		} else {
			this.holder.style.right = '0';
		}

		// sky style
		this.sky.style.position = 'absolue';
		this.sky.style.width = `${this.options.width}px`;
		this.sky.style.height = `${this.options.height}px`;

		// sky content
		const skyContent = document.createElement('div');
		skyContent.id = 'ssp-zone-118569';
		skyContent.style.height = '600px';
		this.sky.appendChild(skyContent);

		if (this.options.stickyTopSponsor) {
			this.stickyTopSponsor();
		}
	}

	private stickyTopSponsor() {
		const topSponsor = document.getElementById('ssp-zone-118564');
		topSponsor.style.marginBottom = '25px';
		topSponsor.style.height = '300px';
		this.sky.prepend(topSponsor);
	}

	private stick() {
		const rect = this.holder.getBoundingClientRect();
		if (rect.bottom > this.options.height && rect.top < 0) {
			this.sky.style.position = 'fixed';
			this.sky.style.top = '25px';
			this.sky.style.bottom = '';
		} else if (rect.bottom <= 600) {
			this.sky.style.position = 'absolute';
			this.sky.style.top = '';
			this.sky.style.bottom = '0';
		} else if (rect.top >= 0) {
			this.sky.style.position = 'absolute';
			this.sky.style.top = '25px';
			this.sky.style.bottom = '';
		}
	}
}
