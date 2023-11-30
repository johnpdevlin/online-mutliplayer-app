/** @format */

import { Box, Card, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Willem from '@/images/willem.jpg';
import { CheckCircleOutline, PendingOutlined } from '@mui/icons-material';
import { capitaliseFirstLetters } from '@/functions/_utils/strings';
const PlayerElement = (props: {
	name: string;
	imgURL?: string;
	playerStatus: string;
}) => {
	const icon = () => {
		if (props.playerStatus === 'ready')
			return <CheckCircleOutline fontSize='small' color='success' />;
		else if (props.playerStatus === 'invited') return <PendingOutlined />;
		else if (props.playerStatus === 'user') return;
	};
	const playerStatus = () => {
		if (props.playerStatus === 'user') return 'Me';
		else return capitaliseFirstLetters(props.playerStatus);
	};
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
				}}>
				<Stack flexDirection='column'>
					<Image
						src={props.imgURL ? props.imgURL : Willem}
						width={100}
						height={100}
						style={{
							borderRadius: '50%',
							marginBottom: '10px',
						}}
						alt={props.name}
					/>

					<Typography variant='h3'>{props.name}</Typography>
					<Stack
						direction='row'
						spacing={1}
						justifyContent='center'
						alignItems='center'>
						{icon()}
						<Typography variant='h6' color='GrayText'>
							{playerStatus()}
						</Typography>
					</Stack>
				</Stack>
			</Box>
		</>
	);
};

export default PlayerElement;
