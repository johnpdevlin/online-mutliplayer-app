/** @format */

import { useState } from 'react';

type RoundGameState = 'guess' | 'duel';

const RoundLayout = (): JSX.Element => {
	const [roundGameState, setRoundGameState] = useState<RoundGameState>('guess');
	return <></>;
};

export default RoundLayout;
