/** @format */

import React, { useState, useEffect, useTransition } from 'react';
import GameCard from '../playing_card/GameCard';
import { Card } from '@/types/card';
import PlayerHand from '../playing_card/PlayerHand';
import { PlayerGuessStatus } from '@/types/player';
import PlayerGrid from '../PlayerGrid';
import { Grid, Stack } from '@mui/material';
import '@/styles/Guess.module.css';
import { PlayerGameStatus } from '../../types/player';
import ScoreCard from '../side_bars/ScoreCard';
import MakeGuess from '../guess/MakeGuess';

type GuessState = 'trump' | 'cards' | 'waiting' | 'guessing';

const GuessLayout = (): JSX.Element => {
	const [guessState, setGuessState] = useState<GuessState>('trump');
	const [isPending, startTransition] = useTransition();

	const trump: Card = {
		cardID: 1,
		type: 'joker',
	};

	const players: PlayerGuessStatus[] = [
		{
			name: 'Jphn',
			playerID: 'vtniuwn',
			status: 'guessed',
			guess: 2,
		},
		{ name: 'Ger', playerID: '95y2cmn9m', status: 'waiting' },
		{ name: 'Gir', playerID: '052nm', status: 'waiting' },
		{
			name: 'blue',
			playerID: 'n 958m4w',
			status: 'guessing',
		},
	];

	const playingCards: Card[] = [
		{ cardID: 10, type: 'coloured', colour: 'red', value: 3 },
		{ cardID: 11, type: 'coloured', colour: 'green', value: 5 },
		{ cardID: 12, type: 'coloured', colour: 'blue', value: 9 },
	];

	useEffect(() => {
		if (guessState === 'trump') {
			setTimeout(() => {
				changeState('cards');
			}, 2000); // Time in milliseconds before trump moves to sidebar
		}

		if (guessState === 'cards') {
			setTimeout(() => {
				changeState('waiting');
			}, 4000); // Time in milliseconds before player cards move down
		}
	}, [guessState]);

	const changeState = (newState: GuessState) => {
		startTransition(() => {
			setGuessState(newState);
		});
	};

	const renderTrumpCard = () => {
		const className = guessState === 'trump' ? 'trump-center' : 'trump-sidebar';
		return (
			<div className={className}>
				<GameCard card={trump} type='trump' />
			</div>
		);
	};

	const renderPlayerCards = () => {
		return <PlayerHand cards={playingCards} />;
	};

	const renderPlayerBio = () => {
		return (
			<PlayerGrid
				players={players}
				buttons={
					<MakeGuess maxGuesses={6} handleClick={() => console.log('hello')} />
				}
			/>
		);
	};

	const getContent = () => {
		switch (guessState) {
			case 'trump':
				return renderTrumpCard();
			case 'cards':
				return renderPlayerCards();
			case 'waiting' || 'guessing':
				return (
					<>
						<Stack direction='column' gap={5}>
							{renderPlayerBio()}
							{renderPlayerCards()}
						</Stack>
					</>
				);

			default:
				return <></>;
		}
	};

	const getLeftSideBar = () => {
		if (guessState === 'trump') return <></>;
		return (
			<Grid item md={2} className='sidebar'>
				{renderTrumpCard()}
			</Grid>
		);
	};

	return (
		<Grid container direction='row' className='guess-layout'>
			{getLeftSideBar()}
			<Grid item md={guessState == 'trump' ? 12 : 10} className='content-area'>
				{getContent()}
				{guessState === 'guessing' && (
					<button onClick={() => changeState('guessing')}>Make a Guess</button>
				)}
			</Grid>
		</Grid>
	);
};

export default GuessLayout;
