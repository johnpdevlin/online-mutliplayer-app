/** @format */

import { Box, Grid, Typography } from '@mui/material';
import PlayerElement from './PlayerEl';

const LobbyLayout = () => {
	return (
		<>
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
						<Box
							sx={{
								display: 'flex',
								minHeight: '9vh',
								backgroundColor: 'ButtonShadow',
								borderRadius: '18px',
								justifyItems: 'center',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Typography variant='h5'>Invite Friends</Typography>
						</Box>
					</Grid>
					<Grid item xs={5}>
						<Box
							sx={{
								display: 'flex',
								minHeight: '9vh',
								backgroundColor: 'ButtonShadow',
								borderRadius: '18px',
								justifyItems: 'center',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Typography variant='h5'>Start Game</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default LobbyLayout;
