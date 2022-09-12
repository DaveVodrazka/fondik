const bgColor = 'indigo';
const fgColor = '#fff';
const debugEnabled = window.location.search.indexOf('adsdebug=1') !== -1;

/**
 * Logs message into console if proper UTM set to truthy value.
 * @param {any} message - Message to be logged (warned or errored).
 * @param {('log'|'warn'|'error')} type - Type of console, if not specified defaults to "log".
 */
const debug = (message, type = 'log') => {
	if (!debugEnabled || !message) {
		// logging not allowed or no message
		return;
	}

	const consoleStyles = `display: inline-block; color: ${fgColor}; background: ${bgColor}; padding: 1px 4px; border-radius: 3px;`;
	// eslint-disable-next-line no-console
	console[type]('%cFondikAds', consoleStyles, message);
};

export { debug };
