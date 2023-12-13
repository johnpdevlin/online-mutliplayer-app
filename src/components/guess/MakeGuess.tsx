/** @format */

import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import SelectComponent from '../utils/Select';

interface MakeGuessProps {
	maxGuesses: number;
	handleClick: () => void;
}
/** @format */
const MakeGuess = ({
	maxGuesses,
	handleClick,
}: MakeGuessProps): JSX.Element => {
	const guessValues = (): number[] => {
		const numberArray = [];
		for (let i = 0; i <= maxGuesses; i++) {
			numberArray.push(i);
		}
		return numberArray;
	};

	const [guess, setGuess] = useState<number>();
	return (
		<>
			<Grid item xs={5} m={0}>
				<SelectComponent
					values={guessValues()}
					state={guess}
					setState={setGuess}
					helperText='Make your guess...'
				/>
			</Grid>
			<Grid item xs={5}>
				<button
					onClick={handleClick}
					aria-label='guess-button'
					style={{
						display: 'flex',
						minHeight: '9vh',
						minWidth: '100%',
						backgroundColor: 'grey', // Adjust the background color
						borderRadius: '18px',
						justifyContent: 'center',
						alignItems: 'center',
						cursor: 'pointer', // Add cursor pointer for better usability
					}}>
					<Typography variant='h5'>Confirm</Typography>
				</button>
			</Grid>
		</>
	);
};

export default MakeGuess;
