/** @format */

import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';
import { useState } from 'react';

const CopyTextBox = (props: { text: string }) => {
	const [isCopied, setIsCopied] = useState(false);
	const text = props.text;

	const handleCopyClick = () => {
		navigator.clipboard.writeText(text);
		setIsCopied(true);
	};

	return (
		<Grid container>
			<Grid xs={1.5} />
			<Grid xs={9}>
				<Button
					onClick={handleCopyClick}
					onMouseLeave={() => setIsCopied(false)}
					sx={{
						padding: '20px',
						width: '100%',
						backgroundColor: 'red',
						cursor: 'pointer',
						transition: 'opacity 0.3s ease',
						display: 'flex',
						justifyContent: 'center', // Center horizontally
						alignItems: 'center', // Center vertically
						'&:hover': {
							opacity: 0.8,
						},
						'&:active': {
							opacity: 0.6,
						},
					}}>
					<Stack direction='row' spacing={1} height='25px' width='100%'>
						<Typography variant='h6' overflow='hidden' textOverflow='ellipsis'>
							{text}
						</Typography>
						<Box width='20px'>
							{isCopied ? 'COPIED' : <ContentCopy fontSize='small' />}
						</Box>
					</Stack>
				</Button>
			</Grid>
			<Grid xs={1.5} />
		</Grid>
	);
};

export default CopyTextBox;
