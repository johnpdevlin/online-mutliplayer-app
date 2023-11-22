/** @format */

export type PlayerScore = {
	playerID: string;
	scoreID: string;
	rounds: RoundScore[];
	totalScore: number;
	ranking?: number;
};

export type RoundScore = {
	roundNo: number;
	score: number;
};
