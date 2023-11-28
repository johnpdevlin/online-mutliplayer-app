/** @format */

import { Server, Socket } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';
import getUniqueGameID from '@/functions/_utils/getUniqueGameID';

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

		socket.on('create-game', (data: { playerName: string }) => {
			console.info('create-game event received.');

			if (data && data.playerName) {
				console.info('Player Name:', data.playerName);

				const gameID = getUniqueGameID();

				// You can store the game information (e.g., players, state) on the server
				// Emit an event to the creator with the game code
				socket.emit('game-created', {
					playerName: data.playerName,
					gameID: gameID,
				});
			} else {
				console.error('Invalid data received:', data);
			}
		});

		socket.on('join-game', (data: { gameCode?: string }) => {
			if (data && data.gameCode) {
				socket.emit('game-exists', true);
			} else {
				socket.emit('game-exists', false);
			}
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
