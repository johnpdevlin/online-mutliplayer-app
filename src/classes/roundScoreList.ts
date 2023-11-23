/** @format */

import RoundScore from './roundScore';

export default class RoundScoreList {
	private scores: RoundScore[] = [];

	// ACCESSORS
	public getScores(): RoundScore[] {
		return this.scores;
	}

	// PUBLIC FUNCTIONS
	public addScore(score: RoundScore): void {
		this.scores.push(score);
	}
}
