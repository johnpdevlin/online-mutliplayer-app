/** @format */

type Card = {
	type: 'N' | 'Z' | 'Coloured';
};

type ColouredCard = {
	colour: 'red' | 'green' | 'blue' | 'yellow';
	number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
} & Card;
