/** @format */

import Guess from './guess';

export default class GuessesList {
	private guesses: Guess[] = [];

	constructor(
		public readonly roundNo: number,
		public readonly playerIDs: string[]
	) {}

	// ACCESSORS
	public getGuesses(): Guess[] {
		return this.guesses;
	}

	// PUBLIC FUNCTIONS
	public addGuess(guess: Guess): void {
		const existingGuess = this.guesses.find(
			(g) => g.playerID === guess.playerID
		);

		if (!existingGuess && this.guesses.length < this.playerIDs.length) {
			this.guesses.push(guess);
		}
	}
}
