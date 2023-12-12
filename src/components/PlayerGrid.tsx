/** @format */

import { Box, Grid, Typography } from '@mui/material';
import PlayerElement from './PlayerEl';
import { PlayerGameStatus } from '@/types/player';

interface PlayerGridProps {
	players: PlayerGameStatus[];
	message?: string;
	buttons?: JSX.Element;
}
const PlayerGrid = ({
	players,
	message,
	buttons,
}: PlayerGridProps): JSX.Element => {
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
					{players.map((player): JSX.Element => {
						return (
							<>
								<Grid xs={5} md={3.3} lg={2.5} key={player.playerID}>
									<PlayerElement
										name={player.name}
										status={player.status}
										guess={player.guess}
									/>
								</Grid>
							</>
						);
					})}

					{message! && (
						<Grid item xs={10} mt='15px'>
							<Typography variant='body1'>{message}</Typography>
						</Grid>
					)}
					{buttons! && buttons}
				</Grid>
			</Box>
		</>
	);
};

export default PlayerGrid;
