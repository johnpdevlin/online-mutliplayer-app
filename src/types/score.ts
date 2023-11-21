/** @format */

export type PlayerScore = {
	scoreID: string;
	rounds: RoundScore[];
	totalScore: number;
	ranking: number;
};

export type RoundScore = {
	ranking: number;
	round: number;
	score: number;
};
