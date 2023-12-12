/** @format */

type PlayerNum = 1 | 2 | 3 | 4 | 5 | 6;

export type GamePlayer = {
	playerNo: PlayerNum;
	name: string;
	playerID: string;
};

export type PlayerGameStatus = PlayerLobbyStatus | PlayerGuessStatus;

export type PlayerLobbyStatus = {
	name: string;
	playerID: string;
	status: 'invited' | 'ready';
};

export type PlayerGuessStatus = {
	name: string;
	playerID: string;
	status: 'guessing' | 'waiting' | 'guessed';
	guess?: number;
};
