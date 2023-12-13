/** @format */

import { Card, CardColour } from '@/types/card';
import { Box, Stack, Typography } from '@mui/material';
import PlayingCard from './PlayingCard';

interface PlayerHandProps {
	cards: Card[];
	follows?: CardColour;
}

const PlayerHand = ({ cards, follows }: PlayerHandProps) => {
	const followApplies = () => {
		if (!follows) return false;
		else if (
			cards.find((card) => card.type === 'coloured' && card.colour === follows)
		)
			return true;
	};
	const playingCards = cards.map((card: Card) => {
		if (!followApplies() || card.type !== 'coloured')
			return <PlayingCard card={card} />;
		if (followApplies()!)
			if (card.colour === follows) return <PlayingCard card={card} />;
			else return <PlayingCard card={card} isNotAvailable={true} />;
		return;
	});

	return (
		<>
			<Box
				justifyContent='center'
				alignContent='center'
				textAlign='center'
				margin='0 auto'>
				<Stack direction='row'>{playingCards}</Stack>
			</Box>
		</>
	);
};

export default PlayerHand;
