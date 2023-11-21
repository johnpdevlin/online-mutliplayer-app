/** @format */

import fullDeck from '@/data/deck';
import { Card } from '@/types/card';

export default class Deck {
	private cards: Card[] = [];

	constructor() {
		this.populateDeck();
		this.shuffleDeck();
	}

	private populateDeck(): void {
		this.cards = fullDeck;
	}

	private shuffleDeck(): void {
		// Fisher-Yates shuffle algorithm
		for (let i = this.cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			// Swap elements at i and j
			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
		}
	}

	public getDeck() {
		this.shuffleDeck();
		return this.cards;
	}
}
