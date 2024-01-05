/** @format */

import { Card } from './card';

type PlayerNum = 1 | 2 | 3 | 4 | 5 | 6;

export type GamePlayer = {
	playerNo: PlayerNum;
	name: string;
	playerID: string;
};

export type PlayerGameStatus =
	| PlayerLobbyStatus
	| PlayerGuessStatus
	| PlayerDuelStatus;

export type PlayerLobbyStatus = GamePlayer & {
	status: 'invited' | 'ready';
};

export type PlayerGuessStatus = GamePlayer & {
	status: 'guessing' | 'waiting' | 'guessed';
	guess?: number;
};

export type PlayerDuelStatus = GamePlayer & {
	status: 'waiting' | 'turn' | 'played';
	card?: Card;
};
