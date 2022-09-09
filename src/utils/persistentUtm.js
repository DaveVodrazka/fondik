const getUtm = () => {
	const url = window.location.href;
	if (!url.includes('?')) {
		return false;
	}
	const utm = url.split('?')[1];
	return utm;
};

const utmToArr = (utm) => {
	const utmArr = utm.split('&');
	return utmArr;
};

const utmToLinks = () => {
	const utm = getUtm();
	if (!utm) {
		return null;
	}
	const arrOfUtms = utmToArr(utm);
	let utmToAppend = '';
	arrOfUtms.forEach((attribute, index, array) => {
		if (
			attribute.includes('utm_source=') ||
			attribute.includes('utm_medium=')
		) {
			utmToAppend = utmToAppend.concat(attribute);
			if (index != array.length - 1) {
				utmToAppend = utmToAppend.concat('&');
			}
		}
	});
	if (!utmToAppend) {
		return null;
	}

	const links = document.querySelectorAll('a');
	links.forEach((link) => {
		const currentUrl = link.href;
		if (currentUrl.includes('www.fondik.cz')) {
			if (currentUrl.includes('?')) {
				link.href = currentUrl + '&' + utmToAppend;
			} else {
				link.href = currentUrl + '?' + utmToAppend;
			}
		}
	});
};

export { utmToLinks, getUtm };
