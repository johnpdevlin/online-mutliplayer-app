/** @format */

import { useState } from 'react';

type GameState = 'lobby' | 'rounds' | 'result';

const GameStateLayout = (): JSX.Element => {
	const [gameState, setGameState] = useState<GameState>('lobby');
	return <></>;
};

export default GameStateLayout;
