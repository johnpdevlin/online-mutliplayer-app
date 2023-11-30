/** @format */

import { Typography } from '@mui/material';

/** @format */
const LobbyButton = (props: { text: string; handleClick: () => void }) => {
	return (
		<>
			<button
				onClick={props.handleClick}
				aria-label='Invite Friends'
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
				<Typography variant='h5'>{props.text}</Typography>
			</button>
		</>
	);
};

export default LobbyButton;
