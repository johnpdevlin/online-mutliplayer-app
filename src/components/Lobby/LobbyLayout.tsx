/** @format */

import { Box, Grid, LinearProgress, Typography } from '@mui/material';
import PlayerElement from '../PlayerEl';
import InviteDialog from './InviteDialog';
import InviteButton from './InviteButton';
import Button from './Button';
import LobbyButton from './Button';

const LobbyLayout = () => {
	return (
		<>
			<Box sx={{ width: '100%' }}>
				<LinearProgress color='inherit' />
			</Box>
			<Box
				justifyContent='center'
				alignContent='center'
				textAlign='center'
				margin='0 auto'
				width='80%'>
				<Grid
					container
					flexDirection='row'
					justifyContent='center'
					alignItems='center'
					gap={2}
					marginBottom='10px'>
					<Grid xs={5} md={3.3} lg={2.5}>
						<PlayerElement name={'John'} playerStatus='user' />
					</Grid>
					<Grid xs={5} md={3.3} lg={2.5}>
						<PlayerElement name={'John'} playerStatus='ready' />
					</Grid>
					<Grid xs={5} md={3.3} lg={2.5}>
						<PlayerElement name={'John'} playerStatus='ready' />
					</Grid>
					<Grid xs={5} md={3.3} lg={2.5}>
						<PlayerElement name={'John'} playerStatus='invited' />
					</Grid>
					<Grid item xs={10} mt='15px'>
						<Typography variant='body1'>
							Waiting for players to join...
						</Typography>
					</Grid>
					<Grid item xs={5}>
						<InviteButton />
					</Grid>
					<Grid item xs={5}>
						<LobbyButton text={'Start Game'} handleClick={() => {}} />
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ width: '100%' }}>
				<LinearProgress color='inherit' />
			</Box>
		</>
	);
};

export default LobbyLayout;
