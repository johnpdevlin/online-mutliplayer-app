/** @format */

const getUniqueGameID = (): string => {
	const getRandomInt = (min: number, max: number) =>
		Math.floor(Math.random() * (max - min + 1)) + min;

	const randomNumbers = getRandomInt(100, 999).toString();
	const randomLetters =
		String.fromCharCode(getRandomInt('A'.charCodeAt(0), 'Z'.charCodeAt(0))) +
		String.fromCharCode(getRandomInt('A'.charCodeAt(0), 'Z'.charCodeAt(0)));

	return randomNumbers + randomLetters;
};

export default getUniqueGameID;
