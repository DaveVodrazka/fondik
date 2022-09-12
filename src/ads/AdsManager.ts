/* eslint-disable @typescript-eslint/no-empty-function */

import { debug } from '../utils/debug';

export default class AdsManager {
	protected scriptSrc: string;
	protected scriptTag: HTMLScriptElement | null = null;
	protected scriptLoaded = false;

	appendRootScript() {
		this.scriptTag = document.createElement('script') as HTMLScriptElement;
		this.scriptTag.src = this.scriptSrc;
		this.scriptTag.addEventListener('load', () => (this.scriptLoaded = true));
		document.head.appendChild(this.scriptTag);
	}

	prepareBody() {}

	executeQueue() {}

	initializeAds() {
		this.prepareBody();
		this.executeQueue();
		debug('Ads initialised');
	}

	callAds(): void {
		if (!this.scriptTag) {
			return;
		}
		if (this.scriptLoaded) {
			this.initializeAds();
		} else {
			this.scriptTag.addEventListener('load', this.initializeAds.bind(this));
		}
	}
}
