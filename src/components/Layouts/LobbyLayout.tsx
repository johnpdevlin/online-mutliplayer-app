/** @format */

import { Box, Grid, LinearProgress, Typography } from '@mui/material';
import PlayerElement from '../PlayerEl';
import InviteDialog from '../Lobby/InviteDialog';
import InviteButton from '../Lobby/InviteButton';
import Button from '../Lobby/Button';
import LobbyButton from '../Lobby/Button';
import { Dispatch, SetStateAction } from 'react';
import GamePlayer from '@/classes/player';
import PlayerGrid from '../PlayerGrid';
import { PlayerGameStatus, PlayerLobbyStatus } from '@/types/player';

const LobbyLayout = (props: {}): JSX.Element => {
	const players: PlayerLobbyStatus[] = [
		{
			name: 'Jphn',
			playerID: 'vtniuwn',
			status: 'ready',
		},
		{ name: 'Ger', playerID: '95y2cmn9m', status: 'invited' },
		{ name: 'Gir', playerID: '052nm', status: 'invited' },
	];
	return (
		<>
			<Box sx={{ width: '100%' }}>
				<LinearProgress color='inherit' />
			</Box>
			<PlayerGrid
				players={players}
				message={'Waiting for players to join...'}
				buttons={
					<>
						<Grid item xs={5}>
							<InviteButton />
						</Grid>
						<Grid item xs={5}>
							<LobbyButton text={'Start Game'} handleClick={() => {}} />
						</Grid>
					</>
				}
			/>

			<Box sx={{ width: '100%' }}>
				<LinearProgress color='inherit' />
			</Box>
		</>
	);
};

export default LobbyLayout;
