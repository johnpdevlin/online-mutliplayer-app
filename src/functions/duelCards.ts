/** @format */

import { Card } from '@/types/card';

export default function duelCards(trumpCard: Card, cards: Card[]): Card | void {
	let winningCard: Card | undefined = undefined;

	cards.forEach((card: Card) => {
		if (card.type === 'wizard') {
			winningCard = card;
			return winningCard;
		} else if (!winningCard) {
			winningCard = card;
		} else if (card.type === 'coloured') {
			if (trumpCard.type === 'coloured') {
				if (trumpCard.colour === card.colour) {
					if (winningCard.type === 'coloured') {
						if (winningCard.colour !== trumpCard.colour) {
							winningCard = card;
						} else if (card.value > winningCard.value) {
							winningCard = card;
						}
					}
				}
			} else {
				if (winningCard.type === 'coloured') {
					if (winningCard.colour === card.colour) {
						if (card.value > winningCard.value) {
							winningCard = card;
						}
					}
				}
			}
		}
	});

	if (winningCard!) {
		return winningCard;
	} else {
		console.error('ERROR: No winning card returned.');
	}
}
