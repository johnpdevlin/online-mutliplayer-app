/** @format */

import {
	Card,
	CardColour,
	CardValue,
	ColouredCard,
	JokerCard,
	WizardCard,
} from '@/types/card';

const jokerSet: JokerCard[] = [
	{ type: 'joker', cardID: 1 },
	{ type: 'joker', cardID: 2 },
	{ type: 'joker', cardID: 3 },
	{ type: 'joker', cardID: 4 },
];
const wizardSet: WizardCard[] = [
	{ type: 'wizard', cardID: 5 },
	{ type: 'wizard', cardID: 6 },
	{ type: 'wizard', cardID: 7 },
	{ type: 'wizard', cardID: 8 },
];

const cardColours: CardColour[] = ['red', 'green', 'blue', 'yellow'];
const cardValues: CardValue[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const colouredSet = (): ColouredCard[] => {
	const cards: ColouredCard[] = [];
	let idNum: number = 9;
	cardColours.forEach((colour) => {
		for (let i = 1; i <= cardValues.length; i++) {
			const card: ColouredCard = {
				cardID: idNum,
				type: 'coloured',
				colour: colour,
				value: i as CardValue,
			};
			cards.push(card);
			idNum++;
		}
	});
	return cards;
};

const fullDeck: Card[] = [...jokerSet, ...wizardSet, ...colouredSet()];

export default fullDeck;