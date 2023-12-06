/** @format */

import { Server, Socket } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';
import getUniqueGameID from '@/functions/_utils/getUniqueGameID';
import handleCreateGame from '@/functions/handleCreateGame';
import { Game } from '@/classes/game';
import gameCacheInstance from '@/server/gameCache';

const socketHandler = (req: NextApiRequest, res: NextApiResponse) => {
	let io: Server; // Declare io outside of if-else block

	if (!res.socket?.server.io) {
		console.log('*First use, starting socket.io');
		io = new Server(res.socket.server);
		res.socket.server.io = io;
	} else {
		console.log('socket.io already running');
		io = res.socket.server.io; // Assign the existing io instance
	}

	io.on('connection', (socket: Socket) => {
		console.info('Connection established. ', socket.id);

		socket.on(
			'create-game',
			(data: { playerName: string; playerID?: string }) => {
				console.info('create-game event received.');

				if (data) {
					const game = new Game();
					const gameID = game.gameID;
					handleCreateGame(
						game,
						data.playerName,
						data.playerID ? data.playerID : undefined
					);

					socket.emit('game-created', {
						gameID: game.gameID,
					});
				} else {
					console.error('Invalid data received:', data);
				}
			}
		);

		socket.on('join-game', (data: { gameID: string }) => {
			if (data) {
				socket.emit('game-exists', true);
			} else {
				socket.emit('game-exists', false);
			}
		});

		socket.on('get-all-games', () => {
			socket.emit('cached-games', { word: 'hello' });
		});

		socket.on('error', (err) => {
			console.error('Socket error:', err);
		});

		socket.on('disconnect', () => {
			console.log('A user disconnected');
		});
	});

	res.end();
};

export const config = {
	api: {
		bodyParser: false,
	},
};

export default socketHandler;
