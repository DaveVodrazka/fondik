/**
 * Sleep t miliseconds
 */
export const sleep = async (t: number) => {
	return new Promise((resolve) => setTimeout(resolve, t));
};
