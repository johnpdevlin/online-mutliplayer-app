/** @format */

import { Card } from '@/types/card';
import {
	FollowTheSignsOutlined,
	StarBorderPurple500,
} from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import PlayingCard from './PlayingCard';

interface GameCardProps {
	card: Card;
	type: 'trump' | 'follow';
}

const GameCard = ({ card, type }: GameCardProps): JSX.Element => {
	const colour = type === 'trump' ? 'gold' : 'white';
	const icon =
		type === 'trump' ? (
			<StarBorderPurple500 fontSize='large' />
		) : (
			<FollowTheSignsOutlined fontSize='large' />
		);
	return (
		<>
			<Box>
				<Stack
					direction='column'
					display='flex'
					justifyContent='center'
					alignItems='center'>
					<Stack
						direction='row'
						spacing={1}
						display='flex'
						justifyContent='center'
						alignItems='center'>
						<Typography color={colour}>{icon}</Typography>

						<Typography color={colour} variant='h4' textAlign='center'>
							{type.toUpperCase()}
						</Typography>
						<Typography color={colour}>
							<>{type === 'trump' && icon}</>
						</Typography>
					</Stack>
					<PlayingCard card={card} />
				</Stack>
			</Box>
		</>
	);
};

export default GameCard;
