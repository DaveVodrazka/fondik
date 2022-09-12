import { SznZone } from '../../types/ads';

const setupBranding = () => {
	const leaderboard = document.querySelector(
		'.leaderboardwrapper'
	) as HTMLElement;
	const bgDiv = document.querySelector('.post-content-text') as HTMLElement;
	const marginDiv = document.querySelector('.post-content') as HTMLElement;
	const topDiv = document.querySelector('.top') as HTMLElement;
	const goUp = document.querySelector('.go-up-section') as HTMLElement;
	const bottomRectangle = document.getElementById(
		'ssp-zone-118579'
	) as HTMLElement;
	// fix broken dropDowns
	const dropDown = [
		document.querySelector('.dropdown-section-1'),
		document.querySelector('.dropdown-section-2'),
		document.querySelector('.dropdown-section-3'),
	] as Array<HTMLElement>;
	dropDown.forEach((drop) => {
		drop.style.marginTop = '0';
		drop.style.position = '';
		(drop.parentElement as HTMLElement).style.opacity = '0';
	});
	const buttons = document.querySelectorAll("[data-ix^='show-dropdown-']");
	buttons.forEach((button, index) => {
		button.addEventListener('click', () => {
			dropDown.forEach((drop) => {
				drop.parentElement.style.opacity = '0';
				setTimeout(() => {
					drop.style.position = '';
				}, 200);
			});
			if (!(dropDown[index].style.display == 'block')) {
				setTimeout(() => {
					dropDown[index].parentElement.style.opacity = '1';
					dropDown[index].style.position = 'relative';
				}, 200);
			}
		});
	});
	// end of dropDowns fix
	if (marginDiv) {
		marginDiv.parentElement.style.width = '1100px';
		marginDiv.style.marginTop = '180px';
	} else {
		document.querySelectorAll('.post-content-text').forEach(function (elem) {
			const categoryContainer = elem.parentElement;
			categoryContainer.style.width = '1060px';
			categoryContainer.style.margin = '180px auto';
		});
	}
	if (document.querySelectorAll('.post-content-text').length > 1) {
		const brokenCategory = document.querySelectorAll(
			'.post-content-text'
		)[1] as HTMLElement;
		brokenCategory.style.top = '180px';
		brokenCategory.style.background = 'white';
		brokenCategory.style.paddingLeft = '25px';
	}
	leaderboard.style.display = 'none';
	bgDiv.style.background = 'white';
	topDiv.style.width = '1060px';
	topDiv.style.margin = 'auto';
	topDiv.style.transform = 'translateY(226px)';
	goUp.style.padding = '30px';
	goUp.style.width = '1060px';
	goUp.style.margin = 'auto';
	goUp.style.background = 'white';
	bottomRectangle.style.transform = 'translateX(-20px)';
};

const handleResponse = (advert, data) => {
	if (advert.width === 2000) {
		setupBranding();
	}
	document.getElementById('ssp-zone-118559').style.display = 'block';
	// Let ssp write ads
	return window.sssp.writeAd(advert, data);
};

export const prepareBranding = (): SznZone => {
	document.body.insertAdjacentHTML(
		'afterbegin',
		'<div id="ssp-branding-118559"></div>'
	);

	return {
		zoneId: 118559,
		width: 2000,
		id: 'ssp-branding-118559',
		callback: handleResponse,
		elements: [
			{ id: 'ssp-zone-118559', width: 970 },
			{ id: 'ssp-branding-118559', width: 2000, height: 1400 },
		],
	};
};

export const fixLeaderboard = () =>
	Array.prototype.slice
		.call(document.querySelectorAll("[class^='dropdown-section']"), 0)
		.forEach((e) => {
			e.style.marginTop = '350px';
		});
