/** @format */

import { Card } from '@/types/card';
import { Box, Typography } from '@mui/material';

interface PlayingCardProps {
	card: Card;
	isNotAvailable?: boolean;
}

const PlayingCard = ({ card, isNotAvailable }: PlayingCardProps) => {
	const character = () => {
		if (card.type === 'joker') return 'J';
		else if (card.type === 'wizard') return 'Z';
		else return card.value;
	};
	const colour = () => {
		let shade: number;
		if (card.type === 'joker') {
			return 'black';
		} else if (card.type === 'wizard') {
			return 'purple';
		} else if (card.type === 'coloured') {
			if (card.colour === 'yellow') return 'yellow';
			else if (card.colour === 'red') return 'red';
			else if (card.colour === 'blue') return 'blue';
			else if (card.colour === 'green') return 'green';
		}
		// Logic to style the colour
	};
	return (
		<>
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				width='200px'
				height='250px'
				borderRadius='20px'
				sx={{
					background: colour(),
					position: 'relative',
					opacity: isNotAvailable! ? 0.5 : 1,
				}}>
				<Box
					width='180px'
					height='230px'
					borderRadius='20px'
					sx={{
						background: 'white',
						position: 'relative',
					}}>
					<Box position='absolute' bottom='-10px' right='30px'>
						<Typography letterSpacing={-20} variant='h1' color={colour()}>
							{character()}
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default PlayingCard;
