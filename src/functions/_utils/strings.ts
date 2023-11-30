/** @format */

export function capitaliseFirstLetters(input: string): string {
	const words = input.split(' ');
	const capitalisedWords = words.map((word: string) => {
		let capitalisedWord = '';

		for (let i = 0; i < word.length; i++) {
			if (
				i !== 0 && // Check if it's not the first character of the word
				word.charAt(i - 1) !== '’' && // Check if the previous character is not a non-standard apostrophe ('’')
				word.charAt(i - 1) !== '-' && // Check if the previous character is not a hyphen
				!(i >= 2 && word.substring(i - 2, i).toLowerCase() === 'mc') && // Check if the previous two characters are not 'mc'
				!(i >= 3 && word.substring(i - 3, i).toLowerCase() === 'mac') // Check if the previous three characters are not 'mac'
			) {
				capitalisedWord += word.charAt(i).toLowerCase(); // Convert the character to lowercase
			} else {
				capitalisedWord += word.charAt(i).toUpperCase(); // Convert the character to uppercase
			}
		}

		return capitalisedWord;
	});

	return capitalisedWords.join(' ');
}
