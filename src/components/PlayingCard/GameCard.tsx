/** @format */

import {
	FollowTheSignsOutlined,
	StarBorderPurple500,
} from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';

const GameCard = (props: {
	children: JSX.Element;
	type: 'trump' | 'follow';
}) => {
	const colour = props.type === 'trump' ? 'gold' : 'white';
	const icon =
		props.type === 'trump' ? (
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
							{props.type.toUpperCase()}
						</Typography>
						<Typography color={colour}>
							<>{props.type === 'trump' && icon}</>
						</Typography>
					</Stack>

					{props.children}
				</Stack>
			</Box>
		</>
	);
};

export default GameCard;
