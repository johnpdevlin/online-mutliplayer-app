/** @format */

import { Box, Card, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Willem from '@/images/willem.jpg';
import { CheckCircleOutline, PendingOutlined } from '@mui/icons-material';
import { capitaliseFirstLetters } from '@/functions/_utils/strings';
import { PlayerGameStatus } from '../types/player';

type PlayerElementProps = PlayerGameStatus & { imgURL?: string };

const PlayerElement = ({ name, imgURL, status, guess }: PlayerElementProps) => {
	const icon = () => {
		if (status === 'ready' || status === 'guessed')
			return <CheckCircleOutline fontSize='small' color='success' />;
		else if (status === 'invited' || status === 'waiting')
			return <PendingOutlined />;
		else if (status === 'user') return;
	};
	const playerStatus = () => {
		if (status === 'user') return 'Me';
		else return capitaliseFirstLetters(status);
	};

	const isHighlighted =
		status == 'guessing' ? true : status === 'ready' && !guess ? true : false;

	return (
		<>
			<Box
				borderRadius='15px'
				paddingX='60px'
				paddingY='30px'
				justifyContent='center'
				alignItems='center'
				sx={{
					backgroundColor: 'rgba(255, 0, 0, 0.3)',
					display: 'flex',
					width: '100%',
					opacity: isHighlighted! ? 1 : 0.5,
				}}>
				<Stack flexDirection='column'>
					<Image
						src={imgURL ? imgURL : Willem}
						width={100}
						height={100}
						style={{
							borderRadius: '50%',
							marginBottom: '10px',
						}}
						alt={name}
					/>

					<Typography variant='h3'>{name}</Typography>
					<Stack
						direction='row'
						spacing={1}
						justifyContent='center'
						alignItems='center'>
						{icon()}
						<Typography variant='h6' color='GrayText'>
							{guess! ? `${guess} Tricks` : playerStatus()}
						</Typography>
					</Stack>
				</Stack>
			</Box>
		</>
	);
};

export default PlayerElement;
