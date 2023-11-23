/** @format */

import { Card } from '@/types/card';

export class PlayerHand {
	constructor(private readonly playerID: string, private cards: Card[]) {}

	// ACCESSORS
	public getPlayerID(): string {
		return this.playerID;
	}
	public getPlayerHand(): Card[] {
		return this.cards;
	}

	// PUBLIC FUNCTIONS
	public removeCard(cardID: number): void {
		// Create a new array without the specified card
		this.cards = this.cards.filter((c) => c.cardID !== cardID);
	}
}
