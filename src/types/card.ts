/** @format */

export type CardColour = 'red' | 'green' | 'blue' | 'yellow';
export type CardValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export type JokerCard = { cardID: number; type: 'joker' };
export type WizardCard = { cardID: number; type: 'wizard' };

export type ColouredCard = {
	cardID: number;
	type: 'coloured';
	colour: CardColour;
	value: CardValue;
};

export type Card = JokerCard | WizardCard | ColouredCard;
