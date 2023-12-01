/** @format */

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import {
	Box,
	DialogActions,
	DialogContent,
	DialogContentText,
	Typography,
} from '@mui/material';

import CopyTextBox from '../CopyTextBox';

export interface InviteDialogProps {
	open: boolean;
	selectedValue: string;
	onClose: (value: string) => void;
}

const emails = ['username@gmail.com', 'user02@gmail.com'];
const InviteDialog = (props: InviteDialogProps) => {
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};
	const inviteLink =
		'https://github.com/johnpdevlin/online-mutliplayer-app/blob/main/src/pages/index.tsx';
	return (
		<Dialog
			onClose={handleClose}
			open={open}
			PaperComponent={(props) => (
				<Box
					{...props}
					sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
				/>
			)}
			sx={{
				backgroundBlendMode: 'transparent',
				background: 'transparent',
				position: 'absolute',
				margin: '0 auto',
				boxShadow: 'none',
			}}
			fullWidth>
			<Box>
				<Box
					sx={{ backgroundColor: 'blue' }}
					maxWidth='100%'
					paddingY='45px'
					paddingX='45px'
					display='flex'
					borderRadius='55px'
					flexDirection='column'
					alignItems='center'>
					<DialogTitle width='333px'>
						<Typography variant='h3' textAlign='justify'>
							Invite Friends
						</Typography>
					</DialogTitle>
					<DialogContent>
						<DialogContentText margin='0 auto' width='281px'>
							<Typography variant='body1' textAlign='justify'>
								Send this link to your friend and they can join the game.
							</Typography>
						</DialogContentText>
						<DialogActions>
							<Box
								marginTop='50px'
								justifyContent='center'
								alignContent='center'
								justifyItems='center'
								alignItems='center'>
								<CopyTextBox text={inviteLink} />
							</Box>
						</DialogActions>
					</DialogContent>
				</Box>
			</Box>
		</Dialog>
	);
};

export default InviteDialog;
