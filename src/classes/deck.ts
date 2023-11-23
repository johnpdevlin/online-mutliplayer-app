/** @format */

import {
	Card,
	CardColour,
	CardValue,
	ColouredCard,
	JokerCard,
	WizardCard,
} from '@/types/card';
import { PlayerHand } from './hand';

export default class Deck {
	private static instance: Deck | null = null;

	static getInstance(): Deck {
		if (!Deck.instance) {
			Deck.instance = new Deck();
		}
		return Deck.instance;
	}

	private static jokerSet: readonly JokerCard[] = [
		{ type: 'joker', cardID: 1 },
		{ type: 'joker', cardID: 2 },
		{ type: 'joker', cardID: 3 },
		{ type: 'joker', cardID: 4 },
	];

	private static wizardSet: readonly WizardCard[] = [
		{ type: 'wizard', cardID: 5 },
		{ type: 'wizard', cardID: 6 },
		{ type: 'wizard', cardID: 7 },
		{ type: 'wizard', cardID: 8 },
	];

	private static cardColours: readonly CardColour[] = [
		'red',
		'green',
		'blue',
		'yellow',
	];

	private static cardValues: readonly CardValue[] = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
	];

	private static colouredSet = (): readonly ColouredCard[] => {
		const cards: ColouredCard[] = [];
		let idNum: number = 9;

		Deck.cardColours.forEach((colour: CardColour) => {
			for (let i = 1; i <= Deck.cardValues.length; i++) {
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

	private fullDeck: Card[] = [
		...Deck.jokerSet,
		...Deck.wizardSet,
		...Deck.colouredSet(),
	];

	private constructor() {
		this.shuffleDeck();
	}

	private shuffleDeck(): void {
		// Fisher-Yates shuffle algorithm
		for (let i = this.fullDeck.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			// Swap elements at i and j
			[this.fullDeck[i], this.fullDeck[j]] = [
				this.fullDeck[j],
				this.fullDeck[i],
			];
		}
	}

	public dealCards(
		players: string[],
		roundNo: number
	): { trumpCard: Card | undefined; playerHands: PlayerHand[] } {
		if (players.length <= 3) {
			throw new Error('Number of players must be greater than 3');
		}

		const { trumpCard, cards } = this.splitDeck(players.length, roundNo);

		const playerHands: PlayerHand[] = players.map((player, i) => {
			const hand = new PlayerHand(player, cards[i]!);
			return hand;
		});

		return { trumpCard, playerHands };
	}

	public getDeck() {
		this.shuffleDeck();
		return this.fullDeck;
	}

	// PRIVATE FUNCTIONS
	private splitDeck(
		numOfPlayers: number,
		roundNo: number
	): { trumpCard: Card | undefined; cards: Card[][] } {
		let trumpCard: Card | undefined;
		let deck = this.getDeck();

		if (this.fullDeck.length !== numOfPlayers) {
			trumpCard = deck.pop();
		}

		// Each player given an extra card for each round
		deck = deck.slice(0, numOfPlayers * roundNo);

		const chunkSize = Math.ceil(deck.length / numOfPlayers);
		const cards: Card[][] = [];

		for (let i = 0; i < deck.length; i += chunkSize) {
			const chunk = deck.slice(i, i + chunkSize);
			cards.push(chunk);
		}

		return { trumpCard, cards };
	}
}
